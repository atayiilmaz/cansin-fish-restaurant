import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "../../components/icons";
import { siteImages } from "../../lib/site-images";

export const metadata: Metadata = {
  title: "About",
  description: "Discover the story of Cansın Fish Restaurant beneath Galata Bridge, where Istanbul meets the sea.",
  alternates: { canonical: "/en/about", languages: { "tr-TR": "/hakkimizda", "en-US": "/en/about" } },
  openGraph: { title: "About | Cansın Fish Restaurant", description: "An Istanbul table by the water beneath Galata Bridge.", url: "/en/about", locale: "en_US", images: ["/images/hero.jpg"] },
};

export default function EnglishAboutPage() {
  return <main>
    <section className="page-hero parallax-frame"><Image data-parallax src={siteImages.hero} alt="Cansın Restaurant dining room" fill priority sizes="100vw" /><div className="page-hero-overlay" /><div className="page-hero-copy"><h1 data-hero-reveal>About</h1><p data-hero-reveal>A table watching Istanbul flow from the water.</p></div></section>
    <section className="editorial-section" data-reveal><div className="editorial-lead" data-reveal-item><h2>We bring the sound<br /><span className="accent">of the city to the table.</span></h2></div><div className="editorial-body" data-reveal-item><p>Cansın Fish Restaurant opens onto one of Istanbul’s liveliest views beneath Galata Bridge. Ferry horns, seagulls and the changing light of the Golden Horn give every hour its own atmosphere.</p><p>Our kitchen centres on daily fish, honest cooking and familiar Istanbul flavours. From fish sandwiches to generous seafood tables, freshness leads every plate.</p><p>Whether it is a quick lunch or a long dinner with friends, Cansın gives you room to slow down in the middle of the city.</p></div></section>
    <section className="split-feature" data-reveal><div className="split-image parallax-frame" data-reveal-item><Image data-parallax src={siteImages.view} alt="Cansın Restaurant beneath Galata Bridge" fill sizes="(max-width: 820px) 100vw, 58vw" /></div><div className="split-copy" data-reveal-item><h2>Close to the sea,<br />part of the city.</h2><p>The movement of Eminönü is a few steps above; the calm of the water is right beside your table.</p><Link className="button button-light" href="/en/contact">Find us <ArrowIcon /></Link></div></section>
  </main>;
}
