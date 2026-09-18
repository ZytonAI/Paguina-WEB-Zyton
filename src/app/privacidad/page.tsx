import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { legalEntity } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Cómo ZytonAI recoge, usa, guarda y protege los datos personales en su plataforma CRM, conforme a la Ley 1581 de 2012 y el Decreto 1377 de 2013.",
  alternates: {
    canonical: "/privacidad",
  },
};

export default function PrivacidadPage() {
  return (
    <LegalPage
      eyebrow="Política de privacidad"
      title="Política de privacidad y tratamiento de datos personales"
    >
      <p>
        <strong>{legalEntity.razonSocial}</strong>, NIT {legalEntity.nit}, con
        domicilio en {legalEntity.direccion}, {legalEntity.ciudad}, Colombia, en
        adelante «ZytonAI». Contacto:{" "}
        <a href={`mailto:${legalEntity.email}`}>{legalEntity.email}</a>.
      </p>
      <p>
        Esta política describe cómo ZytonAI recoge, usa, guarda y protege los
        datos personales en su plataforma de gestión de clientes (CRM)
        disponible en{" "}
        <a href="https://zytonai.com">https://zytonai.com</a> y sus subdominios,
        de acuerdo con la Ley 1581 de 2012, el Decreto 1377 de 2013 y demás
        normas colombianas sobre protección de datos personales.
      </p>

      <h2>1. Dos tipos de datos, dos roles</h2>
      <p>
        <strong>Datos de las empresas usuarias y sus empleados.</strong> Cuando
        una empresa se registra y crea cuentas para su equipo, ZytonAI actúa
        como <em>Responsable del tratamiento</em>: nombre, correo, usuario, rol,
        datos de facturación del servicio y registros de uso.
      </p>
      <p>
        <strong>Datos de los clientes de cada empresa.</strong> La información
        que cada empresa carga en su CRM (sus clientes, cobros, citas,
        conversaciones, leads) pertenece a esa empresa, que es la{" "}
        <em>Responsable</em> ante sus propios clientes. ZytonAI actúa como{" "}
        <em>Encargado del tratamiento</em>: los guarda y procesa por cuenta de
        la empresa, siguiendo sus instrucciones, y no los usa para fines propios
        ni los comparte con terceros salvo lo descrito aquí. Cada empresa es
        responsable de obtener la autorización de sus clientes.
      </p>

      <h2>2. Qué datos se tratan</h2>
      <ul>
        <li>
          Identificación y contacto: nombre, documento, teléfono, correo,
          dirección.
        </li>
        <li>
          Datos comerciales: servicios contratados, cobros, pagos, citas,
          historial de atención.
        </li>
        <li>
          Mensajes de WhatsApp e Instagram que la empresa recibe y envía a
          través de su cuenta de Meta conectada.
        </li>
        <li>
          Leads: datos que una persona entrega en un formulario web o en un
          anuncio de Facebook o Instagram de la empresa (nombre, teléfono,
          correo y las respuestas del formulario).
        </li>
        <li>
          Datos técnicos: dirección IP, navegador y registros de acceso, con
          fines de seguridad.
        </li>
      </ul>
      <p>
        ZytonAI no solicita datos sensibles. Si una empresa decide guardarlos en
        casillas propias (por ejemplo, información de salud en una clínica), es
        responsable de contar con la autorización expresa que la ley exige.
      </p>

      <h2>3. Para qué se usan</h2>
      <ul>
        <li>
          Prestar el servicio: que cada empresa gestione sus clientes, cobros,
          agenda y mensajes.
        </li>
        <li>
          Enviar, por cuenta de la empresa, los mensajes y correos que ella
          configure.
        </li>
        <li>Facturar el servicio y atender soporte.</li>
        <li>
          Seguridad, prevención de fraude y cumplimiento de obligaciones
          legales.
        </li>
      </ul>
      <p>
        ZytonAI no vende datos personales ni los usa para publicidad propia.
      </p>

      <h2>4. Servicios de terceros conectados</h2>
      <p>
        Cada empresa decide qué servicios conecta. Al hacerlo, ZytonAI
        intercambia con ellos solo lo necesario para la función
        correspondiente:
      </p>
      <ul>
        <li>
          <strong>Google Calendar.</strong> Si una persona conecta su cuenta de
          Google, ZytonAI crea y actualiza en su calendario los eventos de las
          citas agendadas en el CRM (con invitados, enlace de Google Meet y
          recordatorios) y lee su correo para identificar la cuenta. No se lee
          ningún otro evento ni dato del calendario. El uso de la información
          obtenida de las APIs de Google cumple la{" "}
          <a
            href="https://developers.google.com/terms/api-services-user-data-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Política de datos de usuario de los servicios de API de Google
          </a>
          , incluidos los requisitos de uso limitado. La conexión se puede
          revocar en cualquier momento desde el CRM o desde la configuración de
          la cuenta de Google.
        </li>
        <li>
          <strong>Meta (WhatsApp Business, Instagram, Facebook).</strong> Si la
          empresa conecta su cuenta, ZytonAI recibe y envía mensajes por su
          cuenta, recibe los datos de los formularios de sus anuncios (Lead
          Ads) y lee las cifras de rendimiento de sus campañas publicitarias.
          No publica contenido ni modifica anuncios.
        </li>
        <li>
          <strong>Proveedores de facturación electrónica</strong> (Alegra,
          Siigo, Factus): si la empresa los conecta, se les envían los datos de
          la venta y del cliente necesarios para emitir la factura ante la
          DIAN.
        </li>
        <li>
          <strong>Wompi</strong> procesa los pagos de la suscripción. ZytonAI no
          guarda datos de tarjetas.
        </li>
        <li>
          <strong>Infraestructura:</strong> los datos se alojan en Supabase
          (base de datos y archivos) y servidores administrados por ZytonAI,
          con acceso restringido.
        </li>
      </ul>

      <h2>5. Seguridad</h2>
      <p>
        Los datos viajan cifrados (HTTPS). Las credenciales de servicios de
        terceros (tokens de Google, Meta y proveedores de facturación) se
        guardan cifradas y nunca se muestran de nuevo. Cada empresa solo puede
        ver sus propios datos, con controles en la base de datos y en la
        aplicación. El acceso del equipo de ZytonAI se limita a soporte y
        operación.
      </p>

      <h2>6. Conservación</h2>
      <p>
        Los datos se conservan mientras la empresa mantenga su cuenta activa y
        durante el tiempo que exija la ley para obligaciones contables y
        fiscales. Al cancelar el servicio, la empresa puede exportar su
        información; pasados 90 días se elimina de forma definitiva, salvo lo
        que la ley obligue a conservar. Ver{" "}
        <Link href="/eliminacion-de-datos">
          «Cómo pedir la eliminación de tus datos»
        </Link>
        .
      </p>

      <h2>7. Derechos de los titulares</h2>
      <p>
        Toda persona tiene derecho a conocer, actualizar, rectificar y suprimir
        sus datos, a solicitar prueba de la autorización, a ser informada sobre
        el uso que se les da, a revocar la autorización y a presentar quejas
        ante la Superintendencia de Industria y Comercio. Las solicitudes se
        atienden en{" "}
        <a href={`mailto:${legalEntity.email}`}>{legalEntity.email}</a> dentro
        de los plazos legales (consultas: diez días hábiles; reclamos: quince
        días hábiles). Si los datos pertenecen al CRM de una empresa usuaria,
        ZytonAI trasladará la solicitud a esa empresa o la atenderá según sus
        instrucciones.
      </p>

      <h2>8. Cookies y almacenamiento local</h2>
      <p>
        La plataforma guarda en el navegador únicamente lo necesario para
        mantener la sesión iniciada y recordar preferencias de pantalla. No se
        usan cookies de publicidad ni de seguimiento de terceros.
      </p>

      <h2>9. Menores de edad</h2>
      <p>
        El servicio está dirigido a empresas y personas mayores de edad. Si una
        empresa registra datos de menores (por ejemplo, un consultorio
        pediátrico), debe hacerlo con la autorización de sus representantes
        legales y respetando su interés superior.
      </p>

      <h2>10. Cambios</h2>
      <p>
        Esta política puede actualizarse. La versión vigente estará siempre en{" "}
        <a href="https://zytonai.com/privacidad">
          https://zytonai.com/privacidad
        </a>{" "}
        con su fecha de actualización. Los cambios sustanciales se comunicarán
        a las empresas usuarias por correo.
      </p>
    </LegalPage>
  );
}
