import type { MetadataRoute } from "next";

const baseUrl = "https://www.cansinfishrestaurant.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1, frequency: "weekly" as const, images: ["/images/view.jpg", "/images/terrace.jpg"] },
    { path: "/hakkimizda", priority: .8, frequency: "monthly" as const, images: ["/images/hero.jpg"] },
    { path: "/lezzetler", priority: .9, frequency: "weekly" as const, images: ["/images/food-platter.jpg", "/images/food-sandwich.jpg"] },
    { path: "/galeri", priority: .7, frequency: "weekly" as const, images: ["/images/view.jpg", "/images/table.jpg"] },
    { path: "/iletisim", priority: .9, frequency: "monthly" as const, images: ["/images/view.jpg"] },
    { path: "/en", priority: .9, frequency: "weekly" as const, images: ["/images/view.jpg", "/images/terrace.jpg"] },
    { path: "/en/about", priority: .7, frequency: "monthly" as const, images: ["/images/hero.jpg"] },
    { path: "/en/menu", priority: .8, frequency: "weekly" as const, images: ["/images/food-platter.jpg", "/images/food-sandwich.jpg"] },
    { path: "/en/gallery", priority: .6, frequency: "weekly" as const, images: ["/images/view.jpg", "/images/table.jpg"] },
    { path: "/en/contact", priority: .8, frequency: "monthly" as const, images: ["/images/view.jpg"] },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date("2026-09-21"),
    changeFrequency: route.frequency,
    priority: route.priority,
    images: route.images.map((image) => `${baseUrl}${image}`),
  }));
}
