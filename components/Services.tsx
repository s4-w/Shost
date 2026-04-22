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
import { useLanguage } from "@/src/context/LanguageContext";

export default function Services() {
  const { t, language } = useLanguage();
  const [selectedService, setSelectedService] = useState<any | null>(null);

  const services = [
    {
      title: language === 'fr' ? "Optimisation d'Annonce" : "Listing Optimization",
      description: language === 'fr' ? "Photos professionnelles et rédaction persuasive pour un taux d'occupation maximal." : "Professional photos and persuasive writing for maximum occupancy.",
      icon: Camera,
      details: language === 'fr' ? [
        "Shooting photo HDR",
        "Rédaction optimisée SEO multi-langues",
        "Configuration des paramètres de réservation",
        "Mise en avant des points forts du bien"
      ] : [
        "HDR photo shoot",
        "Multi-language SEO optimized writing",
        "Booking settings configuration",
        "Highlighting property strengths"
      ]
    },
    {
      title: language === 'fr' ? "Gestion des Voyageurs" : "Guest Management",
      description: language === 'fr' ? "Communication 24/7, sélection rigoureuse et assistance personnalisée." : "24/7 communication, rigorous selection, and personalized assistance.",
      icon: Users,
      details: language === 'fr' ? [
        "Réponse aux demandes en moins de 15 min",
        "Vérification d'identité des voyageurs",
        "Gestion des cautions et litiges",
        "Livret d'accueil numérique personnalisé"
      ] : [
        "Response to requests in under 15 min",
        "Guest identity verification",
        "Security deposit and dispute management",
        "Personalized digital welcome book"
      ]
    },
    {
      title: language === 'fr' ? "Ménage & Blanchisserie" : "Cleaning & Laundry",
      description: language === 'fr' ? "Nettoyage professionnel entre chaque séjour avec des standards hôteliers." : "Professional cleaning between stays with hotel standards.",
      icon: Sparkles,
      details: language === 'fr' ? [
        "Nettoyage complet aux normes hôtelières",
        "Entretien du linge propriétaire",
        "Réapprovisionnement des consommables",
        "Contrôle qualité après chaque passage"
      ] : [
        "Full cleaning to hotel standards",
        "Owner's linen maintenance",
        "Consumables replenishment",
        "Quality control after each visit"
      ]
    },
    {
      title: language === 'fr' ? "Check-in & Check-out" : "Check-in & Check-out",
      description: language === 'fr' ? "Accueil physique ou boîte à clés sécurisée pour une flexibilité totale." : "Physical welcome or secure key box for total flexibility.",
      icon: Key,
      details: language === 'fr' ? [
        "Accueil personnalisé des voyageurs",
        "Remise des clés sécurisée",
        "État des lieux d'entrée et de sortie",
        "Présentation du quartier et des commodités"
      ] : [
        "Personalized guest welcome",
        "Secure key handover",
        "Entry and exit inventory",
        "Neighborhood and amenities presentation"
      ]
    },
    {
      title: language === 'fr' ? "Gestion des Prix" : "Price Management",
      description: language === 'fr' ? "Algorithmes de tarification dynamique pour optimiser vos revenus chaque jour." : "Dynamic pricing algorithms to optimize your income every day.",
      icon: TrendingUp,
      details: language === 'fr' ? [
        "Ajustement quotidien des tarifs",
        "Analyse de la concurrence locale",
        "Optimisation selon les événements locaux",
        "Stratégie de remplissage dernière minute"
      ] : [
        "Daily price adjustment",
        "Local competition analysis",
        "Optimization based on local events",
        "Last-minute filling strategy"
      ]
    },
    {
      title: language === 'fr' ? "Maintenance" : "Maintenance",
      description: language === 'fr' ? "Interventions rapides pour les petits travaux et entretien régulier." : "Quick interventions for small repairs and regular maintenance.",
      icon: CalendarCheck,
      details: language === 'fr' ? [
        "Petit bricolage et réparations d'urgence",
        "Suivi de l'état général du bien",
        "Coordination d'artisans spécialisés",
        "Entretien préventif régulier"
      ] : [
        "Small DIY and emergency repairs",
        "General property condition monitoring",
        "Specialized craftsman coordination",
        "Regular preventive maintenance"
      ]
    },
  ];

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
            {language === 'fr' ? 'Notre Expertise' : 'Our Expertise'}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif mb-6"
          >
            {language === 'fr' ? 'Une gestion complète pour votre sérénité' : 'Complete management for your peace of mind'}
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
                    {language === 'fr' ? 'Voir les détails' : 'View details'} <span>→</span>
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
