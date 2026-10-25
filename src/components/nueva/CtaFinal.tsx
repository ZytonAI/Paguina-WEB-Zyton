"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CtaFinal() {
  return (
    <section className="pb-24 sm:pb-32">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-16">
        <div className="relative overflow-hidden rounded-[2.25rem] bg-accent-strong px-6 py-20 text-center text-white sm:px-12 sm:py-24">
          {/* Halos que se mueven despacio detrás del texto */}
          <motion.div
            aria-hidden
            animate={{ x: [0, 60, 0], y: [0, -30, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="parallax-layer absolute -left-24 -top-24 size-80 rounded-full bg-accent opacity-60 blur-3xl"
          />
          <motion.div
            aria-hidden
            animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            className="parallax-layer absolute -bottom-28 -right-20 size-96 rounded-full bg-[#0a2f75] opacity-70 blur-3xl"
          />

          <div className="relative">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="reveal-motion mx-auto flex size-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur"
            >
              <Image src="/logo-mark.png" alt="" width={38} height={38} className="brightness-0 invert" />
            </motion.div>
            <h2 className="mx-auto mt-8 max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">
              Ordena tu negocio esta misma semana
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              Eliges plan, respondes el cuestionario y tu CRM queda listo con la
              plantilla de tu sector. Te acompañamos en la puesta en marcha.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/precios"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-medium text-accent-strong transition-transform hover:scale-[1.03]"
              >
                Ver planes
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contacto"
                className="rounded-full border border-white/40 px-8 py-3.5 font-medium text-white transition-colors hover:bg-white/10"
              >
                Agenda una demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
