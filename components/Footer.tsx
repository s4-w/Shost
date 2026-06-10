import { Instagram, Facebook, Linkedin } from "lucide-react";
import { motion } from "motion/react";
import Logo from "@/components/Logo";
import { useLanguage } from "@/src/context/LanguageContext";

export default function Footer() {
  const { t, language } = useLanguage();
  return (
    <footer className="bg-primary text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24 text-center md:text-left">
          <div className="space-y-8 flex flex-col items-center md:items-start">
            <a href="#" className="flex items-center group max-w-[160px]">
              <Logo className="w-full" light={true} />
            </a>
            <p className="text-white/40 leading-relaxed text-sm">
              {language === 'fr' 
                ? "Votre partenaire de confiance pour une gestion Airbnb d'exception à Grenoble. Excellence, transparence et sérénité pour votre patrimoine immobilier."
                : "Your trusted partner for exceptional Airbnb management in Grenoble. Excellence, transparency, and peace of mind for your real estate heritage."}
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

          {/* Secteurs d'intervention - Local SEO Sector Matrix */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-4 text-accent">
              {language === 'fr' ? "Zones d'Intervention Isère" : "Service Areas Isère"}
            </h4>
            <div className="text-xs text-white/55 space-y-3 max-w-xs leading-relaxed text-center md:text-left">
              <p>
                <strong className="text-white font-semibold flex items-center justify-center md:justify-start gap-1">📍 Grenoble Hyper-centre :</strong>
                <span>Championnet, Île Verte, Europole, Presqu'île, Grands Boulevards, Saint-Bruno, Chavant.</span>
              </p>
              <p>
                <strong className="text-white font-semibold flex items-center justify-center md:justify-start gap-1">🏔️ Grésivaudan & Alpes :</strong>
                <span>Meylan, Saint-Ismier, Corenc, Montbonnot-Saint-Martin, Biviers, Gières, Bernin, Crolles.</span>
              </p>
              <p>
                <strong className="text-white font-semibold flex items-center justify-center md:justify-start gap-1">🏡 Métropole Grenobloise :</strong>
                <span>Saint-Martin-d’Hères, Échirolles, Fontaine, Seyssinet-Pariset, Voiron, Vizille, Sassenage.</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-10 text-white/20">Navigation</h4>
            <ul className="space-y-5 text-sm font-medium flex flex-col items-center md:items-end">
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
