import React from "react";
import { BASE_URL } from "@/src/data/seoData";
import { SECTORS_DATA } from "@/src/data/sectorsData";
import { BLOG_POSTS } from "@/src/data/blogData";

const PAGE_LABELS: Record<string, string> = {
  "/services": "Services",
  "/tarifs": "Tarifs",
  "/qui-sommes-nous": "Qui sommes-nous",
  "/blog": "Blog",
  "/mentions-legales": "Mentions légales",
  "/politique-de-confidentialite": "Politique de confidentialité",
  "/politique-cookies": "Politique cookies",
  "/cgv": "Conditions générales de vente",
};

export default function BreadcrumbSchema({ path }: { path: string }) {
  const cleanPath = path.length > 1 && path.endsWith("/") ? path.slice(0, -1) : path;

  // Do not render BreadcrumbList on home page or 404 error page
  if (cleanPath === "/" || cleanPath === "" || cleanPath === "/404") {
    return null;
  }

  const itemListElement: Array<{
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
  }> = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Accueil",
      item: `${BASE_URL}/`,
    },
  ];

  if (cleanPath.startsWith("/blog/")) {
    const slug = cleanPath.replace("/blog/", "");
    const post = BLOG_POSTS[slug];
    if (!post) return null;

    itemListElement.push(
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${BASE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${BASE_URL}/blog/${slug}`,
      }
    );
  } else if (SECTORS_DATA[cleanPath.slice(1)]) {
    const sector = SECTORS_DATA[cleanPath.slice(1)];
    itemListElement.push({
      "@type": "ListItem",
      position: 2,
      name: sector.name,
      item: `${BASE_URL}${cleanPath}`,
    });
  } else if (PAGE_LABELS[cleanPath]) {
    itemListElement.push({
      "@type": "ListItem",
      position: 2,
      name: PAGE_LABELS[cleanPath],
      item: `${BASE_URL}${cleanPath}`,
    });
  } else {
    // Unknown route (rendered as NotFoundPage) -> no BreadcrumbList
    return null;
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
    />
  );
}
