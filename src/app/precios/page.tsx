import type { Metadata } from "next";
import Link from "next/link";
import { Check, Plus } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import GlowBackground from "@/components/GlowBackground";

export const metadata: Metadata = {
  title: "Precios",
  description:
    "Planes del CRM de ZytonAI: plan Base desde $300.000 COP al mes, plan Pro con respuestas automatizadas por WhatsApp y landing de captación, y desarrollo a medida para grandes empresas.",
  alternates: {
    canonical: "/precios",
  },
};

type Plan = {
  name: string;
  price: string;
  period: string;
  note?: string;
  highlightNote?: string;
  description: string;
  inherits?: string;
  features: string[];
  cta: string;
  featured: boolean;
};

const plans: Plan[] = [
  {
    name: "Base",
    price: "$350.000",
    period: "COP / mes",
    note: "o $300.000 al mes pagando el año",
    highlightNote: "Ahorras $600.000 al año",
    description:
      "El CRM completo con tu marca, para negocios que quieren ordenar su información y arrancar sin una implementación larga.",
    features: [
      "Marca blanca: el CRM va con tu identidad",
      "Usuarios ilimitados",
      "Historial completo de cada cliente",
      "Alertas de vencimiento y recordatorios de cita",
      "Digitaliza pólizas y fichas con una foto",
      "Plantillas a elección",
      "Mensajes fijos automatizados",
      "Acompañamiento en la implementación",
      "Actualizaciones incluidas",
    ],
    cta: "Empezar con Base",
    featured: false,
  },
  {
    name: "Pro",
    price: "$500.000",
    period: "COP / mes",
    note: "Implementación de $2.400.000",
    highlightNote: "Difiérela hasta 12 meses, desde $200.000 al mes",
    description:
      "Para negocios que además quieren automatizar la conversación con el cliente y captar por su cuenta.",
    inherits: "Todo lo del plan Base, y además:",
    features: [
      "Bandeja unificada con todos tus canales",
      "Respuestas automatizadas por WhatsApp",
      "Landing de captación de clientes incluida",
      "Pide landings de promoción personalizadas, sin costo",
      "Fidelización de clientes",
      "Trae tus clientes del Excel a un panel de verdad",
      "Atención prioritaria: tus solicitudes van primero",
    ],
    cta: "Hablar del plan Pro",
    featured: true,
  },
  {
    name: "A medida",
    price: "Hablemos",
    period: "para grandes empresas",
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

export default function PreciosPage() {
  return (
    <div className="flex flex-1 flex-col font-sans">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <GlowBackground />
          <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-24 text-center sm:px-10 sm:pb-20 sm:pt-32">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent-strong">
              Precios
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Un plan según el tamaño de tu operación
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              El CRM va con tu marca y usuarios ilimitados desde el primer plan.
              Sin migraciones ni cambios en tu forma de trabajar.
            </p>
          </div>
        </section>

        <section className="pb-24 sm:pb-32">
          <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-16">
            <div className="grid items-start gap-6 lg:grid-cols-3 lg:gap-8">
              {plans.map((plan, i) => (
                <Reveal
                  key={plan.name}
                  delay={i * 0.1}
                  variant="panel"
                  className="h-full"
                >
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
                      {plan.price}
                    </p>
                    <p className="mt-2 text-sm text-muted">{plan.period}</p>

                    {plan.note && (
                      <div className="mt-5 border-t border-border pt-5">
                        <p className="text-sm text-foreground">{plan.note}</p>
                        {plan.highlightNote && (
                          <p className="mt-1 text-sm font-medium text-accent-strong">
                            {plan.highlightNote}
                          </p>
                        )}
                      </div>
                    )}

                    <p className="mt-6 leading-relaxed text-muted">
                      {plan.description}
                    </p>

                    {plan.inherits && (
                      <p className="mt-7 flex items-center gap-2 text-sm font-medium text-foreground">
                        <Plus
                          size={16}
                          strokeWidth={2.5}
                          className="shrink-0 text-accent-strong"
                          aria-hidden
                        />
                        {plan.inherits}
                      </p>
                    )}

                    <ul
                      className={`flex flex-col gap-3.5 pb-9 text-sm ${
                        plan.inherits ? "mt-4" : "mt-7"
                      }`}
                    >
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check
                            size={18}
                            strokeWidth={2.25}
                            className="mt-0.5 shrink-0 text-accent-strong"
                            aria-hidden
                          />
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contacto"
                      className={`mt-auto rounded-full px-6 py-3.5 text-center text-sm font-medium transition-colors ${
                        plan.featured
                          ? "bg-accent-strong text-white hover:bg-[#0f4fb8]"
                          : "border border-border bg-background text-foreground hover:border-accent-strong hover:text-accent-strong"
                      }`}
                    >
                      {plan.cta}
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>

            <p className="mt-12 text-center text-sm leading-relaxed text-muted">
              Precios en pesos colombianos, antes de IVA.
            </p>
          </div>
        </section>

        <section className="pb-24 sm:pb-32">
          <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-16">
            <Reveal variant="panel">
              <div className="rounded-[2rem] bg-surface px-7 py-16 text-center sm:px-12 sm:py-20">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  ¿No sabes cuál te sirve?
                </h2>
                <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted">
                  Cuéntanos cómo trabajas hoy y te decimos qué plan tiene sentido,
                  sin compromiso.
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Link
                    href="/contacto"
                    className="rounded-full bg-accent-strong px-8 py-3.5 font-medium text-white transition-colors hover:bg-[#0f4fb8]"
                  >
                    Agenda una demo
                  </Link>
                  <Link
                    href="/faq"
                    className="rounded-full border border-border bg-background px-8 py-3.5 font-medium text-foreground transition-colors hover:border-accent-strong hover:text-accent-strong"
                  >
                    Ver preguntas frecuentes
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
