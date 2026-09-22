# CLAUDE.md

Guía para Claude Code al trabajar en este repositorio.

## Proyecto

Página web de marketing de ZytonAI (`www.zytonai.com`): inicio, precios,
blog, FAQ, contacto, páginas legales y el botón «Ingresar a CRM», que lleva a
cada usuario al CRM de su empresa en el SaaS (`<empresa>.zytonai.com`).

El contexto general del proyecto (los cuatro repos, dominios, decisiones)
vive en la carpeta contenedora: `../.claude/contexto/`. Léelo primero.

## Comandos

- `npm run dev` — servidor de desarrollo (Turbopack) en http://localhost:3000
- `npm run build` — build de producción (también hace el type check; falla con errores de TS)
- `npm start` — sirve el build
- `npm run lint` — ESLint (`eslint-config-next`, flat config en `eslint.config.mjs`)

No hay tests. `node_modules` es un symlink a `node_modules.nosync` (para que
iCloud no lo sincronice).

## Stack

- Next.js 16 (App Router, Turbopack), React 19, TypeScript estricto, Tailwind CSS v4
- framer-motion (animaciones), lucide-react (iconos)
- Alias `@/*` → `src/*`. Tailwind v4 se configura solo desde `src/app/globals.css`
- Fuentes Geist por `next/font/google` en `src/app/layout.tsx`

## Estructura

```
src/app/
  page.tsx                 inicio (Hero, Services, Sectors, Differentiators, FAQ)
  precios/page.tsx         los tres planes: el texto y los precios están aquí
  blog/ blog/[slug]/       posts en src/lib/posts.ts
  contacto/ faq/
  privacidad/ terminos/ eliminacion-de-datos/   texto en src/lib/legal.ts
  api/crm-login/route.ts   el puente al CRM (ver abajo)
  sitemap.ts robots.ts manifest.ts              canonical: https://www.zytonai.com
src/components/            Header (botón «Ingresar a CRM»), CrmLoginModal, Hero, Footer…
src/lib/crm.ts             configuración del puente (lee las env vars)
```

## El puente «Ingresar a CRM»

La web no sabe de empresas. `CrmLoginModal` pide usuario y contraseña y los
manda a `POST /api/crm-login`; esa ruta llama **servidor a servidor** a
`POST <CRM_API_URL>/auth/puente` con la cabecera `X-Zyton-Bridge-Secret`.
La API del SaaS valida las credenciales, averigua la empresa y devuelve
`redirectUrl = https://<empresa>.zytonai.com/acceso#token_hash=…` (un código
de un solo uso; la sesión nunca viaja en la URL). El modal navega ahí con
`window.location.href`.

- Si el mismo usuario existe en más de una empresa, la API responde 409 y el
  modal muestra el campo «Empresa» (el subdominio) para desambiguar.
- La ruta solo acepta redirigir a `https://*.<CRM_APP_BASE_DOMAIN>`
  (`src/lib/crm.ts`, `esUrlDelCrm`).
- Mensajes al usuario: siempre genéricos salvo 401/403 con motivo del SaaS
  («cuenta suspendida»).

### Variables de entorno (`.env.local` en local, Vercel en producción)

| Variable | Qué es |
|---|---|
| `CRM_BRIDGE_SECRET` | Secreto compartido. **Mismo valor que `PUENTE_WEB_SECRET` en la API.** Nunca en el repo. |
| `CRM_API_URL` | Base de la API del SaaS. Default `https://api.zytonai.com`. En local, `http://localhost:8000`. |
| `CRM_APP_BASE_DOMAIN` | Dominio de los CRM. Default `zytonai.com`. En local, `localhost` (permite http). |

## Next.js 16

Es más nuevo que lo que el modelo conoce. Antes de escribir código de App
Router (rutas, metadata, config), mirar `node_modules/next/dist/docs/`.

## Despliegue

Vercel, conectado al repo `ZytonAI/Paguina-WEB-Zyton`: un push a `main`
despliega. `zytonai.com` redirige (308) a `www.zytonai.com`.
