"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import GlowBackground from "./GlowBackground";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <GlowBackground />
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 pb-24 pt-20 text-center sm:pt-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mb-2"
        >
          <div className="animate-float relative">
            <div
              className="animate-pulse-opacity absolute -inset-8 rounded-full"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(47,127,255,0.5), transparent 70%)",
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
          className="text-sm font-medium uppercase tracking-[0.3em] text-accent"
        >
          Intelligence. Automated.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl"
        >
          Que ningún lead se te escape.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
        >
          Automatización con IA que da seguimiento a cada cliente potencial por ti.
          Se integra a como ya trabajas, sin que tengas que cambiar nada.
        </motion.p>

        <motion.a
          href="#contacto"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="mt-4 rounded-full bg-accent px-8 py-3 text-base font-medium text-white shadow-[0_0_30px_-8px_var(--accent)] transition-shadow hover:shadow-[0_0_40px_-6px_var(--accent)]"
        >
          Agenda una llamada
        </motion.a>
      </div>
    </section>
  );
}
