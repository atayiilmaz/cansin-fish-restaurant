import type { Metadata } from "next";
import Image from "next/image";
import { InstagramIcon } from "../components/icons";

export const metadata: Metadata = {
  title: "Galeri",
  description: "Cansın Fish Restaurant'ın Galata Köprüsü, Haliç manzarası, iç mekânı ve deniz ürünleri galerisini inceleyin.",
  alternates: { canonical: "/galeri" },
  openGraph: { title: "Galeri | Cansın Fish Restaurant", description: "Cansın'dan İstanbul, mekân ve lezzet kareleri.", url: "/galeri", images: ["/images/view.jpg"] },
};

const images = [
  ["/images/view.jpg", "Galata Köprüsü altında Cansın Restaurant", "wide"],
  ["/images/hero.jpg", "Cansın Restaurant iç mekânı", "tall"],
  ["/images/terrace.jpg", "Haliç manzarasında balık ekmek", ""],
  ["/images/food-platter.jpg", "Cansın deniz ürünleri sofrası", ""],
  ["/images/table.jpg", "Deniz manzaralı Cansın masaları", "tall"],
  ["/images/food-sandwich.jpg", "Cansın balık ekmek", "wide"],
  ["/images/food-fish.jpg", "Günün balığı", ""],
  ["/images/food-grill.jpg", "Izgara balık ekmek servisi", ""],
] as const;

export default function GalleryPage() {
  return (
    <main>
      <section className="page-title"><p className="eyebrow dark" data-hero-reveal>Mekân · manzara · lezzet</p><h1 data-hero-reveal>Galeri</h1><a data-hero-reveal className="social-link" href="https://www.instagram.com/cansinrestaurant/" target="_blank" rel="noreferrer"><InstagramIcon /> Instagram’da takip et</a></section>
      <section className="gallery-page-grid" data-reveal>{images.map(([src, alt, className]) => <figure className={className} data-reveal-item key={src}><Image src={src} alt={alt} fill sizes="(max-width: 820px) 100vw, 50vw" /></figure>)}</section>
    </main>
  );
}
