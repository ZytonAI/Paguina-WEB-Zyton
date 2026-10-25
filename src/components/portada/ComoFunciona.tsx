"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BellRing, CalendarDays, Check, CreditCard, MessageCircle } from "lucide-react";
import { InstagramIcon } from "../SocialIcons";
import Reveal from "../Reveal";

const pasos = [
  {
    n: "01",
    titulo: "Eliges tu plan y pagas en línea",
    texto:
      "Base o Pro, mensual o anual. Dejas los datos de tu empresa, pagas con Wompi y tu CRM queda creado en tusitio.zytonai.com.",
    Dibujo: DibujoPago,
  },
  {
    n: "02",
    titulo: "Nos cuentas a qué te dedicas",
    texto:
      "Un cuestionario corto: tu sector, tus servicios, tus colores. El CRM arranca con la ficha del cliente, el embudo, el catálogo y los mensajes de tu tipo de negocio.",
    Dibujo: DibujoCuestionario,
  },
  {
    n: "03",
    titulo: "Conectas tus canales",
    texto:
      "Tu WhatsApp Business, tu Instagram, tu Google Calendar y tus anuncios de Meta. Si tienes los clientes en Excel, los subes tal como están.",
    Dibujo: DibujoConexiones,
  },
  {
    n: "04",
    titulo: "El CRM empieza a trabajar",
    texto:
      "Los recordatorios de cita, de pago y de renovación salen solos. El asistente contesta, agenda y te pasa lo que necesita una persona.",
    Dibujo: DibujoTrabajando,
  },
];

export default function ComoFunciona() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const alto = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="como-funciona" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-16">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-accent-strong">
            Así funciona
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">
            De cero a funcionando, sin una implementación eterna
          </h2>
        </Reveal>

        <div ref={ref} className="relative mt-20">
          {/* La línea que se va llenando al bajar */}
          <div className="absolute left-[19px] top-0 h-full w-0.5 bg-border lg:left-1/2 lg:-translate-x-1/2">
            <motion.div style={{ height: alto }} className="w-full bg-accent-strong" />
          </div>

          <div className="flex flex-col gap-20 lg:gap-28">
            {pasos.map((p, i) => (
              <div
                key={p.n}
                className="relative grid gap-8 pl-14 lg:grid-cols-2 lg:gap-24 lg:pl-0"
              >
                <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-full bg-background text-sm font-semibold text-accent-strong ring-2 ring-accent-strong lg:left-1/2 lg:-translate-x-1/2">
                  {p.n}
                </div>

                <Reveal
                  variant={i % 2 ? "right" : "left"}
                  className={i % 2 ? "lg:order-2 lg:pl-4" : "lg:pr-4 lg:text-right"}
                >
                  <h3 className="text-2xl font-semibold tracking-tight">{p.titulo}</h3>
                  <p className={`mt-4 max-w-md leading-relaxed text-muted ${i % 2 ? "" : "lg:ml-auto"}`}>
                    {p.texto}
                  </p>
                </Reveal>

                <Reveal variant="panel" delay={0.1} className={i % 2 ? "lg:order-1" : ""}>
                  <div className="rounded-3xl bg-surface p-6 ring-1 ring-border sm:p-8">
                    <p.Dibujo />
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Las ilustraciones de cada paso ---------------------------------------
// Se animan al entrar en pantalla, una vez.

const enVista = { initial: "off", whileInView: "on", viewport: { once: true, margin: "-80px" } } as const;

function DibujoPago() {
  return (
    <motion.div {...enVista} className="flex flex-col gap-3">
      {[
        { nombre: "Base", detalle: "El CRM con tu marca", activo: false },
        { nombre: "Pro", detalle: "Con bandeja e IA", activo: true },
      ].map((plan, i) => (
        <motion.div
          key={plan.nombre}
          variants={{ off: { opacity: 0, x: -16 }, on: { opacity: 1, x: 0 } }}
          transition={{ delay: 0.15 * i }}
          className={`flex items-center justify-between rounded-2xl bg-background px-5 py-4 ring-1 ${
            plan.activo ? "ring-2 ring-accent-strong" : "ring-border"
          }`}
        >
          <div>
            <p className="font-semibold">{plan.nombre}</p>
            <p className="text-sm text-muted">{plan.detalle}</p>
          </div>
          <motion.span
            variants={{ off: { scale: 0 }, on: { scale: plan.activo ? 1 : 0 } }}
            transition={{ delay: 0.6, type: "spring", stiffness: 300 }}
            className="flex size-7 items-center justify-center rounded-full bg-accent-strong text-white"
          >
            <Check size={15} strokeWidth={3} />
          </motion.span>
        </motion.div>
      ))}
      <motion.div
        variants={{ off: { opacity: 0, y: 10 }, on: { opacity: 1, y: 0 } }}
        transition={{ delay: 0.9 }}
        className="flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-white"
      >
        <CreditCard size={16} /> Pagar con Wompi
      </motion.div>
    </motion.div>
  );
}

function DibujoCuestionario() {
  const sectores = ["Seguros", "Spa", "Odontología", "Barbería", "Veterinaria", "Taller"];
  return (
    <motion.div {...enVista}>
      <p className="text-sm font-medium">¿A qué se dedica tu negocio?</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {sectores.map((s, i) => (
          <motion.span
            key={s}
            variants={{
              off: { opacity: 0, y: 8 },
              on: {
                opacity: 1,
                y: 0,
                backgroundColor: s === "Spa" ? "var(--accent-strong)" : "var(--background)",
                color: s === "Spa" ? "#ffffff" : "var(--foreground)",
              },
            }}
            transition={{
              delay: 0.08 * i,
              backgroundColor: { delay: 0.9 },
              color: { delay: 0.9 },
            }}
            className="rounded-full px-4 py-2 text-sm ring-1 ring-border"
          >
            {s}
          </motion.span>
        ))}
      </div>
      <div className="mt-6 flex flex-col gap-2">
        {["Ficha del cliente", "Catálogo de servicios", "Recordatorios de cita"].map((t, i) => (
          <motion.div
            key={t}
            variants={{ off: { opacity: 0, x: -10 }, on: { opacity: 1, x: 0 } }}
            transition={{ delay: 1.2 + 0.15 * i }}
            className="flex items-center gap-2 text-sm text-muted"
          >
            <Check size={15} className="text-accent-strong" /> {t} listo
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function DibujoConexiones() {
  const canales = [
    { nombre: "WhatsApp Business", icono: <MessageCircle size={17} />, color: "#25d366" },
    { nombre: "Instagram", icono: <InstagramIcon className="size-[17px]" />, color: "#e1306c" },
    { nombre: "Google Calendar", icono: <CalendarDays size={17} />, color: "#4285f4" },
  ];
  return (
    <motion.div {...enVista} className="flex flex-col gap-3">
      {canales.map((c, i) => (
        <div
          key={c.nombre}
          className="flex items-center justify-between rounded-2xl bg-background px-5 py-4 ring-1 ring-border"
        >
          <div className="flex items-center gap-3">
            <span
              className="flex size-9 items-center justify-center rounded-xl text-white"
              style={{ backgroundColor: c.color }}
            >
              {c.icono}
            </span>
            <span className="text-sm font-medium">{c.nombre}</span>
          </div>
          {/* El interruptor que se enciende */}
          <motion.span
            variants={{ off: { backgroundColor: "#d7dce3" }, on: { backgroundColor: "#155ed6" } }}
            transition={{ delay: 0.4 + 0.35 * i }}
            className="relative h-6 w-11 rounded-full"
          >
            <motion.span
              variants={{ off: { x: 2 }, on: { x: 22 } }}
              transition={{ delay: 0.4 + 0.35 * i, type: "spring", stiffness: 400, damping: 25 }}
              className="absolute top-0.5 size-5 rounded-full bg-white shadow"
            />
          </motion.span>
        </div>
      ))}
    </motion.div>
  );
}

function DibujoTrabajando() {
  const barras = [38, 52, 46, 68, 74, 90];
  return (
    <motion.div {...enVista}>
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium">Recaudo del mes</p>
        <span className="text-xs text-muted">Tablero</span>
      </div>
      <div className="mt-5 flex h-32 items-end gap-3">
        {barras.map((h, i) => (
          <motion.div
            key={i}
            variants={{ off: { height: 0 }, on: { height: `${h}%` } }}
            transition={{ delay: 0.1 * i, duration: 0.7, ease: "easeOut" }}
            className="flex-1 rounded-t-lg bg-gradient-to-t from-accent-strong to-accent"
          />
        ))}
      </div>
      <motion.div
        variants={{ off: { opacity: 0, y: 12 }, on: { opacity: 1, y: 0 } }}
        transition={{ delay: 1 }}
        className="mt-5 flex items-center gap-3 rounded-2xl bg-background px-4 py-3 ring-1 ring-border"
      >
        <BellRing size={16} className="text-accent-strong" />
        <span className="text-sm">12 recordatorios enviados hoy</span>
      </motion.div>
    </motion.div>
  );
}
