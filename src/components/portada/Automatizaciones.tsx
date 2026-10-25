"use client";

import { motion } from "framer-motion";
import { Award, Cake, CalendarDays, Check, RefreshCw, UserX, Wallet } from "lucide-react";
import Reveal from "../Reveal";

// Los seis disparadores automáticos de `services/automatizaciones.py`
// (cumpleanos, reactivacion, premio, cobro, renovacion, cita). El séptimo,
// «puntual», es una campaña que se manda a mano y no va aquí.
const disparadores = [
  {
    icono: CalendarDays,
    cuando: "1 día antes de la cita",
    mensaje: "Hola Ana, te esperamos mañana a las 3:00 p. m. para tu masaje.",
  },
  {
    icono: Wallet,
    cuando: "3 días antes del pago",
    mensaje: "Don Jorge, tu cuota de $210.000 vence el viernes.",
  },
  {
    icono: RefreshCw,
    cuando: "30 días antes de la renovación",
    mensaje: "Tu póliza de auto se renueva el 15 de noviembre. ¿La revisamos?",
  },
  {
    icono: Cake,
    cuando: "El día del cumpleaños",
    mensaje: "¡Feliz cumpleaños, Camila! Este mes tu corte va por nuestra cuenta.",
  },
  {
    icono: UserX,
    cuando: "60 días sin volver",
    mensaje: "Hace rato no te vemos, Luis. ¿Te agendamos tu limpieza?",
  },
  {
    icono: Award,
    cuando: "Al completar la tarjeta de sellos",
    mensaje: "¡Completaste tus 10 sellos! Tu próximo lavado es gratis.",
    pro: true,
  },
];

export default function Automatizaciones() {
  return (
    <section id="automatizaciones" className="scroll-mt-24 pb-24 sm:pb-32">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-16">
        <Reveal className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-accent-strong">
            Automatizaciones
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
            Los mensajes que se te olvidan, salen solos
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Eliges cuándo y qué se dice. El CRM revisa todos los días y escribe
            por correo o por WhatsApp a quien le toca.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {disparadores.map((d, i) => (
            <Reveal key={d.cuando} delay={i * 0.07} className="h-full">
              <div className="group flex h-full flex-col rounded-3xl bg-surface p-7 ring-1 ring-border transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_-18px_rgba(10,15,26,0.22)]">
                <div className="flex items-center justify-between">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-accent/10 text-accent-strong transition-colors group-hover:bg-accent-strong group-hover:text-white">
                    <d.icono size={20} strokeWidth={1.8} />
                  </div>
                  {d.pro && (
                    <span className="rounded-full bg-accent/10 px-2.5 py-1 text-[11px] font-medium text-accent-strong">
                      Pro
                    </span>
                  )}
                </div>
                <p className="mt-5 font-semibold">{d.cuando}</p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="reveal-motion mt-4 rounded-2xl rounded-tl-md bg-background p-4 text-sm leading-relaxed text-muted ring-1 ring-border"
                >
                  {d.mensaje}
                  <span className="mt-2 flex items-center justify-end gap-1 text-[11px] font-medium text-accent-strong">
                    <Check size={12} strokeWidth={3} /> Enviado
                  </span>
                </motion.div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
