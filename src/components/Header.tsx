"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { InstagramIcon, LinkedinIcon } from "./SocialIcons";
import CrmLoginButton from "./CrmLoginButton";
import ScrollProgress from "./ScrollProgress";

const links = [
  { href: "/", label: "¿Qué hacemos?" },
  { href: "/precios", label: "Precios" },
  { href: "/faq", label: "Preguntas frecuentes" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4 sm:px-10 lg:px-16">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image src="/logo-mark.png" alt="" width={32} height={32} priority />
          <span className="text-lg font-semibold tracking-tight">
            ZYTON <span className="text-accent-strong">AI</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm lg:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "font-medium text-foreground"
                    : "text-muted transition-colors hover:text-foreground"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <nav
            className="hidden items-center gap-3 lg:flex"
            aria-label="Redes sociales"
          >
            <a
              href="https://www.instagram.com/zytonai/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de ZytonAI"
              className="text-muted transition-colors hover:text-foreground"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/zyton-ai/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de ZytonAI"
              className="text-muted transition-colors hover:text-foreground"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </nav>

          <CrmLoginButton className="hidden rounded-full border border-border px-5 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent-strong hover:text-accent-strong lg:block" />

          <Link
            href="/contacto"
            className="hidden rounded-full bg-accent-strong px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-[#0f4fb8] sm:block"
          >
            Habla con nosotros
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="rounded-lg p-2 text-foreground transition-colors hover:bg-surface lg:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4 sm:px-10 lg:px-16">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-lg px-3 py-3 text-base ${
                    active
                      ? "bg-surface font-medium text-foreground"
                      : "text-muted transition-colors hover:bg-surface hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="mt-3 flex flex-col gap-3 border-t border-border pt-4">
              <Link
                href="/contacto"
                onClick={() => setOpen(false)}
                className="rounded-full bg-accent-strong px-5 py-3 text-center text-sm font-medium text-white sm:hidden"
              >
                Habla con nosotros
              </Link>
              <CrmLoginButton className="rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground" />
              <nav className="flex items-center gap-4 px-1 pt-1" aria-label="Redes sociales">
                <a
                  href="https://www.instagram.com/zytonai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram de ZytonAI"
                  className="text-muted transition-colors hover:text-foreground"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/zyton-ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn de ZytonAI"
                  className="text-muted transition-colors hover:text-foreground"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
              </nav>
            </div>
          </nav>
        </div>
      )}
      <ScrollProgress />
    </header>
  );
}
