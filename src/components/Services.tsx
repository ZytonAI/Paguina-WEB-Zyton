"use client";

import { motion } from "framer-motion";
import { Zap, Clock, Plug, BarChart3 } from "lucide-react";
import Reveal from "./Reveal";
import GlowBackground from "./GlowBackground";

const services = [
  {
    icon: Zap,
    title: "Seguimiento automático de leads",
    description:
      "Cada nuevo contacto recibe respuesta al instante, sin importar la hora, para que ninguna oportunidad se enfríe por falta de seguimiento.",
  },
  {
    icon: Clock,
    title: "Respuestas 24/7",
    description:
      "IA entrenada para responder preguntas frecuentes y calificar clientes potenciales mientras tu equipo duerme.",
  },
  {
    icon: Plug,
    title: "Integración con tus herramientas",
    description:
      "Se conecta a tu CRM, WhatsApp, correo o el sistema que ya uses. No necesitas migrar nada ni cambiar tu forma de trabajar.",
  },
  {
    icon: BarChart3,
    title: "Reportes claros",
    description:
      "Visibilidad simple de qué leads están siendo atendidos, cuáles requieren atención humana y qué resultados está dando la automatización.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="relative scroll-mt-20 overflow-hidden border-t border-border">
      <GlowBackground variant="left" />
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Qué hacemos
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="group h-full rounded-2xl border border-border p-8 transition-colors hover:border-accent/50 hover:bg-white/[0.02]"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                  <service.icon size={22} strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-xl font-medium">{service.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">
                  {service.description}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
