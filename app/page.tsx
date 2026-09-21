import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, InstagramIcon } from "./components/icons";
import { siteImages } from "./lib/site-images";

export const metadata: Metadata = { alternates: { canonical: "/" } };

const menuItems = [
  { name: "Balık Ekmek", note: "Günün balığı, çıtır ekmek ve yeşillik", image: siteImages.sandwich },
  { name: "Günün Balığı", note: "Tezgahtan seçin, dilediğiniz gibi pişirelim", image: siteImages.fish },
  { name: "Deniz Sofrası", note: "Paylaşmalık meze ve deniz ürünleri", image: siteImages.platter },
];

const gallery = [
  { src: siteImages.view, alt: "Galata Köprüsü altında Cansın Restaurant dış görünümü", wide: true },
  { src: siteImages.hero, alt: "Cansın Restaurant iç mekânı" },
  { src: siteImages.terrace, alt: "Haliç manzarasına karşı balık ekmek" },
  { src: siteImages.table, alt: "Cansın Restaurant deniz manzaralı masaları", tall: true },
  { src: siteImages.grill, alt: "Cansın Restaurant balık ekmek servisi" },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <Image className="hero-image" data-parallax src={siteImages.view} alt="Galata Köprüsü altında, denizin kıyısındaki Cansın Restaurant" fill sizes="100vw" priority />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow" data-hero-reveal>İstanbul · Eminönü</p>
          <h1 data-hero-reveal>Denizin üzerinde,<br /><span className="accent">İstanbul’un içinde.</span></h1>
          <p className="hero-intro" data-hero-reveal>Galata Köprüsü’nün altında; taze balık, sıcak ekmek ve Haliç manzarası aynı sofrada.</p>
          <div className="hero-actions" data-hero-reveal><Link className="button button-primary" href="/lezzetler">Lezzetleri keşfet <ArrowIcon /></Link><a className="button button-ghost" href="tel:+902125289580">+90 212 528 95 80</a></div>
        </div>
        <div className="hero-note" data-hero-reveal><span>Her gün</span><strong>09:00 — 23:30</strong></div>
      </section>

      <section className="story" data-reveal>
        <div className="story-aside" data-reveal-item><p>Boğazın ritmi<br />sofranın neşesi</p></div>
        <div className="story-copy" data-reveal-item><p className="eyebrow dark">Cansın’ın hikâyesi</p><h2>Köprüden geçenlerin değil,<br /><span className="accent">köprüde kalanların</span> sofrası.</h2><p>Vapur sesleri, martılar, İstanbul’un iki yakası… Cansın’da yemek yalnızca yemek değildir. Şehrin tam kalbinde, denize birkaç adım mesafede paylaşılan bir İstanbul hatırasıdır.</p><Link className="text-link" href="/hakkimizda">Hikâyemizi okuyun <ArrowIcon /></Link></div>
        <div className="story-visual parallax-frame" data-reveal-item><Image data-parallax src={siteImages.hero} alt="Cansın Restaurant iç mekânı" fill sizes="(max-width: 800px) 100vw, 38vw" /></div>
      </section>

      <section className="view-break parallax-frame" data-reveal>
        <Image data-parallax src={siteImages.terrace} alt="Haliç kıyısında Cansın balık ekmek sofrası" fill sizes="100vw" />
        <div className="view-overlay" />
        <div className="view-copy" data-reveal-item><p className="eyebrow">Masada İstanbul var</p><h2>Manzaraya karşı<br />bir lokma daha.</h2><p>Ayaklarınızın altında deniz, karşınızda şehrin asırlık silüeti.</p></div>
      </section>

      <section className="flavours" data-reveal>
        <div className="section-heading" data-reveal-item><p className="eyebrow dark">Tezgahtan sofraya</p><h2>Deniz ne verdiyse,<br /><span className="accent">usta onu güzelleştirir.</span></h2><Link className="text-link" href="/lezzetler">Tüm lezzetler <ArrowIcon /></Link></div>
        <div className="menu-grid">
          {menuItems.map((item) => <article className="menu-card" data-reveal-item key={item.name}><div className="menu-image"><Image src={item.image} alt={item.name} fill sizes="(max-width: 800px) 100vw, 33vw" /></div><div className="menu-copy"><h3>{item.name}</h3><p>{item.note}</p><span className="card-arrow"><ArrowIcon /></span></div></article>)}
        </div>
      </section>

      <section className="promise" data-reveal><div data-reveal-item><p className="eyebrow">Her gün aynı özen</p><h2>Balığın en tazesi.<br />Sohbetin en uzunu.</h2></div><p data-reveal-item>Öğlen hızlı bir balık ekmek için de, gün batımında uzun bir sofra için de yeriniz hazır. Biz ateşi yakarız, İstanbul gerisini tamamlar.</p><Link className="button button-light" href="/iletisim" data-reveal-item>Masayı sorun <ArrowIcon /></Link></section>

      <section className="gallery-section" data-reveal>
        <div className="gallery-heading" data-reveal-item><div><p className="eyebrow dark">Cansın’dan kareler</p><h2>Köprünün altında<br /><span className="accent">hayat var.</span></h2></div><a className="social-link" href="https://www.instagram.com/cansinrestaurant/" target="_blank" rel="noreferrer"><InstagramIcon /> Instagram’da takip et</a></div>
        <div className="gallery-grid">{gallery.map((image) => <figure className={`${image.wide ? "wide" : ""} ${image.tall ? "tall" : ""}`} data-reveal-item key={image.src.src}><Image src={image.src} alt={image.alt} fill sizes="(max-width: 800px) 100vw, 50vw" /></figure>)}</div>
        <div className="center-action"><Link className="button button-dark" href="/galeri">Galerinin tamamı <ArrowIcon /></Link></div>
      </section>
    </main>
  );
}
