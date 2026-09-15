import Link from "next/link";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Sectors from "@/components/Sectors";
import Differentiators from "@/components/Differentiators";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col font-sans">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Sectors />
        <Differentiators />

        <section id="faq" className="scroll-mt-24 pb-28 sm:pb-36">
          <div className="mx-auto w-full max-w-3xl px-6 sm:px-10">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Preguntas frecuentes
            </h2>
            <p className="mt-5 leading-relaxed text-muted">
              Lo que más nos preguntan antes de empezar.
            </p>
            <div className="mt-12">
              {/* El schema FAQPage se emite solo en /faq. */}
              <FAQ />
            </div>
            <p className="mt-10 text-muted">
              ¿Tu duda no está aquí?{" "}
              <Link
                href="/contacto"
                className="font-medium text-accent-strong underline underline-offset-4 hover:text-[#0f4fb8]"
              >
                Escríbenos
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
