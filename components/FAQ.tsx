import React from "react";
import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/src/context/LanguageContext";
import { HelpCircle, ShieldAlert, FileText, PhoneCall } from "lucide-react";
import SectionFooterNav from "./SectionFooterNav";

export default function FAQ({ isStandalonePage = false }: { isStandalonePage?: boolean }) {
  const { language } = useLanguage();

  const faqs = [
    {
      question: "Comment sont gérés les dégâts éventuels et les cautions des voyageurs ?",
      answer: "Chaque réservation est sécurisée par une empreinte bancaire obligatoire ou la garantie intégrée AirCover (couverture dommage jusqu'à 3 millions de dollars sur Airbnb). En amont, nous opérons une sélection rigoureuse des profils (pièces d'identité vérifiées, avis positifs antérieurs). Après chaque départ, notre équipe de ménage effectue un état des lieux photo systématique. En cas de dégradation constatée, nous montons et gérons le dossier de réclamation de A à Z auprès de la plateforme et de l'assurance sans frais de gestion supplémentaires pour vous."
    },
    {
      question: "Quelle est la politique en cas d'annulation de réservation ou d'imprévu ?",
      answer: "Nous paramétrons des conditions d'annulation strictes ou modérées selon la saisonnalité afin de protéger votre calendrier locatif. Si un voyageur annule, les pénalités prévues vous sont intégralement reversées déduction faite de la commission usuelle. De plus, notre tarification algorithmique réouvre instantanément les dates à un prix optimisé de dernière minute pour combler le créneau vacant."
    },
    {
      question: "Comment gérez-vous les plaintes et réclamations des voyageurs pendant le séjour ?",
      answer: "Notre équipe locale basée à Grenoble assure une conciergerie et un support réactif 24 heures sur 24 et 7 jours sur 7. Qu'il s'agisse d'une interrogation sur le fonctionnement du chauffage, d'un problème de wifi ou d'une demande de recommandation de restaurant grenoblois, nous répondons en moins de 15 minutes. En cas de souci matériel urgent (plomberie, serrure), un technicien partenaire de notre réseau intervient rapidement sur place pour préserver la satisfaction du voyageur et votre note 5 étoiles."
    },
    {
      question: "Quelle assurance protège mon bien immobilier ?",
      answer: "Votre bien bénéficie d'une triple protection : 1) La garantie AirCover d'Airbnb (dommages et responsabilité civile jusqu'à 3M$), 2) La caution bancaire exigée pour chaque séjour, et 3) Votre contrat d'assurance Propriétaire Non Occupant (PNO) avec extension villégiature, obligatoire pour tout bailleur. Nous vous accompagnons pour vérifier que votre contrat d'assurance actuel est parfaitement calibré."
    },
    {
      question: "Quelle est la réglementation pour la location courte durée à Grenoble ?",
      answer: "À Grenoble (Isère), la location de votre résidence principale est autorisée jusqu'à 120 jours par an après une simple déclaration en ligne en mairie pour obtenir un numéro d'enregistrement officiel à 13 chiffres. Pour les résidences secondaires et investissements locatifs purs, des règles de changement d'usage spécifiques s'appliquent selon les secteurs. SHOST vous guide gratuitement pour garantir la totale conformité juridique de votre dossier."
    },
    {
      question: "Dans quelles zones ou communes d'Isère intervenez-vous ?",
      answer: "Nous couvrons l'ensemble des quartiers de Grenoble (Hyper-centre, Championnet, Europole, Île Verte, Presqu'île, Grands Boulevards...) ainsi que les principales communes de l'agglomération : Meylan, Corenc, Saint-Ismier, Montbonnot, Crolles, Bernin (Vallée du Grésivaudan), Voiron, Échirolles, Saint-Martin-d'Hères, Fontaine, Seyssinet-Pariset et Vizille."
    },
    {
      question: "Qui paie les frais de ménage et blanchisserie ?",
      answer: "Les frais de ménage et de blanchisserie du linge hôtelier sont systématiquement payés par les voyageurs en sus du prix de leur nuitée. Ces frais couvrent l'intégralité de la prestation de nettoyage professionnel et l'entretien du linge de lit et de bain, sans aucune retenue sur votre trésorerie."
    },
    {
      question: "Puis-je continuer à occuper personnellement mon logement ?",
      answer: "Absolument. Vous restez 100% maître de votre logement. Il vous suffit de nous indiquer vos dates ou de bloquer votre calendrier en un clic pour vos séjours personnels, vacances en famille ou venue d'amis. Aucune contrainte de durée minimale de mise à disposition."
    },
    {
      question: "Quand et comment me sont versés mes revenus locatifs ?",
      answer: "Vos revenus locatifs sont versés chaque mois par virement bancaire direct, accompagnés d'un état récapitulatif transparent détaillant chaque séjour (dates, montants bruts, commissions, net reversé)."
    }
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section
      id="faq"
      data-header-theme="light"
      className="py-24 bg-secondary rounded-t-[2.5rem] md:rounded-t-[4rem] -mt-10 md:-mt-16 relative z-10 scroll-mt-24 md:scroll-mt-28"
    >
      {/* Schema.org FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
          {/* Left Column */}
          <div className="lg:w-1/3 text-left">
            <span className="text-accent uppercase tracking-[0.3em] text-xs font-bold mb-3 block">
              Des réponses concrètes & transparentes
            </span>
            {isStandalonePage ? (
              <h1 className="text-3xl md:text-5xl font-serif text-[#111] mb-6 leading-tight">
                Foire Aux Questions (FAQ)
              </h1>
            ) : (
              <h2 className="text-3xl md:text-5xl font-serif text-[#111] mb-6 leading-tight">
                Questions Fréquentes
              </h2>
            )}
            <p className="text-[#111] leading-relaxed text-sm font-normal mb-8">
              Vous avez des interrogations sur les assurances, la gestion des cautions, le ménage ou la réglementation grenobloise ? Retrouvez toutes les réponses ci-contre.
            </p>

            <div className="p-6 bg-white border border-black/10 rounded-2xl space-y-3">
              <div className="flex items-center gap-2 text-black text-xs font-extrabold uppercase tracking-wider">
                <PhoneCall className="w-4 h-4 text-accent" />
                <span>Une question spécifique ?</span>
              </div>
              <p className="text-xs text-[#111] font-normal leading-relaxed">
                Notre équipe est à votre écoute au téléphone pour étudier votre projet particulier.
              </p>
              <a
                href="tel:0626290649"
                className="inline-block text-xs font-bold text-[#111] hover:text-accent underline tracking-wider pt-1"
              >
                06 26 29 06 49 (Appel gratuit)
              </a>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:w-2/3">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-black/15 bg-white hover:bg-slate-50/50 px-6 sm:px-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden text-left"
                >
                  <AccordionTrigger className="text-left font-serif text-lg sm:text-xl py-6 hover:text-accent hover:no-underline transition-colors text-[#111] font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#111] leading-relaxed pb-6 text-sm sm:text-base font-normal">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        <SectionFooterNav
          prevId="processus"
          prevLabel="Processus de Gestion"
          nextId="a-propos"
          nextLabel="À Propos de SHOST"
          theme="light"
        />
      </div>
    </section>
  );
}
