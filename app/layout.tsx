import type { Metadata } from "next";
import "./globals.css";
import "./logo.css";

export const metadata: Metadata = {
  title: "HSL | Lugar de aprender",
  description: "Inglês, acompanhamento escolar e psicopedagogia com atendimento personalizado para crianças em Águas Claras.",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      {url: "/favicon.ico", sizes: "64x64"},
      {url: "/icon.png", type: "image/png"},
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
