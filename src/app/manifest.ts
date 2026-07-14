import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ZytonAI",
    short_name: "ZytonAI",
    description:
      "Agencia de automatización con inteligencia artificial en Colombia.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/logo.png",
        sizes: "1254x1254",
        type: "image/png",
      },
    ],
  };
}
