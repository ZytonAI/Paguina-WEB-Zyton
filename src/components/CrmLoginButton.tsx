"use client";

import { useState } from "react";
import CrmLoginModal from "./CrmLoginModal";

export default function CrmLoginButton({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        Ingresar a CRM
      </button>
      <CrmLoginModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
