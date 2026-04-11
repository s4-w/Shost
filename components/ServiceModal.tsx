import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { useState } from "react";
import { useLanguage } from "@/src/context/LanguageContext";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    description: string;
    details?: string[];
  } | null;
}

export default function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  const { language } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-primary/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white w-full max-w-3xl shadow-2xl overflow-hidden border border-primary/5 flex flex-col md:flex-row"
          >
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="absolute top-6 right-6 z-[110] text-primary/40 hover:text-primary transition-colors p-2 hover:bg-primary/5 rounded-full"
              aria-label={language === 'fr' ? "Fermer" : "Close"}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Content */}
            <div className="flex-1 p-10 md:p-16">
              <span className="text-accent uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">
                {language === 'fr' ? 'Service Premium' : 'Premium Service'}
              </span>
              <h3 className="text-4xl font-serif mb-6 text-primary">{service.title}</h3>
              <p className="text-primary text-lg leading-relaxed mb-8">
                {service.description}
              </p>
              
              <div className="space-y-4 mb-10">
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary">
                  {language === 'fr' ? 'Ce qui est inclus :' : 'What is included:'}
                </p>
                <ul className="grid grid-cols-1 gap-3">
                  {(service.details || (language === 'fr' ? [
                    "Gestion professionnelle et rigoureuse",
                    "Reporting détaillé mensuel",
                    "Support dédié 24/7",
                    "Optimisation continue des performances"
                  ] : [
                    "Professional and rigorous management",
                    "Detailed monthly reporting",
                    "Dedicated 24/7 support",
                    "Continuous performance optimization"
                  ])).map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-primary">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                onClick={() => {
                  onClose();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-primary hover:bg-accent text-white rounded-none px-10 py-6 uppercase tracking-[0.2em] text-[10px] transition-all"
              >
                {language === 'fr' ? 'En savoir plus' : 'Learn more'}
              </Button>
            </div>

            {/* Visual Side */}
            <div className="hidden md:block w-1/3 bg-secondary relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent to-transparent" />
              </div>
              <div className="h-full flex items-center justify-center p-12 relative z-10">
                <Logo className="w-32 opacity-20" light={false} />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
