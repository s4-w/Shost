export interface LegalDocument {
  slug: string;
  title: string;
  lastUpdated: string;
  sections: {
    title: string;
    content: string[];
  }[];
}

export const LEGAL_DATA: Record<string, LegalDocument> = {
  "mentions-legales": {
    slug: "mentions-legales",
    title: "Mentions Légales",
    lastUpdated: "1er Janvier 2026",
    sections: [
      {
        title: "1. Éditeur de la plateforme et du site internet",
        content: [
          "Le présent site internet, accessible à l'adresse https://shost-services.com (ci-après le « Site »), est édité par la structure :",
          "Dénomination commerciale : SHOST Conciergerie",
          "Forme juridique : [À COMPLÉTER - Ex: Société par Actions Simplifiée (SAS) / SARL / Entreprise Individuelle]",
          "Capital social : [À COMPLÉTER - Ex: 1 000 €]",
          "Siège social : [À COMPLÉTER - Ex: 15 rue Félix Poulat, 38000 Grenoble, France]",
          "Numéro d'immatriculation au RCS : [À COMPLÉTER - Ex: RCS Grenoble B 123 456 789]",
          "Numéro SIRET : [À COMPLÉTER - Ex: 123 456 789 00012]",
          "Numéro de TVA intracommunautaire : [À COMPLÉTER - Ex: FR 12 123456789]",
          "Directeur de la publication : [À COMPLÉTER - Ex: Direction SHOST Conciergerie]",
          "Contact courriel : shost.services@gmail.com",
          "Téléphone : 06 26 29 06 49"
        ]
      },
      {
        title: "2. Hébergement du site internet",
        content: [
          "Le Site est hébergé par :",
          "Hébergeur : [À COMPLÉTER - Ex: Vercel Inc., 340 S Lemon Ave #1142 Walnut, CA 91789, USA / Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, USA]",
          "Site web de l'hébergeur : [À COMPLÉTER - Ex: https://vercel.com / https://cloudflare.com]"
        ]
      },
      {
        title: "3. Propriété intellectuelle et droits réservés",
        content: [
          "L'ensemble des contenus figurant sur ce Site (textes, visuels, photographies, charte graphique, logo, logiciels, icônes) sont la propriété exclusive de SHOST Conciergerie ou de ses partenaires ayant consenti une licence d'utilisation.",
          "Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l'accord exprès par écrit de SHOST Conciergerie (articles L.335-2 et suivants du Code de la propriété intellectuelle)."
        ]
      },
      {
        title: "4. Responsabilité et liens hypertextes",
        content: [
          "SHOST Conciergerie s'efforce de fournir sur son Site des informations aussi précises que possible. Toutefois, les estimations financières issues du simulateur en ligne sont fournies à titre indicatif et ne constituent pas un engagement contractuel ferme de revenus.",
          "Le Site peut contenir des liens vers des sites internet tiers (ex : profils Instagram, Calendly, Google). SHOST Conciergerie décline toute responsabilité quant au contenu, à l'accessibilité ou aux politiques de confidentialité de ces sites externes."
        ]
      }
    ]
  },
  "politique-de-confidentialite": {
    slug: "politique-de-confidentialite",
    title: "Politique de Confidentialité & Protection des Données (RGPD)",
    lastUpdated: "1er Janvier 2026",
    sections: [
      {
        title: "1. Responsable du traitement des données",
        content: [
          "Dans le cadre de l'utilisation du Site et de ses formulaires de contact et d'estimation, des données à caractère personnel sont collectées et traitées conformément au Règlement Général sur la Protection des Données (RGPD 2016/679) et à la loi Informatique et Libertés du 6 janvier 1978 modifiée.",
          "Responsable du traitement : SHOST Conciergerie",
          "Adresse : [À COMPLÉTER - Ex: 38000 Grenoble, France]",
          "Délégué à la Protection des Données (DPO) / Contact référent : shost.services@gmail.com"
        ]
      },
      {
        title: "2. Données collectées et finalités",
        content: [
          "Nous collectons uniquement les données strictement nécessaires aux finalités suivantes :",
          "• Formulaire de contact et d'estimation : Nom, prénom, adresse e-mail, numéro de téléphone, ville et caractéristiques du bien immobilier, message.",
          "Finalité : Traiter votre demande de renseignements, réaliser une estimation personnalisée du potentiel locatif de votre bien et convenir d'un rendez-vous téléphonique ou sur place.",
          "Base légale : Consentement préalable de l'utilisateur (case à cocher non précochée) et mesures précontractuelles à la demande de l'utilisateur.",
          "• Données techniques de navigation : Adresse IP (anonymisée), type de navigateur, horodatage des requêtes pour des motifs de sécurité informatique et prévention des abus (rate-limiting anti-spam)."
        ]
      },
      {
        title: "3. Destinataires et absence de revente des données",
        content: [
          "Vos données personnelles sont strictement confidentielles. Elles sont exclusivement destinées aux collaborateurs habilités de SHOST Conciergerie.",
          "SHOST Conciergerie ne commercialise, ne loue et ne cède aucune donnée personnelle à des courtiers ou tiers commerciaux sous quelque forme que ce soit."
        ]
      },
      {
        title: "4. Durée de conservation",
        content: [
          "Les données relatives à un prospect ou demandeur d'estimation sont conservées pendant une durée maximale de trois (3) ans à compter du dernier contact émanant du prospect.",
          "Les données relatives aux clients sous contrat de conciergerie sont conservées pendant la durée de la relation contractuelle, puis archivées pour une durée de cinq (5) ans à des fins probatoires et comptables."
        ]
      },
      {
        title: "5. Vos droits et modalités d'exercice",
        content: [
          "Conformément à la réglementation en vigueur, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation du traitement, de portabilité de vos données et d'opposition pour motifs légitimes.",
          "Pour exercer l'un de ces droits, adressez simplement votre demande par e-mail à : shost.services@gmail.com avec pour objet « Exercice droit RGPD ».",
          "Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous disposez du droit d'introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL - www.cnil.fr)."
        ]
      }
    ]
  },
  "politique-cookies": {
    slug: "politique-cookies",
    title: "Politique de Gestion des Cookies & Traceurs",
    lastUpdated: "1er Janvier 2026",
    sections: [
      {
        title: "1. Qu'est-ce qu'un cookie ?",
        content: [
          "Un cookie ou traceur est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) lors de la consultation d'un site web. Il permet au site de mémoriser certaines informations relatives à votre session de navigation."
        ]
      },
      {
        title: "2. Les catégories de cookies utilisées sur notre site",
        content: [
          "• Cookies techniques strictement nécessaires : Ces cookies sont indispensables au bon fonctionnement du site (mémorisation de votre choix de consentement cookies, sécurité contre les attaques de type CSRF). Ils ne nécessitent pas de consentement préalable conformément aux recommandations de la CNIL.",
          "• Cookies de mesure d'audience et statistiques (facultatifs) : Permettent de mesurer la fréquentation et d'optimiser l'ergonomie du site de manière anonymisée. Ils ne sont activés qu'après acceptation explicite de votre part.",
          "• Cookies marketing et tiers (facultatifs) : Aucun cookie publicitaire intrusif n'est déposé par défaut sans votre accord préalable."
        ]
      },
      {
        title: "3. Votre consentement et gestion des préférences",
        content: [
          "Lors de votre première visite sur le Site, un bandeau d'information vous informe de la présence de cookies et vous invite à faire votre choix.",
          "Vous disposez du choix d'accepter tous les cookies, de les refuser tous avec la même facilité, ou de personnaliser vos choix catégorie par catégorie.",
          "Votre choix est conservé pendant une durée de six (6) mois. Vous pouvez modifier ou révoquer votre consentement à tout moment en cliquant sur le lien « Gestion des cookies » présent dans le pied de page du site."
        ]
      }
    ]
  },
  "cgv": {
    slug: "cgv",
    title: "Conditions Générales de Vente & Prestations de Conciergerie (CGV)",
    lastUpdated: "1er Janvier 2026",
    sections: [
      {
        title: "1. Champ d'application et objet",
        content: [
          "Les présentes Conditions Générales de Vente et de Prestations de Services (ci-après les « CGV ») s'appliquent à l'ensemble des prestations d'intendance, d'accueil, de gestion logistique et d'optimisation d'annonces de location meublée de courte durée conclues entre SHOST Conciergerie et tout propriétaire ou mandataire d'un bien immobilier (ci-après le « Client »).",
          "Toute souscription de mandat ou contrat de conciergerie implique l'adhésion pleine et entière du Client aux présentes CGV."
        ]
      },
      {
        title: "2. Nature des prestations fournies",
        content: [
          "SHOST Conciergerie fournit un accompagnement global comprenant notamment :",
          "• La création, l'optimisation éditoriale et la valorisation photographique de l'annonce sur les plateformes agréées (Airbnb, etc.).",
          "• La tarification dynamique en temps réel basée sur les événements locaux, les saisons et l'algorithme de rentabilité.",
          "• La sélection et la communication 24/7 avec les voyageurs avant, pendant et après leur séjour.",
          "• La logistique d'accueil (check-in physique ou boîte à clés connectée sécurisée).",
          "• L'organisation du ménage aux normes hôtelières et la blanchisserie du linge de maison entre chaque séjour.",
          "• L'assistance technique de premier niveau et la coordination d'artisans en cas de panne."
        ]
      },
      {
        title: "3. Tarification, commissions et modalités de règlement",
        content: [
          "• Commission de gestion : SHOST Conciergerie applique une commission de 20% TTC calculée sur le montant brut des nuitées perçues lors des séjours.",
          "• Frais de mise en place initiale : Forfait logistique à partir de 120 € TTC (incluant le shooting photo professionnel, la logistique de démarrage et le pack de consommables d'accueil).",
          "• Frais de ménage et blanchisserie : Ces frais sont intégralement facturés aux voyageurs lors de leur réservation en sus du prix de la nuitée, sans impact direct sur la trésorerie du propriétaire.",
          "• Reversement des fonds : Les loyers perçus sont reversés chaque mois au Client accompagnés d'un état récapitulatif détaillé."
        ]
      },
      {
        title: "4. Engagements et obligations du Client",
        content: [
          "Le Client certifie être légalement habilité à louer le bien en meublé de tourisme et déclare avoir accompli l'ensemble des formalités administratives requises (notamment la déclaration préalable en mairie de Grenoble ou de sa commune de rattachement).",
          "Le Client s'engage à maintenir le logement dans un état de conformité, de sécurité et de salubrité irréprochable et à souscrire une assurance Propriétaire Non Occupant (PNO) couvrant la location courte durée."
        ]
      },
      {
        title: "5. Résiliation et droit de rétractation",
        content: [
          "Le contrat de gestion est conclu pour une durée déterminée ou indéterminée selon les conditions particulières, avec préavis d'un (1) mois sans pénalité pour le propriétaire, sous réserve de l'exécution des réservations de voyageurs déjà confirmées.",
          "Conformément à l'article L.221-18 du Code de la consommation, les clients consommateurs disposent d'un délai de rétractation de quatorze (14) jours à compter de la signature du contrat conclu à distance."
        ]
      },
      {
        title: "6. Droit applicable et juridiction compétente",
        content: [
          "Les présentes CGV sont soumises au droit français. En cas de litige non résolu à l'amiable, les tribunaux compétents du ressort du Tribunal de Commerce de Grenoble seront seuls compétents."
        ]
      }
    ]
  }
};
