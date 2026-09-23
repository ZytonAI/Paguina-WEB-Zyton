"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Plus } from "lucide-react";
import Reveal from "@/components/Reveal";

// Donde vive el registro del CRM. La compra no se hace aquí: la persona elige
// plan y periodicidad, y allí deja los datos de su empresa (nombre, subdominio,
// correo) antes de ir al checkout de Wompi. Sin esos datos el pago no se puede
// casar con una empresa.
const APP_URL = "https://app.zytonai.com";

export type Periodo = "mensual" | "anual";

type Precio = {
  /** Lo que se lee grande. */
  price: string;
  period: string;
  note?: string;
  highlightNote?: string;
};

type Plan = {
  name: string;
  /** Null en «A medida»: no tiene precio ni se compra solo. */
  precios: Record<Periodo, Precio> | null;
  id?: "base" | "pro";
  description: string;
  inherits?: string;
  features: string[];
  costsNote?: string;
  cta: string;
  featured: boolean;
};

const plans: Plan[] = [
  {
    name: "Base",
    id: "base",
    precios: {
      mensual: { price: "$350.000", period: "COP / mes" },
      anual: {
        price: "$300.000",
        period: "COP / mes",
        note: "Se paga de una vez: $3.600.000 al año",
        highlightNote: "Ahorras $600.000 al año",
      },
    },
    description:
      "El CRM completo con tu marca, para negocios que quieren ordenar su información y arrancar sin una implementación larga.",
    features: [
      "Marca blanca: el CRM va con tu identidad",
      "Hasta 10 usuarios",
      "Historial completo de cada cliente",
      "Alertas de vencimiento y recordatorios de citas a tus clientes",
      "Plantillas a elección",
      "Mensajes fijos automatizados por WhatsApp y/o correo",
      "Acompañamiento en la implementación",
      "Actualizaciones incluidas",
    ],
    cta: "Empezar con Base",
    featured: false,
  },
  {
    name: "Pro",
    id: "pro",
    precios: {
      mensual: { price: "$500.000", period: "COP / mes" },
      anual: {
        price: "$450.000",
        period: "COP / mes",
        note: "Se paga de una vez: $5.400.000 al año",
        highlightNote: "Ahorras $600.000 al año",
      },
    },
    description:
      "Para negocios que además quieren automatizar la conversación con el cliente y captar por su cuenta.",
    inherits: "Todo lo del plan Base, y además:",
    features: [
      "Bandeja unificada con todos tus canales: WhatsApp e Instagram",
      "Respuestas automatizadas por WhatsApp",
      "Pide landings de promoción personalizadas, sin costo",
      "Fidelización de clientes",
      "Trae tus clientes del Excel a un panel de verdad",
      "Análisis y captación de leads de tus campañas de Meta Ads",
      "Atención prioritaria: tus solicitudes van primero",
      "Hasta 25 usuarios",
    ],
    costsNote:
      "Los costos de IA están incluidos. Los costos de Meta (WhatsApp Business API y Meta Ads) se pagan aparte, directamente a Meta.",
    cta: "Empezar con Pro",
    featured: true,
  },
  {
    name: "A medida",
    precios: null,
    description:
      "Para operaciones con procesos propios, varios equipos o integraciones específicas.",
    inherits: "Todo lo del plan Pro, y además:",
    features: [
      "Diagnóstico de tu operación actual",
      "Automatizaciones diseñadas a tu proceso",
      "Integraciones a la medida",
      "Acompañamiento dedicado",
    ],
    cta: "Contáctanos directamente",
    featured: false,
  },
];

export default function PlanesPrecios() {
  const [periodo, setPeriodo] = useState<Periodo>("mensual");

  return (
    <>
      {/* --- Mensual / Anual --- */}
      <div className="mb-10 flex justify-center sm:mb-12">
        <div
          role="radiogroup"
          aria-label="Periodicidad del pago"
          className="inline-flex rounded-full border border-border bg-surface p-1"
        >
          {(["mensual", "anual"] as Periodo[]).map((p) => {
            const activo = periodo === p;
            return (
              <button
                key={p}
                type="button"
                role="radio"
                aria-checked={activo}
                onClick={() => setPeriodo(p)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  activo
                    ? "bg-accent-strong text-white"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {p === "mensual" ? "Mensual" : "Anual"}
                {p === "anual" && !activo && (
                  <span className="ml-1.5 text-xs text-accent-strong">−$600.000</span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid items-start gap-6 lg:grid-cols-3 lg:gap-8">
        {plans.map((plan, i) => {
          const precio = plan.precios?.[periodo];
          // A medida va a contacto; los otros dos, al registro con lo ya elegido.
          const destino = plan.id
            ? `${APP_URL}/registro?plan=${plan.id}&periodo=${periodo}`
            : "/contacto";
          const claseCta = `mt-auto rounded-full px-6 py-3.5 text-center text-sm font-medium transition-colors ${
            plan.featured
              ? "bg-accent-strong text-white hover:bg-[#0f4fb8]"
              : "border border-border bg-background text-foreground hover:border-accent-strong hover:text-accent-strong"
          }`;

          return (
            <Reveal key={plan.name} delay={i * 0.1} variant="panel" className="h-full">
              <div
                className={`flex h-full flex-col rounded-[1.75rem] p-8 transition-[transform,box-shadow] duration-300 ease-out motion-reduce:transform-none sm:p-10 ${
                  plan.featured
                    ? "bg-accent/[0.05] ring-1 ring-accent/20 hover:-translate-y-1.5"
                    : "bg-surface hover:-translate-y-1.5"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-lg font-medium">{plan.name}</h2>
                  {plan.featured && (
                    <span className="rounded-full bg-accent-strong px-3 py-1 text-xs font-medium text-white">
                      Más completo
                    </span>
                  )}
                </div>

                <p className="mt-7 text-4xl font-semibold tracking-tight">
                  {precio ? precio.price : "Hablemos"}
                </p>
                <p className="mt-2 text-sm text-muted">
                  {precio ? precio.period : "para grandes empresas"}
                </p>

                {precio?.note && (
                  <div className="mt-5 border-t border-border pt-5">
                    <p className="text-sm text-foreground">{precio.note}</p>
                    {precio.highlightNote && (
                      <p className="mt-1 text-sm font-medium text-accent-strong">
                        {precio.highlightNote}
                      </p>
                    )}
                  </div>
                )}

                <p className="mt-6 leading-relaxed text-muted">{plan.description}</p>

                {plan.inherits && (
                  <p className="mt-7 flex items-center gap-2 text-sm font-medium text-foreground">
                    <Plus size={16} strokeWidth={2.5} className="shrink-0 text-accent-strong" aria-hidden />
                    {plan.inherits}
                  </p>
                )}

                <ul className={`flex flex-col gap-3.5 pb-9 text-sm ${plan.inherits ? "mt-4" : "mt-7"}`}>
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check size={18} strokeWidth={2.25} className="mt-0.5 shrink-0 text-accent-strong" aria-hidden />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.costsNote && (
                  <p className="-mt-4 mb-9 rounded-2xl bg-background/70 px-4 py-3 text-xs leading-relaxed text-muted ring-1 ring-border">
                    {plan.costsNote}
                  </p>
                )}

                {plan.id ? (
                  // Sale del dominio de la web hacia la app: <a>, no <Link>.
                  <a href={destino} className={claseCta}>
                    {plan.cta}
                  </a>
                ) : (
                  <Link href={destino} className={claseCta}>
                    {plan.cta}
                  </Link>
                )}
              </div>
            </Reveal>
          );
        })}
      </div>
    </>
  );
}
