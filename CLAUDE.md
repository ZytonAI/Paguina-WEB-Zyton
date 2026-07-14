# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

ZytonAI marketing/landing page. Next.js App Router site, intended to be pushed to GitHub and deployed on Vercel. The page content is currently a placeholder (`src/app/page.tsx`) and has not been designed yet.

## Commands

- `npm run dev` — start the dev server (Turbopack) at http://localhost:3000
- `npm run build` — production build (also type-checks; the build fails on TS errors)
- `npm start` — serve the production build
- `npm run lint` — ESLint via `eslint-config-next` (flat config in `eslint.config.mjs`)

There is no test setup in this project.

## Stack

- Next.js 16 (App Router, Turbopack), React 19, TypeScript (strict mode), Tailwind CSS v4
- Path alias `@/*` maps to `src/*` (see `tsconfig.json`)
- Tailwind is wired through PostCSS (`postcss.config.mjs`) using `@tailwindcss/postcss`; there is no `tailwind.config.*` file — v4 configures itself via the `@import "tailwindcss"` in `src/app/globals.css`
- Fonts (Geist Sans/Mono) are loaded via `next/font/google` in `src/app/layout.tsx` and exposed as CSS variables

## Structure

- `src/app/layout.tsx` — root layout; sets the `<html>`/`<body>` shell, fonts, and page metadata (title/description)
- `src/app/page.tsx` — the home page content
- `src/app/globals.css` — Tailwind entry point and global styles
- `public/` — static assets served from `/`

This is a single-route site today. As pages are added, they go under `src/app/<route>/page.tsx` per Next.js App Router conventions.

## Important: Next.js version vs. training data

This project was scaffolded with Next.js 16, which is newer than most model training data and has breaking changes in APIs and conventions compared to earlier Next.js versions. Before writing App Router code (routing, data fetching, metadata, config), check `node_modules/next/dist/docs/` for the current API rather than relying on prior knowledge of Next.js.

## Deployment

Target deployment is Vercel via a GitHub-connected repo. The repo has a local git history (`git init`'d by `create-next-app`) but no GitHub remote configured yet.
