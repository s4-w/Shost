import { Instagram, Facebook, Linkedin } from "lucide-react";
import Logo from "@/components/Logo";
import { useLanguage } from "@/src/context/LanguageContext";
import { useState } from "react";
import LegalModal, { LegalType } from "./LegalModal";

export default function Footer() {
  const { t, language } = useLanguage();
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; type: LegalType }>({
    isOpen: false,
    type: 'mentions'
  });

  const openLegal = (type: LegalType) => {
    setLegalModal({ isOpen: true, type });
  };

  return (
    <footer className="bg-primary text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24 text-center lg:text-left">
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
              <a href="#" className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all rounded-full">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all rounded-full">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all rounded-full">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-10 text-white/20">Navigation</h4>
            <ul className="space-y-5 text-sm font-medium">
              <li><a href="#" className="hover:text-accent transition-colors">{t("nav.home")}</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">{t("nav.services")}</a></li>
              <li><a href="#honoraires" className="hover:text-accent transition-colors">{t("nav.fees")}</a></li>
              <li><a href="#frustrations" className="hover:text-accent transition-colors">{t("nav.frustrations")}</a></li>
              <li><a href="#faq" className="hover:text-accent transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-10 text-white/20">
              {language === 'fr' ? 'Légal' : 'Legal'}
            </h4>
            <ul className="space-y-5 text-sm font-medium">
              <li>
                <button 
                  onClick={() => openLegal('mentions')}
                  className="hover:text-accent transition-colors cursor-pointer"
                >
                  {language === 'fr' ? 'Mentions Légales' : 'Legal Notice'}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => openLegal('privacy')}
                  className="hover:text-accent transition-colors cursor-pointer"
                >
                  {language === 'fr' ? 'Confidentialité' : 'Privacy Policy'}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => openLegal('terms')}
                  className="hover:text-accent transition-colors cursor-pointer"
                >
                  {language === 'fr' ? 'CGV' : 'Terms of Service'}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => openLegal('cookies')}
                  className="hover:text-accent transition-colors cursor-pointer"
                >
                  Cookies
                </button>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-10 text-white/20">Newsletter</h4>
            <p className="text-white/40 mb-8 text-sm">
              {language === 'fr' 
                ? 'Recevez nos conseils exclusifs pour optimiser vos locations.' 
                : 'Receive our exclusive advice to optimize your rentals.'}
            </p>
            <form className="flex gap-2 w-full max-w-sm">
              <input 
                type="email" 
                placeholder={language === 'fr' ? "Votre email" : "Your email"} 
                className="bg-white/5 border-none px-6 py-4 flex-grow focus:ring-1 focus:ring-accent outline-none text-sm text-white"
              />
              <button className="bg-accent text-white px-6 py-4 hover:bg-accent/80 transition-colors text-xs font-bold uppercase tracking-widest">
                OK
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-white/20 text-[10px] uppercase tracking-[0.2em] font-bold">
          <p>© 2026 SHOST Conciergerie. {language === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-accent transition-colors">Instagram</a>
            <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>

      <LegalModal 
        isOpen={legalModal.isOpen} 
        onClose={() => setLegalModal({ ...legalModal, isOpen: false })}
        type={legalModal.type}
      />
    </footer>
  );
}
