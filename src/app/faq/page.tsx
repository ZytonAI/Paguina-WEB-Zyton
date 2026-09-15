import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import GlowBackground from "@/components/GlowBackground";

export const metadata: Metadata = {
  title: "Preguntas frecuentes",
  description:
    "Respuestas a las dudas más comunes sobre automatización con IA: integración con tu CRM, tiempos de implementación, canales y reportes.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FaqPage() {
  return (
    <div className="flex flex-1 flex-col font-sans">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <GlowBackground />
          <div className="mx-auto max-w-3xl px-6 pb-16 pt-20 text-center sm:pt-28">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent-strong">
              Preguntas frecuentes
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Resolvemos tus dudas antes de empezar
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Lo que más nos preguntan los negocios antes de automatizar su
              seguimiento de leads.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 pb-24">
          <FAQ withJsonLd />
        </section>

        <section className="border-t border-border bg-surface">
          <div className="mx-auto max-w-3xl px-6 py-20 text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              ¿Tu duda no está aquí?
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Cuéntanos tu caso y te respondemos con lo que aplica a tu negocio.
            </p>
            <Link
              href="/contacto"
              className="mt-8 inline-block rounded-full bg-accent-strong px-8 py-3 font-medium text-white transition-colors hover:bg-[#0f4fb8]"
            >
              Habla con nosotros
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
