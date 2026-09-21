import type { Metadata } from "next";
import Image from "next/image";
import { InstagramIcon } from "../../components/icons";
import { siteImages } from "../../lib/site-images";

export const metadata: Metadata = {
  title: "Gallery",
  description: "See Cansın Fish Restaurant, its Golden Horn view and fresh seafood beneath Galata Bridge.",
  alternates: { canonical: "/en/gallery", languages: { "tr-TR": "/galeri", "en-US": "/en/gallery" } },
  openGraph: { title: "Gallery | Cansın Fish Restaurant", description: "Istanbul, the restaurant and seafood from Cansın.", url: "/en/gallery", locale: "en_US", images: ["/images/view.jpg"] },
};

const images = [
  [siteImages.view, "Cansın Restaurant beneath Galata Bridge", "wide"], [siteImages.hero, "Interior of Cansın Restaurant", "tall"], [siteImages.terrace, "Fish sandwich overlooking the Golden Horn", ""], [siteImages.platter, "Cansın seafood table", ""], [siteImages.table, "Cansın tables by the water", "tall"], [siteImages.sandwich, "Cansın fish sandwich", "wide"], [siteImages.fish, "Catch of the day", ""], [siteImages.grill, "Grilled fish sandwich", ""],
] as const;

export default function EnglishGalleryPage() {
  return <main><section className="page-title"><h1 data-hero-reveal>Gallery</h1><a data-hero-reveal className="social-link" href="https://www.instagram.com/cansinrestaurant/" target="_blank" rel="noreferrer"><InstagramIcon /> Follow on Instagram</a></section><section className="gallery-page-grid" data-reveal>{images.map(([src, alt, className]) => <figure className={className} data-reveal-item key={src.src}><Image src={src} alt={alt} fill sizes="(max-width: 820px) 100vw, 50vw" /></figure>)}</section></main>;
}
