import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "../components/icons";
import { siteImages } from "../lib/site-images";

export const metadata: Metadata = {
  title: "Lezzetler",
  description: "Cansın Fish Restaurant balık ekmek, günlük taze balık ve paylaşmalık deniz ürünleri seçeneklerini keşfedin.",
  alternates: { canonical: "/lezzetler" },
  openGraph: { title: "Lezzetler | Cansın Fish Restaurant", description: "Günlük balık, balık ekmek ve deniz ürünleri.", url: "/lezzetler", images: ["/images/food-platter.jpg"] },
};

const dishes = [
  { name: "Balık Ekmek", text: "Izgaradan sıcak çıkan balık, çıtır ekmek ve taze yeşilliklerle İstanbul klasiği.", image: siteImages.sandwich },
  { name: "Günün Balığı", text: "Mevsime ve günlük tedariğe göre seçilen balıklar, lezzetini koruyan yalın pişirme teknikleriyle.", image: siteImages.fish },
  { name: "Deniz Sofrası", text: "Dostlarla paylaşmak için balık, deniz ürünleri, mezeler ve taze salatalardan oluşan geniş sofralar.", image: siteImages.platter },
  { name: "Izgara Lezzetleri", text: "Ateşin başında ustalıkla pişirilen, sıcak ve doyurucu tabaklar.", image: siteImages.grill },
];

export default function FlavoursPage() {
  return (
    <main>
      <section className="page-hero page-hero-short parallax-frame"><Image data-parallax src={siteImages.platter} alt="Cansın Restaurant deniz ürünleri sofrası" fill priority sizes="100vw" /><div className="page-hero-overlay" /><div className="page-hero-copy"><p className="eyebrow" data-hero-reveal>Tezgahtan sofraya</p><h1 data-hero-reveal>Lezzetler</h1><p data-hero-reveal>Balığın tazesi, ateşin kararı ve İstanbul’un bildiği tatlar.</p></div></section>
      <section className="dish-list" data-reveal>
        <div className="dish-intro" data-reveal-item><p className="eyebrow dark">Menümüzden</p><h2>Denizin verdiğini<br /><span className="accent">özenle hazırlıyoruz.</span></h2><p>Ürün seçimi mevsime ve günlük tedariğe göre değişebilir. Günün seçeneklerini ekibimize sorabilirsiniz.</p></div>
        <div className="dish-grid">{dishes.map((dish) => <article className="dish-card" data-reveal-item key={dish.name}><div className="dish-image"><Image src={dish.image} alt={dish.name} fill sizes="(max-width: 820px) 100vw, 50vw" /></div><div><h2>{dish.name}</h2><p>{dish.text}</p></div></article>)}</div>
      </section>
      <section className="page-cta"><h2>Bugünün balığını<br />birlikte seçelim.</h2><Link className="button button-light" href="/iletisim">İletişime geçin <ArrowIcon /></Link></section>
    </main>
  );
}
