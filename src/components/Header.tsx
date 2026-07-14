import Image from "next/image";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <Image src="/logo-mark.png" alt="" width={32} height={32} priority />
          <span className="text-lg font-semibold tracking-tight">
            ZYTON <span className="text-accent">AI</span>
          </span>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-muted sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contacto"
          className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-accent/90"
        >
          Habla con nosotros
        </a>
      </div>
    </header>
  );
}
