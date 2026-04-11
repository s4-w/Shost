import { motion } from "motion/react";
import { Clock, BarChart3, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";

export default function Advantages() {
  const { language } = useLanguage();

  const advantages = [
    {
      title: language === 'fr' ? "Gain de Temps" : "Time Saving",
      description: language === 'fr' ? "Libérez-vous des contraintes quotidiennes. Nous nous occupons de tout, vous profitez de votre temps libre." : "Free yourself from daily constraints. We take care of everything, you enjoy your free time.",
      icon: Clock,
    },
    {
      title: language === 'fr' ? "Revenus Boostés" : "Boosted Income",
      description: language === 'fr' ? "Grâce à notre expertise et nos outils de tarification, nos propriétaires voient leurs revenus augmenter de 30% en moyenne." : "Thanks to our expertise and pricing tools, our owners see their income increase by 30% on average.",
      icon: BarChart3,
    },
    {
      title: language === 'fr' ? "Tranquillité d'Esprit" : "Peace of Mind",
      description: language === 'fr' ? "Assurance, sélection des voyageurs et entretien régulier. Votre bien est entre de bonnes mains." : "Insurance, guest selection, and regular maintenance. Your property is in good hands.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="avantages" className="py-24 bg-surface text-primary overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary uppercase tracking-[0.4em] text-xs font-bold mb-6 block"
            >
              {language === 'fr' ? 'Pourquoi SHOST ?' : 'Why SHOST?'}
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-serif mb-8 leading-tight tracking-tight"
            >
              {language === 'fr' ? "L'excellence au service de votre patrimoine" : "Excellence at the service of your heritage"}
            </motion.h2>
            <p className="text-primary text-lg mb-12 leading-relaxed max-w-xl">
              {language === 'fr' 
                ? "Nous ne sommes pas juste une conciergerie. Nous sommes votre partenaire stratégique pour transformer votre bien en une source de revenus pérenne et haut de gamme."
                : "We are not just a concierge service. We are your strategic partner to transform your property into a sustainable and high-end source of income."}
            </p>

            <div className="space-y-12">
              {advantages.map((adv, index) => (
                <motion.div 
                  key={adv.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex gap-8 group"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-white border border-primary/5 flex items-center justify-center shadow-sm group-hover:border-accent transition-colors">
                    <adv.icon className="text-primary w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif mb-3">{adv.title}</h3>
                    <p className="text-primary leading-relaxed">{adv.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" 
                alt="Modern Apartment" 
                className="w-full h-[700px] object-cover shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -left-10 bg-secondary p-12 shadow-2xl border border-primary/5">
                <span className="text-7xl font-serif font-bold block mb-2 text-primary">+30%</span>
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary">
                  {language === 'fr' ? 'Revenus moyens constatés' : 'Average income observed'}
                </span>
              </div>
            </motion.div>
            {/* Decorative element */}
            <div className="absolute -top-10 -right-10 w-64 h-64 border border-accent/10 rounded-full pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
