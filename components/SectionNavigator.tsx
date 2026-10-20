import React, { useState, useEffect, useCallback } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useRouter } from "@/src/context/RouterContext";
import { useLanguage } from "@/src/context/LanguageContext";

interface SectionMeta {
  id: string;
  nameFr: string;
  nameEn: string;
}

const HOME_SECTIONS: SectionMeta[] = [
  { id: "home", nameFr: "Accueil", nameEn: "Home" },
  { id: "services", nameFr: "Nos Services", nameEn: "Services" },
  { id: "honoraires", nameFr: "Tarifs & Honoraires", nameEn: "Fees & Rates" },
  { id: "estimateur", nameFr: "Simulateur de Revenus", nameEn: "Revenue Simulator" },
  { id: "processus", nameFr: "Notre Processus", nameEn: "Process" },
  { id: "faq", nameFr: "Questions Fréquentes", nameEn: "FAQ" },
  { id: "a-propos", nameFr: "À Propos", nameEn: "About Us" },
  { id: "contact", nameFr: "Contact & Estimation", nameEn: "Contact" },
];

export const scrollToSection = (id: string) => {
  if (typeof window === "undefined") return;

  if (id === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const el = document.getElementById(id);
  if (!el) return;

  const nav = document.querySelector("nav");
  const navHeight = nav ? nav.getBoundingClientRect().height : 70;
  const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
  const targetOffset = Math.max(0, elementPosition - navHeight - 16);

  window.scrollTo({
    top: targetOffset,
    behavior: "smooth",
  });
};

export default function SectionNavigator() {
  const { path } = useRouter();
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [hoveredDot, setHoveredDot] = useState<number | null>(null);

  const isHome = path === "/" || path === "";

  // Dynamic tracking of current section during scrolling
  const updateActiveSection = useCallback(() => {
    if (!isHome || typeof window === "undefined") return;

    const scrollY = window.pageYOffset;
    setVisible(scrollY > 200);

    const nav = document.querySelector("nav");
    const navHeight = nav ? nav.getBoundingClientRect().height : 70;
    const probeY = scrollY + navHeight + 80;

    let current = 0;
    for (let i = 0; i < HOME_SECTIONS.length; i++) {
      const el = document.getElementById(HOME_SECTIONS[i].id);
      if (el) {
        const top = el.getBoundingClientRect().top + scrollY;
        if (top <= probeY) {
          current = i;
        }
      }
    }

    // Edge check: near page bottom
    if (window.innerHeight + scrollY >= document.documentElement.scrollHeight - 60) {
      current = HOME_SECTIONS.length - 1;
    }

    setActiveIndex(current);
  }, [isHome]);

  useEffect(() => {
    if (!isHome) return;

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [isHome, updateActiveSection]);

  if (!isHome) return null;

  const prevIndex = activeIndex > 0 ? activeIndex - 1 : null;
  const nextIndex = activeIndex < HOME_SECTIONS.length - 1 ? activeIndex + 1 : null;

  const activeSection = HOME_SECTIONS[activeIndex];
  const prevSection = prevIndex !== null ? HOME_SECTIONS[prevIndex] : null;
  const nextSection = nextIndex !== null ? HOME_SECTIONS[nextIndex] : null;

  const handlePrev = () => {
    if (prevSection) {
      scrollToSection(prevSection.id);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (nextSection) {
      scrollToSection(nextSection.id);
    }
  };

  return (
    <>
      {/* Desktop Floating Section Navigator (Right side) */}
      <aside
        aria-label="Navigation entre sections"
        className={`hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-2.5 transition-all duration-300 ${
          visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"
        }`}
      >
        <div className="bg-white/85 hover:bg-white/95 backdrop-blur-md border border-primary/10 shadow-xl rounded-full p-2 flex flex-col items-center gap-2 transition-all">
          {/* Previous Section Button */}
          <button
            type="button"
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className={`p-2 rounded-full transition-all flex items-center justify-center ${
              activeIndex === 0
                ? "text-primary/20 cursor-not-allowed"
                : "text-primary hover:text-accent hover:bg-secondary cursor-pointer"
            }`}
            title={
              prevSection
                ? `${language === "fr" ? "Section précédente :" : "Previous section:"} ${
                    language === "fr" ? prevSection.nameFr : prevSection.nameEn
                  }`
                : language === "fr"
                ? "Haut de page"
                : "Top of page"
            }
            aria-label={
              prevSection
                ? `Aller à la section précédente: ${
                    language === "fr" ? prevSection.nameFr : prevSection.nameEn
                  }`
                : "Haut de page"
            }
          >
            <ChevronUp className="w-4 h-4" />
          </button>

          {/* Section Indicator Dots */}
          <div className="flex flex-col items-center gap-2 py-1">
            {HOME_SECTIONS.map((sec, idx) => {
              const isActive = idx === activeIndex;
              const isHovered = hoveredDot === idx;
              return (
                <div key={sec.id} className="relative flex items-center">
                  <button
                    type="button"
                    onClick={() => scrollToSection(sec.id)}
                    onMouseEnter={() => setHoveredDot(idx)}
                    onMouseLeave={() => setHoveredDot(null)}
                    aria-label={`Aller à la section ${
                      language === "fr" ? sec.nameFr : sec.nameEn
                    }`}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      isActive
                        ? "w-2.5 h-6 bg-accent shadow-sm"
                        : "w-2 h-2 bg-primary/25 hover:bg-primary/60 hover:scale-125"
                    }`}
                  />
                  {/* Tooltip on hover */}
                  {isHovered && (
                    <div className="absolute right-7 px-3 py-1 bg-primary text-white text-[11px] font-medium tracking-wide rounded-md shadow-lg whitespace-nowrap pointer-events-none animate-in fade-in zoom-in-95 duration-150">
                      <span className="text-accent font-bold mr-1.5">{`0${idx + 1}`}</span>
                      {language === "fr" ? sec.nameFr : sec.nameEn}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Next Section Button */}
          <button
            type="button"
            onClick={handleNext}
            disabled={activeIndex === HOME_SECTIONS.length - 1}
            className={`p-2 rounded-full transition-all flex items-center justify-center ${
              activeIndex === HOME_SECTIONS.length - 1
                ? "text-primary/20 cursor-not-allowed"
                : "text-primary hover:text-accent hover:bg-secondary cursor-pointer"
            }`}
            title={
              nextSection
                ? `${language === "fr" ? "Section suivante :" : "Next section:"} ${
                    language === "fr" ? nextSection.nameFr : nextSection.nameEn
                  }`
                : language === "fr"
                ? "Fin de page"
                : "End of page"
            }
            aria-label={
              nextSection
                ? `Aller à la section suivante: ${
                    language === "fr" ? nextSection.nameFr : nextSection.nameEn
                  }`
                : "Fin de page"
            }
          >
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        {/* Current Active Section Badge */}
        <div className="bg-primary/90 text-white text-[10px] tracking-wider px-2.5 py-1 rounded-full shadow-md font-medium flex items-center gap-1.5 whitespace-nowrap backdrop-blur-xs">
          <span className="text-accent font-bold">{`0${activeIndex + 1}`}</span>
          <span className="max-w-[100px] truncate">
            {language === "fr" ? activeSection?.nameFr : activeSection?.nameEn}
          </span>
        </div>
      </aside>

      {/* Mobile Floating Mini Navigator (Bottom Right, above MobileFloatingBar) */}
      <div
        className={`md:hidden fixed right-4 bottom-20 z-40 transition-all duration-300 flex items-center gap-1 bg-white/90 backdrop-blur-md border border-primary/10 shadow-xl rounded-full px-2 py-1.5 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <button
          type="button"
          onClick={handlePrev}
          disabled={activeIndex === 0}
          className={`p-1.5 rounded-full transition-colors ${
            activeIndex === 0 ? "text-primary/20" : "text-primary hover:text-accent active:bg-secondary"
          }`}
          aria-label="Section précédente"
        >
          <ChevronUp className="w-4 h-4" />
        </button>

        <span className="text-[10px] font-bold text-primary/80 px-1 font-mono">
          {activeIndex + 1}/{HOME_SECTIONS.length}
        </span>

        <button
          type="button"
          onClick={handleNext}
          disabled={activeIndex === HOME_SECTIONS.length - 1}
          className={`p-1.5 rounded-full transition-colors ${
            activeIndex === HOME_SECTIONS.length - 1
              ? "text-primary/20"
              : "text-primary hover:text-accent active:bg-secondary"
          }`}
          aria-label="Section suivante"
        >
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </>
  );
}
