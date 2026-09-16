import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { legalEntity } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Cómo pedir la eliminación de tus datos",
  description:
    "Pasos para solicitar a ZytonAI la eliminación de tus datos personales, seas empresa usuaria, cliente de una empresa o hayas conectado tu cuenta de Facebook, Instagram o Google.",
  alternates: {
    canonical: "/eliminacion-de-datos",
  },
};

export default function EliminacionDeDatosPage() {
  const soporte = (
    <a href={`mailto:${legalEntity.email}`}>{legalEntity.email}</a>
  );

  return (
    <LegalPage
      eyebrow="Eliminación de datos"
      title="Cómo pedir la eliminación de tus datos"
    >
      <p>
        Cualquier persona puede pedir que ZytonAI elimine los datos personales
        que tenga sobre ella. Esta página explica cómo, según el caso.
      </p>

      <h2>Si eres una empresa usuaria de ZytonAI</h2>
      <ol>
        <li>
          Desconecta las integraciones que tengas activas (Google, Meta,
          facturación) desde Configuración. Eso revoca los permisos en cada
          servicio.
        </li>
        <li>
          Escribe a {soporte} desde el correo de la cuenta gerente con el asunto
          «Eliminación de cuenta», indicando el subdominio de tu empresa.
        </li>
        <li>
          Te confirmamos la recepción en dos días hábiles y, si lo pides, te
          entregamos antes una exportación de tu información.
        </li>
        <li>
          La cuenta y todos sus datos (clientes, cobros, citas, mensajes,
          leads, credenciales cifradas) se eliminan de forma definitiva en un
          plazo máximo de treinta días, salvo la información que la ley obligue
          a conservar (registros contables del servicio contratado).
        </li>
      </ol>

      <h2>Si eres cliente de una empresa que usa ZytonAI</h2>
      <p>
        Los datos que una empresa guarda sobre sus clientes en su CRM son de
        esa empresa, que es la responsable ante ti. Pídele directamente a ella
        que actualice o elimine tu información. Si no obtienes respuesta,
        escríbenos a {soporte} con el nombre de la empresa y trasladaremos tu
        solicitud o la atenderemos según nuestras obligaciones como Encargado
        del tratamiento.
      </p>

      <h2>Si conectaste tu cuenta de Facebook, Instagram o Google</h2>
      <p>
        Al quitar la aplicación ZytonAI desde la configuración de tu cuenta de
        Facebook (Configuración → Apps y sitios web) o de Google (Seguridad →
        Aplicaciones de terceros), los permisos quedan revocados de inmediato.
        Si además quieres que borremos los datos que ya recibimos a través de
        esa conexión, escríbenos a {soporte} indicando qué cuenta conectaste;
        lo hacemos en un plazo máximo de treinta días y te lo confirmamos por
        correo.
      </p>

      <h2>Si llenaste un formulario en un anuncio</h2>
      <p>
        Los datos de un formulario de Facebook o Instagram los recibe la
        empresa que puso el anuncio. Puedes pedirle a esa empresa que los
        elimine, o escribirnos y nosotros le trasladamos la solicitud.
      </p>

      <p>
        Estas solicitudes se atienden conforme a la Ley 1581 de 2012. Si
        consideras que no fueron atendidas, puedes acudir a la Superintendencia
        de Industria y Comercio.
      </p>
    </LegalPage>
  );
}
