import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import GlowBackground from "@/components/GlowBackground";
import PlanesPrecios from "@/components/PlanesPrecios";

export const metadata: Metadata = {
  title: "Precios",
  description:
    "Planes del CRM de ZytonAI: plan Base desde $300.000 COP al mes, plan Pro con bandeja unificada de WhatsApp e Instagram, respuestas automatizadas y captación desde Meta Ads, y desarrollo a medida para grandes empresas.",
  alternates: {
    canonical: "/precios",
  },
};

export default function PreciosPage() {
  return (
    <div className="flex flex-1 flex-col font-sans">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <GlowBackground />
          <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-24 text-center sm:px-10 sm:pb-20 sm:pt-32">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent-strong">
              Precios
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Un plan según el tamaño de tu operación
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              El CRM va con tu marca desde el primer plan. Sin migraciones ni
              cambios en tu forma de trabajar.
            </p>
          </div>
        </section>

        <section className="pb-24 sm:pb-32">
          <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-16">
            <PlanesPrecios />

            <p className="mt-12 text-center text-sm leading-relaxed text-muted">
              Precios en pesos colombianos, antes de IVA. Al elegir un plan te
              pedimos los datos de tu empresa y pasas al pago seguro con Wompi.
            </p>
          </div>
        </section>

        <section className="pb-24 sm:pb-32">
          <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-16">
            <Reveal variant="panel">
              <div className="rounded-[2rem] bg-surface px-7 py-16 text-center sm:px-12 sm:py-20">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  ¿No sabes cuál te sirve?
                </h2>
                <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted">
                  Cuéntanos cómo trabajas hoy y te decimos qué plan tiene sentido,
                  sin compromiso.
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Link
                    href="/contacto"
                    className="rounded-full bg-accent-strong px-8 py-3.5 font-medium text-white transition-colors hover:bg-[#0f4fb8]"
                  >
                    Agenda una demo
                  </Link>
                  <Link
                    href="/faq"
                    className="rounded-full border border-border bg-background px-8 py-3.5 font-medium text-foreground transition-colors hover:border-accent-strong hover:text-accent-strong"
                  >
                    Ver preguntas frecuentes
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
