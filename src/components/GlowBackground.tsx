"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const positions = {
  top: "left-1/2 top-0 h-[760px] w-[1200px] -translate-x-1/2 -translate-y-1/3",
  left: "left-0 top-1/2 h-[500px] w-[600px] -translate-x-1/3 -translate-y-1/2",
  right: "right-0 top-1/2 h-[500px] w-[600px] translate-x-1/3 -translate-y-1/2",
} as const;

export default function GlowBackground({
  variant = "top",
  grid = variant === "top",
}: {
  variant?: keyof typeof positions;
  /** Cuadrícula difuminada. Por defecto solo en la variante superior. */
  grid?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // La cuadrícula se mueve más lento que la página y el glow más rápido:
  // esa diferencia de velocidad es la que se lee como profundidad.
  const gridY = useTransform(scrollYProgress, [0, 1], ["-6%", "10%"]);
  const glowY = useTransform(scrollYProgress, [0, 1], ["-14%", "22%"]);
  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.12, 1]);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {grid && (
        <motion.div
          className="parallax-layer absolute inset-0"
          style={{
            y: gridY,
            backgroundImage:
              "linear-gradient(to right, rgba(21,94,214,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(21,94,214,0.10) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(ellipse 85% 70% at 50% 0%, black 30%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 85% 70% at 50% 0%, black 30%, transparent 100%)",
          }}
        />
      )}

      {/* El contenedor externo conserva el posicionamiento estático. El
          parallax va en el hijo: framer-motion escribe `transform` en línea
          y borraría las clases -translate-* que centran el glow. */}
      <div className={`absolute ${positions[variant]}`}>
        <motion.div
          className="parallax-layer h-full w-full rounded-full"
          style={{
            y: glowY,
            scale: glowScale,
            background:
              "radial-gradient(closest-side, rgba(47,127,255,0.16), transparent 70%)",
          }}
        />
      </div>
    </div>
  );
}
