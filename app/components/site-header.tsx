"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowIcon } from "./icons";
import { siteImages } from "../lib/site-images";

const MAP_URL = "https://share.google/lUHmpmQRGYdhcd3Er";
const routes = [
  { tr: "/", en: "/en" },
  { tr: "/hakkimizda", en: "/en/about" },
  { tr: "/lezzetler", en: "/en/menu" },
  { tr: "/galeri", en: "/en/gallery" },
  { tr: "/iletisim", en: "/en/contact" },
] as const;

function languagePath(pathname: string, language: "tr" | "en") {
  const route = routes.find((item) => item.tr === pathname || item.en === pathname);
  return route?.[language] ?? (language === "en" ? "/en" : "/");
}

export function SiteHeader() {
  const pathname = usePathname();
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");
  const isLightPage = pathname === "/galeri" || pathname === "/en/gallery";
  const links = isEnglish
    ? [["/en/about", "About"], ["/en/menu", "Menu"], ["/en/gallery", "Gallery"], ["/en/contact", "Contact"]] as const
    : [["/hakkimizda", "Hakkımızda"], ["/lezzetler", "Lezzetler"], ["/galeri", "Galeri"], ["/iletisim", "İletişim"]] as const;
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

  useEffect(() => {
    document.documentElement.lang = isEnglish ? "en" : "tr";
  }, [isEnglish]);

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""} ${isLightPage ? "on-light-page" : ""}`}>
        <Link className="brand" href={isEnglish ? "/en" : "/"} aria-label={isEnglish ? "Cansın Restaurant home" : "Cansın Restaurant ana sayfa"}>
          <Image src={siteImages.logo} alt="Cansın Restaurant logosu" width={100} height={100} priority />
          <span><small>{isEnglish ? "Galata Bridge" : "Galata Köprüsü"}</small><strong>Cansın Restaurant</strong></span>
        </Link>
        <nav className="desktop-nav" aria-label={isEnglish ? "Main navigation" : "Ana menü"}>
          {links.map(([href, label]) => <Link className={pathname === href ? "active" : ""} href={href} key={href}>{label}</Link>)}
        </nav>
        <div className="header-actions">
          <div className="language-switch" aria-label={isEnglish ? "Language selection" : "Dil seçimi"}>
            <Link className={!isEnglish ? "active" : ""} href={languagePath(pathname, "tr")} hrefLang="tr">TR</Link>
            <span>/</span>
            <Link className={isEnglish ? "active" : ""} href={languagePath(pathname, "en")} hrefLang="en">EN</Link>
          </div>
          <a className="header-cta" href={MAP_URL} target="_blank" rel="noreferrer">{isEnglish ? "Directions" : "Yol tarifi"} <ArrowIcon /></a>
        </div>
        <button className={`menu-toggle ${menuOpen ? "is-open" : ""}`} type="button" aria-label={isEnglish ? (menuOpen ? "Close menu" : "Open menu") : (menuOpen ? "Menüyü kapat" : "Menüyü aç")} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}><span /><span /></button>
      </header>
      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <nav>{links.map(([href, label]) => <Link href={href} key={href} onClick={() => setMenuOpen(false)}>{label}</Link>)}</nav>
        <div className="mobile-language"><Link href={languagePath(pathname, "tr")} hrefLang="tr">Türkçe</Link><Link href={languagePath(pathname, "en")} hrefLang="en">English</Link></div>
        <a href={MAP_URL} target="_blank" rel="noreferrer">{isEnglish ? "Get directions" : "Yol tarifi al"} <ArrowIcon /></a>
      </div>
    </>
  );
}
