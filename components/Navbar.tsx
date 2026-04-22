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
    { name: t("nav.frustrations"), href: "#frustrations" },
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
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center group max-w-[160px]">
          <Logo className="w-full" light={!isScrolled} />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] font-semibold hover:text-accent transition-colors uppercase tracking-[0.2em]"
            >
              {link.name}
            </a>
          ))}
          
          {/* Language Switcher */}
          <div className="flex items-center gap-3 border-l border-primary/10 pl-10 h-6">
            <button 
              onClick={() => setLanguage('fr')}
              className={`text-[10px] font-bold tracking-widest transition-colors ${language === 'fr' ? 'text-accent' : 'text-primary/40 hover:text-primary'}`}
            >
              FR
            </button>
            <span className="text-[10px] text-primary/10">|</span>
            <button 
              onClick={() => setLanguage('en')}
              className={`text-[10px] font-bold tracking-widest transition-colors ${language === 'en' ? 'text-accent' : 'text-primary/40 hover:text-primary'}`}
            >
              EN
            </button>
          </div>

          <Button 
            onClick={() => setIsContactOpen(true)}
            className="bg-primary hover:bg-accent text-white rounded-none px-10 py-6 uppercase tracking-[0.2em] text-[10px] transition-all"
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
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className="hover:bg-transparent text-black">
                  <Menu className="w-7 h-7" />
                </Button>
              }
            />
            <SheetContent side="right" className="bg-surface border-l-black/10 w-full sm:max-w-md">
              <div className="flex flex-col gap-10 mt-20 items-center">
                <Logo className="max-w-[200px] mb-10" light={false} />
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-2xl font-serif hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                ))}

                {/* Mobile Language Switcher */}
                <div className="flex items-center gap-6 mt-6">
                  <button 
                    onClick={() => setLanguage('fr')}
                    className={`text-sm font-bold tracking-[0.2em] transition-colors ${language === 'fr' ? 'text-accent' : 'text-primary/40'}`}
                  >
                    FRANÇAIS
                  </button>
                  <button 
                    onClick={() => setLanguage('en')}
                    className={`text-sm font-bold tracking-[0.2em] transition-colors ${language === 'en' ? 'text-accent' : 'text-primary/40'}`}
                  >
                    ENGLISH
                  </button>
                </div>

                <Button 
                  onClick={() => {
                    setIsContactOpen(true);
                  }}
                  className="bg-primary hover:bg-accent text-white rounded-none w-full py-8 uppercase tracking-[0.2em] text-sm mt-10"
                >
                  {t("nav.contact")}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}
