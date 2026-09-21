import Image from "next/image";
import Link from "next/link";
import { siteImages } from "../lib/site-images";

const INSTAGRAM_URL = "https://www.instagram.com/cansinrestaurant/";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link className="footer-brand" href="/"><Image src={siteImages.logo} alt="" width={86} height={86} /><span>Cansın<br />Restaurant</span></Link>
      <p>Galata Köprüsü’nün altında<br />İstanbul’un tam kalbinde.</p>
      <div className="footer-links"><Link href="/hakkimizda">Hakkımızda</Link><Link href="/lezzetler">Lezzetler</Link><Link href="/galeri">Galeri</Link><Link href="/iletisim">İletişim</Link><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Instagram ↗</a></div>
      <small>© {new Date().getFullYear()} Cansın Fish Restaurant</small>
    </footer>
  );
}
