"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const MAP_URL = "https://share.google/lUHmpmQRGYdhcd3Er";
const INSTAGRAM_URL = "https://www.instagram.com/cansinrestaurant/";

const menuItems = [
  { name: "Balık Ekmek", note: "Günün balığı, çıtır ekmek, yeşillik", image: "/images/food-sandwich.jpg" },
  { name: "Günün Balığı", note: "Tezgahtan seç, dilediğin gibi pişirelim", image: "/images/food-fish.jpg" },
  { name: "Deniz Sofrası", note: "Paylaşmalık meze ve deniz ürünleri", image: "/images/food-platter.jpg" },
];

const gallery = [
  { src: "/images/view.jpg", alt: "Galata Köprüsü altında Cansın Restaurant dış görünümü", wide: true },
  { src: "/images/hero.jpg", alt: "Cansın Restaurant iç mekânı" },
  { src: "/images/terrace.jpg", alt: "Haliç manzarasına karşı balık ekmek" },
  { src: "/images/table.jpg", alt: "Cansın Restaurant deniz manzaralı masaları", tall: true },
  { src: "/images/food-grill.jpg", alt: "Cansın Restaurant balık ekmek servisi" },
];

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>;
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" className="fill-dot" />
    </svg>
  );
}

export default function Home() {
  const root = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!root.current) return;
    const mm = gsap.matchMedia();
    const observers: IntersectionObserver[] = [];

    mm.add(
      { animate: "(prefers-reduced-motion: no-preference)" },
      () => {
        gsap.fromTo(
          ".hero-reveal",
          { y: 36, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 1.05, stagger: 0.12, ease: "power3.out" },
        );
        const sections = root.current!.querySelectorAll<HTMLElement>("[data-reveal]");
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              const target = entry.target as HTMLElement;
              const children = target.querySelectorAll("[data-reveal-item]");
              gsap.fromTo(
                children.length ? children : target,
                { y: 42 },
                { y: 0, duration: 0.85, stagger: 0.1, ease: "power3.out" },
              );
              observer.unobserve(target);
            });
          },
          { threshold: 0.16 },
        );
        sections.forEach((section) => observer.observe(section));
        observers.push(observer);
      },
      root.current,
    );

    return () => {
      observers.forEach((observer) => observer.disconnect());
      mm.revert();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main ref={root}>
      <header className="site-header">
        <a className="brand" href="#anasayfa" aria-label="Cansın Restaurant ana sayfa">
          <Image src="/images/cansin-logo.jpg" alt="Cansın Restaurant logosu" width={100} height={100} priority />
          <span><small>Galata Köprüsü</small><strong>Cansın Restaurant</strong></span>
        </a>
        <nav className="desktop-nav" aria-label="Ana menü">
          <a href="#hikaye">Hikâyemiz</a><a href="#lezzetler">Lezzetler</a><a href="#galeri">Galeri</a><a href="#iletisim">İletişim</a>
        </nav>
        <a className="header-cta" href={MAP_URL} target="_blank" rel="noreferrer">Yol tarifi <ArrowIcon /></a>
        <button className={`menu-toggle ${menuOpen ? "is-open" : ""}`} type="button" aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}><span /><span /></button>
      </header>

      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <nav>
          <a href="#hikaye" onClick={closeMenu}>Hikâyemiz</a><a href="#lezzetler" onClick={closeMenu}>Lezzetler</a><a href="#galeri" onClick={closeMenu}>Galeri</a><a href="#iletisim" onClick={closeMenu}>İletişim</a>
        </nav>
        <a href={MAP_URL} target="_blank" rel="noreferrer">Yol tarifi al <ArrowIcon /></a>
      </div>

      <section className="hero" id="anasayfa">
        <Image className="hero-image" src="/images/view.jpg" alt="Galata Köprüsü altında, denizin kıyısındaki Cansın Restaurant" fill sizes="100vw" priority />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow hero-reveal">İstanbul · Eminönü</p>
          <h1 className="hero-reveal">Denizin üzerinde,<br /><em>İstanbul’un içinde.</em></h1>
          <p className="hero-intro hero-reveal">Galata Köprüsü’nün altında; taze balık, sıcak ekmek ve Haliç manzarası aynı sofrada.</p>
          <div className="hero-actions hero-reveal">
            <a className="button button-primary" href="#lezzetler">Lezzetleri keşfet <ArrowIcon /></a>
            <a className="button button-ghost" href="tel:+902125289580">+90 212 528 95 80</a>
          </div>
        </div>
        <div className="hero-note hero-reveal"><span>Her gün</span><strong>09:00 — 23:30</strong></div>
        <a className="scroll-cue" href="#hikaye" aria-label="Aşağı kaydır"><span />Keşfet</a>
      </section>

      <section className="story" id="hikaye" data-reveal>
        <div className="story-kicker" data-reveal-item><span>01</span><p>Boğazın ritmi<br />sofranın neşesi</p></div>
        <div className="story-copy" data-reveal-item>
          <p className="eyebrow dark">Cansın’ın hikâyesi</p>
          <h2>Köprüden geçenlerin değil,<br /><em>köprüde kalanların</em> sofrası.</h2>
          <p>Vapur sesleri, martılar, İstanbul’un iki yakası… Cansın’da yemek yalnızca yemek değildir. Şehrin tam kalbinde, denize birkaç adım mesafede paylaşılan bir İstanbul hatırasıdır.</p>
          <a className="text-link" href="#iletisim">Bizi bulun <ArrowIcon /></a>
        </div>
        <div className="story-visual" data-reveal-item>
          <Image src="/images/hero.jpg" alt="Cansın Restaurant iç mekânı" fill sizes="(max-width: 800px) 100vw, 38vw" />
          <div className="roundel" aria-hidden="true"><span>TAZE BALIK · SICAK SOFRA · HALİÇ · </span><strong>↗</strong></div>
        </div>
      </section>

      <section className="view-break" data-reveal>
        <Image src="/images/terrace.jpg" alt="Haliç kıyısında Cansın balık ekmek sofrası" fill sizes="100vw" />
        <div className="view-overlay" />
        <div className="view-copy" data-reveal-item><p className="eyebrow">Masada İstanbul var</p><h2>Manzaraya karşı<br />bir lokma daha.</h2><p>Ayaklarınızın altında deniz, karşınızda şehrin asırlık silüeti.</p></div>
      </section>

      <section className="flavours" id="lezzetler" data-reveal>
        <div className="section-heading" data-reveal-item>
          <p className="eyebrow dark">Tezgahtan sofraya</p><h2>Deniz ne verdiyse,<br /><em>usta onu güzelleştirir.</em></h2><p>Günlük balıklar, klasik balık ekmek ve paylaşmalık deniz sofraları.</p>
        </div>
        <div className="menu-grid">
          {menuItems.map((item, index) => (
            <article className="menu-card" data-reveal-item key={item.name}>
              <div className="menu-image"><Image src={item.image} alt={item.name} fill sizes="(max-width: 800px) 100vw, 33vw" /><span>0{index + 1}</span></div>
              <div className="menu-copy"><h3>{item.name}</h3><p>{item.note}</p><span className="card-arrow"><ArrowIcon /></span></div>
            </article>
          ))}
        </div>
      </section>

      <section className="promise" data-reveal>
        <div data-reveal-item><p className="eyebrow">Her gün aynı özen</p><h2>Balığın en tazesi.<br />Sohbetin en uzunu.</h2></div>
        <p data-reveal-item>Öğlen hızlı bir balık ekmek için de, gün batımında uzun bir sofra için de yeriniz hazır. Biz ateşi yakarız, İstanbul gerisini tamamlar.</p>
        <a className="button button-light" href="tel:+902125289580" data-reveal-item>Masayı sor <ArrowIcon /></a>
      </section>

      <section className="gallery-section" id="galeri" data-reveal>
        <div className="gallery-heading" data-reveal-item>
          <span>02</span><div><p className="eyebrow dark">Cansın’dan kareler</p><h2>Köprünün altında<br /><em>hayat var.</em></h2></div>
          <a className="social-link" href={INSTAGRAM_URL} target="_blank" rel="noreferrer"><InstagramIcon /> Instagram’da takip et</a>
        </div>
        <div className="gallery-grid">
          {gallery.map((image, index) => (
            <figure className={`${image.wide ? "wide" : ""} ${image.tall ? "tall" : ""}`} data-reveal-item key={image.src}>
              <Image src={image.src} alt={image.alt} fill loading="eager" sizes="(max-width: 800px) 100vw, 50vw" /><figcaption>0{index + 1} / Cansın</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="contact" id="iletisim" data-reveal>
        <div className="contact-top" data-reveal-item><p className="eyebrow">Rotanızı denize çevirin</p><h2>Biz buradayız.<br /><em>Siz ne zaman geliyorsunuz?</em></h2></div>
        <div className="contact-grid">
          <div className="contact-block" data-reveal-item><span>Adres</span><p>Rüstempaşa Mahallesi<br />Ragıp Gümüşpala Caddesi<br />Yeni Galata Köprüsü Altı EB 10<br />Eminönü, İstanbul</p><a className="button button-primary" href={MAP_URL} target="_blank" rel="noreferrer">Yol tarifi al <ArrowIcon /></a></div>
          <div className="contact-block" data-reveal-item><span>İletişim</span><a className="contact-phone" href="tel:+902125289580">+90 212<br />528 95 80</a><a className="text-link light" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">@cansinrestaurant <ArrowIcon /></a></div>
          <div className="contact-block hours" data-reveal-item><span>Çalışma saatleri</span><p><strong>Pzt — Cum</strong><b>09:00 — 23:30</b></p><p><strong>Cumartesi</strong><b>09:00 — 01:00</b></p><p><strong>Pazar</strong><b>09:00 — 23:30</b></p></div>
        </div>
      </section>

      <footer>
        <a className="footer-brand" href="#anasayfa"><Image src="/images/cansin-logo.jpg" alt="" width={86} height={86} loading="eager" /><span>Cansın<br />Restaurant</span></a>
        <p>Galata Köprüsü’nün altında<br />İstanbul’un tam kalbinde.</p>
        <div className="footer-links"><a href="#hikaye">Hikâyemiz</a><a href="#lezzetler">Lezzetler</a><a href="#galeri">Galeri</a><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Instagram ↗</a></div>
        <small>© {new Date().getFullYear()} Cansın Fish Restaurant</small>
      </footer>
    </main>
  );
}
