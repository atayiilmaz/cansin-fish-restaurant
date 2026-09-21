import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import { MotionEffects } from "./components/motion-effects";
import { RouteTransition } from "./components/route-transition";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import "./globals.css";

const merriweather = Merriweather({ variable: "--font-merriweather", subsets: ["latin"], weight: ["300", "400", "700", "900"], style: "normal", display: "swap" });
const siteUrl = "https://www.cansinfishrestaurant.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Cansın Fish Restaurant",
  title: { default: "Cansın Fish Restaurant | Galata Köprüsü, Eminönü", template: "%s | Cansın Fish Restaurant" },
  description: "Galata Köprüsü altında Haliç manzarası, günlük taze balık, balık ekmek ve deniz ürünleri. Cansın Fish Restaurant iletişim, menü ve yol tarifi.",
  keywords: ["Cansın Fish Restaurant", "Eminönü balık restoranı", "Galata Köprüsü balık", "balık ekmek", "İstanbul deniz ürünleri", "Haliç manzaralı restoran"],
  authors: [{ name: "Cansın Fish Restaurant", url: siteUrl }],
  creator: "Cansın Fish Restaurant",
  publisher: "Cansın Fish Restaurant",
  category: "restaurant",
  alternates: { canonical: "/" },
  formatDetection: { telephone: true, address: true, email: false },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { title: "Cansın Fish Restaurant", description: "Denizin üzerinde, İstanbul’un içinde.", url: siteUrl, siteName: "Cansın Fish Restaurant", locale: "tr_TR", type: "website", images: [{ url: "/images/view.jpg", width: 1680, height: 1260, alt: "Galata Köprüsü altında Cansın Fish Restaurant" }] },
  twitter: { card: "summary_large_image", title: "Cansın Fish Restaurant", description: "Galata Köprüsü altında taze balık ve Haliç manzarası.", images: ["/images/view.jpg"] },
  icons: { icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }], apple: "/apple-icon.png" },
  manifest: "/manifest.webmanifest",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebSite", "@id": `${siteUrl}/#website`, url: siteUrl, name: "Cansın Fish Restaurant", inLanguage: "tr-TR" },
    { "@type": "Restaurant", "@id": `${siteUrl}/#restaurant`, name: "Cansın Fish Restaurant", image: [`${siteUrl}/images/view.jpg`, `${siteUrl}/images/food-platter.jpg`], url: siteUrl, telephone: "+90 212 528 95 80", servesCuisine: ["Türk Mutfağı", "Deniz Ürünleri", "Balık Ekmek"], priceRange: "₺₺", address: { "@type": "PostalAddress", streetAddress: "Ragıp Gümüşpala Caddesi, Yeni Galata Köprüsü Altı EB 10", addressLocality: "Eminönü", addressRegion: "İstanbul", addressCountry: "TR" }, sameAs: ["https://www.instagram.com/cansinrestaurant/", "https://share.google/lUHmpmQRGYdhcd3Er"], hasMenu: `${siteUrl}/lezzetler`, openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sunday"], opens: "09:00", closes: "23:30" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "01:00" },
    ] },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className={merriweather.variable}>
      <body>
        <SiteHeader />
        <MotionEffects />
        <RouteTransition>{children}<SiteFooter /></RouteTransition>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
