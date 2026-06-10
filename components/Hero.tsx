import { motion } from "motion/react";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Instagram } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import { cn } from "@/lib/utils";

export default function Hero() {
  const { t, language } = useLanguage();

  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden bg-surface">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop"
          alt="Intérieur d'appartement de luxe prestigieux géré par SHOST Conciergerie"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-primary font-serif leading-[1.1] mb-8 tracking-tighter"
            >
              {language === 'fr' ? (
                <>Maximisez vos <br /><span className="italic text-accent">revenus</span> à Grenoble</>
              ) : (
                <>Maximize your <br /><span className="italic text-accent">income</span> in Grenoble</>
              )}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="text-primary text-lg md:text-xl mb-12 max-w-lg mx-auto leading-relaxed font-medium"
            >
              {t("hero.subtitle")}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.a 
                href="#estimateur"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "bg-primary hover:bg-accent text-white rounded-none px-12 py-8 text-sm uppercase tracking-[0.2em] transition-all shadow-xl hover:shadow-accent/20 h-auto"
                )}
              >
                {t("hero.cta.estimate")}
                <ArrowRight className="ml-3 w-5 h-5" />
              </motion.a>
              <motion.a 
                href="#services"
                whileHover={{ scale: 1.05, y: -2, backgroundColor: "rgba(0,0,0,1)", color: "white" }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "border-primary/20 text-primary hover:bg-primary hover:text-white rounded-none px-12 py-8 text-sm uppercase tracking-[0.2em] transition-all h-auto"
                )}
              >
                {t("nav.services")}
              </motion.a>
              <motion.a
                href="https://www.instagram.com/shost.services/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: "#c5a059" }}
                className="flex items-center justify-center p-4 text-primary transition-colors"
                title="Suivez-nous sur Instagram"
              >
                <Instagram className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
}
