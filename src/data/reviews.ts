export interface Review {
  id: string;
  author: string;
  role: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  propertyType: string;
}

export interface MetricProof {
  value: string;
  label: string;
  detail: string;
}

export const PROOF_METRICS: MetricProof[] = [
  {
    value: "+28%",
    label: "Revenus moyens constatés",
    detail: "Par rapport à une gestion en solo grâce à notre algorithme de tarification dynamique quotidienne."
  },
  {
    value: "4.92 / 5",
    label: "Note moyenne voyageurs",
    detail: "Sur plus de 450 séjours accueillis à Grenoble et dans l'agglomération alpine."
  },
  {
    value: "100%",
    label: "Sérénité propriétaire",
    detail: "Zéro gestion des clés, zéro linge, zéro ménage et zéro déplacement d'urgence pour vous."
  },
  {
    value: "< 15 min",
    label: "Temps de réponse 24/7",
    detail: "Communication continue pour convertir les demandes instantanément et rassurer les hôtes."
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: "rev-1",
    author: "Sophie Laurent",
    role: "Propriétaire",
    location: "Grenoble Championnet",
    rating: 5,
    date: "Février 2026",
    comment: "Depuis que j'ai confié mon T2 dans le quartier Championnet à SHOST, ma vie a changé ! Je n'ai plus à courir après le travail pour le ménage ou les clés. Mes revenus sont 30% plus élevés qu'avant et les avis voyageurs sont dithyrambiques.",
    propertyType: "Appartement T2 (42 m²)"
  },
  {
    id: "rev-2",
    author: "Marc Dubois",
    role: "Investisseur immobilier",
    location: "Grenoble Europole / Gare",
    rating: 5,
    date: "Janvier 2026",
    comment: "Une équipe rigoureuse, proactive et transparente. Les rapports mensuels sont limpides, les virements arrivent à date fixe et le pricing dynamique fait des miracles sur les périodes de salons à Alpexpo. Très recommandable.",
    propertyType: "Appartement T3 (65 m²)"
  },
  {
    id: "rev-3",
    author: "Hélène & Pierre Martin",
    role: "Propriétaires résidence secondaire",
    location: "Meylan & Grésivaudan",
    rating: 5,
    date: "Mars 2026",
    comment: "Notre maison est louée quand nous sommes en voyage et nous pouvons la bloquer d'un simple clic quand nous souhaitons y séjourner. Le ménage est aux standards hôteliers, aucune mauvaise surprise.",
    propertyType: "Maison contemporaine (110 m²)"
  },
  {
    id: "rev-4",
    author: "Alexandre V.",
    role: "Propriétaire bailleur",
    location: "Voiron Centre",
    rating: 5,
    date: "Février 2026",
    comment: "Très bonne surprise sur le secteur de Voiron ! Je pensais que seule Grenoble fonctionnait en Airbnb, mais SHOST capte une clientèle d'affaires et touristique très régulière toute l'année.",
    propertyType: "Loft rénové (55 m²)"
  }
];
