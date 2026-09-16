import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { legalDocuments, legalUpdatedAt } from "@/lib/legal";

type Props = {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
};

export default function LegalPage({ eyebrow, title, children }: Props) {
  const updated = new Date(`${legalUpdatedAt}T00:00:00`).toLocaleDateString(
    "es-CO",
    { year: "numeric", month: "long", day: "numeric" },
  );

  return (
    <div className="flex flex-1 flex-col font-sans">
      <Header />
      <main className="flex-1">
        <section className="border-b border-border bg-surface">
          <div className="mx-auto max-w-3xl px-6 pb-12 pt-20 sm:pt-28">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent-strong">
              {eyebrow}
            </p>
            <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              {title}
            </h1>
            <p className="mt-4 text-sm text-muted">
              Última actualización:{" "}
              <time dateTime={legalUpdatedAt}>{updated}</time>
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-3xl px-6 py-16">
          <nav
            aria-label="Documentos legales"
            className="mb-12 flex flex-wrap gap-2 text-sm"
          >
            {legalDocuments.map((doc) => (
              <Link
                key={doc.href}
                href={doc.href}
                className="rounded-full border border-border px-4 py-1.5 text-muted transition-colors hover:border-accent-strong hover:text-accent-strong"
              >
                {doc.label}
              </Link>
            ))}
          </nav>

          <article className="legal-prose">{children}</article>

          <div className="mt-16 border-t border-border pt-8 text-sm text-muted">
            ¿Tienes preguntas sobre estos documentos? Escríbenos a{" "}
            <a
              href="mailto:soporte@zytonai.com"
              className="text-accent-strong hover:underline"
            >
              soporte@zytonai.com
            </a>
            .
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
