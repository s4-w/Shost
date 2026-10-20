export interface SectorInfo {
  slug: string;
  name: string;
  headline: string;
  postalCode: string;
  description: string;
  marketHighlights: { label: string; value: string }[];
  neighborhoods: string[];
  guestProfiles: string[];
  averageNightRate: string;
  occupancyRate: string;
  tips: string[];
}

export const SECTORS_DATA: Record<string, SectorInfo> = {
  "conciergerie-airbnb-grenoble": {
    slug: "conciergerie-airbnb-grenoble",
    name: "Grenoble Hyper-Centre & Quartiers",
    headline: "Gestion locative clé en main dans le cœur historique et les quartiers d'affaires de Grenoble",
    postalCode: "38000",
    description: "Capitale des Alpes, pôle scientifique mondial et carrefour touristique majeur, Grenoble offre une demande locative courte durée soutenue 12 mois sur 12. De l'Europole au quartier Championnet en passant par l'Île Verte et la Presqu'île d'innovation, SHOST maximise vos revenus grâce à un positionnement hôtelier rigoureux et des annonces ultra-performantes.",
    marketHighlights: [
      { label: "Clientèle pro & tourisme", value: "Toute l'année" },
      { label: "Surcroît de revenus SHOST", value: "+28% constaté" },
      { label: "Disponibilité conciergerie", value: "7j/7 - 24h/24" }
    ],
    neighborhoods: [
      "Hyper-centre & Vieille Ville",
      "Quartier Championnet & Caserne de Bonne",
      "Europole & Gare TGV",
      "Presqu'île scientifique (CEA, Minatec)",
      "Île Verte & Hôpital",
      "Grands Boulevards & Foch",
      "Chavant & Parc Paul Mistral"
    ],
    guestProfiles: [
      "Chercheurs, ingénieurs et congressistes (CEA, ESRF, Alpexpo)",
      "Touristes de montagne en transit vers les stations de ski",
      "Familles visitant leurs proches ou étudiants",
      "Professionnels en déplacement d'affaires court et moyen séjour"
    ],
    averageNightRate: "90€ - 160€ / nuit",
    occupancyRate: "76% - 85%",
    tips: [
      "Privilégiez une connexion fibre haut débit et un espace de travail dédié pour capter les voyageurs d'affaires.",
      "L'enregistrement en mairie est obligatoire : nous vous accompagnons pas à pas pour obtenir votre numéro officiel.",
      "Le stationnement est un critère décisif au centre-ville : une place de parking ou un box privatif augmente de 15% le tarif à la nuitée."
    ]
  },
  "secteur-voiron": {
    slug: "secteur-voiron",
    name: "Voiron & Pays Voironnais",
    headline: "Conciergerie Airbnb de proximité à Voiron, Coublevie et aux portes de la Chartreuse",
    postalCode: "38500",
    description: "Célèbre pour ses Caves de la Chartreuse, son dynamisme économique et sa proximité avec le lac de Paladru, Voiron attire une clientèle mixte de cadres industriels, de vacanciers et d'amoureux de nature. SHOST gère vos meublés de tourisme à Voiron avec un service sur-mesure garantissant l'intégrité de votre logement.",
    marketHighlights: [
      { label: "Tourisme lac & montagne", value: "Paladru & Chartreuse" },
      { label: "Clientèle industrielle", value: "Zones Centr'Alp" },
      { label: "Taux de satisfaction", value: "4.9/5 étoiles" }
    ],
    neighborhoods: [
      "Centre historique de Voiron",
      "Quartier de la Gare",
      "Coublevie",
      "Moirans & abords Centr'Alp",
      "Saint-Étienne-de-Crossey",
      "Proximité Lac de Paladru"
    ],
    guestProfiles: [
      "Professionnels en mission sur le parc d'activités Centr'Alp",
      "Touristes visitant le patrimoine voironnais et le lac de Paladru",
      "Randonneurs et cyclistes explorant le massif de la Chartreuse",
      "Visiteurs familiaux lors d'événements et mariages locaux"
    ],
    averageNightRate: "80€ - 135€ / nuit",
    occupancyRate: "70% - 78%",
    tips: [
      "La saison estivale au lac de Paladru génère de forts pics de demande : anticipez la tarification dynamique.",
      "La proximité de la gare TER reliant Grenoble et Lyon en fait un emplacement très prisé des consultants mobiles."
    ]
  },
  "secteur-echirolles": {
    slug: "secteur-echirolles",
    name: "Échirolles & Agglomération Sud",
    headline: "Optimisez la rentabilité locative de votre appartement à Échirolles et proximité Alpexpo",
    postalCode: "38130",
    description: "Deuxième ville de la métropole grenobloise, Échirolles bénéficie d'une situation stratégique le long de la rocade sud, à deux pas d'Alpexpo, du Grand'Place et de grands sièges d'entreprises. Une excellente opportunité d'investissement locatif meublé que SHOST valorise au quotidien.",
    marketHighlights: [
      { label: "Proximité événements", value: "Alpexpo & Le Summum" },
      { label: "Transports en commun", value: "Tram A & Gare" },
      { label: "Tarif moyen avantageux", value: "Forte rentabilité brute" }
    ],
    neighborhoods: [
      "Échirolles Centre & Mairie",
      "Secteur Alpexpo / Grand'Place",
      "Quartier Comboire",
      "La Frange Verte",
      "Pont-de-Claix & Jarrie"
    ],
    guestProfiles: [
      "Exposants et visiteurs professionnels lors des salons Alpexpo",
      "Spectateurs et techniciens de concerts au Summum",
      "Salariés temporaires des zones commerciales et industrielles Sud",
      "Familles et soignants en lien avec l'Hôpital Sud"
    ],
    averageNightRate: "70€ - 115€ / nuit",
    occupancyRate: "72% - 80%",
    tips: [
      "Les salons professionnels majeurs à Alpexpo permettent de doubler le tarif à la nuitée sur les périodes de pointe.",
      "Un logement propre, fonctionnel et bien insonorisé assure un excellent taux de re-réservation."
    ]
  },
  "secteur-meylan": {
    slug: "secteur-meylan",
    name: "Meylan & Grésivaudan Tech",
    headline: "Conciergerie haut de gamme à Meylan, Inovallée et pied du Saint-Eynard",
    postalCode: "38240",
    description: "Commune résidentielle prisée de la rive droite de l'Isère, Meylan concentre le pôle technologique international Inovallée ainsi qu'un cadre de vie d'exception avec vue sur Belledonne. La demande pour des appartements et maisons de standing y est forte et solvable.",
    marketHighlights: [
      { label: "Pôle Inovallée", value: "Cadres & Tech mondiale" },
      { label: "Standing recherché", value: "Prestations Premium" },
      { label: "Cadre verdoyant", value: "Vue Belledonne" }
    ],
    neighborhoods: [
      "Inovallée Meylan",
      "Les Béalières",
      "Maupertuis & Buclos",
      "Haut Meylan & Rocher Saint-Eynard",
      "Corenc limitrophe"
    ],
    guestProfiles: [
      "Cadres dirigeants, ingénieurs et consultants high-tech Inovallée",
      "Clients internationaux en mission chez Schneider, STMicro, etc.",
      "Touristes exigeants recherchant calme, terrasse et panorama alpin",
      "Propriétaires en transition ou expatriés de retour temporaire"
    ],
    averageNightRate: "110€ - 220€ / nuit",
    occupancyRate: "75% - 84%",
    tips: [
      "Les prestations haut de gamme (café de spécialité, literie d'hôtel 5*, terrasse aménagée) génèrent les meilleures marges.",
      "La flexibilité sur les séjours de moyenne durée (1 à 4 semaines pour cadres) complète parfaitement le calendrier court séjour."
    ]
  },
  "secteur-saint-martin-d-heres": {
    slug: "secteur-saint-martin-d-heres",
    name: "Saint-Martin-d'Hères & Domaine Universitaire",
    headline: "Conciergerie Airbnb efficace sur le campus, Neyrpic et Saint-Martin-d'Hères",
    postalCode: "38400",
    description: "Avec le campus universitaire géant de Grenoble-Alpes (plus de 60 000 étudiants et chercheurs) et l'arrivée du pôle commercial et de loisirs Neyrpic, Saint-Martin-d'Hères attire une clientèle variée de professeurs invités, intervenants universitaires, sportifs et familles.",
    marketHighlights: [
      { label: "Campus Grenoble-Alpes", value: "60k+ étudiants & chercheurs" },
      { label: "Nouveau pôle Neyrpic", value: "Attractivité shopping & loisirs" },
      { label: "Accès tram direct", value: "Trams B, C et D" }
    ],
    neighborhoods: [
      "Campus Universitaire de Saint-Martin-d'Hères",
      "Secteur Neyrpic & Péri",
      "Croix-Rouge & Mairie",
      "Les Portes du Vercors",
      "Gières Gare limitrophe"
    ],
    guestProfiles: [
      "Professeurs invités, chercheurs académiques et jurys de thèse",
      "Parents venant assister aux rentrées ou remises de diplômes",
      "Professionnels intervenant sur le campus et centres R&D",
      "Sportifs et spectateurs d'événements universitaires"
    ],
    averageNightRate: "65€ - 110€ / nuit",
    occupancyRate: "74% - 82%",
    tips: [
      "La proximité immédiate d'une station de tram (lignes B ou C) est l'argument n°1 pour louer sans temps mort.",
      "Offrez un équipement complet pour cuisinier : les séjours de 4 à 10 jours y sont fréquents."
    ]
  },
  "secteur-gresivaudan": {
    slug: "secteur-gresivaudan",
    name: "Vallée du Grésivaudan",
    headline: "Conciergerie privée pour propriétés d'exception entre Chartreuse et Belledonne",
    postalCode: "38330",
    description: "La vallée du Grésivaudan (Saint-Ismier, Biviers, Montbonnot, Bernin, Crolles) offre l'un des revenus par habitant les plus élevés d'Isère et un cadre d'exception. Villas avec piscine, chalets contemporains et appartements de charme s'y louent à prix premium pour le tourisme comme pour les grands groupes industriels (Soitec, STMicroelectronics).",
    marketHighlights: [
      { label: "Grandes propriétés & villas", value: "Piscines, vues massifs" },
      { label: "Géants de la microélectronique", value: "Crolles & Bernin" },
      { label: "Revenu moyen par séjour", value: "Élevé (> 500€)" }
    ],
    neighborhoods: [
      "Saint-Ismier & Biviers",
      "Montbonnot-Saint-Martin",
      "Bernin & Crolles",
      "Saint-Nazaire-les-Eymes",
      "Le Versoud & Domène"
    ],
    guestProfiles: [
      "Familles aisées en vacances d'été ou d'hiver au pied des montagnes",
      "Expatriés et directeurs de projets industriels mondiaux (Soitec, STMicro)",
      "Invités de cérémonies privées et mariages dans les domaines du Grésivaudan",
      "Amateurs d'activités outdoor (parapente à Saint-Hilaire, VTT, randonnée)"
    ],
    averageNightRate: "130€ - 350€ / nuit",
    occupancyRate: "72% - 80%",
    tips: [
      "Les villas avec piscine, jardin entretenu et vue panoramique sur Belledonne affichent un taux de remplissage maximal dès le mois de mai.",
      "SHOST assure un gardiennage et une vérification technique sur mesure pour ces biens de grand standing."
    ]
  }
};
