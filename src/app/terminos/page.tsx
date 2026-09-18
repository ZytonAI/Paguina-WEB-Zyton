import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { legalEntity } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description:
    "Términos y condiciones de uso de la plataforma ZytonAI: cuenta y usuarios, planes y pago, uso aceptable, datos, integraciones y responsabilidad.",
  alternates: {
    canonical: "/terminos",
  },
};

export default function TerminosPage() {
  return (
    <LegalPage
      eyebrow="Términos y condiciones"
      title="Términos y condiciones del servicio"
    >
      <p>
        <strong>{legalEntity.razonSocial}</strong>, NIT {legalEntity.nit}, con
        domicilio en {legalEntity.direccion}, {legalEntity.ciudad}, Colombia, en
        adelante «ZytonAI». Contacto:{" "}
        <a href={`mailto:${legalEntity.email}`}>{legalEntity.email}</a>.
      </p>
      <p>
        Estos términos regulan el uso de la plataforma ZytonAI, un software de
        gestión de clientes (CRM) que se ofrece como servicio por suscripción a
        empresas y profesionales. Al registrar una empresa o usar la
        plataforma, se aceptan estos términos.
      </p>

      <h2>1. El servicio</h2>
      <p>
        ZytonAI pone a disposición de cada empresa un espacio propio, accesible
        por su subdominio, para gestionar clientes, cobros, agenda, programas de
        fidelización, automatizaciones y comunicación por WhatsApp e Instagram,
        además de integraciones opcionales con Google Calendar, Meta Ads y
        proveedores de facturación electrónica. Las funciones disponibles
        dependen del plan contratado.
      </p>

      <h2>2. Cuenta y usuarios</h2>
      <ul>
        <li>
          La empresa designa una persona gerente, que administra la cuenta,
          crea los usuarios de su equipo y asigna sus permisos. Es responsable
          de lo que hagan con ellos.
        </li>
        <li>
          Cada persona es responsable de la confidencialidad de su contraseña.
        </li>
        <li>
          La información entregada al registrarse debe ser veraz. ZytonAI puede
          suspender cuentas creadas con datos falsos.
        </li>
      </ul>

      <h2>3. Planes, pago y cancelación</h2>
      <ul>
        <li>
          La suscripción se paga por adelantado por el periodo elegido, a
          través de Wompi. Los precios vigentes se publican en la página de
          registro y pueden cambiar con aviso previo de treinta días; el cambio
          aplica desde la siguiente renovación.
        </li>
        <li>
          La empresa puede cancelar en cualquier momento. El servicio sigue
          activo hasta el final del periodo pagado; no se hacen reembolsos por
          periodos parciales.
        </li>
        <li>
          Ante falta de pago, ZytonAI puede suspender el acceso tras avisar.
          Los datos se conservan según la{" "}
          <Link href="/privacidad">política de privacidad</Link>.
        </li>
      </ul>

      <h2>4. Uso aceptable</h2>
      <p>Está prohibido usar la plataforma para:</p>
      <ul>
        <li>
          Enviar mensajes o correos a personas que no hayan dado su
          consentimiento cuando la ley o las políticas del canal lo exijan
          (spam). Los mensajes por WhatsApp se rigen además por las políticas
          de Meta; una cuenta bloqueada por Meta por mal uso es responsabilidad
          de la empresa.
        </li>
        <li>Cargar datos obtenidos sin autorización o de forma ilícita.</li>
        <li>
          Intentar acceder a datos de otras empresas o vulnerar la seguridad de
          la plataforma.
        </li>
        <li>Revender el servicio o usarlo para actividades ilegales.</li>
      </ul>

      <h2>5. Datos de la empresa</h2>
      <p>
        Los datos que cada empresa carga son suyos. ZytonAI los trata
        únicamente para prestar el servicio, como Encargado del tratamiento,
        según la <Link href="/privacidad">política de privacidad</Link>. La
        empresa es la Responsable ante sus clientes y garantiza que cuenta con
        las autorizaciones necesarias. La empresa puede exportar su información
        en cualquier momento y pedir su eliminación al terminar el servicio.
      </p>

      <h2>6. Integraciones de terceros</h2>
      <p>
        Las conexiones con Google, Meta, Wompi y proveedores de facturación se
        hacen con las credenciales y bajo los términos de cada uno de esos
        servicios. ZytonAI no responde por cambios, interrupciones, costos o
        decisiones de esos terceros (por ejemplo, el rechazo de una plantilla
        de WhatsApp o la suspensión de una cuenta publicitaria).
      </p>

      <h2>7. Comprobantes y facturación electrónica</h2>
      <p>
        Los recibos de venta que genera la plataforma son comprobantes internos
        sin validez fiscal, y así lo indican. La factura electrónica ante la
        DIAN la emite el proveedor certificado que la empresa conecte, con sus
        propias credenciales; la empresa es responsable de la información
        fiscal que registra.
      </p>

      <h2>8. Disponibilidad y soporte</h2>
      <p>
        ZytonAI procura mantener el servicio disponible de forma continua, pero
        puede haber interrupciones por mantenimiento, fallos de proveedores de
        infraestructura o causas de fuerza mayor. Se avisará con antelación de
        los mantenimientos programados. El soporte se atiende por correo en{" "}
        <a href={`mailto:${legalEntity.email}`}>{legalEntity.email}</a>.
      </p>

      <h2>9. Propiedad intelectual</h2>
      <p>
        La plataforma, su código, diseño y marca son de ZytonAI. La suscripción
        otorga una licencia de uso no exclusiva e intransferible mientras dure
        el servicio. Los logos y datos que la empresa carga siguen siendo
        suyos.
      </p>

      <h2>10. Limitación de responsabilidad</h2>
      <p>
        ZytonAI responde por la prestación diligente del servicio. No responde
        por lucro cesante ni por daños indirectos derivados del uso de la
        plataforma, ni por decisiones comerciales que la empresa tome con base
        en la información que gestiona en ella. En todo caso, la
        responsabilidad total de ZytonAI se limita al valor pagado por la
        empresa en los últimos doce meses.
      </p>

      <h2>11. Terminación</h2>
      <p>
        ZytonAI puede terminar el servicio a una empresa que incumpla estos
        términos, previo aviso salvo en casos graves (fraude, ataques, uso
        ilícito). La empresa puede terminar cuando quiera desde su cuenta o
        escribiendo a soporte.
      </p>

      <h2>12. Ley aplicable</h2>
      <p>
        Estos términos se rigen por las leyes de la República de Colombia.
        Cualquier diferencia se intentará resolver de forma directa y, en su
        defecto, ante los jueces competentes de {legalEntity.ciudad}.
      </p>

      <h2>13. Cambios</h2>
      <p>
        ZytonAI puede modificar estos términos. Los cambios se publicarán en{" "}
        <a href="https://zytonai.com/terminos">https://zytonai.com/terminos</a>{" "}
        y se comunicarán por correo con al menos quince días de antelación
        cuando sean sustanciales. Seguir usando el servicio después de esa
        fecha implica aceptarlos.
      </p>
    </LegalPage>
  );
}
