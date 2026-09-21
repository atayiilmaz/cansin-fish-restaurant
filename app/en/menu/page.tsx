import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "../../components/icons";
import { siteImages } from "../../lib/site-images";

export const metadata: Metadata = {
  title: "Menu",
  description: "Explore fish sandwiches, fresh daily fish, grilled dishes and seafood at Cansın Fish Restaurant.",
  alternates: { canonical: "/en/menu", languages: { "tr-TR": "/lezzetler", "en-US": "/en/menu" } },
  openGraph: { title: "Menu | Cansın Fish Restaurant", description: "Daily fish, fish sandwiches and seafood in Istanbul.", url: "/en/menu", locale: "en_US", images: ["/images/food-platter.jpg"] },
};

const dishes = [
  { name: "Fish Sandwich", text: "Freshly grilled fish, crisp bread and seasonal greens: an Istanbul classic.", image: siteImages.sandwich },
  { name: "Catch of the Day", text: "Seasonal fish chosen each day and cooked simply to preserve its flavour.", image: siteImages.fish },
  { name: "Seafood Table", text: "Fish, seafood, meze and fresh salads prepared for sharing with friends.", image: siteImages.platter },
  { name: "From the Grill", text: "Generous plates cooked with care over the fire and served hot.", image: siteImages.grill },
];

export default function EnglishMenuPage() {
  return <main>
    <section className="page-hero page-hero-short parallax-frame"><Image data-parallax src={siteImages.platter} alt="Seafood table at Cansın Restaurant" fill priority sizes="100vw" /><div className="page-hero-overlay" /><div className="page-hero-copy"><h1 data-hero-reveal>Menu</h1><p data-hero-reveal>Fresh fish, a well-tended fire and the flavours Istanbul knows.</p></div></section>
    <section className="dish-list" data-reveal><div className="dish-intro" data-reveal-item><h2>From the sea,<br /><span className="accent">prepared with care.</span></h2><p>Our selection changes with the season and the day’s catch. Ask our team what is available today.</p></div><div className="dish-grid">{dishes.map((dish) => <article className="dish-card" data-reveal-item key={dish.name}><div className="dish-image"><Image src={dish.image} alt={dish.name} fill sizes="(max-width: 820px) 100vw, 50vw" /></div><div><h2>{dish.name}</h2><p>{dish.text}</p></div></article>)}</div></section>
    <section className="page-cta"><h2>Let’s choose today’s<br />fish together.</h2><Link className="button button-light" href="/en/contact">Contact us <ArrowIcon /></Link></section>
  </main>;
}
