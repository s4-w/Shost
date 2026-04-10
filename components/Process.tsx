import { motion } from "motion/react";
import { Search, Camera, Key, Wallet } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Estimation & Rencontre",
    description: "Nous analysons le potentiel de votre bien et définissons ensemble vos objectifs de revenus lors d'une visite personnalisée."
  },
  {
    icon: Camera,
    title: "Mise en Valeur",
    description: "Shooting photo professionnel, rédaction d'annonces optimisées et diffusion sur les plus grandes plateformes de réservation."
  },
  {
    icon: Key,
    title: "Gestion Opérationnelle",
    description: "Nous prenons le relais : sélection des voyageurs, accueil, ménage hôtelier et maintenance de votre bien 24/7."
  },
  {
    icon: Wallet,
    title: "Revenus & Sérénité",
    description: "Suivez vos performances en temps réel sur votre espace propriétaire et recevez vos revenus chaque mois, sans effort."
  }
];

export default function Process() {
  return (
    <section id="processus" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block"
          >
            Simplicité & Transparence
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-primary"
          >
            Votre projet en 4 étapes
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/4 left-0 right-0 h-[1px] bg-black/10 -z-10" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 bg-surface flex items-center justify-center mb-8 relative transition-all duration-500 group-hover:bg-black">
                <span className="absolute -top-3 -right-3 w-8 h-8 bg-[#c5a059] text-black text-xs font-bold flex items-center justify-center rounded-full z-20 shadow-lg border-2 border-white">
                  {index + 1}
                </span>
                <step.icon className="w-8 h-8 text-primary transition-colors duration-500 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-serif mb-4 text-primary">{step.title}</h3>
              <p className="text-primary/60 text-sm leading-relaxed max-w-[250px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
