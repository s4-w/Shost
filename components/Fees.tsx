import { motion } from "motion/react";
import { useLanguage } from "@/src/context/LanguageContext";
import { Check, Shield, TrendingUp, Zap } from "lucide-react";

export default function Fees() {
  const { language } = useLanguage();

  const benefits = [
    {
      icon: Zap,
      title: language === 'fr' ? "Zéro Frais Fixes" : "Zero Fixed Fees",
      desc: language === 'fr' ? "Pas d'abonnement mensuel. Nous investissons sur votre bien pour maximiser son potentiel." : "No monthly subscription. We invest in your property to maximize its potential."
    },
    {
      icon: TrendingUp,
      title: language === 'fr' ? "Revenus Maximisés" : "Maximized Income",
      desc: language === 'fr' ? "Notre Dynamic Pricing augmente vos revenus de 28% en moyenne par rapport à une gestion seule." : "Our Dynamic Pricing increases your income by an average of 28% compared to self-management."
    },
    {
      icon: Shield,
      title: language === 'fr' ? "Gestion des Risques" : "Risk Management",
      desc: language === 'fr' ? "Sélection rigoureuse des voyageurs et suivi constant pour protéger votre patrimoine." : "Rigorous guest selection and constant monitoring to protect your heritage."
    }
  ];

  return (
    <section id="honoraires" className="py-32 bg-primary text-white overflow-hidden relative">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent rounded-full blur-[150px] -mr-64 -mt-64"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent rounded-full blur-[120px] -ml-40 -mb-40"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent uppercase tracking-[0.4em] text-xs font-bold mb-6 block"
            >
              {language === 'fr' ? 'Transparence Totale' : 'Full Transparency'}
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 leading-tight text-white"
            >
              {language === 'fr' 
                ? <>Une gestion basée <br />sur la performance</>
                : <>Performance-based <br />management</>}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-lg md:text-xl max-w-xl leading-relaxed mb-12"
            >
              {language === 'fr'
                ? "Chez SHOST, nous alignons nos intérêts sur les vôtres. Notre succès dépend directement de la rentabilité de votre bien."
                : "At SHOST, we align our interests with yours. Our success directly depends on the profitability of your property."}
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <benefit.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider mb-2">{benefit.title}</h4>
                    <p className="text-white/40 text-xs leading-relaxed">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Standard Fees Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-t border-white/10 pt-12 mb-12"
            >
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-8">
                {language === 'fr' ? "Frais Classiques" : "Classic Fees"}
              </h4>
              <div className="space-y-6">
                <div className="flex justify-between items-center group">
                  <span className="text-sm text-white/60 group-hover:text-white transition-colors">
                    {language === 'fr' ? "Commission de Gestion" : "Management Commission"}
                  </span>
                  <div className="flex-grow mx-4 border-b border-dashed border-white/10"></div>
                  <span className="text-sm font-bold text-accent">24% TTC</span>
                </div>
                <div className="flex justify-between items-center group">
                  <span className="text-sm text-white/60 group-hover:text-white transition-colors">
                    {language === 'fr' ? "Frais de démarrage" : "Starting fees"}
                  </span>
                  <div className="flex-grow mx-4 border-b border-dashed border-white/10"></div>
                  <span className="text-sm font-bold text-accent">100€</span>
                </div>
              </div>
            </motion.div>

            {/* Optional Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-t border-white/10 pt-12"
            >
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-8 opacity-60">
                {language === 'fr' ? "Options d'achats" : "Purchase Options"}
              </h4>
              <div className="space-y-6">
                <div className="flex justify-between items-center group">
                  <span className="text-sm text-white/40 group-hover:text-white/60 transition-colors">
                    {language === 'fr' ? "Boîte à clés & Installation" : "Key box & Installation"}
                  </span>
                  <div className="flex-grow mx-4 border-b border-dashed border-white/5"></div>
                  <span className="text-sm font-bold text-accent/60">45€</span>
                </div>
                <div className="flex justify-between items-center group">
                  <span className="text-sm text-white/40 group-hover:text-white/60 transition-colors">
                    {language === 'fr' ? "Shooting Photo Professionnel" : "Professional Photo Shoot"}
                  </span>
                  <div className="flex-grow mx-4 border-b border-dashed border-white/5"></div>
                  <span className="text-sm font-bold text-accent/60">{language === 'fr' ? "dès 90€" : "from 90€"}</span>
                </div>
                <div className="flex justify-between items-center group">
                  <span className="text-sm text-white/40 group-hover:text-white/60 transition-colors">
                    {language === 'fr' ? "Solutions accès intelligent (Digicode connecté, serrure connectée...)" : "Smart access solutions (Smart keypad, smart lock...)"}
                  </span>
                  <div className="flex-grow mx-4 border-b border-dashed border-white/5"></div>
                  <span className="text-sm font-bold text-accent/60">{language === 'fr' ? "Sur devis" : "On quote"}</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-1 md:p-6 lg:p-12 overflow-hidden group"
            >
              {/* Card Container */}
              <div className="bg-white/[0.02] border border-white/10 backdrop-blur-xl p-8 md:p-14 relative z-10">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-[1px] bg-accent/50 mb-10"></div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-12 w-full">
                    <div className="relative group/price">
                      <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent mb-4">Commission</p>
                      <div className="text-7xl md:text-8xl font-serif text-white relative inline-block transition-transform duration-500 group-hover/price:scale-110">
                        24<span className="text-2xl font-sans font-light text-accent ml-1">%</span>
                      </div>
                    </div>
                    
                    <div className="h-[1px] md:h-20 w-20 md:w-[1px] bg-white/10 mx-auto md:mx-0"></div>

                    <div className="relative group/price">
                      <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent mb-4">{language === 'fr' ? 'Frais de démarrage' : 'Startup fee'}</p>
                      <div className="text-7xl md:text-8xl font-serif text-white relative inline-block transition-transform duration-500 group-hover/price:scale-110">
                        100<span className="text-2xl font-sans font-light text-accent ml-1">€</span>
                      </div>
                    </div>
                  </div>

                  <div className="w-full h-[1px] bg-white/5 mb-10"></div>
                  
                  <div className="space-y-4 mb-12 w-full max-w-xs mx-auto">
                    <div className="flex items-center gap-3 text-white/40 group/check">
                      <div className="w-5 h-5 rounded-full border border-accent/20 flex items-center justify-center group-hover/check:border-accent group-hover/check:bg-accent transition-all">
                        <Check className="w-3 h-3 text-accent group-hover/check:text-primary" />
                      </div>
                      <span className="text-xs uppercase tracking-widest font-bold">{language === 'fr' ? "Blanchisserie" : "Laundry"}</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/40 group/check">
                      <div className="w-5 h-5 rounded-full border border-accent/20 flex items-center justify-center group-hover/check:border-accent group-hover/check:bg-accent transition-all">
                        <Check className="w-3 h-3 text-accent group-hover/check:text-primary" />
                      </div>
                      <span className="text-xs uppercase tracking-widest font-bold">{language === 'fr' ? "Maintenance 24/7" : "24/7 Maintenance"}</span>
                    </div>
                  </div>

                  <div className="mb-10 w-full">
                    <div className="bg-accent/10 border border-accent/20 p-6 rounded-none relative">
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-primary text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                        {language === 'fr' ? "Ménage & Entretien" : "Cleaning & Maintenance"}
                      </div>
                      <p className="text-sm md:text-base text-white font-medium leading-relaxed">
                        {language === 'fr' 
                          ? "Frais de ménage facturés séparément, basés sur le temps réel d'intervention." 
                          : "Cleaning fees billed separately, based on actual intervention time."}
                      </p>
                      <p className="text-[10px] text-accent mt-3 uppercase tracking-widest font-bold">
                        {language === 'fr' ? "Transparence & Équité" : "Transparency & Fairness"}
                      </p>
                    </div>
                  </div>

                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-accent text-primary px-10 py-5 text-xs font-bold uppercase tracking-[0.3em] hover:bg-white transition-all shadow-xl inline-block"
                  >
                    {language === 'fr' ? "Confier mon bien" : "Entrust my property"}
                  </motion.a>
                  
                  <p className="mt-8 text-[9px] uppercase tracking-[0.2em] font-bold text-white/20">
                    * {language === 'fr' ? "Commission calculée sur le montant brut des nuitées" : "Commission calculated on gross night rates"}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
