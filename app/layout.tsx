import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({ variable: "--font-display", subsets: ["latin"], weight: ["400", "500", "600", "700"], style: ["normal", "italic"] });
const sans = DM_Sans({ variable: "--font-sans", subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cansinfishrestaurant.com"),
  title: "Cansın Fish Restaurant | Galata Köprüsü, Eminönü",
  description: "Galata Köprüsü'nün altında taze balık, balık ekmek ve Haliç manzarası. Cansın Fish Restaurant'a yol tarifi alın.",
  openGraph: {
    title: "Cansın Fish Restaurant",
    description: "Denizin üzerinde, İstanbul'un içinde.",
    url: "https://www.cansinfishrestaurant.com",
    siteName: "Cansın Fish Restaurant",
    locale: "tr_TR",
    type: "website",
    images: [{ url: "/images/view.jpg", width: 1680, height: 1260 }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="tr" className={`${display.variable} ${sans.variable}`}><body>{children}</body></html>;
}
