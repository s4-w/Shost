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
    lastUpdated: "22 Octobre 2026",
    sections: [
      {
        title: "1. Éditeur de la plateforme et du site internet",
        content: [
          "Le présent site internet, accessible à l'adresse https://shost-services.com (ci-après le « Site »), est édité conformément aux dispositions de l'article 6 de la Loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l'Économie Numérique (LCEN) par :",
          "• Statut juridique : Entrepreneur Individuel (micro-entreprise)",
          "• Exploitant : Salah .M",
          "• Dénomination commerciale : SHOST Conciergerie (shost-services.com)",
          "• Secteur d'activité : Location et exploitation de biens immobiliers propres ou loués",
          "• Code NAF / APE : 68.20B (Location et exploitation de biens immobiliers)",
          "• Numéro SIRET : 939 776 696 00022",
          "• Date de création de l'entreprise : 18/01/2025",
          "• Siège de l'activité : Grenoble et agglomération iséroise, France",
          "• Adresse de courrier électronique (email) : shost.services@gmail.com",
          "• Contact téléphonique : +33 (0)6 26 29 06 49"
        ]
      },
      {
        title: "2. Directeur de la publication",
        content: [
          "Le Directeur de la publication du Site shost-services.com est :",
          "• Salah .M, en qualité d'exploitant et responsable éditorial de SHOST Conciergerie.",
          "Pour toute question relative aux contenus publiés sur le Site, vous pouvez contacter directement la rédaction par email à shost.services@gmail.com."
        ]
      },
      {
        title: "3. Hébergement du site internet",
        content: [
          "Le Site shost-services.com est hébergé sur les infrastructures sécurisées de :",
          "• Hébergeur : Cloudflare, Inc.",
          "• Adresse du siège social : 101 Townsend Street, San Francisco, CA 94107, États-Unis",
          "• Téléphone : +1 (888) 993-5273",
          "• Site internet officiel : https://www.cloudflare.com",
          "L'infrastructure technique de Cloudflare assure la mise en cache, la distribution mondiale de contenu (CDN) ainsi que la protection anti-DDoS et la sécurité du Site."
        ]
      },
      {
        title: "4. Enregistrement du nom de domaine",
        content: [
          "Le nom de domaine shost-services.com a été réservé et enregistré auprès du bureau d'enregistrement accrédité (registrar) :",
          "• Registar : Hostinger International Ltd.",
          "• Adresse : 61 Lordou Vironos Street, 6023 Larnaca, Chypre",
          "• Site internet officiel : https://www.hostinger.fr"
        ]
      },
      {
        title: "5. Propriété intellectuelle et droits réservés",
        content: [
          "L'ensemble des éléments constituant le Site shost-services.com (notamment, sans que cette liste soit limitative : les marques déposées, la marque SHOST, le logo officiel, les textes, photographies, visuels, charte graphique, architecture éditoriale, icônes, animations, simulateurs et développements logiciels) sont la propriété exclusive de l'exploitant Salah .M / SHOST Conciergerie, ou font l'objet d'une autorisation préalable expresse d'utilisation.",
          "Ces contenus sont protégés par le droit français et international applicable en matière de droit d'auteur, de propriété intellectuelle et de droit des marques (articles L.111-1 et suivants, et articles L.335-2 et suivants du Code de la propriété intellectuelle).",
          "Toute reproduction, représentation, diffusion, adaptation, extraction, modification ou exploitation commerciale, totale ou partielle, de l'un quelconque de ces éléments, par quelque procédé que ce soit, sans l'accord préalable écrit et exprès de Salah .M, est strictement interdite et constituerait une contrefaçon sanctionnée par les juridictions civiles et pénales compétentes."
        ]
      },
      {
        title: "6. Données personnelles et cookies (RGPD)",
        content: [
          "Conformément au Règlement Général sur la Protection des Données (RGPD 2016/679) et à la Loi Informatique et Libertés du 6 janvier 1978 modifiée :",
          "• Droit des personnes : Vous disposez à tout moment d'un droit d'accès, de rectification, de portabilité, de limitation et de suppression de vos données personnelles recueillies lors de l'utilisation des formulaires de contact ou d'estimation en ligne.",
          "• Modalités d'exercice : Pour exercer vos droits ou pour toute interrogation concernant vos données, il vous suffit d'adresser un message par courrier électronique à shost.services@gmail.com. Une réponse vous sera apportée dans les meilleurs délais légaux (sous 30 jours maximum).",
          "• Traitement technique par l'hébergeur Cloudflare : Dans le cadre de l'acheminement sécurisé des requêtes et de la performance du Site, Cloudflare, Inc. est susceptible de traiter des données techniques de connexion (notamment l'adresse IP publique, les en-têtes HTTP de sécurité et les empreintes cryptographiques de requête) afin de prévenir les attaques malveillantes (DDoS, bots indésirables) et d'optimiser le routage du trafic.",
          "• Gestion des cookies : Un bandeau de consentement vous permet d'accepter, de refuser ou de paramétrer le dépôt de traceurs non strictement essentiels. Vous pouvez modifier vos préférences à tout moment via le lien « Gestion des cookies » présent au bas de chaque page du site."
        ]
      },
      {
        title: "7. Limitation de responsabilité",
        content: [
          "• Exactitude des informations : SHOST Conciergerie met en œuvre tous les moyens raisonnables pour s'assurer de l'exactitude et de la mise à jour des informations publiées sur le Site. Toutefois, les données sont fournies à titre indicatif et informatif. Notamment, les simulations de revenus et rentabilités calculées via les outils en ligne ont une valeur estimative indicative et ne sauraient en aucun cas constituer une promesse ferme ou un engagement contractuel de gains.",
          "• Disponibilité du service : L'éditeur ne saurait être tenu responsable d'éventuelles interruptions temporaires de service dues à des opérations de maintenance technique, à des dysfonctionnements du réseau internet ou à tout cas de force majeure indépendant de sa volonté.",
          "• Liens hypertextes externes : Le Site peut intégrer des liens hypertextes pointant vers des ressources et sites internet tiers. L'éditeur ne disposant d'aucun contrôle éditorial permanent sur ces sites tiers, sa responsabilité ne saurait être engagée quant à leurs contenus, offres ou politiques de confidentialité."
        ]
      },
      {
        title: "8. Droit applicable et juridiction compétente",
        content: [
          "Le présent Site internet, les présentes Mentions Légales et toutes les relations entre l'éditeur et les utilisateurs sont exclusivement régis par le droit français.",
          "En cas de différend ou de litige relatif à l'interprétation, la validité ou l'exécution des présentes, les parties s'engagent à rechercher prioritairement une solution amiable. À défaut d'accord amiable, compétence expresse et exclusive est attribuée aux tribunaux français compétents du ressort du tribunal judiciaire territorialement compétent pour l'agglomération de Grenoble."
        ]
      }
    ]
  },
  "politique-de-confidentialite": {
    slug: "politique-de-confidentialite",
    title: "Politique de Confidentialité & Protection des Données (RGPD)",
    lastUpdated: "22 Octobre 2026",
    sections: [
      {
        title: "1. Responsable du traitement des données",
        content: [
          "Dans le cadre de l'utilisation du Site et de ses formulaires de contact et d'estimation, des données à caractère personnel sont collectées et traitées conformément au Règlement Général sur la Protection des Données (RGPD 2016/679) et à la loi Informatique et Libertés du 6 janvier 1978 modifiée.",
          "• Responsable du traitement : Salah .M (SHOST Conciergerie)",
          "• Statut : Entrepreneur Individuel (micro-entreprise) - SIRET : 939 776 696 00022",
          "• Siège d'activité : Grenoble & agglomération iséroise, France",
          "• Contact référent / DPO : shost.services@gmail.com"
        ]
      },
      {
        title: "2. Données collectées et finalités",
        content: [
          "Nous collectons uniquement les données strictement nécessaires aux finalités suivantes :",
          "• Formulaire de contact et d'estimation : Nom, prénom, adresse e-mail, numéro de téléphone, ville et caractéristiques du bien immobilier, message.",
          "• Finalité : Traiter votre demande de renseignements, réaliser une estimation personnalisée du potentiel locatif de votre bien et convenir d'un rendez-vous téléphonique ou sur place.",
          "• Base légale : Consentement préalable de l'utilisateur (case à cocher non précochée) et mesures précontractuelles à la demande de l'utilisateur.",
          "• Données techniques de navigation : Adresse IP (anonymisée), type de navigateur, horodatage des requêtes pour des motifs de sécurité informatique et prévention des abus (rate-limiting anti-spam via Cloudflare)."
        ]
      },
      {
        title: "3. Destinataires et absence de revente des données",
        content: [
          "Vos données personnelles sont strictement confidentielles. Elles sont exclusivement destinées à l'exploitant de SHOST Conciergerie.",
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
    lastUpdated: "22 Octobre 2026",
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
          "• Cookies techniques strictement nécessaires : Ces cookies sont indispensables au bon fonctionnement du site (mémorisation de votre choix de consentement cookies, sécurité contre les attaques de type CSRF, routage de performance Cloudflare). Ils ne nécessitent pas de consentement préalable conformément aux recommandations de la CNIL.",
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
    lastUpdated: "22 Octobre 2026",
    sections: [
      {
        title: "1. Champ d'application et objet",
        content: [
          "Les présentes Conditions Générales de Vente et de Prestations de Services (ci-après les « CGV ») s'appliquent à l'ensemble des prestations d'intendance, d'accueil, de gestion logistique et d'optimisation d'annonces de location meublée de courte durée conclues entre SHOST Conciergerie (Salah .M, entrepreneur individuel, SIRET 939 776 696 00022) et tout propriétaire ou mandataire d'un bien immobilier (ci-après le « Client »).",
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
          "Les présentes CGV sont soumises au droit français. En cas de litige non résolu à l'amiable, compétence est attribuée aux tribunaux compétents du ressort du Tribunal de Commerce de Grenoble."
        ]
      }
    ]
  }
};
