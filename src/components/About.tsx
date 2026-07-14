import Image from "next/image";
import Reveal from "./Reveal";
import GlowBackground from "./GlowBackground";

export default function About() {
  return (
    <section id="nosotros" className="relative scroll-mt-20 overflow-hidden border-t border-border">
      <GlowBackground variant="right" />
      <div className="mx-auto grid max-w-5xl items-center gap-12 px-6 py-24 sm:grid-cols-[1fr_auto]">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Sobre nosotros
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Somos ZytonAI, una agencia de automatización con inteligencia
            artificial. Ayudamos a negocios a que ningún lead o cliente se les
            pierda por falta de seguimiento, con IA que se integra a como ya
            trabajan, sin que tengan que cambiar nada.
          </p>
        </Reveal>
        <Reveal delay={0.15} className="justify-self-center sm:justify-self-end">
          <div className="relative flex h-40 w-40 items-center justify-center rounded-full border border-border sm:h-48 sm:w-48">
            <div
              className="absolute -inset-6 rounded-full"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(47,127,255,0.25), transparent 70%)",
              }}
            />
            <Image
              src="/logo-mark.png"
              alt=""
              width={80}
              height={80}
              className="relative opacity-90"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
