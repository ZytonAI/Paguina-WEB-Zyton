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
const title = "ZytonAI | CRM que unifica y potencia tu negocio";
const description =
  "CRM que reúne toda la información de tu negocio en un solo lugar y se adapta a cómo ya trabajas. Con IA conversacional y canales unificados, para agencias de seguros y negocios de belleza y salud.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | ZytonAI",
  },
  description,
  applicationName: "ZytonAI",
  keywords: [
    "CRM personalizado",
    "CRM para agencias de seguros",
    "CRM para spas y clínicas dentales",
    "software de gestión de clientes Colombia",
    "IA conversacional para negocios",
    "unificación de canales de comunicación",
    "recordatorio de vencimiento de pólizas",
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
        alt: "ZytonAI — Unifica y potencia tu negocio",
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
  themeColor: "#ffffff",
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
  slogan: "Unifica y potencia tu negocio",
  sameAs: [
    "https://www.linkedin.com/company/zyton-ai/",
    "https://www.instagram.com/zytonai/",
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "CRM unificado y personalizado",
        description:
          "Toda la información del negocio en un solo lugar, con el CRM configurado alrededor de la operación de cada cliente.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "IA conversacional y unificación de canales",
        description:
          "WhatsApp, correo, formularios y redes en una sola bandeja, con IA entrenada para responder y clasificar cada conversación.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Recordatorios automáticos",
        description:
          "Avisos por vencimiento de pólizas, citas próximas y clientes sin contactar, antes de que se pierda la oportunidad.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Desarrollo personalizado de soluciones",
        description:
          "Digitalización de pólizas y fichas de clientes a partir de una foto, y soluciones diseñadas a la medida de cada operación.",
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
