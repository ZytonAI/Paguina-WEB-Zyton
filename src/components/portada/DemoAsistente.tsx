"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Bot, CalendarCheck, ClipboardList, RotateCcw, Search, UserPlus, Wallet } from "lucide-react";
import Reveal from "../Reveal";

// Cada escena usa solo herramientas que el agente tiene de verdad
// (`services/herramientas_agente.py`): consultar servicios, consultar
// disponibilidad, agendar cita, crear lead, saldo de fidelización y estado
// de cobro. Si se le quita una allá, sale de aquí.
type Mensaje =
  | { de: "cliente" | "asistente"; texto: string }
  | { de: "herramienta"; texto: string; icono: typeof Search };

const escenas: { id: string; nombre: string; negocio: string; mensajes: Mensaje[] }[] = [
  {
    id: "barberia",
    nombre: "Barbería",
    negocio: "Barbería El Corte",
    mensajes: [
      { de: "cliente", texto: "Buenas, ¿cuánto vale corte y barba?" },
      { de: "herramienta", texto: "Consultó el catálogo", icono: Search },
      { de: "asistente", texto: "Corte + barba vale $35.000. ¿Quieres que te aparte un turno?" },
      { de: "cliente", texto: "Sí, el sábado en la mañana" },
      { de: "herramienta", texto: "Revisó la agenda", icono: ClipboardList },
      { de: "asistente", texto: "El sábado tengo libre a las 9:00 y a las 10:30. ¿Cuál prefieres?" },
      { de: "cliente", texto: "9:00" },
      { de: "herramienta", texto: "Agendó la cita", icono: CalendarCheck },
      { de: "asistente", texto: "Listo, quedaste el sábado a las 9:00 a. m. El viernes te recordamos 👌" },
    ],
  },
  {
    id: "odontologia",
    nombre: "Odontología",
    negocio: "Clínica Sonrisa",
    mensajes: [
      { de: "cliente", texto: "Hola, ¿hacen blanqueamiento?" },
      { de: "herramienta", texto: "Consultó el catálogo", icono: Search },
      { de: "asistente", texto: "Sí: el blanqueamiento en consultorio vale $450.000 e incluye valoración. ¿Te interesa agendar?" },
      { de: "cliente", texto: "Primero lo quiero pensar, soy Laura" },
      { de: "herramienta", texto: "Registró a Laura como lead", icono: UserPlus },
      { de: "asistente", texto: "Claro, Laura. Te dejé registrada para que el equipo te escriba con los detalles." },
    ],
  },
  {
    id: "seguros",
    nombre: "Seguros",
    negocio: "Correduría Andina",
    mensajes: [
      { de: "cliente", texto: "Buenas, ¿tengo algo pendiente por pagar?" },
      { de: "herramienta", texto: "Revisó sus pagos", icono: Wallet },
      { de: "asistente", texto: "Tienes una cuota de $210.000 de tu póliza de auto que vence el 30 de este mes." },
      { de: "cliente", texto: "Quiero cambiar la cobertura" },
      { de: "asistente", texto: "Eso lo revisa un asesor. Ya le pasé tu conversación y te escribe hoy mismo." },
    ],
  },
];

const PAUSA = 1300;

export default function DemoAsistente() {
  const [escena, setEscena] = useState(0);
  const [visibles, setVisibles] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const enPantalla = useInView(ref, { margin: "-120px" });
  const chatRef = useRef<HTMLDivElement>(null);

  const mensajes = escenas[escena].mensajes;
  const terminado = visibles >= mensajes.length;

  useEffect(() => {
    if (!enPantalla || terminado) return;
    const id = setTimeout(() => setVisibles((v) => v + 1), visibles === 0 ? 500 : PAUSA);
    return () => clearTimeout(id);
  }, [enPantalla, visibles, terminado]);

  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: "smooth" });
  }, [visibles]);

  const elegir = (i: number) => {
    setEscena(i);
    setVisibles(0);
  };

  // Lo que va a escribir después, para enseñar los puntitos de «escribiendo».
  const siguiente = mensajes[visibles];

  return (
    <section id="asistente" className="scroll-mt-24 pb-24 sm:pb-32">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-16">
        <div className="overflow-hidden rounded-[2.25rem] bg-foreground px-6 py-16 text-white sm:px-12 sm:py-20 lg:px-16">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-accent">
                Asistente con IA · plan Pro
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                Contesta tu WhatsApp mientras tú atiendes
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-white/70">
                Conoce tu catálogo, tus horarios y tu agenda. Responde precios,
                agenda citas y registra a los interesados. Lo que necesita
                criterio humano, se lo pasa a tu equipo.
              </p>

              <div role="tablist" aria-label="Ejemplos por sector" className="mt-9 flex flex-wrap gap-2">
                {escenas.map((e, i) => (
                  <button
                    key={e.id}
                    role="tab"
                    aria-selected={escena === i}
                    onClick={() => elegir(i)}
                    className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                      escena === i ? "bg-white text-foreground" : "bg-white/10 text-white/80 hover:bg-white/20"
                    }`}
                  >
                    {e.nombre}
                  </button>
                ))}
              </div>

              <p className="mt-8 text-sm text-white/50">
                Funciona igual en Instagram.
              </p>
            </Reveal>

            <Reveal variant="panel" delay={0.1}>
              <div ref={ref} className="mx-auto w-full max-w-[400px]">
                {/* El teléfono */}
                <div className="rounded-[2.5rem] bg-[#1b2230] p-3 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)] ring-1 ring-white/10">
                  <div className="overflow-hidden rounded-[2rem] bg-[#efeae2]">
                    <div className="flex items-center gap-3 bg-[#075e54] px-4 py-3.5 text-white">
                      <div className="flex size-9 items-center justify-center rounded-full bg-white/20">
                        <Bot size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{escenas[escena].negocio}</p>
                        <p className="text-[11px] text-white/70">en línea</p>
                      </div>
                    </div>

                    <div ref={chatRef} className="flex h-[400px] flex-col gap-2.5 overflow-y-auto px-3 py-4">
                      <AnimatePresence mode="popLayout">
                        {mensajes.slice(0, visibles).map((m, i) => (
                          <MensajeChat key={`${escena}-${i}`} m={m} />
                        ))}
                        {!terminado && siguiente && siguiente.de === "asistente" && visibles > 0 && (
                          <motion.div
                            key={`t-${escena}-${visibles}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex gap-1 self-start rounded-2xl bg-white px-4 py-3"
                          >
                            {[0, 1, 2].map((d) => (
                              <span
                                key={d}
                                className="typing-dot size-1.5 rounded-full bg-[#667781]"
                                style={{ animationDelay: `${d * 0.15}s` }}
                              />
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex h-10 justify-center">
                  {terminado && (
                    <motion.button
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      onClick={() => setVisibles(0)}
                      className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/80 hover:bg-white/20"
                    >
                      <RotateCcw size={14} /> Repetir
                    </motion.button>
                  )}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function MensajeChat({ m }: { m: Mensaje }) {
  if (m.de === "herramienta") {
    const Icono = m.icono;
    return (
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center gap-1.5 self-center rounded-full bg-[#155ed6] px-3 py-1 text-[11px] font-medium text-white"
      >
        <Icono size={12} /> {m.texto}
      </motion.div>
    );
  }
  const cliente = m.de === "cliente";
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={`max-w-[82%] rounded-2xl px-3.5 py-2 text-[13.5px] leading-snug text-[#111b21] shadow-sm ${
        cliente ? "self-end rounded-br-md bg-[#d9fdd3]" : "self-start rounded-bl-md bg-white"
      }`}
    >
      {m.texto}
    </motion.div>
  );
}
