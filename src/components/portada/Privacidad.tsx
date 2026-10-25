import { CreditCard, KeyRound, Lock, ShieldCheck } from "lucide-react";
import Reveal from "../Reveal";

// Cada punto se sostiene en el producto: tenant_id + RLS por empresa, roles
// por empresa (migración 021), la tarjeta la guarda Wompi, y data sharing
// apagado en OpenAI y Anthropic (declaración de Google, 22/10).
const puntos = [
  {
    icono: Lock,
    titulo: "Cada empresa, aparte",
    texto: "Tus clientes y tus conversaciones viven separados de los de cualquier otra empresa, con dos barreras de acceso.",
  },
  {
    icono: KeyRound,
    titulo: "Tú decides quién ve qué",
    texto: "Roles con permisos por módulo: la recepcionista no tiene por qué ver la cartera.",
  },
  {
    icono: ShieldCheck,
    titulo: "La IA no aprende de tus datos",
    texto: "Usamos los proveedores de IA con el uso de datos para entrenamiento apagado.",
  },
  {
    icono: CreditCard,
    titulo: "Tu tarjeta no pasa por nosotros",
    texto: "El pago lo procesa Wompi. Nosotros nunca vemos ni guardamos el número.",
  },
];

export default function Privacidad() {
  return (
    <section className="pb-24 sm:pb-32">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-16">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-accent-strong">
            Tus datos
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">
            La información de tus clientes es tuya
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {puntos.map((p, i) => (
            <Reveal key={p.titulo} delay={i * 0.08}>
              <div className="flex size-11 items-center justify-center rounded-xl bg-foreground text-white">
                <p.icono size={19} strokeWidth={1.8} />
              </div>
              <h3 className="mt-5 font-semibold">{p.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.texto}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
