import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 py-10 text-sm text-muted">
        <Image src="/logo-mark.png" alt="" width={28} height={28} />
        <span className="font-medium tracking-tight text-foreground">
          ZYTON <span className="text-accent">AI</span>
        </span>
        <span>Agencia de automatización con IA para negocios en Colombia.</span>
        <span>© {new Date().getFullYear()} ZytonAI. Todos los derechos reservados.</span>
      </div>
    </footer>
  );
}
