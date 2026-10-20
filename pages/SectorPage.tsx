import React from "react";
import { SECTORS_DATA, SectorInfo } from "@/src/data/sectorsData";
import { SEO_DATA } from "@/src/data/seoData";
import Contact from "@/components/Contact";
import { MapPin, TrendingUp, Users, CheckCircle, ArrowRight, Phone, ShieldCheck } from "lucide-react";

export default function SectorPage({ slug }: { slug: string }) {
  const sector = SECTORS_DATA[slug] || SECTORS_DATA["conciergerie-airbnb-grenoble"];
  const seo = SEO_DATA[`/${slug}`] || SEO_DATA["/conciergerie-airbnb-grenoble"];

  return (
    <div data-header-theme="light" className="pt-28 md:pt-32 pb-16 bg-surface">
      {/* Sector Hero Header */}
      <div className="container mx-auto px-6 max-w-5xl text-left mb-16">
        <div className="flex items-center gap-2 text-accent uppercase tracking-[0.3em] text-xs font-bold mb-3">
          <MapPin className="w-4 h-4" />
          <span>Secteur Isère · {sector.postalCode}</span>
        </div>

        {/* Single H1 for the page */}
        <h1 className="text-3xl md:text-5xl font-serif text-primary mb-6 leading-tight">
          {seo.h1}
        </h1>

        <p className="text-primary/80 text-base md:text-lg font-light leading-relaxed max-w-3xl mb-8">
          {sector.description}
        </p>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-4 items-center">
          <a
            href="/#estimateur"
            className="bg-primary hover:bg-black text-white px-7 py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md"
          >
            Estimer mes revenus sur ce secteur
          </a>
          <a
            href="tel:0626290649"
            className="border border-primary/20 hover:border-accent text-primary px-6 py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-accent" />
            <span>06 26 29 06 49</span>
          </a>
        </div>
      </div>

      {/* Market Data Grid */}
      <div className="container mx-auto px-6 max-w-5xl mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {sector.marketHighlights.map((m, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-primary/10 shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-wider text-accent block mb-1">
                {m.label}
              </span>
              <p className="text-2xl font-serif text-primary">{m.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 text-left">
          <div className="bg-white p-6 rounded-2xl border border-primary/10 shadow-sm">
            <span className="text-[10px] font-bold uppercase tracking-wider text-primary/60 block mb-1">
              Tarif moyen constaté à la nuitée
            </span>
            <p className="text-xl font-bold text-accent">{sector.averageNightRate}</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-primary/10 shadow-sm">
            <span className="text-[10px] font-bold uppercase tracking-wider text-primary/60 block mb-1">
              Taux d'occupation moyen constaté
            </span>
            <p className="text-xl font-bold text-emerald-700">{sector.occupancyRate}</p>
          </div>
        </div>
      </div>

      {/* Neighborhoods and Guest Profiles */}
      <div className="container mx-auto px-6 max-w-5xl mb-20 text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-3xl border border-primary/10 shadow-sm">
            <h2 className="text-xl font-serif text-primary mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-accent" />
              <span>Quartiers & Zones Couvertes</span>
            </h2>
            <ul className="space-y-2.5 text-xs sm:text-sm text-primary/75 font-light">
              {sector.neighborhoods.map((n, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-accent font-bold mt-0.5">•</span>
                  <span>{n}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-primary/10 shadow-sm">
            <h2 className="text-xl font-serif text-primary mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-accent" />
              <span>Profils des Voyageurs Accueillis</span>
            </h2>
            <ul className="space-y-2.5 text-xs sm:text-sm text-primary/75 font-light">
              {sector.guestProfiles.map((g, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="container mx-auto px-6 max-w-5xl mb-24 text-left">
        <div className="bg-[#FAF5EC]/70 border border-accent/40 p-8 rounded-3xl space-y-4">
          <h2 className="text-xl font-serif text-primary">
            Conseils de notre équipe pour performer sur {sector.name}
          </h2>
          <div className="space-y-3 text-xs sm:text-sm text-primary/80 font-light leading-relaxed">
            {sector.tips.map((tip, i) => (
              <p key={i}>
                <strong className="font-semibold text-primary">Astuce #{i + 1} :</strong> {tip}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Other Sectors Navigation */}
      <div className="container mx-auto px-6 max-w-5xl mb-24 text-left">
        <h2 className="text-sm uppercase tracking-[0.2em] font-bold text-primary/60 mb-6">
          Découvrez nos autres secteurs en Isère
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {Object.values(SECTORS_DATA)
            .filter((s) => s.slug !== sector.slug)
            .map((other) => (
              <a
                key={other.slug}
                href={`/${other.slug}`}
                className="p-4 bg-white border border-primary/10 rounded-xl hover:border-accent hover:shadow-sm transition-all text-xs font-semibold text-primary flex items-center justify-between"
              >
                <span>{other.name}</span>
                <ArrowRight className="w-3.5 h-3.5 text-accent" />
              </a>
            ))}
        </div>
      </div>

      <Contact />
    </div>
  );
}
