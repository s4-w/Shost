import React from "react";
import { BLOG_POSTS, BlogPost } from "@/src/data/blogData";
import { SEO_DATA } from "@/src/data/seoData";
import { Clock, Calendar, ArrowLeft, ArrowRight, Calculator, Phone } from "lucide-react";
import Contact from "@/components/Contact";

export default function BlogPostPage({ slug }: { slug: string }) {
  const post = BLOG_POSTS[slug];
  const seo = SEO_DATA[`/blog/${slug}`];

  if (!post) {
    return (
      <div className="pt-32 pb-24 container mx-auto px-6 text-center">
        <h1 className="text-3xl font-serif text-primary mb-4">Article introuvable</h1>
        <p className="text-primary/60 mb-6">L'article demandé n'existe pas ou a été déplacé.</p>
        <a href="/blog" className="text-xs uppercase tracking-wider font-bold text-accent underline">
          Retour au blog
        </a>
      </div>
    );
  }

  // Other posts for cross linking
  const otherPosts = Object.values(BLOG_POSTS).filter((p) => p.slug !== post.slug);

  // ISO dates mapping for published blog articles
  const isoDates: Record<string, string> = {
    "combien-rapporte-un-airbnb-a-grenoble": "2026-03-12T08:00:00+01:00",
    "reglementation-location-saisonniere-isere": "2026-02-24T08:00:00+01:00",
    "conciergerie-ou-gestion-solo": "2026-02-05T08:00:00+01:00",
  };

  const isoPublishedDate = isoDates[slug] || "2026-03-01T08:00:00+01:00";

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.metaDescription || post.excerpt,
    "image": "https://shost-services.com/og-image-shost-2026.jpg",
    "datePublished": isoPublishedDate,
    "dateModified": "2026-10-23T10:00:00+02:00",
    "author": {
      "@type": "Organization",
      "name": "SHOST Conciergerie",
      "url": "https://shost-services.com/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SHOST Conciergerie",
      "logo": {
        "@type": "ImageObject",
        "url": "https://shost-services.com/Logo-sans-fond.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://shost-services.com/blog/${slug}`
    },
    "inLanguage": "fr-FR",
    "articleSection": post.category
  };

  return (
    <div data-header-theme="light" className="pt-28 md:pt-32 pb-16 bg-surface">
      {/* Schema.org Article Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <div className="container mx-auto px-6 max-w-4xl text-left">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs text-primary/60">
          <a href="/blog" className="hover:text-accent flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Tous les articles</span>
          </a>
          <span>/</span>
          <span className="text-primary font-medium truncate max-w-xs">{post.category}</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-3 text-xs text-primary/60 mb-4 font-light">
            <span className="bg-accent/15 text-accent px-3 py-1 rounded-full font-bold uppercase text-[10px] tracking-wider">
              {post.category}
            </span>
            <span>Publié le {post.publishedAt}</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" /> {post.readTime}
            </span>
            <span>·</span>
            <span>Par {post.author}</span>
          </div>

          {/* Single H1 for the article page */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-primary leading-tight mb-6">
            {post.title}
          </h1>

          <p className="text-primary/80 text-lg font-light leading-relaxed border-l-2 border-accent pl-5 my-6">
            {post.excerpt}
          </p>
        </div>

        {/* Article Body */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-primary/10 shadow-sm space-y-10 text-primary/85 leading-relaxed font-light text-base">
          {post.content.map((sec, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-2xl font-serif text-primary font-bold">{sec.sectionTitle}</h2>
              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="leading-relaxed">
                  {p}
                </p>
              ))}
              {sec.callout && (
                <div className="my-6 p-6 rounded-2xl bg-[#FAF5EC]/80 border border-accent/30 font-medium text-primary text-sm">
                  {sec.callout}
                </div>
              )}
            </section>
          ))}

          {/* Inline CTA box */}
          <div className="pt-8 border-t border-primary/10 mt-12 bg-slate-50 p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <h3 className="text-lg font-serif text-primary font-bold">
                Vous souhaitez évaluer le potentiel de votre bien ?
              </h3>
              <p className="text-xs text-primary/70 font-light">
                Utilisez notre simulateur gratuit ou demandez une estimation détaillée sous 24h.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <a
                href="/#estimateur"
                className="bg-primary hover:bg-black text-white px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all"
              >
                Estimer mes revenus
              </a>
              <a
                href="tel:0626290649"
                className="border border-primary/20 hover:border-accent text-primary px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-accent" />
                <span>Appeler</span>
              </a>
            </div>
          </div>
        </div>

        {/* Other articles cross-sell */}
        <div className="my-16">
          <h2 className="text-xl font-serif text-primary mb-6">À lire également sur le blog</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {otherPosts.map((other) => (
              <a
                key={other.slug}
                href={`/blog/${other.slug}`}
                className="p-6 bg-white rounded-2xl border border-primary/10 hover:border-accent hover:shadow-md transition-all block group"
              >
                <span className="text-[10px] uppercase font-bold text-accent tracking-wider block mb-2">
                  {other.category}
                </span>
                <h3 className="text-base font-serif text-primary group-hover:text-accent transition-colors font-bold mb-2">
                  {other.title}
                </h3>
                <p className="text-xs text-primary/60 font-light line-clamp-2">
                  {other.excerpt}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>

      <Contact />
    </div>
  );
}
