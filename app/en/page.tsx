import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, InstagramIcon } from "../components/icons";
import { siteImages } from "../lib/site-images";

export const metadata: Metadata = {
  title: "Fish Restaurant on Galata Bridge",
  description: "Fresh fish, fish sandwiches and a Golden Horn view beneath Galata Bridge in Eminönü, Istanbul.",
  alternates: { canonical: "/en", languages: { "tr-TR": "/", "en-US": "/en" } },
  openGraph: { title: "Cansın Fish Restaurant | Istanbul", description: "On the water, in the heart of Istanbul.", url: "/en", locale: "en_US", images: ["/images/view.jpg"] },
};

const menuItems = [
  { name: "Fish Sandwich", note: "Fresh fish, crisp bread and greens", image: siteImages.sandwich },
  { name: "Catch of the Day", note: "Choose from the counter, cooked to your taste", image: siteImages.fish },
  { name: "Seafood Table", note: "Meze and seafood made for sharing", image: siteImages.platter },
];

const gallery = [
  { src: siteImages.view, alt: "Cansın Restaurant beneath Galata Bridge", wide: true },
  { src: siteImages.hero, alt: "Interior of Cansın Restaurant" },
  { src: siteImages.terrace, alt: "Fish sandwich overlooking the Golden Horn" },
  { src: siteImages.table, alt: "Waterfront tables at Cansın Restaurant", tall: true },
  { src: siteImages.grill, alt: "Grilled fish sandwich at Cansın Restaurant" },
];

export default function EnglishHome() {
  return (
    <main>
      <section className="hero">
        <Image className="hero-image" data-parallax src={siteImages.view} alt="Cansın Restaurant by the water beneath Galata Bridge" fill sizes="100vw" priority />
        <div className="hero-shade" />
        <div className="hero-copy">
          <h1 data-hero-reveal>On the water,<br /><span className="accent">in the heart of Istanbul.</span></h1>
          <p className="hero-intro" data-hero-reveal>Beneath Galata Bridge, fresh fish, warm bread and the Golden Horn meet at one table.</p>
          <div className="hero-actions" data-hero-reveal><Link className="button button-primary" href="/en/menu">Explore the menu <ArrowIcon /></Link><a className="button button-ghost" href="tel:+902125289580">+90 212 528 95 80</a></div>
        </div>
        <div className="hero-note" data-hero-reveal><span>Every day</span><strong>09:00 — 23:30</strong></div>
      </section>

      <section className="story" data-reveal>
        <div className="story-aside" data-reveal-item><p>The rhythm of the Bosphorus<br />the joy of the table</p></div>
        <div className="story-copy" data-reveal-item><h2>A table for those who<br /><span className="accent">stay on the bridge.</span></h2><p>Ferry horns, seagulls and both shores of Istanbul… At Cansın, a meal is more than a meal. It is an Istanbul memory shared just steps from the water.</p><Link className="text-link" href="/en/about">Read our story <ArrowIcon /></Link></div>
        <div className="story-visual parallax-frame" data-reveal-item><Image data-parallax src={siteImages.hero} alt="Interior of Cansın Restaurant" fill sizes="(max-width: 800px) 100vw, 38vw" /></div>
      </section>

      <section className="view-break parallax-frame" data-reveal>
        <Image data-parallax src={siteImages.terrace} alt="A seafood table by the Golden Horn" fill sizes="100vw" />
        <div className="view-overlay" />
        <div className="view-copy" data-reveal-item><h2>One more bite<br />with this view.</h2><p>The sea below, Istanbul’s centuries-old skyline ahead.</p></div>
      </section>

      <section className="flavours" data-reveal>
        <div className="section-heading" data-reveal-item><h2>What the sea offers,<br /><span className="accent">our cooks refine.</span></h2><Link className="text-link" href="/en/menu">View the menu <ArrowIcon /></Link></div>
        <div className="menu-grid">{menuItems.map((item) => <article className="menu-card" data-reveal-item key={item.name}><div className="menu-image"><Image src={item.image} alt={item.name} fill sizes="(max-width: 800px) 100vw, 33vw" /></div><div className="menu-copy"><h3>{item.name}</h3><p>{item.note}</p><span className="card-arrow"><ArrowIcon /></span></div></article>)}</div>
      </section>

      <section className="promise" data-reveal><div data-reveal-item><h2>The freshest fish.<br />The longest conversations.</h2></div><p data-reveal-item>Come for a quick fish sandwich at noon or settle in for dinner at sunset. We light the fire; Istanbul completes the scene.</p><Link className="button button-light" href="/en/contact" data-reveal-item>Ask for a table <ArrowIcon /></Link></section>

      <section className="gallery-section" data-reveal>
        <div className="gallery-heading" data-reveal-item><div><h2>Life beneath<br /><span className="accent">the bridge.</span></h2></div><a className="social-link" href="https://www.instagram.com/cansinrestaurant/" target="_blank" rel="noreferrer"><InstagramIcon /> Follow on Instagram</a></div>
        <div className="gallery-grid">{gallery.map((image) => <figure className={`${image.wide ? "wide" : ""} ${image.tall ? "tall" : ""}`} data-reveal-item key={image.src.src}><Image src={image.src} alt={image.alt} fill sizes="(max-width: 800px) 100vw, 50vw" /></figure>)}</div>
        <div className="center-action"><Link className="button button-dark" href="/en/gallery">View the gallery <ArrowIcon /></Link></div>
      </section>
    </main>
  );
}
