import React from "react";
import { motion } from "motion/react";
import SectionFooterNav from "./SectionFooterNav";

export default function About({ isStandalonePage = false }: { isStandalonePage?: boolean }) {
  return (
    <section
      id="a-propos"
      data-header-theme="light"
      className={`py-24 bg-surface relative z-10 scroll-mt-24 md:scroll-mt-28 ${
        isStandalonePage ? "mt-0" : "rounded-t-[2.5rem] md:rounded-t-[4rem] -mt-10 md:-mt-16"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Photo moderne appartement / maison en noir et blanc */}
          <div className="lg:w-1/2 w-full order-2 lg:order-1">
            <div className="relative max-w-xl mx-auto">
              <div className="absolute -inset-3 bg-black/5 rounded-3xl transform -rotate-1 hidden sm:block" />
              <div className="relative bg-white p-2.5 sm:p-3 rounded-2xl shadow-xl border border-black/10 overflow-hidden">
                <img
                  src="/assets/a-propos.jpg"
                  alt="Intérieur moderne d'un appartement à Grenoble, en noir et blanc"
                  className="w-full h-[400px] sm:h-[480px] lg:h-[560px] object-cover object-center rounded-xl filter grayscale contrast-[1.08] transition-transform duration-700 hover:scale-[1.02]"
                  loading="lazy"
                  width="1400"
                  height="933"
                />
              </div>
            </div>
          </div>

          {/* Contenu éditorial */}
          <div className="lg:w-1/2 w-full order-1 lg:order-2 text-left">
            <span className="text-accent uppercase tracking-[0.3em] text-xs font-bold mb-3 block">
              À Propos de SHOST
            </span>

            {isStandalonePage ? (
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-8 leading-[1.18] text-[#111]">
                L'art de l'hospitalité,<br className="hidden sm:inline" /> la rigueur de la gestion
              </h1>
            ) : (
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-8 leading-[1.18] text-[#111]">
                L'art de l'hospitalité,<br className="hidden sm:inline" /> la rigueur de la gestion
              </h2>
            )}

            {/* Paragraphes aérés avec interligne généreux et largeur maîtrisée */}
            <div className="space-y-6 text-[#111] text-base leading-[1.8] font-normal max-w-2xl">
              <p>
                Vous possédez un appartement à Grenoble ou dans la métropole alpine et vous manquez de temps pour valoriser son potentiel sur les plateformes de réservation ? SHOST est votre conciergerie airbnb grenoble de confiance, dédiée à transformer votre bien immobilier en une source de revenus complémentaires, en toute simplicité et sérénité.
              </p>

              <p>
                En tant que spécialiste de la gestion locative courte durée en Isère, nous prenons en charge l'ensemble de l'expérience de location. De la création et l'optimisation de votre annonce (photos de qualité, tarification ajustée selon la demande) à la communication chaleureuse et réactive avec les voyageurs, notre équipe est attentive à chaque détail. Nous assurons un accueil soigné avec remise de clés autonome, un ménage hôtelier méticuleux et une blanchisserie professionnelle, pour que chaque séjour se passe dans les meilleures conditions.
              </p>

              <p>
                Faire appel à un gestionnaire airbnb isère d'expérience comme SHOST, c'est viser une meilleure occupation de votre bien et de bonnes évaluations voyageurs, tout en gardant la main sur votre calendrier. Que ce soit pour un studio chaleureux au centre-ville de Grenoble, un appartement contemporain près de la presqu'île, ou un bien situé au pied du massif du Vercors ou de Belledonne, nous mettons notre rigueur et notre art de l'hospitalité au service de votre sérénité logistique et financière.
              </p>

              <p className="font-medium text-black">
                Libérez-vous des contraintes quotidiennes de la location de courte durée. Ensemble, redonnons de la valeur à votre patrimoine immobilier alpin et offrons à vos voyageurs une expérience mémorable.
              </p>

              {/* Citation finale mise en valeur */}
              <div className="pt-2">
                <blockquote className="border-l-4 border-accent pl-6 py-3 my-4 bg-accent/5 rounded-r-2xl">
                  <p className="font-serif italic text-lg sm:text-xl text-[#111] font-semibold leading-relaxed">
                    « Nous traitons chaque appartement comme s'il était le nôtre. »
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="mt-8 pt-4 flex flex-col sm:flex-row gap-4">
              <a
                href="#estimateur"
                className="bg-[#111] hover:bg-black text-white px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-[0.2em] transition-all shadow-md text-center"
              >
                Estimer mes revenus
              </a>
              <a
                href="tel:0626290649"
                className="border border-black/20 hover:border-accent text-[#111] px-6 py-4 rounded-xl text-xs font-bold uppercase tracking-[0.2em] transition-all text-center flex items-center justify-center gap-2"
              >
                <span>Appeler : 06 26 29 06 49</span>
              </a>
            </div>
          </div>
        </div>

        <SectionFooterNav
          prevId="faq"
          prevLabel="Questions Fréquentes"
          nextId="contact"
          nextLabel="Contact & Estimation"
          theme="light"
        />
      </div>
    </section>
  );
}
