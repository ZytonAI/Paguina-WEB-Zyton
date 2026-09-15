"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import GlowBackground from "./GlowBackground";

export default function Hero() {
  const { scrollY } = useScroll();

  // El contenido se va hacia arriba y se desvanece al salir de pantalla,
  // pero solo después de los primeros 200px para no atenuarlo mientras se lee.
  const contentY = useTransform(scrollY, [0, 600], [0, -80]);
  const contentOpacity = useTransform(scrollY, [0, 200, 560], [1, 1, 0]);

  return (
    <section className="relative overflow-hidden">
      <GlowBackground />
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="reveal-motion mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 pb-28 pt-24 text-center sm:px-10 sm:pb-36 sm:pt-36"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="reveal-motion relative mb-2"
        >
          <div className="animate-float relative">
            <div
              className="animate-pulse-opacity absolute -inset-8 rounded-full"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(47,127,255,0.25), transparent 70%)",
              }}
            />
            <Image
              src="/logo-mark.png"
              alt="ZytonAI"
              width={72}
              height={72}
              priority
              className="relative"
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="reveal-motion text-sm font-medium uppercase tracking-[0.3em] text-accent-strong"
        >
          Intelligence. Automated.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="reveal-motion text-4xl font-semibold leading-tight tracking-tight sm:text-6xl"
        >
          Unifica y potencia tu negocio
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="reveal-motion max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
        >
          Un CRM que reúne toda la información de tu negocio en un solo lugar y se
          adapta a cómo trabajas. Sin secciones complejas que al final nadie usa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="reveal-motion mt-4 flex flex-col items-center gap-3 sm:flex-row"
        >
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/contacto"
              className="block rounded-full bg-accent-strong px-8 py-3 text-base font-medium text-white shadow-[0_10px_30px_-12px_var(--accent-strong)] transition-colors hover:bg-[#0f4fb8]"
            >
              Agenda una demo
            </Link>
          </motion.div>
          <Link
            href="/precios"
            className="rounded-full border border-border bg-background px-8 py-3 text-base font-medium text-foreground transition-colors hover:border-accent-strong hover:text-accent-strong"
          >
            Ver precios
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
