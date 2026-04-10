import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "@/components/Logo";
import ContactModal from "./ContactModal";

const navLinks = [
  { name: "Accueil", href: "#" },
  { name: "Services", href: "#services" },
  { name: "Estimation", href: "#estimateur" },
  { name: "Avantages", href: "#avantages" },
  { name: "Processus", href: "#processus" },
  { name: "FAQ", href: "#faq" },
  { name: "Témoignages", href: "#temoignages" },
  { name: "À propos", href: "#a-propos" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

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
          <Button 
            onClick={() => setIsContactOpen(true)}
            className="bg-primary hover:bg-accent text-white rounded-none px-10 py-6 uppercase tracking-[0.2em] text-[10px] transition-all"
          >
            Contact
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
                <Button 
                  onClick={() => {
                    setIsContactOpen(true);
                  }}
                  className="bg-primary hover:bg-accent text-white rounded-none w-full py-8 uppercase tracking-[0.2em] text-sm mt-10"
                >
                  Nous Contacter
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}
