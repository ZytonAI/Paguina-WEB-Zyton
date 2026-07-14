"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";
import GlowBackground from "./GlowBackground";

const fieldClass =
  "rounded-xl border border-border bg-transparent px-4 py-3 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contacto" className="relative scroll-mt-20 overflow-hidden border-t border-border">
      <GlowBackground variant="top" />
      <div className="mx-auto max-w-xl px-6 py-24">
        <Reveal>
          <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
            Hablemos
          </h2>
          <p className="mt-4 text-center text-muted">
            Cuéntanos sobre tu negocio y te contactamos para ver cómo podemos ayudarte.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="mt-10 flex flex-col items-center gap-3 rounded-2xl border border-accent/30 bg-accent/5 p-10 text-center"
              >
                <CheckCircle2 className="text-accent" size={36} strokeWidth={1.5} />
                <p className="text-lg">
                  ¡Gracias! Recibimos tu mensaje y te contactaremos pronto.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mt-10 flex flex-col gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre"
                  required
                  className={fieldClass}
                />
                <input
                  type="text"
                  name="empresa"
                  placeholder="Empresa"
                  className={fieldClass}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Correo electrónico"
                  required
                  className={fieldClass}
                />
                <textarea
                  name="mensaje"
                  placeholder="Cuéntanos sobre tu negocio"
                  rows={4}
                  className={`resize-none ${fieldClass}`}
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-2 rounded-full bg-accent px-8 py-3 font-medium text-white shadow-[0_0_30px_-10px_var(--accent)] transition-shadow hover:shadow-[0_0_40px_-8px_var(--accent)]"
                >
                  Enviar
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
