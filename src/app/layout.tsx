import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const GTM_ID = "GTM-NWGMMC8H";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.zytonai.com";
const title = "ZytonAI | Automatización con IA para negocios en Colombia";
const description =
  "Agencia de automatización con inteligencia artificial en Colombia. Ayudamos a negocios a dar seguimiento automático a cada lead, sin cambiar cómo ya trabajas.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | ZytonAI",
  },
  description,
  applicationName: "ZytonAI",
  keywords: [
    "automatización con inteligencia artificial",
    "agencia de automatización IA",
    "seguimiento automático de leads",
    "IA para negocios Colombia",
    "automatización de ventas",
    "chatbot IA para empresas",
  ],
  authors: [{ name: "ZytonAI" }],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: siteUrl,
    siteName: "ZytonAI",
    title,
    description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ZytonAI — Intelligence. Automated.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "ZytonAI",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  image: `${siteUrl}/og-image.png`,
  description,
  areaServed: {
    "@type": "Country",
    name: "Colombia",
  },
  knowsLanguage: "es",
  slogan: "Intelligence. Automated.",
  sameAs: [
    "https://www.linkedin.com/company/zyton-ai/",
    "https://www.instagram.com/zytonai/",
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Seguimiento automático de leads",
        description:
          "Respuesta instantánea a cada nuevo contacto para que ninguna oportunidad se enfríe por falta de seguimiento.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Respuestas con IA 24/7",
        description:
          "IA entrenada para responder preguntas frecuentes y calificar clientes potenciales en cualquier horario.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Integración con herramientas existentes",
        description:
          "Conexión con CRM, WhatsApp, correo y otras herramientas sin migrar ni cambiar procesos.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Reportes de automatización",
        description:
          "Visibilidad clara de qué leads están siendo atendidos y qué resultados está dando la automatización.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
