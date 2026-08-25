import type {MetadataRoute} from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "HSL | Lugar de aprender",
    short_name: "HSL",
    description: "Inglês, acompanhamento escolar e psicopedagogia com atendimento personalizado para crianças em Águas Claras.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#17213f",
    icons: [
      {src: "/icon-192.png", sizes: "192x192", type: "image/png"},
      {src: "/icon-512.png", sizes: "512x512", type: "image/png"},
    ],
  };
}
