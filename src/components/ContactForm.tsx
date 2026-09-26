"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";
import GlowBackground from "./GlowBackground";

const fieldClass =
  "rounded-xl border border-border bg-background px-4 py-3 outline-none transition-colors placeholder:text-muted focus:border-accent-strong focus:ring-2 focus:ring-accent/25";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Va a /api/contacto, que crea el lead en el CRM interno del equipo.
  async function enviar(form: HTMLFormElement) {
    setEnviando(true);
    setError(null);
    try {
      const r = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(data.error || "No pudimos enviar tu mensaje.");
      setSubmitted(true);
    } catch (e) {
      setError(e instanceof Error ? e.message : "No pudimos enviar tu mensaje.");
    } finally {
      setEnviando(false);
    }
  }

  return (
    <section id="contacto" className="relative scroll-mt-20 overflow-hidden">
      <GlowBackground variant="top" />
      <div className="mx-auto max-w-xl px-6 py-24">
        <Reveal>
          <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
            Hablemos de tu negocio
          </h2>
          <p className="mt-4 text-center text-muted">
            Cuéntanos cómo trabajas hoy y te mostramos cómo el CRM se adapta a tu operación.
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
                className="mt-10 flex flex-col items-center gap-3 rounded-2xl border border-accent/40 bg-accent/5 p-10 text-center"
              >
                <CheckCircle2 className="text-accent-strong" size={36} strokeWidth={1.5} />
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
                  enviar(e.currentTarget);
                }}
              >
                {/* Trampa para bots: oculta para las personas. */}
                <input
                  type="text"
                  name="sitio"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />
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
                <input
                  type="tel"
                  name="telefono"
                  placeholder="WhatsApp (opcional)"
                  className={fieldClass}
                />
                <textarea
                  name="mensaje"
                  placeholder="¿Cómo llegan y se atienden hoy tus clientes?"
                  rows={4}
                  className={`resize-none ${fieldClass}`}
                />
                {error && (
                  <p role="alert" className="text-sm text-red-500">
                    {error}
                  </p>
                )}
                <motion.button
                  type="submit"
                  disabled={enviando}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-2 rounded-full bg-accent-strong px-8 py-3 font-medium text-white shadow-[0_10px_30px_-14px_var(--accent-strong)] transition-colors hover:bg-[#0f4fb8]"
                >
                  {enviando ? "Enviando…" : "Enviar"}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
