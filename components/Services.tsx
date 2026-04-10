import { useState } from "react";
import { motion } from "motion/react";
import { 
  Camera, 
  Users, 
  Sparkles, 
  Key, 
  TrendingUp, 
  CalendarCheck 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ServiceModal from "./ServiceModal";

const services = [
  {
    title: "Optimisation d'Annonce",
    description: "Photos professionnelles et rédaction persuasive pour un taux d'occupation maximal.",
    icon: Camera,
    details: [
      "Shooting photo professionnel HDR",
      "Rédaction optimisée SEO multi-langues",
      "Configuration des paramètres de réservation",
      "Mise en avant des points forts du bien"
    ]
  },
  {
    title: "Gestion des Voyageurs",
    description: "Communication 24/7, sélection rigoureuse et assistance personnalisée.",
    icon: Users,
    details: [
      "Réponse aux demandes en moins de 15 min",
      "Vérification d'identité des voyageurs",
      "Gestion des cautions et litiges",
      "Livret d'accueil numérique personnalisé"
    ]
  },
  {
    title: "Ménage & Blanchisserie",
    description: "Nettoyage professionnel entre chaque séjour avec des standards hôteliers.",
    icon: Sparkles,
    details: [
      "Nettoyage complet aux normes hôtelières",
      "Linge de maison premium fourni",
      "Réapprovisionnement des consommables",
      "Contrôle qualité après chaque passage"
    ]
  },
  {
    title: "Check-in & Check-out",
    description: "Accueil physique ou boîte à clés sécurisée pour une flexibilité totale.",
    icon: Key,
    details: [
      "Accueil personnalisé des voyageurs",
      "Remise des clés sécurisée",
      "État des lieux d'entrée et de sortie",
      "Présentation du quartier et des commodités"
    ]
  },
  {
    title: "Gestion des Prix",
    description: "Algorithmes de tarification dynamique pour optimiser vos revenus chaque jour.",
    icon: TrendingUp,
    details: [
      "Ajustement quotidien des tarifs",
      "Analyse de la concurrence locale",
      "Optimisation selon les événements locaux",
      "Stratégie de remplissage dernière minute"
    ]
  },
  {
    title: "Maintenance",
    description: "Interventions rapides pour les petits travaux et entretien régulier.",
    icon: CalendarCheck,
    details: [
      "Petit bricolage et réparations d'urgence",
      "Suivi de l'état général du bien",
      "Coordination d'artisans spécialisés",
      "Entretien préventif régulier"
    ]
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary uppercase tracking-[0.4em] text-xs font-bold mb-4 block"
          >
            Notre Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif mb-6"
          >
            Une gestion complète pour votre sérénité
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-[1px] bg-accent w-24 mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedService(service)}
              className="cursor-pointer"
            >
              <Card className="border border-primary/5 shadow-sm bg-surface hover:bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group h-full rounded-none">
                <CardContent className="p-10">
                  <div className="w-16 h-16 bg-secondary border border-primary/5 flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                    <service.icon className="text-primary group-hover:text-white transition-colors w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-serif mb-4">{service.title}</h3>
                  <p className="text-primary leading-relaxed text-sm">
                    {service.description}
                  </p>
                  <div className="mt-8 flex items-center gap-2 text-accent text-[10px] uppercase tracking-[0.2em] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    Voir les détails <span>→</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <ServiceModal 
        isOpen={!!selectedService} 
        onClose={() => setSelectedService(null)} 
        service={selectedService} 
      />
    </section>
  );
}
