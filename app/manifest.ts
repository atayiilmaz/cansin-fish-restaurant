import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Cansın Fish Restaurant",
    short_name: "Cansın",
    description: "Galata Köprüsü altında taze balık ve Haliç manzarası.",
    start_url: "/",
    display: "standalone",
    background_color: "#071f24",
    theme_color: "#071f24",
    lang: "tr",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
