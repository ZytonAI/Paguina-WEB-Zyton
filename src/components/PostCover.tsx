import { Clock, Plug, MessageCircle, Zap, type LucideIcon } from "lucide-react";
import GlowBackground from "./GlowBackground";

const icons: Record<string, LucideIcon> = {
  clock: Clock,
  plug: Plug,
  message: MessageCircle,
  zap: Zap,
};

export default function PostCover({
  icon,
  size = "lg",
}: {
  icon: string;
  size?: "sm" | "lg";
}) {
  const Icon = icons[icon] ?? Zap;
  const isLarge = size === "lg";

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-2xl border border-border bg-white/[0.02] ${
        isLarge ? "h-64 sm:h-80" : "h-40"
      }`}
    >
      <GlowBackground variant="top" />
      <div
        className={`relative flex items-center justify-center rounded-full bg-accent/10 text-accent ${
          isLarge ? "h-24 w-24" : "h-16 w-16"
        }`}
      >
        <Icon size={isLarge ? 40 : 28} strokeWidth={1.5} />
      </div>
    </div>
  );
}
