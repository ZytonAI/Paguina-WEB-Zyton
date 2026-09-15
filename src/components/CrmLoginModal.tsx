"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

const fieldClass =
  "rounded-xl border border-border bg-background px-4 py-3 outline-none transition-colors placeholder:text-muted focus:border-accent-strong focus:ring-2 focus:ring-accent/25";

export default function CrmLoginModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/crm-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json().catch(() => null);

      if (!res.ok || typeof data?.redirectUrl !== "string") {
        setError(data?.error ?? "No se pudo iniciar sesión. Intenta nuevamente.");
        setLoading(false);
        return;
      }

      // Navegación de página completa: el token vive en la URL y debe consumirse
      // en el dominio del CRM, nunca vía fetch/XHR desde acá.
      window.location.href = data.redirectUrl;
    } catch {
      setError("No se pudo iniciar sesión. Intenta nuevamente.");
      setLoading(false);
    }
  }

  function handleClose() {
    if (loading) return;
    setUsername("");
    setPassword("");
    setError(null);
    onClose();
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0f1a]/50 px-6"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-sm rounded-2xl border border-border bg-background p-8 shadow-[0_24px_60px_-20px_rgba(10,15,26,0.35)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={handleClose}
              aria-label="Cerrar"
              className="absolute right-4 top-4 text-muted transition-colors hover:text-foreground"
            >
              <X size={20} />
            </button>

            <h2 className="text-xl font-semibold tracking-tight">Ingresar a CRM</h2>
            <p className="mt-2 text-sm text-muted">
              Usa las credenciales de tu CRM.
            </p>

            <form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="username"
                placeholder="Usuario"
                autoComplete="username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={fieldClass}
              />
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={fieldClass}
              />

              {error && <p className="text-sm text-red-600">{error}</p>}

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
                className="mt-2 rounded-full bg-accent-strong px-8 py-3 font-medium text-white transition-colors hover:bg-[#0f4fb8] disabled:opacity-60"
              >
                {loading ? "Ingresando…" : "Ingresar"}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
