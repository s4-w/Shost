import React from "react";
import { motion } from "motion/react";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Calculator, Phone, MapPin, ChevronDown } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import { cn } from "@/lib/utils";
import { scrollToSection } from "./SectionNavigator";

export default function Hero() {
  const { t, language } = useLanguage();

  return (
    <section
      id="home"
      data-header-theme="dark"
      className="relative min-h-[92vh] flex items-center overflow-hidden bg-surface"
    >
      {/* Background Image with High Quality & Dark Overlay (Contraste >= 4.5:1) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_grenoble_alpine_1792350065806.jpg"
          alt="Appartement de prestige à Grenoble avec vue panoramique sur les massifs alpins géré par la conciergerie SHOST"
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
          width="1920"
          height="1080"
        />
        {/* Dark overlay guaranteeing contrast ratio >= 4.5:1 for white text and logo */}
        <div className="absolute inset-0 bg-black/55 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/50 backdrop-blur-[0.5px] z-[2]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-36 sm:pt-40 pb-20">
        <div className="max-w-3xl text-left text-white">

          {/* Single H1 per page */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.08] mb-6 tracking-tight text-white"
          >
            Conciergerie Airbnb à Grenoble : <br className="hidden sm:inline" />
            <span className="italic text-accent">maximisez vos revenus locatifs</span>
          </motion.h1>

          {/* Value Proposition Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/90 text-base sm:text-lg md:text-xl mb-10 leading-relaxed font-light max-w-2xl"
          >
            SHOST prend en charge l'intégralité de votre bien en location courte durée en Isère : shooting photo HDR, sélection des voyageurs, accueil 24/7, ménage hôtelier et tarification dynamique. Profitez d'une rentabilité boostée sans aucune contrainte de temps.
          </motion.p>

          {/* CTA Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 sm:items-center"
          >
            <a
              href="#estimateur"
              className="inline-flex items-center justify-center gap-3 bg-accent hover:bg-white text-primary px-8 py-4.5 rounded-xl text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-xl hover:shadow-accent/30 text-center"
            >
              <Calculator className="w-4 h-4" />
              <span>Estimer mes revenus</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="tel:0626290649"
              className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-4.5 rounded-xl text-xs font-bold uppercase tracking-[0.15em] transition-all backdrop-blur-sm text-center"
              aria-label="Appeler SHOST conciergerie"
            >
              <Phone className="w-4 h-4 text-accent" />
              <span>06 26 29 06 49</span>
            </a>

            <a
              href="/services"
              className="inline-flex items-center justify-center text-xs font-semibold uppercase tracking-[0.15em] text-white/80 hover:text-white underline underline-offset-4 py-2 px-3 transition-colors text-center"
            >
              Découvrir nos services
            </a>
          </motion.div>

          {/* Social Proof Mini Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-white/10 text-xs text-white/70"
          >
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-white text-sm">20% TTC</span>
              <span>commission unique</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-accent text-sm">0€</span>
              <span>abonnement fixe</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-white text-sm">+28%</span>
              <span>revenus moyens constatés</span>
            </div>
          </motion.div>

          {/* Quick scroll down to next section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8"
          >
            <button
              type="button"
              onClick={() => scrollToSection("services")}
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-white/80 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/15 transition-all cursor-pointer shadow-sm"
              aria-label="Défiler vers la section suivante : Nos Services"
            >
              <span>Découvrir nos services</span>
              <ChevronDown className="w-3.5 h-3.5 text-accent group-hover:translate-y-0.5 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
