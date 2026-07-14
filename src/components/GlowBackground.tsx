const positions = {
  top: "left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/3",
  left: "left-0 top-1/2 h-[500px] w-[600px] -translate-x-1/3 -translate-y-1/2",
  right: "right-0 top-1/2 h-[500px] w-[600px] translate-x-1/3 -translate-y-1/2",
} as const;

export default function GlowBackground({
  variant = "top",
}: {
  variant?: keyof typeof positions;
}) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div
        className={`animate-glow-pulse absolute rounded-full ${positions[variant]}`}
        style={{
          background:
            "radial-gradient(closest-side, rgba(47,127,255,0.28), transparent 70%)",
        }}
      />
      {variant === "top" && (
        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage:
              "radial-gradient(ellipse 60% 50% at 50% 0%, black 40%, transparent 100%)",
          }}
        />
      )}
    </div>
  );
}
