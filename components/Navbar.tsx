import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "@/components/Logo";
import ContactModal from "./ContactModal";
import { useLanguage } from "@/src/context/LanguageContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t("nav.home"), href: "#" },
    { name: t("nav.services"), href: "#services" },
    { name: t("nav.fees"), href: "#honoraires" },
    { name: t("nav.estimate"), href: "#estimateur" },
    { name: t("nav.faq"), href: "#faq" },
    { name: t("nav.about"), href: "#a-propos" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass py-2 shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center">
        {/* Logo - Left Side */}
        <a href="#" className="flex items-center group min-w-[100px] max-w-[120px] md:max-w-[140px] lg:max-w-[160px] flex-shrink-0">
          <Logo className="w-full" light={!isScrolled} />
        </a>

        {/* Desktop Links - Left Aligned */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10 ml-8 lg:ml-12 flex-grow">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[10px] lg:text-[11px] font-semibold transition-colors uppercase tracking-[0.2em] whitespace-nowrap ${
                isScrolled ? "text-primary hover:text-accent" : "text-white/80 hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions - Right Side */}
        <div className="hidden md:flex items-center justify-end gap-6 lg:gap-10">
          {/* Language Switcher */}
          <div className={`flex items-center gap-2 lg:gap-3 border-l h-6 pl-6 lg:pl-10 ${isScrolled ? "border-primary/10" : "border-white/10"}`}>
            <button 
              onClick={() => setLanguage('fr')}
              className={`text-[10px] font-bold tracking-widest transition-colors ${language === 'fr' ? 'text-accent' : (isScrolled ? 'text-primary/40 hover:text-primary' : 'text-white/40 hover:text-white')}`}
            >
              FR
            </button>
            <span className={`text-[10px] ${isScrolled ? "text-primary/10" : "text-white/10"}`}>|</span>
            <button 
              onClick={() => setLanguage('en')}
              className={`text-[10px] font-bold tracking-widest transition-colors ${language === 'en' ? 'text-accent' : (isScrolled ? 'text-primary/40 hover:text-primary' : 'text-white/40 hover:text-white')}`}
            >
              EN
            </button>
          </div>

          <Button 
            onClick={() => setIsContactOpen(true)}
            className={`bg-primary hover:bg-accent text-white rounded-none px-6 lg:px-10 py-4 lg:py-6 uppercase tracking-[0.2em] text-[10px] transition-all ${
              !isScrolled && "bg-white text-primary hover:bg-black hover:text-white border-none"
            }`}
          >
            {t("nav.contact")}
          </Button>
        </div>

        {/* Contact Modal */}
        <ContactModal 
          isOpen={isContactOpen} 
          onClose={() => setIsContactOpen(false)} 
        />

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className={`transition-colors ${isScrolled ? 'text-primary' : 'text-white'}`}>
                  <Menu className="w-7 h-7" />
                </Button>
              }
            />
            <SheetContent side="right" className="bg-white border-l-primary/5 w-full sm:max-w-md p-0 overflow-hidden">
              <div className="flex flex-col h-full bg-surface">
                {/* Header/Top part */}
                <div className="p-10 border-b border-primary/5 bg-white flex flex-col items-center justify-center relative">
                  <Logo className="max-w-[120px]" light={false} />
                  <div className="text-[8px] uppercase tracking-[0.4em] font-bold text-primary/20 mt-4">Menu</div>
                </div>

                {/* Nav Links */}
                <nav className="flex-1 overflow-y-auto py-16 px-10">
                  <div className="flex flex-col gap-10 items-center text-center">
                    {navLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        className="text-4xl font-serif text-primary hover:text-accent transition-all duration-300"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </nav>

                {/* Footer/Bottom part */}
                <div className="p-10 bg-white border-t border-primary/5 space-y-12 pb-16">
                  {/* Language Selector */}
                  <div className="flex items-center justify-center gap-10">
                    <button 
                      onClick={() => setLanguage('fr')}
                      className={`text-[12px] font-bold tracking-[0.3em] transition-all pb-2 border-b-2 ${language === 'fr' ? 'text-accent border-accent' : 'text-primary/20 border-transparent hover:text-primary'}`}
                    >
                      FRANÇAIS
                    </button>
                    <button 
                      onClick={() => setLanguage('en')}
                      className={`text-[12px] font-bold tracking-[0.3em] transition-all pb-2 border-b-2 ${language === 'en' ? 'text-accent border-accent' : 'text-primary/20 border-transparent hover:text-primary'}`}
                    >
                      ENGLISH
                    </button>
                  </div>

                  <Button 
                    onClick={() => {
                      setIsContactOpen(true);
                    }}
                    className="bg-primary hover:bg-black text-white rounded-none w-full py-10 uppercase tracking-[0.3em] text-[12px] font-bold transition-all shadow-xl"
                  >
                    {t("nav.contact")}
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}
