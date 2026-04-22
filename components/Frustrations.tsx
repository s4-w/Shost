import { useState } from "react";
import { motion } from "motion/react";
import { useLanguage } from "@/src/context/LanguageContext";
import { AlertCircle, Clock, TrendingDown, ShieldAlert, ChevronRight } from "lucide-react";

export default function Frustrations() {
  const { language } = useLanguage();
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const frustrations = [
    {
      icon: Clock,
      title: language === 'fr' ? "L'Esclavage du Calendrier" : "Calendar Slavery",
      desc: language === 'fr' 
        ? "Répondre aux messages à 23h, gérer les imprévus le dimanche..."
        : "Responding to messages at 11 PM, managing emergencies on Sundays...",
      solution: language === 'fr'
        ? "Libérez-vous : nous gérons 100% de la communication 24h/24."
        : "Free yourself: we handle 100% of communication 24/7."
    },
    {
      icon: AlertCircle,
      title: language === 'fr' ? "Le Stress du Ménage" : "Cleaning Stress",
      desc: language === 'fr' 
        ? "La peur constante de la mauvaise note. Un oubli, une tache..."
        : "The constant fear of a bad rating. One mistake, one stain...",
      solution: language === 'fr'
        ? "Excellence hôtelière : une propriété impeccable, à chaque séjour."
        : "Hotel excellence: an impeccable property, every single stay."
    },
    {
      icon: TrendingDown,
      title: language === 'fr' ? "Le Manque à Gagner" : "Lost Income",
      desc: language === 'fr' 
        ? "Conserver un prix fixe toute l'année vous fait perdre de l'argent."
        : "Keeping a fixed price all year long is costing you money.",
      solution: language === 'fr'
        ? "Optimisation : +28% de revenus grâce au Dynamic Pricing."
        : "Optimization: +28% income thanks to Dynamic Pricing."
    },
    {
      icon: ShieldAlert,
      title: language === 'fr' ? "L'Incertitude Sécuritaire" : "Security Uncertainty",
      desc: language === 'fr' 
        ? "Qui sont vraiment vos locataires ? Sans processus de sélection..."
        : "Who are your tenants really? Without a selection process...",
      solution: language === 'fr'
        ? "Sérénité : validation stricte et vérification des profils."
        : "Peace of mind: strict validation and profile verification."
    }
  ];

  return (
    <section id="frustrations" className="py-24 bg-white relative overflow-hidden border-y border-primary/5">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent uppercase tracking-[0.5em] text-[10px] font-bold mb-4 block"
          >
            {language === 'fr' ? 'Expérience SHOST' : 'SHOST Experience'}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif text-primary leading-tight lowercase first-letter:uppercase"
          >
            {language === 'fr' 
              ? <>De la contrainte à la <span className="italic font-normal">sérénité</span></>
              : <>From burden to <span className="italic font-normal">serenity</span></>}
          </motion.h2>
          <p className="mt-6 text-primary/40 text-xs tracking-widest uppercase md:block hidden">
            {language === 'fr' ? 'Survolez pour découvrir la solution' : 'Hover to discover the solution'}
          </p>
          <p className="mt-6 text-primary/40 text-xs tracking-widest uppercase md:hidden block">
            {language === 'fr' ? 'Cliquez sur les cartes pour la solution' : 'Click on cards for solution'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto">
          {frustrations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group cursor-pointer md:cursor-default"
              onClick={() => setActiveIdx(activeIdx === index ? null : index)}
            >
              <div className={`flex gap-8 items-start pb-8 border-b border-primary/5 transition-colors duration-500 ${activeIdx === index ? 'border-accent/40' : 'group-hover:border-accent/20'}`}>
                <div className="flex-shrink-0 mt-1">
                  <span className={`text-[10px] font-mono font-bold tracking-tighter transition-colors duration-500 ${activeIdx === index ? 'text-accent' : 'text-accent/40 group-hover:text-accent'}`}>0{index + 1}</span>
                </div>
                
                <div className="flex-grow min-h-[120px] flex flex-col justify-center">
                  <h3 className={`text-lg font-serif font-bold mb-3 italic tracking-wide transition-colors duration-500 ${activeIdx === index ? 'text-accent' : 'text-primary group-hover:text-accent'}`}>
                    {item.title}
                  </h3>
                  
                  <div className="relative overflow-hidden">
                    {/* Problem Text */}
                    <p className={`text-primary/50 text-sm leading-relaxed transition-all duration-500 ease-in-out ${activeIdx === index ? '-translate-y-full opacity-0' : 'group-hover:-translate-y-full group-hover:opacity-0'}`}>
                      {item.desc}
                    </p>
                    
                    {/* Solution Text (Revealed on Hover/Click) */}
                    <p className={`absolute top-0 left-0 text-primary text-sm leading-relaxed font-medium transition-all duration-500 ease-in-out ${activeIdx === index ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100'}`}>
                      {item.solution}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-2 overflow-hidden h-4">
                      <motion.div 
                        className="w-8 h-[1px] bg-accent/30 origin-left"
                        whileHover={{ scaleX: 1.5 }}
                        animate={{ scaleX: activeIdx === index ? 1.5 : 1 }}
                      ></motion.div>
                      <span className={`text-[9px] uppercase tracking-[0.2em] font-bold text-accent transition-transform duration-500 ${activeIdx === index ? 'translate-y-0' : 'translate-y-full group-hover:translate-y-0'}`}>
                        {language === 'fr' ? 'Solution SHOST' : 'SHOST Solution'}
                      </span>
                    </div>

                    {/* Mobile Button Toggle */}
                    <div className={`md:hidden p-2 rounded-full border transition-all duration-300 ${activeIdx === index ? 'bg-accent border-accent text-primary rotate-180' : 'border-primary/10 text-primary/40'}`}>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 pt-20 border-t border-primary/5 text-center"
        >
          <p className="text-primary text-[13px] italic max-w-xl mx-auto leading-relaxed">
            {language === 'fr' 
              ? "Vous méritez de profiter de vos revenus sans subir ces contraintes. Notre métier est de transformer ces frustrations en une sérénité totale." 
              : "You deserve to enjoy your income without experiencing these constraints. Our job is to transform these frustrations into total serenity."}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
