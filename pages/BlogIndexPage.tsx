import React from "react";
import { BLOG_POSTS, BlogPost } from "@/src/data/blogData";
import { Clock, Calendar, ArrowRight, BookOpen } from "lucide-react";

export default function BlogIndexPage() {
  const posts = Object.values(BLOG_POSTS);

  return (
    <div data-header-theme="light" className="pt-28 md:pt-32 pb-16 bg-surface">
      <div className="container mx-auto px-6 max-w-5xl text-left mb-16">
        <span className="text-accent uppercase tracking-[0.3em] text-xs font-bold mb-3 block">
          Guides & Analyses Locatives
        </span>
        <h1 className="text-3xl md:text-5xl font-serif text-primary mb-6 leading-tight">
          Blog SHOST : Conseils & Réglementation Airbnb en Isère
        </h1>
        <p className="text-primary/75 text-base md:text-lg font-light leading-relaxed max-w-3xl">
          Retrouvez nos analyses chiffrées de rentabilité, les évolutions réglementaires à Grenoble et les meilleures pratiques pour optimiser la location courte durée de votre patrimoine.
        </p>
      </div>

      <div className="container mx-auto px-6 max-w-5xl mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-3xl border border-primary/10 overflow-hidden shadow-sm hover:shadow-xl hover:border-accent/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="p-8">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider font-bold text-accent mb-4">
                  <span>{post.category}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1 font-normal text-primary/50">
                    <Clock className="w-3 h-3" /> {post.readTime}
                  </span>
                </div>

                <h2 className="text-xl font-serif text-primary mb-3 leading-snug hover:text-accent transition-colors">
                  <a href={`/blog/${post.slug}`}>{post.title}</a>
                </h2>

                <p className="text-xs sm:text-sm text-primary/70 leading-relaxed font-light mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div className="px-8 pb-8 pt-4 border-t border-primary/5 flex items-center justify-between">
                <span className="text-[11px] text-primary/50 font-light">{post.publishedAt}</span>
                <a
                  href={`/blog/${post.slug}`}
                  className="text-xs font-bold text-primary hover:text-accent uppercase tracking-wider flex items-center gap-1 transition-colors"
                >
                  <span>Lire l'article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
