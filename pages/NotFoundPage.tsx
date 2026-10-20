import React from "react";
import { ArrowLeft, Home, Calculator, Phone } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div data-header-theme="light" className="pt-36 pb-28 bg-surface text-center">
      <div className="container mx-auto px-6 max-w-xl">
        <span className="text-accent uppercase tracking-[0.3em] text-xs font-bold mb-3 block">
          Erreur 404
        </span>
        <h1 className="text-4xl sm:text-5xl font-serif text-primary mb-6">
          Page non trouvée
        </h1>
        <p className="text-primary/70 text-base font-light mb-10 leading-relaxed">
          La page que vous recherchez n'existe pas ou a été déplacée. Retrouvez tous nos services de conciergerie Airbnb ou contactez directement notre équipe locale.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-black text-white px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md"
          >
            <Home className="w-4 h-4" />
            <span>Retour à l'accueil</span>
          </a>

          <a
            href="/#estimateur"
            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-white text-primary px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md"
          >
            <Calculator className="w-4 h-4" />
            <span>Estimer mes revenus</span>
          </a>

          <a
            href="tel:0626290649"
            className="inline-flex items-center justify-center gap-2 border border-primary/20 hover:border-accent text-primary px-5 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all"
          >
            <Phone className="w-4 h-4 text-accent" />
            <span>06 26 29 06 49</span>
          </a>
        </div>
      </div>
    </div>
  );
}
