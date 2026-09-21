import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "../components/icons";

export const metadata: Metadata = {
  title: "İletişim ve Yol Tarifi",
  description: "Cansın Fish Restaurant adresi, telefonu, çalışma saatleri ve Google Maps yol tarifi. Galata Köprüsü altı, Eminönü, İstanbul.",
  alternates: { canonical: "/iletisim", languages: { "tr-TR": "/iletisim", "en-US": "/en/contact" } },
  openGraph: { title: "İletişim | Cansın Fish Restaurant", description: "Adres, telefon, çalışma saatleri ve yol tarifi.", url: "/iletisim", images: ["/images/view.jpg"] },
};

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-hero"><h1 data-hero-reveal>Biz buradayız.<br /><span className="accent">Siz ne zaman geliyorsunuz?</span></h1></section>
      <section className="contact-details" data-reveal>
        <div className="contact-card" data-reveal-item><span>Adres</span><p>Rüstempaşa Mahallesi<br />Ragıp Gümüşpala Caddesi<br />Yeni Galata Köprüsü Altı EB 10<br />Eminönü, İstanbul</p><a className="button button-primary" href="https://share.google/lUHmpmQRGYdhcd3Er" target="_blank" rel="noreferrer">Yol tarifi alın <ArrowIcon /></a></div>
        <div className="contact-card" data-reveal-item><span>Telefon</span><a className="contact-phone" href="tel:+902125289580">+90 212<br />528 95 80</a><a className="text-link light" href="https://www.instagram.com/cansinrestaurant/" target="_blank" rel="noreferrer">@cansinrestaurant <ArrowIcon /></a></div>
        <div className="contact-card hours" data-reveal-item><span>Çalışma saatleri</span><p><strong>Pazartesi — Cuma</strong><b>09:00 — 23:30</b></p><p><strong>Cumartesi</strong><b>09:00 — 01:00</b></p><p><strong>Pazar</strong><b>09:00 — 23:30</b></p></div>
      </section>
      <section className="map-section" aria-labelledby="map-title">
        <div className="map-heading"><h2 id="map-title">Haritada Cansın</h2><Link className="text-link" href="/">Ana sayfaya dön <ArrowIcon /></Link></div>
        <div className="map-frame"><iframe title="Cansın Fish Restaurant Google Maps konumu" src="https://www.google.com/maps?q=Cans%C4%B1n+Fish+Restaurant,+R%C3%BCstempat%C5%9Fa,+Rag%C4%B1p+G%C3%BCm%C3%BC%C5%9Fpala+Caddesi,+Galata+K%C3%B6pr%C3%BCs%C3%BC+Alt%C4%B1,+%C4%B0stanbul&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></div>
      </section>
    </main>
  );
}
