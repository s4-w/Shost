import React from "react";
import Fees from "@/components/Fees";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import { Check, ShieldCheck, Zap, TrendingUp, HelpCircle } from "lucide-react";

export default function TarifsPage() {
  const comparisons = [
    {
      feature: "Commission de gestion globale",
      shost: "20% TTC sur les nuitées",
      standardAgency: "25% à 30% HT + frais",
      selfManagement: "0% mais 6 à 8h / semaine"
    },
    {
      feature: "Abonnement fixe mensuel",
      shost: "0 € (Zéro frais fixes)",
      standardAgency: "50€ à 150€ / mois",
      selfManagement: "0 €"
    },
    {
      feature: "Shooting photo pro HDR",
      shost: "Inclus dans la mise en place",
      standardAgency: "En supplément (200€+)",
      selfManagement: "À votre charge (ou photos smartphone)"
    },
    {
      feature: "Ménage & Blanchisserie hôtelière",
      shost: "Facturés 100% aux voyageurs",
      standardAgency: "Parfois retenus au propriétaire",
      selfManagement: "À votre charge ou sous-traité"
    },
    {
      feature: "Tarification dynamique quotidienne",
      shost: "Algorithme continu (+28% CA)",
      standardAgency: "Révision manuelle mensuelle",
      selfManagement: "Prix fixe souvent sous-évalué"
    },
    {
      feature: "Support et accueil voyageurs",
      shost: "24/7 en moins de 15 min",
      standardAgency: "Heures de bureau (9h-18h)",
      selfManagement: "Vous-même jour et nuit"
    }
  ];

  return (
    <div data-header-theme="light" className="pt-28 md:pt-32 pb-16 bg-surface">
      <div className="container mx-auto px-6 max-w-5xl text-left mb-16">
        <span className="text-black uppercase tracking-[0.25em] text-xs font-extrabold mb-3 inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent inline-block"></span>
          Transparence & Performance
        </span>
        <h1 className="text-3xl md:text-5xl font-serif text-black mb-6 leading-tight font-bold">
          Tarifs & Commission de notre Conciergerie Airbnb
        </h1>
        <p className="text-black/85 text-base md:text-lg font-normal leading-relaxed max-w-3xl mb-8">
          Chez SHOST, pas de frais cachés ni de mauvaises surprises. Notre modèle est 100% aligné sur votre succès : nous ne gagnons de l'argent que lorsque votre appartement est loué au meilleur tarif.
        </p>
      </div>

      <Fees />

      {/* Comparison Table */}
      <div className="container mx-auto px-6 max-w-5xl my-24 text-left">
        <div className="mb-10">
          <span className="text-black uppercase tracking-[0.25em] text-xs font-extrabold mb-2 inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent inline-block"></span>
            Comparatif de Marché
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif text-black font-bold">
            Pourquoi notre modèle est le plus rentable pour vous
          </h2>
        </div>

        <div className="bg-white border border-black/15 rounded-3xl overflow-hidden shadow-md">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-black text-white text-xs uppercase tracking-wider font-bold border-b border-black">
                  <th className="py-4 px-6">Prestation / Critère</th>
                  <th className="py-4 px-6 bg-accent text-black font-extrabold text-sm">SHOST Conciergerie</th>
                  <th className="py-4 px-6">Agences traditionnelles</th>
                  <th className="py-4 px-6">Gestion autonome seul</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/10 text-xs sm:text-sm text-black">
                {comparisons.map((row, i) => (
                  <tr key={i} className="hover:bg-stone-50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-black">{row.feature}</td>
                    <td className="py-4 px-6 font-extrabold text-black bg-accent/15 border-x border-accent/30 text-sm">
                      {row.shost}
                    </td>
                    <td className="py-4 px-6 font-medium text-neutral-700">{row.standardAgency}</td>
                    <td className="py-4 px-6 font-medium text-neutral-600">{row.selfManagement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <FAQ />
      <Contact />
    </div>
  );
}
