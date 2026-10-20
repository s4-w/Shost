import { useState } from "react";
import { Menu, Phone, ChevronDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "@/components/Logo";
import ContactModal from "./ContactModal";
import { useRouter } from "@/src/context/RouterContext";

export default function Navbar() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSectorDropdownOpen, setIsSectorDropdownOpen] = useState(false);
  const { path } = useRouter();

  const isHome = path === "/";
  // Sur la page d'accueil (fond photo sombre de l'Hero) : blanc. Sur les pages internes (fond clair) : noir.
  const isDark = isHome;

  const navLinks = [
    { name: "Accueil", href: isHome ? "#home" : "/" },
    { name: "Services", href: isHome ? "#services" : "/services" },
    { name: "Tarifs", href: isHome ? "#honoraires" : "/tarifs" },
    { name: "Secteurs", isDropdown: true },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: isHome ? "#faq" : "/#faq" },
    { name: "Qui sommes-nous", href: "/qui-sommes-nous" },
  ];

  const sectorLinks = [
    { name: "Grenoble Hyper-Centre", href: "/conciergerie-airbnb-grenoble" },
    { name: "Voiron & Pays Voironnais", href: "/secteur-voiron" },
    { name: "Meylan & Inovallée", href: "/secteur-meylan" },
    { name: "Échirolles & Agglo Sud", href: "/secteur-echirolles" },
    { name: "Saint-Martin-d'Hères", href: "/secteur-saint-martin-d-heres" },
    { name: "Vallée du Grésivaudan", href: "/secteur-gresivaudan" },
  ];

  return (
    <nav
      className={`absolute top-0 left-0 right-0 ${
        isContactOpen ? "z-[155]" : "z-50"
      } bg-transparent border-none shadow-none py-6 transition-all duration-300`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between gap-4">
        {/* Zone 1 : Logo - Agrandis (90px sur ordinateur, 64px sur mobile), marge >= 24px autour, sans déformation */}
        <div className="flex items-center shrink-0 mr-6 sm:mr-8">
          <a
            href="/"
            className="flex items-center group shrink-0 h-[64px] md:h-[90px] w-auto relative focus:outline-none"
            aria-label="SHOST Conciergerie - Accueil"
          >
            <Logo
              className="h-[64px] md:h-[90px] w-auto shrink-0 object-contain"
              light={isDark}
            />
          </a>
        </div>

        {/* Zone 2 : Navigation Desktop (repliée en burger avant de toucher le logo, dès < 1280px) */}
        <div className="hidden xl:flex items-center gap-5 2xl:gap-7 shrink min-w-0">
          {navLinks.map((link) => {
            if (link.isDropdown) {
              return (
                <div
                  key="secteurs-menu"
                  className="relative group"
                  onMouseEnter={() => setIsSectorDropdownOpen(true)}
                  onMouseLeave={() => setIsSectorDropdownOpen(false)}
                >
                  <button
                    type="button"
                    className={`text-[11px] 2xl:text-xs font-semibold uppercase tracking-[0.16em] whitespace-nowrap transition-colors duration-300 flex items-center gap-1 cursor-pointer py-2 ${
                      isDark
                        ? "text-white hover:text-accent drop-shadow-xs"
                        : "text-black hover:text-accent"
                    }`}
                  >
                    <span>Secteurs</span>
                    <ChevronDown className="w-3.5 h-3.5 opacity-80 group-hover:rotate-180 transition-transform duration-300" />
                  </button>

                  {isSectorDropdownOpen && (
                    <div className="absolute top-full left-0 w-64 bg-white text-black shadow-2xl rounded-2xl py-3 border border-black/10 transition-all z-[60]">
                      {sectorLinks.map((s) => (
                        <a
                          key={s.href}
                          href={s.href}
                          onClick={() => setIsSectorDropdownOpen(false)}
                          className="block px-5 py-2.5 text-xs text-black hover:text-accent hover:bg-stone-50 transition-colors font-medium text-left"
                        >
                          {s.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-[11px] 2xl:text-xs font-semibold uppercase tracking-[0.16em] whitespace-nowrap transition-colors duration-300 py-2 ${
                  isDark
                    ? "text-white hover:text-accent drop-shadow-xs"
                    : "text-black hover:text-accent"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Zone 3 : CTA, Téléphone et Badge d'intervention aligné à droite */}
        <div className="hidden xl:flex flex-col items-end gap-2 shrink-0">
          <div className="flex items-center gap-4">
            <a
              href="tel:0626290649"
              className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-colors duration-300 py-1 ${
                isDark
                  ? "text-white hover:text-accent drop-shadow-xs"
                  : "text-black hover:text-accent"
              }`}
              aria-label="Appeler au 06 26 29 06 49"
            >
              <Phone className="w-4 h-4 text-accent shrink-0" />
              <span>06 26 29 06 49</span>
            </a>

            {/* Bouton « Contact » conservé tel quel (fond blanc, texte noir, bordure fine) */}
            <Button
              onClick={() => setIsContactOpen(true)}
              className="bg-white hover:bg-accent text-black font-bold uppercase tracking-[0.15em] text-[11px] rounded-xl px-5 py-2.5 min-h-[44px] shadow-md transition-all duration-300 cursor-pointer border border-black/10 shrink-0"
            >
              Contact
            </Button>
          </div>

          {/* Badge « Grenoble · Voiron · Meylan · Grésivaudan » aligné à droite sous le téléphone et Contact */}
          <span
            className={`inline-flex items-center gap-1.5 text-[10px] 2xl:text-[11px] font-semibold tracking-wider uppercase text-accent ${
              isDark
                ? "bg-white/10 border-white/15 drop-shadow-xs"
                : "bg-black/5 border-black/10"
            } backdrop-blur-md px-3 py-1 rounded-full border whitespace-nowrap`}
          >
            <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
            Grenoble · Voiron · Meylan · Grésivaudan
          </span>
        </div>

        {/* Mobile & Tablette (< 1280px) : Repliement automatique en burger avant de toucher le logo */}
        <div className="xl:hidden flex items-center gap-2.5 shrink-0">
          <Button
            onClick={() => setIsContactOpen(true)}
            size="sm"
            className="bg-white hover:bg-accent text-black font-bold uppercase tracking-wider text-[11px] rounded-xl px-3.5 sm:px-4 min-h-[44px] shadow-md transition-all duration-300 cursor-pointer border border-black/10 shrink-0"
          >
            Contact
          </Button>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className={`transition-colors duration-300 cursor-pointer w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl ${
                    isDark
                      ? "text-white hover:bg-white/10"
                      : "text-black hover:bg-black/5"
                  }`}
                  aria-label="Ouvrir le menu de navigation"
                >
                  <Menu className="w-6 h-6" />
                </Button>
              }
            />
            <SheetContent side="right" className="bg-white border-l-black/10 w-full sm:max-w-md p-0 overflow-y-auto z-[160]">
              <div className="flex flex-col min-h-full bg-white">
                {/* Header Menu Mobile avec logo et badge des zones d'intervention */}
                <div className="p-6 border-b border-black/10 bg-white flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="h-[52px] w-auto">
                      <Logo className="h-[52px] w-auto" light={false} />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent">Menu</span>
                  </div>

                  {/* Badge d'intervention sur mobile dans le header du menu burger sans chevauchement */}
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-[9px] font-semibold tracking-wider uppercase text-accent bg-black/5 border border-black/10 px-2.5 py-1 rounded-full">
                      <MapPin className="w-3 h-3 text-accent shrink-0" />
                      Grenoble · Voiron · Meylan · Grésivaudan
                    </span>
                  </div>
                </div>

                {/* Nav Links */}
                <nav className="flex-1 py-6 px-6 sm:px-8 space-y-6 text-left">
                  <div className="space-y-2">
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-black/50 mb-2">Navigation</p>
                    <div className="flex flex-col">
                      <a
                        href={isHome ? "#home" : "/"}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="py-3 px-3 text-sm font-semibold uppercase tracking-wider text-black hover:text-accent hover:bg-stone-50 rounded-lg transition-colors flex items-center min-h-[44px]"
                      >
                        Accueil
                      </a>
                      <a
                        href={isHome ? "#services" : "/services"}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="py-3 px-3 text-sm font-semibold uppercase tracking-wider text-black hover:text-accent hover:bg-stone-50 rounded-lg transition-colors flex items-center min-h-[44px]"
                      >
                        Services
                      </a>
                      <a
                        href={isHome ? "#honoraires" : "/tarifs"}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="py-3 px-3 text-sm font-semibold uppercase tracking-wider text-black hover:text-accent hover:bg-stone-50 rounded-lg transition-colors flex items-center min-h-[44px]"
                      >
                        Tarifs & Commission
                      </a>
                      <a
                        href="/blog"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="py-3 px-3 text-sm font-semibold uppercase tracking-wider text-black hover:text-accent hover:bg-stone-50 rounded-lg transition-colors flex items-center min-h-[44px]"
                      >
                        Blog
                      </a>
                      <a
                        href={isHome ? "#faq" : "/#faq"}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="py-3 px-3 text-sm font-semibold uppercase tracking-wider text-black hover:text-accent hover:bg-stone-50 rounded-lg transition-colors flex items-center min-h-[44px]"
                      >
                        FAQ
                      </a>
                      <a
                        href="/qui-sommes-nous"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="py-3 px-3 text-sm font-semibold uppercase tracking-wider text-black hover:text-accent hover:bg-stone-50 rounded-lg transition-colors flex items-center min-h-[44px]"
                      >
                        Qui sommes-nous
                      </a>
                    </div>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-black/10">
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-black/50 mb-2">Secteurs</p>
                    <div className="grid grid-cols-1 gap-1">
                      {sectorLinks.map((s) => (
                        <a
                          key={s.href}
                          href={s.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="py-2.5 px-3 text-xs text-black/80 hover:text-accent hover:bg-stone-50 rounded-lg transition-colors font-medium flex items-center min-h-[44px]"
                        >
                          {s.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </nav>

                {/* Footer mobile */}
                <div className="p-6 border-t border-black/10 bg-stone-50 space-y-4">
                  <a
                    href="tel:0626290649"
                    className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider py-3.5 px-4 bg-white border border-black/10 rounded-xl text-black hover:text-accent shadow-xs min-h-[44px]"
                  >
                    <Phone className="w-4 h-4 text-accent shrink-0" />
                    <span>06 26 29 06 49</span>
                  </a>

                  <Button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsContactOpen(true);
                    }}
                    className="w-full bg-white hover:bg-accent text-black text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl shadow-md cursor-pointer border border-black/10 min-h-[44px]"
                  >
                    Contact
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </nav>
  );
}
