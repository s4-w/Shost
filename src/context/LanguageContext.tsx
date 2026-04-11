import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Navbar
    "nav.home": "Accueil",
    "nav.services": "Services",
    "nav.estimate": "Estimation",
    "nav.advantages": "Avantages",
    "nav.process": "Processus",
    "nav.faq": "FAQ",
    "nav.about": "À propos",
    "nav.contact": "Contact",
    
    // Hero
    "hero.tagline": "Conciergerie de Luxe & Gestion Locative",
    "hero.title": "L'excellence au service de votre patrimoine",
    "hero.subtitle": "Maximisez vos revenus locatifs avec une gestion clé en main, transparente et haut de gamme.",
    "hero.cta.estimate": "Estimer mes revenus",
    "hero.cta.contact": "Nous contacter",
    
    // Services
    "services.tagline": "Nos Services",
    "services.title": "Une gestion 360° sans compromis",
    "services.marketing.title": "Marketing & Diffusion",
    "services.marketing.desc": "Photos professionnelles et diffusion sur les plateformes les plus prestigieuses.",
    "services.concierge.title": "Conciergerie 24/7",
    "services.concierge.desc": "Accueil personnalisé et assistance voyageur pour une expérience 5 étoiles.",
    "services.maintenance.title": "Entretien & Maintenance",
    "services.maintenance.desc": "Ménage hôtelier et maintenance technique pour un bien toujours impeccable.",
    
    // Estimator
    "estimator.tagline": "Simulateur de revenus",
    "estimator.title": "Estimez vos gains potentiels",
    "estimator.desc": "Découvrez en moins de 2 minutes combien votre propriété pourrait vous rapporter avec une gestion professionnelle SHOST.",
    "estimator.method": "Comprendre notre méthode",
    "estimator.step1": "Localisation",
    "estimator.step1.desc": "Ville et type de bien",
    "estimator.step2": "Caractéristiques",
    "estimator.step2.desc": "Standing et chambres",
    "estimator.step3": "Prestations",
    "estimator.step3.desc": "Équipements exclusifs",
    "estimator.city.label": "Où se situe votre bien ?",
    "estimator.city.placeholder": "Ex: Paris 8ème, Cannes, Courchevel...",
    "estimator.type.label": "Type de propriété",
    "estimator.type.apt": "Appartement",
    "estimator.type.house": "Maison",
    "estimator.type.villa": "Villa",
    "estimator.continue": "Continuer l'estimation",
    "estimator.standing.label": "Standing de la propriété",
    "estimator.standing.standard": "Standard",
    "estimator.standing.standard.desc": "Confortable et moderne",
    "estimator.standing.premium": "Premium",
    "estimator.standing.premium.desc": "Prestations haut de gamme",
    "estimator.standing.luxury": "Ultra Luxe",
    "estimator.standing.luxury.desc": "Exceptionnel, design & services",
    "estimator.rooms.label": "Nombre de chambres",
    "estimator.back": "Retour",
    "estimator.next": "Suivant",
    "estimator.amenities.label": "Équipements & Atouts",
    "estimator.calculate": "Calculer mes gains",
    "estimator.calculating": "Analyse du marché...",
    "estimator.result.label": "Estimation mensuelle brute",
    "estimator.result.annual": "Potentiel annuel",
    "estimator.result.quote": "Votre bien à {city} présente un fort potentiel. Avec notre gestion optimisée, vous pourriez atteindre ces revenus dès le premier trimestre.",
    "estimator.result.cta": "Étude gratuite complète",
    "estimator.result.reset": "Nouvelle simulation",
    
    // Modal Method
    "method.title": "Pourquoi notre estimation est fiable ?",
    "method.desc": "Notre algorithme croise les données réelles du marché locatif avec l'expertise de gestion SHOST.",
    "method.geo.title": "Analyse Géographique",
    "method.geo.desc": "Nous utilisons les prix moyens par quartier, ajustés selon la tension locative actuelle de votre ville.",
    "method.standing.title": "Coefficients de Standing",
    "method.standing.desc": "Un bien 'Ultra Luxe' ou 'Premium' génère jusqu'à 2x plus de revenus qu'un bien standard grâce à notre marketing ciblé.",
    "method.amenities.title": "Valorisation des Prestations",
    "method.amenities.desc": "Chaque équipement (piscine, vue, terrasse) est pondéré selon son impact direct sur le prix de la nuitée.",
    "method.shost.title": "Optimisation SHOST",
    "method.shost.desc": "L'estimation inclut notre stratégie de 'Dynamic Pricing' qui ajuste vos tarifs quotidiennement pour maximiser l'occupation.",
    "method.note": "Note importante",
    "method.note.desc": "Cette simulation est un indicateur de potentiel. Pour une étude contractuelle, nos experts réalisent une visite physique de votre bien.",
    "method.close": "J'ai compris",
  },
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.estimate": "Estimation",
    "nav.advantages": "Advantages",
    "nav.process": "Process",
    "nav.faq": "FAQ",
    "nav.about": "About",
    "nav.contact": "Contact",
    
    // Hero
    "hero.tagline": "Luxury Concierge & Rental Management",
    "hero.title": "Excellence at the service of your heritage",
    "hero.subtitle": "Maximize your rental income with turnkey, transparent, and high-end management.",
    "hero.cta.estimate": "Estimate my income",
    "hero.cta.contact": "Contact us",
    
    // Services
    "services.tagline": "Our Services",
    "services.title": "360° management without compromise",
    "services.marketing.title": "Marketing & Distribution",
    "services.marketing.desc": "Professional photography and distribution on the most prestigious platforms.",
    "services.concierge.title": "24/7 Concierge",
    "services.concierge.desc": "Personalized welcome and guest assistance for a 5-star experience.",
    "services.maintenance.title": "Cleaning & Maintenance",
    "services.maintenance.desc": "Hotel-standard cleaning and technical maintenance for an impeccable property.",
    
    // Estimator
    "estimator.tagline": "Income Simulator",
    "estimator.title": "Estimate your potential earnings",
    "estimator.desc": "Discover in less than 2 minutes how much your property could earn with SHOST professional management.",
    "estimator.method": "Understand our method",
    "estimator.step1": "Location",
    "estimator.step1.desc": "City and property type",
    "estimator.step2": "Features",
    "estimator.step2.desc": "Standing and rooms",
    "estimator.step3": "Amenities",
    "estimator.step3.desc": "Exclusive equipment",
    "estimator.city.label": "Where is your property located?",
    "estimator.city.placeholder": "Ex: Paris 8th, Cannes, Courchevel...",
    "estimator.type.label": "Property type",
    "estimator.type.apt": "Apartment",
    "estimator.type.house": "House",
    "estimator.type.villa": "Villa",
    "estimator.continue": "Continue estimation",
    "estimator.standing.label": "Property standing",
    "estimator.standing.standard": "Standard",
    "estimator.standing.standard.desc": "Comfortable and modern",
    "estimator.standing.premium": "Premium",
    "estimator.standing.premium.desc": "High-end features",
    "estimator.standing.luxury": "Ultra Luxury",
    "estimator.standing.luxury.desc": "Exceptional, design & services",
    "estimator.rooms.label": "Number of bedrooms",
    "estimator.back": "Back",
    "estimator.next": "Next",
    "estimator.amenities.label": "Equipment & Assets",
    "estimator.calculate": "Calculate my earnings",
    "estimator.calculating": "Market analysis...",
    "estimator.result.label": "Gross monthly estimate",
    "estimator.result.annual": "Annual potential",
    "estimator.result.quote": "Your property in {city} shows strong potential. With our optimized management, you could reach these revenues by the first quarter.",
    "estimator.result.cta": "Full free study",
    "estimator.result.reset": "New simulation",

    // Modal Method
    "method.title": "Why is our estimate reliable?",
    "method.desc": "Our algorithm crosses real rental market data with SHOST management expertise.",
    "method.geo.title": "Geographic Analysis",
    "method.geo.desc": "We use average prices per neighborhood, adjusted for the current rental demand in your city.",
    "method.standing.title": "Standing Coefficients",
    "method.standing.desc": "An 'Ultra Luxury' or 'Premium' property generates up to 2x more revenue than a standard one thanks to our targeted marketing.",
    "method.amenities.title": "Amenity Valuation",
    "method.amenities.desc": "Each feature (pool, view, terrace) is weighted according to its direct impact on the nightly rate.",
    "method.shost.title": "SHOST Optimization",
    "method.shost.desc": "The estimate includes our 'Dynamic Pricing' strategy that adjusts your rates daily to maximize occupancy.",
    "method.note": "Important note",
    "method.note.desc": "This simulation is a potential indicator. For a contractual study, our experts perform a physical visit of your property.",
    "method.close": "I understand",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['fr']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
