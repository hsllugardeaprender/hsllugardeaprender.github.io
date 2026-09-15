import type { Metadata } from "next";
import "./globals.css";
import "./logo.css";

const siteUrl = "https://hslbsb.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "HSL Escola de Inglês e Reforço | Águas Claras, Brasília",
  description: "HSL English School em Águas Claras, Brasília: inglês para crianças e adolescentes, reforço escolar e psicopedagogia. Inglês online individual para adultos.",
  keywords: ["HSL", "HSL escola", "HSL Brasília", "HSL Águas Claras", "escola de inglês Águas Claras", "inglês Brasília", "reforço escolar Águas Claras", "psicopedagogia Águas Claras", "inglês online para adultos"],
  authors: [{name: "HSL English School"}],
  creator: "HSL English School",
  publisher: "HSL English School",
  alternates: {canonical: "/"},
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1},
  },
  icons: {
    icon: [{url: "/logo-hsl-header.png", type: "image/png"}],
    shortcut: "/logo-hsl-header.png",
    apple: "/logo-hsl-header.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "HSL English School",
    title: "HSL Escola de Inglês e Reforço | Águas Claras, Brasília",
    description: "Inglês, reforço escolar e psicopedagogia em Águas Claras. Inglês online individual para adultos.",
    images: [{url: "/logo-hsl-header.png", width: 490, height: 481, alt: "Logo da HSL English School"}],
  },
  twitter: {
    card: "summary",
    title: "HSL Escola de Inglês e Reforço | Águas Claras, Brasília",
    description: "Inglês, reforço escolar e psicopedagogia em Águas Claras. Inglês online individual para adultos.",
    images: ["/logo-hsl-header.png"],
  },
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    "@id": `${siteUrl}/#organization`,
    name: "HSL English School",
    alternateName: ["HSL", "HSL Escola", "Home Sweet Learning"],
    description: "Escola de inglês, reforço escolar e psicopedagogia em Águas Claras, Brasília, com aulas online individuais de inglês para adultos.",
    url: siteUrl,
    logo: `${siteUrl}/logo-hsl-header.png`,
    image: `${siteUrl}/logo-hsl-header.png`,
    telephone: "+55 61 99978-3314",
    email: "homesweetlearningbr@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Babaçu, lote 21, sala 406",
      addressLocality: "Águas Claras",
      addressRegion: "DF",
      addressCountry: "BR",
    },
    areaServed: [
      {"@type": "City", name: "Brasília"},
      {"@type": "Place", name: "Águas Claras, Distrito Federal"},
    ],
    knowsAbout: ["Ensino de inglês", "Reforço escolar", "Acompanhamento escolar", "Psicopedagogia", "Inglês online para adultos"],
    makesOffer: [
      {"@type": "Offer", itemOffered: {"@type": "Service", name: "Aulas de inglês para crianças e adolescentes"}},
      {"@type": "Offer", itemOffered: {"@type": "Service", name: "Aulas online individuais de inglês para adultos"}},
      {"@type": "Offer", itemOffered: {"@type": "Service", name: "Acompanhamento e reforço escolar"}},
      {"@type": "Offer", itemOffered: {"@type": "Service", name: "Psicopedagogia"}},
    ],
  };
  return <html lang="pt-BR"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organizationSchema)}}/></body></html>;
}
