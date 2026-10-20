export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string; // <= 60 chars
  metaDescription: string; // <= 155 chars
  publishedAt: string;
  readTime: string;
  category: string;
  excerpt: string;
  author: string;
  content: {
    sectionTitle: string;
    paragraphs: string[];
    callout?: string;
  }[];
}

export const BLOG_POSTS: Record<string, BlogPost> = {
  "combien-rapporte-un-airbnb-a-grenoble": {
    slug: "combien-rapporte-un-airbnb-a-grenoble",
    title: "Combien rapporte réellement un Airbnb à Grenoble en 2026 ?",
    metaTitle: "Combien Rapporte un Airbnb à Grenoble en 2026 ?",
    metaDescription: "Chiffres clés, loyers réels, taux d'occupation et simulation de rentabilité pour un meublé touristique à Grenoble selon la localisation et le standing.",
    publishedAt: "12 Mars 2026",
    readTime: "6 min de lecture",
    category: "Rentabilité & Marché",
    author: "Équipe SHOST Conciergerie",
    excerpt: "Analyse chiffrée du marché de la location saisonnière à Grenoble : tarifs à la nuitée, taux d'occupation selon les saisons et simulation concrète de revenus nets propriétaire.",
    content: [
      {
        sectionTitle: "1. Le marché de la location courte durée à Grenoble en quelques chiffres",
        paragraphs: [
          "Grenoble est l'une des métropoles régionales françaises les plus atypiques sur le plan locatif. Contrairement aux stations de ski pures qui subissent une saisonnalité binaire, la capitale des Alpes bénéficie d'une demande active 12 mois sur 12 grâce à sa double casquette : un pôle d'affaires et de recherche scientifique international (CEA, Minatec, ESRF, universités) d'une part, et une porte d'accès privilégiée vers les massifs de Belledonne, de Chartreuse et du Vercors d'autre part.",
          "En 2026, le prix moyen constaté d'une nuitée sur les plateformes comme Airbnb et Booking à Grenoble oscille entre 75 € et 180 € selon la typologie et le niveau de prestation du logement. Le taux d'occupation annuel moyen des biens bien positionnés et professionnels se situe entre 72 % et 84 %."
        ],
        callout: "Constat terrain SHOST : Un appartement géré avec une tarification dynamique algorithmique génère en moyenne 28 % de revenus supplémentaires par an comparé à un tarif fixe classique."
      },
      {
        sectionTitle: "2. Exemples concrets de rentabilité selon la typologie du bien",
        paragraphs: [
          "Studio & T1 au centre-ville (20 à 30 m²) : Idéal pour les congressistes, consultants d'affaires et touristes solos. Prix moyen : 65 € à 95 € / nuit. Taux d'occupation : ~78 %. Revenu brut moyen annuel : 18 500 € à 25 000 €.",
          "Appartement T2 avec chambre séparée (35 à 50 m²) : Le format le plus recherché par les couples de voyageurs et les professionnels en mission de quelques jours. Prix moyen : 90 € à 130 € / nuit. Revenu brut annuel moyen : 24 000 € à 34 000 €.",
          "T3 / T4 familial ou meublé de standing (60 à 100 m²) : Très prisé des familles en transit vers les stations de ski en hiver et en été, ainsi que des équipes de collaborateurs. Prix moyen : 130 € à 240 € / nuit. Revenu brut annuel moyen : 35 000 € à 55 000 €."
        ]
      },
      {
        sectionTitle: "3. Calcul du revenu net réel dans la poche du propriétaire",
        paragraphs: [
          "Pour évaluer votre rentabilité réelle, il ne faut jamais se fier au seul chiffre d'affaires brut. Il est indispensable de déduire : la commission des plateformes (environ 3% à 15% selon le mode de refacturation), les frais de ménage (généralement refacturés à 100% au voyageur), la commission de conciergerie (20% TTC chez SHOST sans abonnement), et les charges d'exploitation (consommables, assurance PNO, fiscalité LMNP).",
          "Grâce au régime fiscal LMNP (Loueur en Meublé Non Professionnel) au réel avec amortissement, la majorité des propriétaires ne paient aucun impôt sur leurs revenus locatifs pendant les 8 à 12 premières années d'exploitation."
        ],
        callout: "Envie de connaître le potentiel de votre adresse exacte ? Utilisez notre estimateur de revenus en ligne ou contactez-nous pour une étude gratuite sur site."
      }
    ]
  },
  "reglementation-location-saisonniere-isere": {
    slug: "reglementation-location-saisonniere-isere",
    title: "Réglementation de la location saisonnière à Grenoble et en Isère : Le Guide 2026",
    metaTitle: "Réglementation Location Saisonnière Isère & Grenoble",
    metaDescription: "Règles 2026 pour louer sur Airbnb à Grenoble et en Isère : déclaration en mairie, plafond 120 jours, numéro d'enregistrement et taxe de séjour.",
    publishedAt: "24 Février 2026",
    readTime: "7 min de lecture",
    category: "Législation & Fiscalité",
    author: "Équipe SHOST Conciergerie",
    excerpt: "Tout ce que vous devez savoir pour louer en toute conformité légale en Isère : numéro d'enregistrement en mairie de Grenoble, limite des 120 jours, changement d'usage et taxe de séjour.",
    content: [
      {
        sectionTitle: "1. La déclaration obligatoire et le numéro d'enregistrement à Grenoble",
        paragraphs: [
          "Depuis l'application des décrets encadrant les meublés de tourisme, la ville de Grenoble a mis en place une procédure d'enregistrement obligatoire par télédéclaration. Tout propriétaire (ou locataire dûment autorisé par son bailleur) souhaitant louer son logement pour de courtes durées doit obtenir un numéro à 13 chiffres délivré par la mairie.",
          "Ce numéro d'enregistrement doit figurer obligatoirement sur chaque annonce publiée (Airbnb, Abritel, Booking, etc.). L'absence de mention du numéro expose le propriétaire à une amende pouvant atteindre jusqu'à 5 000 € par annonce."
        ],
        callout: "Bonne nouvelle : SHOST prend en charge ou vous guide pas à pas dans toutes les démarches administratives pour garantir la stricte conformité légale de votre bien dès le premier jour."
      },
      {
        sectionTitle: "2. Résidence principale vs Résidence secondaire : quelles règles ?",
        paragraphs: [
          "Cas de la résidence principale : Vous pouvez louer librement votre résidence principale dans la limite légale de 120 jours par an (environ 4 mois). Au-delà de ce plafond de 120 jours, le calendrier est bloqué sur les plateformes, sauf motif légitime (obligation professionnelle, raison de santé ou force majeure).",
          "Cas de la résidence secondaire ou investissement locatif : Pour un bien qui n'est pas votre résidence principale, la location touristique est soumise aux règles de changement d'usage de la commune de Grenoble. Certaines zones et typologies imposent des conditions de compensation. Dans les communes périphériques de l'agglomération (Voiron, Meylan, Grésivaudan), les contraintes sont souvent plus souples."
        ]
      },
      {
        sectionTitle: "3. Taxe de séjour, assurance et règles de copropriété",
        paragraphs: [
          "Taxe de séjour : Sur Airbnb et la plupart des plateformes majeures, la taxe de séjour de la Métropole de Grenoble (Grenoble-Alpes Métropole) est collectée automatiquement auprès des voyageurs lors de la réservation et reversée directement à la collectivité.",
          "Assurance : Une assurance PNO (Propriétaire Non Occupant) avec extension villégiature / location meublée courte durée est indispensable pour compléter la garantie AirCover d'Airbnb.",
          "Copropriété : Il est fondamental de vérifier le règlement de copropriété de votre immeuble. La clause d'habitation bourgeoise stricte peut limiter ou interdire les locations saisonnières répétées, alors qu'une clause d'habitation bourgeoise simple autorise l'exercice d'une activité meublée dès lors qu'elle ne crée aucun trouble anormal de voisinage."
        ]
      }
    ]
  },
  "conciergerie-ou-gestion-solo": {
    slug: "conciergerie-ou-gestion-solo",
    title: "Conciergerie Airbnb ou gestion en solo : quel est le meilleur choix ?",
    metaTitle: "Conciergerie ou Gestion Solo Airbnb ? Comparatif",
    metaDescription: "Faut-il gérer seul son Airbnb ou faire appel à une conciergerie à Grenoble ? Comparatif détaillé du temps passé, des revenus nets et de la tranquillité.",
    publishedAt: "5 Février 2026",
    readTime: "5 min de lecture",
    category: "Guide Pratique",
    author: "Équipe SHOST Conciergerie",
    excerpt: "Gérer soi-même son meublé de tourisme ou déléguer à une conciergerie professionnelle ? Analyse du temps requis, des coûts cachés, de la qualité hôtelière et du revenu net final.",
    content: [
      {
        sectionTitle: "1. La réalité du temps investi en gestion autonome",
        paragraphs: [
          "Gérer un logement sur Airbnb demande en moyenne entre 5 et 10 heures par semaine pour un seul appartement : répondre aux messages en moins de 15 minutes (indispensable pour l'algorithme Airbnb), coordonner les arrivées parfois tardives des voyageurs, nettoyer impeccablement le logement, laver et repasser le linge de lit hôtelier, gérer les imprévus (ampoule grillée, problème de wifi à 22h, retard de train).",
          "Pour un propriétaire actif ou résidant à plus de 15 minutes du bien, cette charge mentale devient rapidement insoutenable et conduit souvent à des baisses de notes voyageurs (4.3 au lieu de 4.9)."
        ],
        callout: "Le temps d'un propriétaire est précieux. Déléguer à une conciergerie locale permet de transformer un second métier chronophage en un véritable revenu 100% passif."
      },
      {
        sectionTitle: "2. Le différentiel de revenus : pourquoi une conciergerie rapporte souvent plus",
        paragraphs: [
          "L'erreur classique consiste à croire que payer 20% de commission à une conciergerie réduit votre revenu final de 20%. En pratique, une conciergerie d'élite comme SHOST actionne plusieurs leviers majeurs qui augmentent le chiffre d'affaires global :",
          "• Des photographies professionnelles grand angle HDR et une annonce optimisée SEO qui multiplient par 2 le taux de clic sur la plateforme.",
          "• Une tarification dynamique en temps réel ajustée aux salons professionnels d'Alpexpo, aux vacances scolaires, à l'enneigement et aux pics de demande locaux.",
          "• Le statut convoité de Superhost / Perle Rare qui garantit un taux d'occupation de 15 à 25% supérieur à la moyenne.",
          "Résultat : Même après déduction des 20% d'honoraires, les propriétaires SHOST perçoivent généralement un revenu net supérieur ou équivalent à une gestion en solo, tout en n'ayant plus aucune charge de travail."
        ]
      },
      {
        sectionTitle: "3. Tableau comparatif : Gestion Seul vs Conciergerie SHOST",
        paragraphs: [
          "Temps passé : 6 à 8h / semaine (Gestion Seul) vs 0h / semaine (SHOST).",
          "Réactivité messages voyageurs : Variable selon votre disponibilité vs Réponse garantie en moins de 15 minutes 24h/24 et 7j/7.",
          "Ménage et blanchisserie : À votre charge ou avec prestataire indépendant vs Normes hôtelières strictes avec contrôle qualité photo avant chaque arrivée.",
          "Gestion des imprévus et maintenance : Vous devez vous déplacer en urgence vs Équipe technique locale et astreinte d'urgence 7j/7."
        ]
      }
    ]
  }
};
