import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import HeroNuevo from "@/components/nueva/HeroNuevo";
import FranjaSectores from "@/components/nueva/FranjaSectores";
import ComoFunciona from "@/components/nueva/ComoFunciona";
import DemoAsistente from "@/components/nueva/DemoAsistente";
import MarcaBlanca from "@/components/nueva/MarcaBlanca";
import Automatizaciones from "@/components/nueva/Automatizaciones";
import Conexiones from "@/components/nueva/Conexiones";
import Comparativa from "@/components/nueva/Comparativa";
import Privacidad from "@/components/nueva/Privacidad";
import CtaFinal from "@/components/nueva/CtaFinal";

// Propuesta de portada nueva. Vive aparte hasta que se apruebe: no se indexa
// y no está en el sitemap. Al aprobarla, su contenido pasa a `app/page.tsx`.
export const metadata: Metadata = {
  title: "Portada nueva (borrador)",
  robots: { index: false, follow: false },
};

export default function NuevaPortada() {
  return (
    <div className="flex flex-1 flex-col font-sans">
      <Header />
      <main className="flex-1 overflow-x-clip">
        <HeroNuevo />
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
