import React from "react";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Contact from "@/components/Contact";

export default function ServicesPage() {
  return (
    <div data-header-theme="light" className="pt-28 md:pt-32 pb-16 bg-surface">
      <div className="container mx-auto px-6 max-w-5xl text-left mb-20 md:mb-24">
        <span className="text-black uppercase tracking-[0.25em] text-xs font-extrabold mb-3 inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent inline-block" />
          Gestion Locative Clé en Main
        </span>
        <h1 className="text-3xl md:text-5xl font-serif text-black mb-6 leading-tight font-bold">
          Services de conciergerie Airbnb à Grenoble et en Isère
        </h1>
        <p className="text-black/85 text-base md:text-lg font-normal leading-relaxed max-w-3xl">
          De la création d'annonce optimisée jusqu'au ménage hôtelier et à la tarification dynamique, SHOST orchestre chaque étape de votre location courte durée pour maximiser votre rentabilité en toute sérénité.
        </p>
      </div>

      <Services />
      <Process />
      <Contact />
    </div>
  );
}
