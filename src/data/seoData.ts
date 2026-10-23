export interface SeoPageMeta {
  path: string;
  title: string; // <= 60 chars
  description: string; // <= 155 chars
  canonical: string;
  h1: string;
  keywords?: string[];
  type?: "website" | "article";
}

export const BASE_URL = "https://shost-services.com";

export const SEO_DATA: Record<string, SeoPageMeta> = {
  "/": {
    path: "/",
    title: "Conciergerie Airbnb Grenoble | SHOST Gestion Locative",
    description: "Conciergerie Airbnb Grenoble : gestion complète de votre logement, ménage hôtelier et accueil 24/7. Estimez vos revenus locatifs gratuitement en 2 minutes !",
    canonical: `${BASE_URL}/`,
    h1: "Conciergerie Airbnb à Grenoble : maximisez vos revenus locatifs",
    type: "website"
  },
  "/services": {
    path: "/services",
    title: "Services Conciergerie Airbnb Grenoble | SHOST",
    description: "Découvrez les services SHOST à Grenoble : création d'annonces, ménage hôtelier, accueil 24/7, blanchisserie et optimisation dynamique des prix.",
    canonical: `${BASE_URL}/services`,
    h1: "Nos Services de Conciergerie & Gestion Complète à Grenoble",
    type: "website"
  },
  "/tarifs": {
    path: "/tarifs",
    title: "Tarifs & Commission Conciergerie Grenoble | SHOST",
    description: "Commission transparente de 20% TTC sur les nuitées, sans frais cachés ni abonnement. Ménage facturé aux voyageurs. Rentabilité maximale garantie.",
    canonical: `${BASE_URL}/tarifs`,
    h1: "Tarifs & Commission de notre Conciergerie Airbnb",
    type: "website"
  },
  "/qui-sommes-nous": {
    path: "/qui-sommes-nous",
    title: "Qui Sommes-Nous ? Conciergerie SHOST Grenoble",
    description: "L'équipe locale SHOST à Grenoble. Experts en gestion locative courte durée, passionnés par l'hospitalité alpine et la valorisation de votre bien immobilier.",
    canonical: `${BASE_URL}/qui-sommes-nous`,
    h1: "Qui Sommes-Nous ? L'Excellence Alpine par SHOST",
    type: "website"
  },
  "/conciergerie-airbnb-grenoble": {
    path: "/conciergerie-airbnb-grenoble",
    title: "Conciergerie Airbnb Grenoble | Gestion Locative 38",
    description: "Votre conciergerie Airbnb à Grenoble (Hyper-centre, Europole, Championnet). Gestion clé en main et revenus locatifs boostés de +28% en moyenne.",
    canonical: `${BASE_URL}/conciergerie-airbnb-grenoble`,
    h1: "Conciergerie Airbnb à Grenoble : Hyper-Centre, Europole & Presqu'île",
    type: "website"
  },
  "/secteur-voiron": {
    path: "/secteur-voiron",
    title: "Conciergerie Airbnb Voiron | Gestion Locative SHOST",
    description: "Gestion Airbnb complète à Voiron et Pays Voironnais. Accueil des voyageurs, ménage, blanchisserie et optimisation des revenus locatifs de votre bien.",
    canonical: `${BASE_URL}/secteur-voiron`,
    h1: "Conciergerie Airbnb à Voiron & dans le Pays Voironnais",
    type: "website"
  },
  "/secteur-echirolles": {
    path: "/secteur-echirolles",
    title: "Conciergerie Airbnb Échirolles | Gestion SHOST",
    description: "Conciergerie pour meublés de tourisme à Échirolles et sud grenoblois. Prise en charge 360° pour propriétaires et investisseurs. Estimation sans engagement.",
    canonical: `${BASE_URL}/secteur-echirolles`,
    h1: "Conciergerie Airbnb à Échirolles & Agglomération Sud",
    type: "website"
  },
  "/secteur-meylan": {
    path: "/secteur-meylan",
    title: "Conciergerie Airbnb Meylan & Inovallée | SHOST",
    description: "Conciergerie de standing à Meylan et Grésivaudan. Clientèle d'affaires Inovallée et touristes alpins. Gestion haut de gamme et rentabilité maximale.",
    canonical: `${BASE_URL}/secteur-meylan`,
    h1: "Conciergerie Airbnb à Meylan, Inovallée & Grésivaudan",
    type: "website"
  },
  "/secteur-saint-martin-d-heres": {
    path: "/secteur-saint-martin-d-heres",
    title: "Conciergerie Airbnb Saint-Martin-d'Hères | SHOST",
    description: "Gestion locative courte durée à Saint-Martin-d'Hères et campus universitaire. Accueil soigné, ménage rigoureux et suivi des réservations 24h/24.",
    canonical: `${BASE_URL}/secteur-saint-martin-d-heres`,
    h1: "Conciergerie Airbnb à Saint-Martin-d'Hères & Campus",
    type: "website"
  },
  "/secteur-gresivaudan": {
    path: "/secteur-gresivaudan",
    title: "Conciergerie Airbnb Grésivaudan | Gestion SHOST",
    description: "Gestion locative de prestige dans la vallée du Grésivaudan (Corenc, Saint-Ismier, Crolles, Montbonnot). Service d'exception pour propriétés haut de gamme.",
    canonical: `${BASE_URL}/secteur-gresivaudan`,
    h1: "Conciergerie Airbnb dans la Vallée du Grésivaudan",
    type: "website"
  },
  "/blog": {
    path: "/blog",
    title: "Blog Gestion Locative & Airbnb Grenoble | SHOST",
    description: "Guides pratiques, analyses de rentabilité et réglementation de la location saisonnière à Grenoble et en Isère. Conseils d'experts conciergerie.",
    canonical: `${BASE_URL}/blog`,
    h1: "Blog SHOST : Conseils & Réglementation Airbnb en Isère",
    type: "website"
  },
  "/blog/combien-rapporte-un-airbnb-a-grenoble": {
    path: "/blog/combien-rapporte-un-airbnb-a-grenoble",
    title: "Combien Rapporte un Airbnb à Grenoble en 2026 ?",
    description: "Chiffres clés, loyers réels, taux d'occupation et simulation de rentabilité pour un meublé touristique à Grenoble selon la localisation et le standing.",
    canonical: `${BASE_URL}/blog/combien-rapporte-un-airbnb-a-grenoble`,
    h1: "Combien Rapporte Réellement un Airbnb à Grenoble en 2026 ?",
    type: "article"
  },
  "/blog/reglementation-location-saisonniere-isere": {
    path: "/blog/reglementation-location-saisonniere-isere",
    title: "Réglementation Location Saisonnière Isère & Grenoble",
    description: "Règles 2026 pour louer sur Airbnb à Grenoble et en Isère : déclaration en mairie, plafond 120 jours, numéro d'enregistrement et taxe de séjour.",
    canonical: `${BASE_URL}/blog/reglementation-location-saisonniere-isere`,
    h1: "Réglementation Airbnb à Grenoble & en Isère : Le Guide 2026",
    type: "article"
  },
  "/blog/conciergerie-ou-gestion-solo": {
    path: "/blog/conciergerie-ou-gestion-solo",
    title: "Conciergerie ou Gestion Solo Airbnb ? Comparatif",
    description: "Faut-il gérer seul son Airbnb ou faire appel à une conciergerie à Grenoble ? Comparatif détaillé du temps passé, des revenus nets et de la tranquillité.",
    canonical: `${BASE_URL}/blog/conciergerie-ou-gestion-solo`,
    h1: "Conciergerie Airbnb vs Gestion en Solo : Le Vrai Comparatif",
    type: "article"
  },
  "/mentions-legales": {
    path: "/mentions-legales",
    title: "Mentions Légales | SHOST Conciergerie Grenoble",
    description: "Consultez les mentions légales du site de conciergerie SHOST : éditeur, hébergeur, propriété intellectuelle et responsabilités juridiques.",
    canonical: `${BASE_URL}/mentions-legales`,
    h1: "Mentions Légales - SHOST Conciergerie",
    type: "website"
  },
  "/politique-de-confidentialite": {
    path: "/politique-de-confidentialite",
    title: "Politique de Confidentialité RGPD | SHOST",
    description: "Politique de confidentialité et protection des données personnelles (RGPD) du site SHOST Conciergerie à Grenoble. Vos droits et notre engagement.",
    canonical: `${BASE_URL}/politique-de-confidentialite`,
    h1: "Politique de Confidentialité & Protection des Données (RGPD)",
    type: "website"
  },
  "/politique-cookies": {
    path: "/politique-cookies",
    title: "Politique des Cookies | SHOST Conciergerie",
    description: "Information sur l'utilisation des cookies et traceurs sur le site SHOST Conciergerie. Paramétrez et modifiez vos préférences à tout moment.",
    canonical: `${BASE_URL}/politique-cookies`,
    h1: "Politique de Gestion des Cookies & Traceurs",
    type: "website"
  },
  "/cgv": {
    path: "/cgv",
    title: "Conditions Générales de Vente & Prestations | SHOST",
    description: "Consultez les Conditions Générales de Vente et de prestations de services de conciergerie privée et gestion locative SHOST à Grenoble.",
    canonical: `${BASE_URL}/cgv`,
    h1: "Conditions Générales de Vente & Prestations de Services (CGV)",
    type: "website"
  },
  "/404": {
    path: "/404",
    title: "Page Non Trouvée - 404 | SHOST Conciergerie",
    description: "La page que vous recherchez semble introuvable. Retrouvez nos services de conciergerie Airbnb à Grenoble et estimez vos revenus locatifs.",
    canonical: `${BASE_URL}/404`,
    h1: "Page Non Trouvée (Erreur 404)",
    type: "website"
  }
};
