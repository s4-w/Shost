import { motion } from "motion/react";
import { useLanguage } from "@/src/context/LanguageContext";
import { Smartphone, MapPin, Coffee, Wifi, BookOpen } from "lucide-react";

export default function DigitalGuide() {
  const { language } = useLanguage();

  const features = [
    { icon: Wifi, text: language === 'fr' ? "Codes Wi-Fi instantanés" : "Instant Wi-Fi codes" },
    { icon: Coffee, text: language === 'fr' ? "Mode d'emploi équipements" : "Equipment manuals" },
    { icon: MapPin, text: language === 'fr' ? "Recommandations locales" : "Local recommendations" },
    { icon: BookOpen, text: language === 'fr' ? "Règles de la maison" : "House rules" },
  ];

  return (
    <section className="py-32 bg-surface overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 relative flex justify-center">
            {/* Phone Mockup Illustration */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="relative w-72 h-[580px] bg-primary rounded-[3rem] border-[8px] border-primary shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              {/* Screen Content */}
              <div className="bg-white h-full w-full p-6 flex flex-col">
                <div className="w-12 h-1 bg-primary/10 mx-auto rounded-full mb-8"></div>
                <div className="mb-8">
                  <div className="text-[10px] uppercase tracking-widest text-accent font-bold mb-2">Welcome to</div>
                  <div className="text-2xl font-serif text-primary">Villa Serenity</div>
                </div>
                
                <div className="space-y-4 flex-grow">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="p-4 bg-secondary border border-primary/5 rounded-2xl flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                        <div className="w-3 h-3 bg-accent/30 rounded-full"></div>
                      </div>
                      <div className="flex-grow">
                        <div className="h-2 w-20 bg-primary/10 rounded-full mb-1"></div>
                        <div className="h-1.5 w-12 bg-primary/5 rounded-full"></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-auto h-32 w-full bg-accent/10 rounded-3xl flex items-center justify-center border border-accent/20">
                    <div className="text-center">
                        <div className="text-[10px] font-bold text-accent uppercase tracking-tighter">Your Digital Guide</div>
                    </div>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative circles */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[80px]"></div>
          </div>

          <div className="lg:w-1/2">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-accent uppercase tracking-[0.4em] text-[10px] font-bold mb-6 block"
            >
              {language === 'fr' ? 'Le petit plus SHOST' : 'The SHOST touch'}
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-serif text-primary mb-8 leading-tight italic"
            >
              {language === 'fr' 
                ? "Un livret d'accueil digital pour vos voyageurs" 
                : "A digital welcome booklet for your guests"}
            </motion.h2>
            <p className="text-primary/60 text-lg mb-12 leading-relaxed">
              {language === 'fr' 
                ? "Fini les livrets papier poussiéreux. Nous offrons à chaque voyageur un guide numérique interactif regroupant toutes les informations nécessaires à leur séjour, accessible sur smartphone dès leur réservation."
                : "No more dusty paper booklets. We offer every guest an interactive digital guide containing all the information needed for their stay, accessible on smartphone right from their booking."}
            </p>

            <div className="grid grid-cols-2 gap-8">
              {features.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-500 text-primary">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest text-primary/80 group-hover:text-primary transition-colors">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-16 p-8 bg-primary text-white flex items-center gap-6"
            >
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-accent" />
              </div>
              <p className="text-sm font-medium leading-relaxed italic opacity-80">
                {language === 'fr' 
                  ? "Moins de questions pour vous, une meilleure expérience pour eux, et de meilleures notes pour votre bien."
                  : "Fewer questions for you, a better experience for them, and better ratings for your property."}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
