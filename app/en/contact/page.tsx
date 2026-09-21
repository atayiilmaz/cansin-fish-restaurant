import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "../../components/icons";

export const metadata: Metadata = {
  title: "Contact and Directions",
  description: "Address, telephone, opening hours and directions for Cansın Fish Restaurant beneath Galata Bridge in Istanbul.",
  alternates: { canonical: "/en/contact", languages: { "tr-TR": "/iletisim", "en-US": "/en/contact" } },
  openGraph: { title: "Contact | Cansın Fish Restaurant", description: "Address, opening hours and directions.", url: "/en/contact", locale: "en_US", images: ["/images/view.jpg"] },
};

export default function EnglishContactPage() {
  return <main className="contact-page">
    <section className="contact-hero"><h1 data-hero-reveal>We are here.<br /><span className="accent">When will you join us?</span></h1></section>
    <section className="contact-details" data-reveal><div className="contact-card" data-reveal-item><span>Address</span><p>Rüstempaşa Mahallesi<br />Ragıp Gümüşpala Caddesi<br />New Galata Bridge, Lower Level EB 10<br />Eminönü, Istanbul</p><a className="button button-primary" href="https://share.google/lUHmpmQRGYdhcd3Er" target="_blank" rel="noreferrer">Get directions <ArrowIcon /></a></div><div className="contact-card" data-reveal-item><span>Telephone</span><a className="contact-phone" href="tel:+902125289580">+90 212<br />528 95 80</a><a className="text-link light" href="https://www.instagram.com/cansinrestaurant/" target="_blank" rel="noreferrer">@cansinrestaurant <ArrowIcon /></a></div><div className="contact-card hours" data-reveal-item><span>Opening hours</span><p><strong>Monday — Friday</strong><b>09:00 — 23:30</b></p><p><strong>Saturday</strong><b>09:00 — 01:00</b></p><p><strong>Sunday</strong><b>09:00 — 23:30</b></p></div></section>
    <section className="map-section" aria-labelledby="map-title"><div className="map-heading"><h2 id="map-title">Find Cansın</h2><Link className="text-link" href="/en">Back to home <ArrowIcon /></Link></div><div className="map-frame"><iframe title="Cansın Fish Restaurant on Google Maps" src="https://www.google.com/maps?q=Cans%C4%B1n+Fish+Restaurant,+R%C3%BCstempat%C5%9Fa,+Rag%C4%B1p+G%C3%BCm%C3%BC%C5%9Fpala+Caddesi,+Galata+K%C3%B6pr%C3%BCs%C3%BC+Alt%C4%B1,+%C4%B0stanbul&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></div></section>
  </main>;
}
