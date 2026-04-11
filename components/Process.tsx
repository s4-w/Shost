import { motion } from "motion/react";
import { Search, Camera, Key, Wallet } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";

export default function Process() {
  const { language } = useLanguage();

  const steps = [
    {
      icon: Search,
      title: language === 'fr' ? "Estimation & Rencontre" : "Estimation & Meeting",
      description: language === 'fr' ? "Nous analysons le potentiel de votre bien et définissons ensemble vos objectifs de revenus lors d'une visite personnalisée." : "We analyze your property's potential and define your income goals together during a personalized visit."
    },
    {
      icon: Camera,
      title: language === 'fr' ? "Mise en Valeur" : "Highlighting",
      description: language === 'fr' ? "Shooting photo professionnel, rédaction d'annonces optimisées et diffusion sur les plus grandes plateformes de réservation." : "Professional photo shoot, optimized listing writing, and distribution on major booking platforms."
    },
    {
      icon: Key,
      title: language === 'fr' ? "Gestion Opérationnelle" : "Operational Management",
      description: language === 'fr' ? "Nous prenons le relais : sélection des voyageurs, accueil, ménage hôtelier et maintenance de votre bien 24/7." : "We take over: guest selection, welcome, hotel-standard cleaning, and 24/7 property maintenance."
    },
    {
      icon: Wallet,
      title: language === 'fr' ? "Revenus & Sérénité" : "Income & Peace of Mind",
      description: language === 'fr' ? "Suivez vos performances en temps réel sur votre espace propriétaire et recevez vos revenus chaque mois, sans effort." : "Track your performance in real-time and receive your income every month, effortlessly."
    }
  ];

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
            {language === 'fr' ? 'Simplicité & Transparence' : 'Simplicity & Transparency'}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-primary"
          >
            {language === 'fr' ? 'Votre projet en 4 étapes' : 'Your project in 4 steps'}
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
