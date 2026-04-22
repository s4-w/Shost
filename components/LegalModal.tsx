import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "@/src/context/LanguageContext";

export type LegalType = 'mentions' | 'privacy' | 'terms' | 'cookies';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: LegalType;
}

export default function LegalModal({ isOpen, onClose, type }: LegalModalProps) {
  const { language } = useLanguage();

  const content = {
    mentions: {
      title: language === 'fr' ? 'Mentions Légales' : 'Legal Notice',
      body: language === 'fr' ? (
        <div className="space-y-6">
          <section>
            <h4 className="font-bold text-lg mb-2">1. Éditeur du site</h4>
            <p className="text-sm text-primary/70">
              Le présent site est édité par la société SHOST Conciergerie (nom fictif pour l'exemple), SAS au capital de 10 000 €, immatriculée au Registre de Commerce et des Sociétés sous le numéro [Numéro RCS].
              <br />Siège social : [Adresse du siège]
              <br />Directeur de la publication : [Nom du directeur]
            </p>
          </section>
          <section>
            <h4 className="font-bold text-lg mb-2">2. Hébergement</h4>
            <p className="text-sm text-primary/70">
              Le site est hébergé par Google Cloud Platform.
            </p>
          </section>
          <section>
            <h4 className="font-bold text-lg mb-2">3. Propriété intellectuelle</h4>
            <p className="text-sm text-primary/70">
              L'intégralité du site SHOST, notamment les textes, logos, photos et animations sont protégés par le droit d'auteur. Toute reproduction, même partielle, est strictement interdite sans autorisation préalable.
            </p>
          </section>
        </div>
      ) : (
        <div className="space-y-6">
          <section>
            <h4 className="font-bold text-lg mb-2">1. Site Publisher</h4>
            <p className="text-sm text-primary/70">
              This site is published by SHOST Conciergerie (placeholder name), a simplified joint-stock company with a capital of €10,000, registered in the Trade and Companies Register under the number [RCNumber].
              <br />Headquarters: [Address]
              <br />Publication Director: [Director Name]
            </p>
          </section>
          <section>
            <h4 className="font-bold text-lg mb-2">2. Hosting</h4>
            <p className="text-sm text-primary/70">
              The site is hosted by Google Cloud Platform.
            </p>
          </section>
          <section>
            <h4 className="font-bold text-lg mb-2">3. Intellectual Property</h4>
            <p className="text-sm text-primary/70">
              The entire SHOST site, including texts, logos, photos, and animations, is protected by copyright. Any reproduction, even partial, is strictly prohibited without prior authorization.
            </p>
          </section>
        </div>
      )
    },
    privacy: {
      title: language === 'fr' ? 'Politique de Confidentialité' : 'Privacy Policy',
      body: (
        <div className="space-y-6 text-sm text-primary/70">
          <p>{language === 'fr' ? "Nous accordons une importance capitale à la protection de vos données personnelles." : "We place paramount importance on protecting your personal data."}</p>
          <section>
            <h4 className="font-bold text-primary mb-2">{language === 'fr' ? "Données collectées" : "Data collected"}</h4>
            <p>{language === 'fr' ? "Nous collectons uniquement les données nécessaires au traitement de vos demandes d'estimations et de contacts (nom, email, ville du bien)." : "We only collect data necessary for processing your estimation and contact requests (name, email, city of property)."}</p>
          </section>
          <section>
            <h4 className="font-bold text-primary mb-2">{language === 'fr' ? "Utilisation des données" : "Use of data"}</h4>
            <p>{language === 'fr' ? "Vos données ne sont jamais vendues à des tiers et sont uniquement utilisées pour vous fournir nos services de conciergerie." : "Your data is never sold to third parties and is only used to provide our concierge services."}</p>
          </section>
        </div>
      )
    },
    terms: {
      title: language === 'fr' ? 'Conditions Générales' : 'Terms of Service',
      body: (
        <div className="space-y-6 text-sm text-primary/70">
          <p>{language === 'fr' ? "Les services de SHOST sont soumis aux présentes CGV." : "SHOST services are subject to these Terms of Service."}</p>
          <section>
            <h4 className="font-bold text-primary mb-2">{language === 'fr' ? "Prestations" : "Services"}</h4>
            <p>{language === 'fr' ? "SHOST propose des services de gestion locative courte durée (Airbnb, Booking...) incluant le marketing, la logistique et la conciergerie." : "SHOST offers short-term rental management services (Airbnb, Booking...) including marketing, logistics, and concierge."}</p>
          </section>
          <section>
            <h4 className="font-bold text-primary mb-2">{language === 'fr' ? "Tarification" : "Pricing"}</h4>
            <p>{language === 'fr' 
              ? "Notre commission est fixée à 24% TTC sur les revenus brut générés. Les frais de ménage sont facturés séparément en sus, calculés selon le temps d'intervention réel pour chaque séjour." 
              : "Our commission is set at 24% including tax on the gross income generated. Cleaning fees are billed separately as extra, calculated based on the actual intervention time for each stay."}</p>
          </section>
        </div>
      )
    },
    cookies: {
      title: language === 'fr' ? 'Gestion des Cookies' : 'Cookie Management',
      body: (
        <div className="space-y-6 text-sm text-primary/70">
          <p>{language === 'fr' ? "Ce site utilise des cookies pour améliorer votre expérience utilisateur et réaliser des statistiques de visites." : "This site uses cookies to improve your user experience and carry out visit statistics."}</p>
          <section>
            <h4 className="font-bold text-primary mb-2">{language === 'fr' ? "Qu'est-ce qu'un cookie ?" : "What is a cookie?"}</h4>
            <p>{language === 'fr' ? "Un cookie est un petit fichier texte déposé sur votre ordinateur lors de la visite d'un site." : "A cookie is a small text file placed on your computer when visiting a site."}</p>
          </section>
        </div>
      )
    }
  };

  const activeContent = content[type];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-primary/80 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-surface w-full max-w-2xl max-h-full overflow-hidden flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="p-8 border-b border-primary/5 flex items-center justify-between">
              <h3 className="text-2xl font-serif">{activeContent.title}</h3>
              <button 
                onClick={onClose}
                className="w-10 h-10 border border-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all rounded-none"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-8 md:p-12 overflow-y-auto custom-scrollbar">
              {activeContent.body}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-primary/5 bg-secondary/30 flex justify-end">
              <button 
                onClick={onClose}
                className="bg-primary text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-accent transition-colors"
              >
                {language === 'fr' ? 'Fermer' : 'Close'}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
