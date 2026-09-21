"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowIcon } from "./icons";
import { siteImages } from "../lib/site-images";

const MAP_URL = "https://share.google/lUHmpmQRGYdhcd3Er";
const links = [
  ["/hakkimizda", "Hakkımızda"],
  ["/lezzetler", "Lezzetler"],
  ["/galeri", "Galeri"],
  ["/iletisim", "İletişim"],
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <Link className="brand" href="/" aria-label="Cansın Restaurant ana sayfa">
          <Image src={siteImages.logo} alt="Cansın Restaurant logosu" width={100} height={100} priority />
          <span><small>Galata Köprüsü</small><strong>Cansın Restaurant</strong></span>
        </Link>
        <nav className="desktop-nav" aria-label="Ana menü">
          {links.map(([href, label]) => <Link className={pathname === href ? "active" : ""} href={href} key={href}>{label}</Link>)}
        </nav>
        <a className="header-cta" href={MAP_URL} target="_blank" rel="noreferrer">Yol tarifi <ArrowIcon /></a>
        <button className={`menu-toggle ${menuOpen ? "is-open" : ""}`} type="button" aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}><span /><span /></button>
      </header>
      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <nav>{links.map(([href, label]) => <Link href={href} key={href} onClick={() => setMenuOpen(false)}>{label}</Link>)}</nav>
        <a href={MAP_URL} target="_blank" rel="noreferrer">Yol tarifi al <ArrowIcon /></a>
      </div>
    </>
  );
}
