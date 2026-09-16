import Image from "next/image";
import Link from "next/link";
import { legalDocuments } from "@/lib/legal";

const sections = [
  { href: "/", label: "¿Qué hacemos?" },
  { href: "/precios", label: "Precios" },
  { href: "/faq", label: "Preguntas frecuentes" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-16">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2">
              <Image src="/logo-mark.png" alt="" width={28} height={28} />
              <span className="font-medium tracking-tight text-foreground">
                ZYTON <span className="text-accent-strong">AI</span>
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Agencia de automatización con IA para negocios en Colombia.
            </p>
          </div>

          <div className="flex flex-wrap gap-14">
            <nav aria-label="Secciones">
              <h2 className="text-sm font-medium text-foreground">Secciones</h2>
              <ul className="mt-3 flex flex-col gap-2 text-sm text-muted">
                {sections.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Redes sociales">
              <h2 className="text-sm font-medium text-foreground">Síguenos</h2>
              <ul className="mt-3 flex flex-col gap-2 text-sm text-muted">
                <li>
                  <a
                    href="https://www.linkedin.com/company/zyton-ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-foreground"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/zytonai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-foreground"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </nav>

            <nav aria-label="Legal">
              <h2 className="text-sm font-medium text-foreground">Legal</h2>
              <ul className="mt-3 flex flex-col gap-2 text-sm text-muted">
                {legalDocuments.map((doc) => (
                  <li key={doc.href}>
                    <Link
                      href={doc.href}
                      className="transition-colors hover:text-foreground"
                    >
                      {doc.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <p className="mt-12 border-t border-border pt-6 text-sm text-muted">
          © {new Date().getFullYear()} ZytonAI. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
