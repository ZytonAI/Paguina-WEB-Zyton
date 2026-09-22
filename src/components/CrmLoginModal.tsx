"use client";

import { useEffect, useState, type FormEvent } from "react";
import { createPortal } from "react-dom";
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
  const [empresa, setEmpresa] = useState("");
  // Solo se pide la empresa cuando el mismo usuario existe en más de una:
  // el CRM lo dice con un 409 y a partir de ahí el campo se queda visible.
  const [pedirEmpresa, setPedirEmpresa] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Con el modal abierto, el fondo no debe moverse: si no, al hacer scroll
  // dentro del formulario se arrastra la página de detrás.
  useEffect(() => {
    if (!open) return;
    const previo = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previo;
    };
  }, [open]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/crm-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, empresa: pedirEmpresa ? empresa : undefined }),
      });
      const data = await res.json().catch(() => null);

      if (res.status === 409 && data?.necesitaEmpresa) {
        setPedirEmpresa(true);
        setError(data?.error ?? "Escribe el nombre de tu empresa para continuar.");
        setLoading(false);
        return;
      }

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
    setEmpresa("");
    setPedirEmpresa(false);
    setError(null);
    onClose();
  }

  const contenido = (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          // `items-center` a secas cortaba el modal por arriba en pantallas
          // bajas (y al aparecer el campo «Empresa», que lo hace más alto):
          // lo que sobresalía quedaba fuera y sin forma de llegar a ello.
          // Con scroll en la capa y `min-h-full` dentro, se centra cuando cabe
          // y se puede recorrer cuando no.
          className="fixed inset-0 z-[100] overflow-y-auto overscroll-contain bg-[#0a0f1a]/50"
          onClick={handleClose}
        >
          {/* El relleno va AQUI, en la capa que se desplaza: puesto en el
              contenedor fijo, lo que sobresale por arriba queda fuera del
              alcance del scroll y no hay forma de leer el título. */}
          <div className="flex min-h-full items-center justify-center px-4 py-8 sm:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-sm rounded-2xl border border-border bg-background p-7 shadow-[0_24px_60px_-20px_rgba(10,15,26,0.35)] sm:p-8"
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
              Usa tu usuario y contraseña del CRM. Te llevamos al de tu empresa.
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

              {pedirEmpresa && (
                <div className="flex flex-col gap-1.5">
                  <input
                    type="text"
                    name="empresa"
                    placeholder="Empresa"
                    autoComplete="organization"
                    autoFocus
                    required
                    value={empresa}
                    onChange={(e) => setEmpresa(e.target.value)}
                    className={fieldClass}
                  />
                  <p className="text-xs text-muted">
                    Es la primera parte de la dirección de tu CRM:{" "}
                    <span className="font-medium text-foreground">empresa</span>.zytonai.com
                  </p>
                </div>
              )}

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
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // El modal se pinta en <body>, no donde está el botón: el <header> lleva
  // `backdrop-blur`, y un ancestro con filtro (igual que uno con transform)
  // hace que `position: fixed` se ancle A ÉL y no a la ventana. Por eso el
  // cuadro salía pegado arriba, dentro de los 70px del header, en vez de
  // centrado en la pantalla.
  //
  // En el servidor no hay `document`. No hay riesgo de descuadre al hidratar
  // porque con el modal cerrado —que es como llega siempre la página— esto no
  // pinta ningún nodo.
  if (typeof document === "undefined") return null;
  return createPortal(contenido, document.body);
}
