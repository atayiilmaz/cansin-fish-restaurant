import type { Metadata } from "next";
import Image from "next/image";
import { InstagramIcon } from "../components/icons";
import { siteImages } from "../lib/site-images";

export const metadata: Metadata = {
  title: "Galeri",
  description: "Cansın Fish Restaurant'ın Galata Köprüsü, Haliç manzarası, iç mekânı ve deniz ürünleri galerisini inceleyin.",
  alternates: { canonical: "/galeri", languages: { "tr-TR": "/galeri", "en-US": "/en/gallery" } },
  openGraph: { title: "Galeri | Cansın Fish Restaurant", description: "Cansın'dan İstanbul, mekân ve lezzet kareleri.", url: "/galeri", images: ["/images/view.jpg"] },
};

const images = [
  [siteImages.view, "Galata Köprüsü altında Cansın Restaurant", "wide"],
  [siteImages.hero, "Cansın Restaurant iç mekânı", "tall"],
  [siteImages.terrace, "Haliç manzarasında balık ekmek", ""],
  [siteImages.platter, "Cansın deniz ürünleri sofrası", ""],
  [siteImages.table, "Deniz manzaralı Cansın masaları", "tall"],
  [siteImages.sandwich, "Cansın balık ekmek", "wide"],
  [siteImages.fish, "Günün balığı", ""],
  [siteImages.grill, "Izgara balık ekmek servisi", ""],
] as const;

export default function GalleryPage() {
  return (
    <main>
      <section className="page-title"><h1 data-hero-reveal>Galeri</h1><a data-hero-reveal className="social-link" href="https://www.instagram.com/cansinrestaurant/" target="_blank" rel="noreferrer"><InstagramIcon /> Instagram’da takip et</a></section>
      <section className="gallery-page-grid" data-reveal>{images.map(([src, alt, className]) => <figure className={className} data-reveal-item key={src.src}><Image src={src} alt={alt} fill sizes="(max-width: 820px) 100vw, 50vw" /></figure>)}</section>
    </main>
  );
}
