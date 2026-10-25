"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, LayoutDashboard, MessageCircle, Users, Wallet } from "lucide-react";
import Reveal from "../Reveal";

// Marcas de ejemplo, inventadas. El color y el nombre son lo que una empresa
// cambia en Configuración → Empresa → Marca.
const marcas = [
  { nombre: "Spa Serenidad", inicial: "S", color: "#0f9d8a" },
  { nombre: "Barbería El Corte", inicial: "B", color: "#1f2937" },
  { nombre: "Clínica Sonrisa", inicial: "C", color: "#2563eb" },
  { nombre: "Veterinaria Huellas", inicial: "V", color: "#c2410c" },
  { nombre: "Gimnasio Fuerza", inicial: "G", color: "#7c3aed" },
];

export default function MarcaBlanca() {
  const [i, setI] = useState(0);
  const marca = marcas[i];

  return (
    <section id="marca" className="scroll-mt-24 pb-24 sm:pb-32">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-6 sm:px-10 lg:grid-cols-2 lg:px-16">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-accent-strong">
            Marca blanca · desde el plan Base
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
            Tu CRM, con tu nombre y tus colores
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
            Tu logo en el inicio de sesión y en la barra, tus colores en cada
            botón y en los recibos que le mandas al cliente. Tu equipo entra por
            tunegocio.zytonai.com.
          </p>

          <p className="mt-9 text-sm font-medium">Pruébalo:</p>
          <div className="mt-3 flex flex-wrap gap-3">
            {marcas.map((m, j) => (
              <button
                key={m.nombre}
                onClick={() => setI(j)}
                aria-label={m.nombre}
                aria-pressed={i === j}
                className="relative size-11 rounded-full ring-offset-2 transition-transform hover:scale-110"
                style={{ backgroundColor: m.color, boxShadow: i === j ? `0 0 0 3px #fff, 0 0 0 5px ${m.color}` : undefined }}
              />
            ))}
          </div>
        </Reveal>

        <Reveal variant="panel" delay={0.1}>
          <div className="overflow-hidden rounded-3xl bg-background shadow-[0_30px_80px_-30px_rgba(10,15,26,0.35)] ring-1 ring-border">
            <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
              <span className="size-2.5 rounded-full bg-border" />
              <span className="size-2.5 rounded-full bg-border" />
              <span className="size-2.5 rounded-full bg-border" />
              <span className="ml-3 rounded-md bg-surface px-3 py-1 text-[11px] text-muted">
                {marca.nombre.toLowerCase().replace(/[^a-z]/g, "")}.zytonai.com
              </span>
            </div>
            <div className="grid grid-cols-[150px_1fr] max-sm:grid-cols-[56px_1fr]">
              <motion.div
                animate={{ backgroundColor: marca.color }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-1 p-3 text-white"
              >
                <div className="mb-4 flex items-center gap-2 px-1.5 py-1">
                  <motion.span
                    key={marca.inicial}
                    initial={{ scale: 0.4, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-white/20 text-sm font-bold"
                  >
                    {marca.inicial}
                  </motion.span>
                  <span className="truncate text-xs font-semibold max-sm:hidden">{marca.nombre}</span>
                </div>
                {[
                  { icono: LayoutDashboard, t: "Tablero", activo: true },
                  { icono: Users, t: "Clientes" },
                  { icono: CalendarDays, t: "Calendario" },
                  { icono: Wallet, t: "Cobros" },
                  { icono: MessageCircle, t: "Comunicación" },
                ].map((it) => (
                  <div
                    key={it.t}
                    className={`flex items-center gap-2 rounded-lg px-2 py-2 text-xs ${it.activo ? "bg-white/20" : "text-white/80"}`}
                  >
                    <it.icono size={15} /> <span className="max-sm:hidden">{it.t}</span>
                  </div>
                ))}
              </motion.div>

              <div className="p-5">
                <p className="text-sm font-semibold">Hola, equipo 👋</p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {[
                    { t: "Citas hoy", v: "18" },
                    { t: "Recaudo", v: "$4,2 M" },
                  ].map((k) => (
                    <div key={k.t} className="rounded-xl bg-surface p-3">
                      <p className="text-[11px] text-muted">{k.t}</p>
                      <motion.p
                        animate={{ color: marca.color }}
                        className="mt-1 text-lg font-semibold"
                      >
                        {k.v}
                      </motion.p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex h-20 items-end gap-2">
                  {[40, 65, 50, 80, 60, 92, 75].map((h, j) => (
                    <motion.div
                      key={j}
                      animate={{ backgroundColor: marca.color, height: `${h}%` }}
                      transition={{ duration: 0.5, delay: j * 0.03 }}
                      className="flex-1 rounded-t-md opacity-80"
                    />
                  ))}
                </div>
                <motion.div
                  animate={{ backgroundColor: marca.color }}
                  className="mt-4 rounded-full py-2.5 text-center text-xs font-medium text-white"
                >
                  Nueva cita
                </motion.div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
