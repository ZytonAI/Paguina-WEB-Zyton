"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BellRing,
  Bot,
  CalendarDays,
  Check,
  LayoutDashboard,
  MessageCircle,
  Users,
  Wallet,
} from "lucide-react";
import GlowBackground from "../GlowBackground";

// Lo que cuenta la ilustración, en orden: entra un mensaje, el asistente
// contesta con el precio del catálogo, agenda la cita y el día anterior sale
// el recordatorio. Es lo que hace el producto, no un adorno.
const PASOS = 5;
const DURACION_PASO = 1900;

export default function HeroNuevo() {
  const [paso, setPaso] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setPaso((p) => (p + 1) % (PASOS + 1)), DURACION_PASO);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <GlowBackground />
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 pb-24 pt-20 sm:px-10 sm:pt-28 lg:grid-cols-[1.05fr_1fr] lg:px-16 lg:pb-32">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="reveal-motion inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-1.5 text-sm text-muted backdrop-blur"
          >
            <span className="relative flex size-2">
              <span className="animate-ping-soft absolute inline-flex size-full rounded-full bg-accent" />
              <span className="relative inline-flex size-2 rounded-full bg-accent-strong" />
            </span>
            CRM con IA para negocios en Colombia
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="reveal-motion mt-7 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl"
          >
            Tu negocio ordenado.
            <br />
            <span className="bg-gradient-to-r from-accent-strong to-accent bg-clip-text text-transparent">
              Tus clientes, atendidos.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="reveal-motion mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            Clientes, pagos, citas y conversaciones en un solo lugar, con tu
            marca. Los recordatorios salen solos y un asistente con IA contesta
            tu WhatsApp mientras tú atiendes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="reveal-motion mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="/precios"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent-strong px-7 py-3.5 font-medium text-white shadow-[0_12px_30px_-12px_var(--accent-strong)] transition-colors hover:bg-[#0f4fb8]"
            >
              Ver planes
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-full border border-border bg-background px-7 py-3.5 font-medium transition-colors hover:border-accent-strong hover:text-accent-strong"
            >
              Agenda una demo
            </Link>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="reveal-motion mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted"
          >
            {["Con tu marca desde el primer plan", "Plantillas para 14 sectores", "Pago seguro con Wompi"].map(
              (t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check size={16} className="text-accent-strong" />
                  {t}
                </li>
              ),
            )}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="reveal-motion relative"
        >
          <Ilustracion paso={paso} />
        </motion.div>
      </div>
    </section>
  );
}

function Ilustracion({ paso }: { paso: number }) {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      {/* La ventana del CRM */}
      <div className="overflow-hidden rounded-3xl bg-background shadow-[0_30px_80px_-30px_rgba(10,15,26,0.35)] ring-1 ring-border">
        <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 rounded-md bg-surface px-3 py-1 text-[11px] text-muted">
            spaserenidad.zytonai.com
          </span>
        </div>

        <div className="grid grid-cols-[52px_1fr]">
          <div className="flex flex-col items-center gap-4 border-r border-border bg-surface py-5 text-muted">
            <div className="size-7 rounded-lg bg-gradient-to-br from-accent to-accent-strong" />
            <LayoutDashboard size={17} />
            <Users size={17} />
            <MessageCircle size={17} className="text-accent-strong" />
            <CalendarDays size={17} />
            <Wallet size={17} />
          </div>

          <div className="min-h-[340px] p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">Comunicación</p>
              <span className="rounded-full bg-[#25d366]/12 px-2.5 py-1 text-[11px] font-medium text-[#128c4b]">
                WhatsApp conectado
              </span>
            </div>

            <div className="mt-5 flex flex-col gap-3">
              <AnimatePresence>
                {paso >= 1 && (
                  <Burbuja key="c" lado="cliente">
                    Hola, ¿cuánto vale el masaje relajante?
                  </Burbuja>
                )}
                {paso === 1 && <Escribiendo key="t" />}
                {paso >= 2 && (
                  <Burbuja key="a" lado="asistente">
                    Vale $120.000 y dura 60 min. Mañana tengo libre a las 3:00 p. m.
                    ¿Te la agendo?
                  </Burbuja>
                )}
                {paso >= 3 && (
                  <Burbuja key="c2" lado="cliente">
                    Sí, por favor 🙌
                  </Burbuja>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Tarjetas que flotan fuera de la ventana */}
      <AnimatePresence>
        {paso >= 4 && (
          <motion.div
            key="cita"
            initial={{ opacity: 0, x: 30, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="absolute -right-3 top-24 w-52 rounded-2xl bg-background p-4 shadow-[0_20px_50px_-20px_rgba(10,15,26,0.4)] ring-1 ring-border sm:-right-10"
          >
            <div className="flex items-center gap-2 text-xs font-medium text-accent-strong">
              <CalendarDays size={14} /> Cita agendada
            </div>
            <p className="mt-2 text-sm font-semibold">Masaje relajante</p>
            <p className="text-xs text-muted">Mañana · 3:00 p. m.</p>
          </motion.div>
        )}
        {paso >= 5 && (
          <motion.div
            key="recordatorio"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="absolute -bottom-6 -left-3 flex w-60 items-center gap-3 rounded-2xl bg-background p-4 shadow-[0_20px_50px_-20px_rgba(10,15,26,0.4)] ring-1 ring-border sm:-left-10"
          >
            <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-accent/12 text-accent-strong">
              <BellRing size={17} />
            </div>
            <div>
              <p className="text-sm font-semibold">Recordatorio programado</p>
              <p className="text-xs text-muted">Sale solo el día antes</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Burbuja({ lado, children }: { lado: "cliente" | "asistente"; children: React.ReactNode }) {
  const esAsistente = lado === "asistente";
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className={`flex max-w-[85%] flex-col gap-1 ${esAsistente ? "self-end items-end" : "self-start"}`}
    >
      {esAsistente && (
        <span className="flex items-center gap-1 text-[10px] font-medium text-accent-strong">
          <Bot size={12} /> Asistente
        </span>
      )}
      <div
        className={`rounded-2xl px-3.5 py-2.5 text-[13px] leading-snug ${
          esAsistente
            ? "rounded-br-md bg-accent-strong text-white"
            : "rounded-bl-md bg-surface text-foreground ring-1 ring-border"
        }`}
      >
        {children}
      </div>
    </motion.div>
  );
}

function Escribiendo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex gap-1 self-end rounded-2xl bg-accent/10 px-4 py-3"
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="typing-dot size-1.5 rounded-full bg-accent-strong"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </motion.div>
  );
}
