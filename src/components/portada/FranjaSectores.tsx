import {
  Briefcase,
  Building2,
  Car,
  Coffee,
  Dog,
  Dumbbell,
  GraduationCap,
  HeartPulse,
  Scissors,
  ShieldCheck,
  Smile,
  Sparkles,
  Store,
  Wrench,
} from "lucide-react";

// Las 14 plantillas de sector del SaaS (`services/sectores.py`, sin «Otro»).
// Si se agrega una allá, se agrega aquí.
const fila1 = [
  { icono: ShieldCheck, nombre: "Corredurías de seguros" },
  { icono: Sparkles, nombre: "Spas y estética" },
  { icono: Smile, nombre: "Clínicas odontológicas" },
  { icono: HeartPulse, nombre: "Consultorios y terapias" },
  { icono: Scissors, nombre: "Barberías y peluquerías" },
  { icono: Dog, nombre: "Veterinarias" },
  { icono: Wrench, nombre: "Talleres y servicio técnico" },
];
const fila2 = [
  { icono: Car, nombre: "Lavaderos de autos" },
  { icono: Dumbbell, nombre: "Gimnasios y academias" },
  { icono: Store, nombre: "Tiendas y comercios" },
  { icono: Coffee, nombre: "Restaurantes y cafeterías" },
  { icono: Briefcase, nombre: "Consultoría y servicios" },
  { icono: Building2, nombre: "Inmobiliarias" },
  { icono: GraduationCap, nombre: "Colegios e institutos" },
];

function Pista({ items, reversa }: { items: typeof fila1; reversa?: boolean }) {
  return (
    <div className="marquee-mask flex overflow-hidden">
      <ul
        className={`flex w-max shrink-0 gap-3 pr-3 ${reversa ? "animate-marquee-reverse" : "animate-marquee"}`}
      >
        {/* Duplicado para el bucle; la segunda copia no la lee el lector de pantalla. */}
        {[...items, ...items].map((s, i) => (
          <li
            key={`${s.nombre}-${i}`}
            aria-hidden={i >= items.length}
            className="flex items-center gap-2.5 rounded-full bg-background px-5 py-3 text-sm font-medium shadow-[0_2px_10px_-6px_rgba(10,15,26,0.18)] ring-1 ring-border"
          >
            <s.icono size={17} strokeWidth={1.8} className="text-accent-strong" />
            {s.nombre}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function FranjaSectores() {
  return (
    <section className="border-y border-border bg-surface py-14">
      <p className="px-6 text-center text-sm font-medium uppercase tracking-[0.25em] text-muted">
        Arranca con la plantilla de tu sector
      </p>
      <div className="mt-8 flex flex-col gap-3">
        <Pista items={fila1} />
        <Pista items={fila2} reversa />
      </div>
    </section>
  );
}
