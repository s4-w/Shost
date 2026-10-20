import React from "react";
import { LEGAL_DATA, LegalDocument } from "@/src/data/legalData";
import { ShieldCheck, FileText, ArrowLeft } from "lucide-react";
import { useCookies } from "@/src/context/CookieContext";

export default function LegalPage({ slug }: { slug: string }) {
  const doc = LEGAL_DATA[slug] || LEGAL_DATA["mentions-legales"];
  const { openPreferencesModal } = useCookies();

  return (
    <div data-header-theme="light" className="pt-28 md:pt-32 pb-20 bg-surface">
      <div className="container mx-auto px-6 max-w-4xl text-left">
        {/* Navigation back */}
        <div className="mb-6">
          <a href="/" className="text-xs text-primary/60 hover:text-accent flex items-center gap-1.5 font-medium">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Retour à l'accueil</span>
          </a>
        </div>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-accent uppercase tracking-[0.3em] text-xs font-bold mb-3">
            <ShieldCheck className="w-4 h-4" />
            <span>Documents Juridiques & RGPD</span>
          </div>

          {/* Single H1 */}
          <h1 className="text-3xl sm:text-4xl font-serif text-primary mb-3">
            {doc.title}
          </h1>

          <p className="text-xs text-primary/50 font-light">
            Dernière mise à jour : {doc.lastUpdated}
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-primary/10 shadow-sm space-y-10 text-primary/85 leading-relaxed font-light text-sm sm:text-base">
          {doc.sections.map((section, idx) => (
            <section key={idx} className="space-y-3">
              <h2 className="text-lg sm:text-xl font-serif font-bold text-primary">
                {section.title}
              </h2>
              {section.content.map((p, pIdx) => {
                const isPlaceholder = p.includes("[À COMPLÉTER");
                return (
                  <p
                    key={pIdx}
                    className={`leading-relaxed ${
                      isPlaceholder
                        ? "bg-amber-50 text-amber-900 border-l-2 border-amber-400 pl-3 py-1 font-medium rounded-r"
                        : ""
                    }`}
                  >
                    {p}
                  </p>
                );
              })}
            </section>
          ))}

          {slug === "politique-cookies" && (
            <div className="pt-6 border-t border-primary/10">
              <button
                type="button"
                onClick={openPreferencesModal}
                className="px-6 py-3 bg-primary hover:bg-black text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer"
              >
                Ouvrir le panneau de gestion des cookies
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
