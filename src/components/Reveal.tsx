"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Variant = "up" | "panel" | "left" | "right";

const variants: Record<Variant, { y?: number; x?: number; scale?: number }> = {
  up: { y: 28 },
  panel: { y: 40, scale: 0.975 },
  left: { x: -28 },
  right: { x: 28 },
};

export default function Reveal({
  children,
  delay = 0,
  className,
  variant = "up",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: Variant;
}) {
  const from = variants[variant];

  // No se consulta useReducedMotion aquí: en el servidor siempre devuelve
  // false, así que ramificar props o elementos rompería la hidratación. La
  // clase `reveal-motion` desactiva la entrada por CSS (ver globals.css),
  // dejando el contenido visible.
  return (
    <motion.div
      className={className ? `reveal-motion ${className}` : "reveal-motion"}
      initial={{ opacity: 0, ...from }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{
        duration: variant === "panel" ? 0.85 : 0.7,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </motion.div>
  );
}
