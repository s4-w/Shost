import { Instagram, Facebook, Linkedin } from "lucide-react";
import { motion } from "motion/react";
import Logo from "@/components/Logo";
import { useLanguage } from "@/src/context/LanguageContext";

export default function Footer() {
  const { t, language } = useLanguage();
  return (
    <footer className="bg-primary text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 text-center lg:text-left">
          <div className="space-y-8 flex flex-col items-center lg:items-start">
            <a href="#" className="flex items-center group max-w-[160px]">
              <Logo className="w-full" light={true} />
            </a>
            <p className="text-white/40 leading-relaxed text-sm">
              {language === 'fr' 
                ? "Votre partenaire de confiance pour une gestion Airbnb d'exception. Excellence, transparence et sérénité pour votre patrimoine."
                : "Your trusted partner for exceptional Airbnb management. Excellence, transparency, and peace of mind for your heritage."}
            </p>
            <div className="flex gap-4">
              <motion.a 
                href="https://www.instagram.com/shost.services/" 
                target="_blank"
                rel="noopener noreferrer"
                title="Suivez SHOST Conciergerie sur Instagram"
                whileHover={{ y: -5, backgroundColor: '#c5a059', color: '#000' }}
                className="w-12 h-12 border border-white/10 flex items-center justify-center transition-all rounded-full"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="#" 
                title="Suivez SHOST Conciergerie sur Facebook"
                whileHover={{ y: -5, backgroundColor: '#c5a059', color: '#000' }}
                className="w-12 h-12 border border-white/10 flex items-center justify-center transition-all rounded-full"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="#" 
                title="Suivez SHOST Conciergerie sur LinkedIn"
                whileHover={{ y: -5, backgroundColor: '#c5a059', color: '#000' }}
                className="w-12 h-12 border border-white/10 flex items-center justify-center transition-all rounded-full"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-end">
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-10 text-white/20">Navigation</h4>
            <ul className="space-y-5 text-sm font-medium flex flex-col items-center lg:items-end">
              <li><a href="#home" className="hover:text-accent transition-colors">{t("nav.home")}</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">{t("nav.services")}</a></li>
              <li><a href="#honoraires" className="hover:text-accent transition-colors">{t("nav.fees")}</a></li>
              <li><a href="#processus" className="hover:text-accent transition-colors">{t("nav.process")}</a></li>
              <li><a href="#faq" className="hover:text-accent transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-white/20 text-[10px] uppercase tracking-[0.2em] font-bold">
          <p>© 2026 SHOST Conciergerie. {language === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}</p>
            <div className="flex gap-8">
              <motion.a 
                href="https://www.instagram.com/shost.services/" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ color: '#c5a059' }}
                className="transition-colors"
              >
                Instagram
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ color: '#c5a059' }}
                className="transition-colors"
              >
                LinkedIn
              </motion.a>
            </div>
        </div>
      </div>
    </footer>
  );
}
