import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";

export default function Hero() {
  const { t, language } = useLanguage();

  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-surface">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop"
          alt="Prestigious Luxury Interior"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl text-primary font-serif leading-[0.9] mb-8 tracking-tighter">
              {language === 'fr' ? (
                <>Maximisez vos <br /><span className="italic text-accent">revenus</span></>
              ) : (
                <>Maximize your <br /><span className="italic text-accent">income</span></>
              )}
            </h1>
            <p className="text-primary text-lg md:text-xl mb-12 max-w-lg mx-auto leading-relaxed font-medium">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                onClick={() => document.getElementById('estimateur')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary hover:bg-accent text-white rounded-none px-12 py-8 text-sm uppercase tracking-[0.2em] transition-all shadow-xl hover:shadow-accent/20"
              >
                {t("hero.cta.estimate")}
                <ArrowRight className="ml-3 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-primary/20 text-primary hover:bg-primary hover:text-white rounded-none px-12 py-8 text-sm uppercase tracking-[0.2em] transition-all"
              >
                {t("nav.services")}
              </Button>
            </div>
          </motion.div>
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
