import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import Hero from "@/components/portada/Hero";
import FranjaSectores from "@/components/portada/FranjaSectores";
import ComoFunciona from "@/components/portada/ComoFunciona";
import DemoAsistente from "@/components/portada/DemoAsistente";
import MarcaBlanca from "@/components/portada/MarcaBlanca";
import Automatizaciones from "@/components/portada/Automatizaciones";
import Conexiones from "@/components/portada/Conexiones";
import Comparativa from "@/components/portada/Comparativa";
import Privacidad from "@/components/portada/Privacidad";
import CtaFinal from "@/components/portada/CtaFinal";

// La portada no da precios ni cifras de cupos: viven en /precios.
export default function Home() {
  return (
    <div className="flex flex-1 flex-col font-sans">
      <Header />
      <main className="flex-1 overflow-x-clip">
        <Hero />
        <FranjaSectores />
        <ComoFunciona />
        <DemoAsistente />
        <MarcaBlanca />
        <Automatizaciones />
        <Conexiones />
        <Comparativa />
        <Privacidad />

        <section id="faq" className="scroll-mt-24 pb-24 sm:pb-32">
          <div className="mx-auto w-full max-w-3xl px-6 sm:px-10">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Preguntas frecuentes
            </h2>
            <div className="mt-10">
              {/* El schema FAQPage se emite solo en /faq. */}
              <FAQ sinPrecios />
            </div>
            <p className="mt-10 text-muted">
              ¿Tu duda no está aquí?{" "}
              <Link
                href="/contacto"
                className="font-medium text-accent-strong underline underline-offset-4"
              >
                Escríbenos
              </Link>
              .
            </p>
          </div>
        </section>

        <CtaFinal />
      </main>
      <Footer />
    </div>
  );
}
