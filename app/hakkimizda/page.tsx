import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "../components/icons";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: "Cansın Fish Restaurant'ın Galata Köprüsü altındaki İstanbul ve denizle iç içe hikâyesini keşfedin.",
  alternates: { canonical: "/hakkimizda" },
  openGraph: { title: "Hakkımızda | Cansın Fish Restaurant", description: "Galata Köprüsü altında denizle iç içe bir İstanbul sofrası.", url: "/hakkimizda", images: ["/images/hero.jpg"] },
};

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero parallax-frame">
        <Image data-parallax src="/images/hero.jpg" alt="Cansın Restaurant salonu" fill priority sizes="100vw" />
        <div className="page-hero-overlay" />
        <div className="page-hero-copy"><p className="eyebrow" data-hero-reveal>Cansın Restaurant</p><h1 data-hero-reveal>Hakkımızda</h1><p data-hero-reveal>İstanbul’un akışını denizin üzerinden izleyen bir sofra.</p></div>
      </section>
      <section className="editorial-section" data-reveal>
        <div className="editorial-lead" data-reveal-item><p className="eyebrow dark">Galata Köprüsü’nde</p><h2>Şehrin sesini<br /><em>sofraya taşıyoruz.</em></h2></div>
        <div className="editorial-body" data-reveal-item><p>Cansın Fish Restaurant, Galata Köprüsü’nün altında İstanbul’un en canlı manzaralarından birine açılır. Vapur düdükleri, martı sesleri ve Haliç’in değişen ışığı günün her saatinde sofraya başka bir hava katar.</p><p>Mutfağımızın odağında günlük balık, yalın pişirme teknikleri ve tanıdık İstanbul lezzetleri var. Balık ekmekten paylaşmalık deniz sofralarına kadar her tabakta malzemenin tazeliğini öne çıkarıyoruz.</p><p>Hızlı bir öğle molası ya da dostlarla uzun bir akşam yemeği… Cansın’da amaç, şehrin ortasında acele etmeden kalabileceğiniz bir yer sunmak.</p></div>
      </section>
      <section className="split-feature" data-reveal>
        <div className="split-image parallax-frame" data-reveal-item><Image data-parallax src="/images/view.jpg" alt="Galata Köprüsü altında Cansın Restaurant" fill sizes="(max-width: 820px) 100vw, 58vw" /></div>
        <div className="split-copy" data-reveal-item><p className="eyebrow">İstanbul’un tam kalbinde</p><h2>Denize yakın,<br />şehre ait.</h2><p>Eminönü’nün hareketi birkaç basamak yukarıda; sofranızın hemen yanında ise suyun sakinliği var.</p><Link className="button button-light" href="/iletisim">Bizi bulun <ArrowIcon /></Link></div>
      </section>
    </main>
  );
}
