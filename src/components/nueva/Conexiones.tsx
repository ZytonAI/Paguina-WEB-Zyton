import Image from "next/image";
import { CalendarDays, CreditCard, FileSpreadsheet, Globe, Mail, Megaphone, MessageCircle } from "lucide-react";
import { InstagramIcon } from "../SocialIcons";
import Reveal from "../Reveal";

// Lo que de verdad se conecta hoy. Si una conexión se cae del producto, sale
// de aquí.
const conexiones = [
  { nombre: "WhatsApp Business", icono: <MessageCircle size={22} />, color: "#25d366", que: "Bandeja, avisos y asistente" },
  { nombre: "Instagram", icono: <InstagramIcon className="size-[22px]" />, color: "#e1306c", que: "Mensajes directos en la bandeja" },
  { nombre: "Google Calendar", icono: <CalendarDays size={22} />, color: "#4285f4", que: "Tus citas en los dos lados" },
  { nombre: "Meta Ads", icono: <Megaphone size={22} />, color: "#0866ff", que: "Leads y resultados de tus anuncios" },
  { nombre: "Excel", icono: <FileSpreadsheet size={22} />, color: "#107c41", que: "Subes tus clientes tal como están" },
  { nombre: "Correo", icono: <Mail size={22} />, color: "#f59e0b", que: "Recordatorios y recibos con tu marca" },
  { nombre: "Tu página web", icono: <Globe size={22} />, color: "#0ea5e9", que: "Los formularios entran como leads" },
  { nombre: "Wompi", icono: <CreditCard size={22} />, color: "#1d1d6b", que: "Pagas tu plan en línea" },
];

export default function Conexiones() {
  const radio = 44; // porcentaje del contenedor

  return (
    <section id="conexiones" className="scroll-mt-24 pb-24 sm:pb-32">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-16">
        <div className="rounded-[2.25rem] bg-surface px-6 py-16 sm:px-12 sm:py-20 lg:px-16">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal variant="panel" className="order-2 lg:order-1">
              <div className="relative mx-auto aspect-square w-full max-w-[420px]">
                <div className="absolute inset-[6%] rounded-full border border-dashed border-accent/40" />
                <div className="absolute inset-[26%] rounded-full border border-border" />

                {/* El logo en el centro */}
                <div className="absolute left-1/2 top-1/2 flex size-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl bg-background shadow-[0_20px_50px_-20px_rgba(21,94,214,0.55)] ring-1 ring-border">
                  <span className="animate-ping-soft absolute inset-0 rounded-3xl bg-accent/20" />
                  <Image src="/logo-mark.png" alt="ZytonAI" width={52} height={52} className="relative" />
                </div>

                {/* El anillo que gira con los iconos */}
                <div className="animate-orbit absolute inset-0">
                  {conexiones.map((c, i) => {
                    const ang = (i / conexiones.length) * 2 * Math.PI - Math.PI / 2;
                    const x = 50 + radio * Math.cos(ang);
                    const y = 50 + radio * Math.sin(ang);
                    return (
                      <div
                        key={c.nombre}
                        className="absolute -translate-x-1/2 -translate-y-1/2"
                        style={{ left: `${x}%`, top: `${y}%` }}
                      >
                        <div
                          className="animate-orbit-counter flex size-14 items-center justify-center rounded-2xl text-white shadow-lg"
                          style={{ backgroundColor: c.color }}
                          title={c.nombre}
                        >
                          {c.icono}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            <Reveal className="order-1 lg:order-2">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-accent-strong">
                Conexiones
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                Se conecta con lo que ya usas
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
                Tu número y tus cuentas siguen siendo los mismos. El CRM se pone
                en el medio y lo junta todo.
              </p>
              <ul className="mt-9 grid gap-x-6 gap-y-4 sm:grid-cols-2">
                {conexiones.map((c) => (
                  <li key={c.nombre} className="flex gap-3">
                    <span className="mt-1.5 size-2 shrink-0 rounded-full" style={{ backgroundColor: c.color }} />
                    <span>
                      <span className="block text-sm font-medium">{c.nombre}</span>
                      <span className="block text-sm text-muted">{c.que}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
