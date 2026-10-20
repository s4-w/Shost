import React from "react";
import { useCookies } from "@/src/context/CookieContext";
import { Cookie, ShieldCheck, SlidersHorizontal } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function CookieBanner() {
  const { isBannerOpen, acceptAll, rejectAll, openPreferencesModal } = useCookies();

  if (!isBannerOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed bottom-0 left-0 right-0 z-[999] p-4 sm:p-6"
      >
        <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-md border border-primary/10 shadow-[0_-10px_40px_rgba(17,34,51,0.15)] rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 flex-1 text-left">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center text-accent shrink-0">
                  <Cookie className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-black">
                  Respect de votre vie privée & Cookies
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-black leading-relaxed font-normal">
                Nous utilisons des cookies techniques nécessaires au fonctionnement du site ainsi que des traceurs statistiques facultatifs pour mesurer l’audience et améliorer votre expérience. Vous pouvez accepter, refuser ou personnaliser vos choix à tout moment.
              </p>
              <div className="text-[11px] text-neutral-800 pt-1">
                Pour en savoir plus, consultez notre{" "}
                <a href="/politique-cookies" className="underline hover:text-accent font-medium">
                  politique de cookies
                </a>{" "}
                et notre{" "}
                <a href="/politique-de-confidentialite" className="underline hover:text-accent font-medium">
                  politique de confidentialité
                </a>.
              </div>
            </div>

            {/* Actions: Strict equality between Accepter and Refuser buttons (CNIL compliance) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0">
              <button
                type="button"
                onClick={rejectAll}
                className="px-5 py-3 rounded-xl border-2 border-primary/30 hover:border-primary text-primary hover:bg-primary/5 text-xs font-bold uppercase tracking-wider transition-all duration-200 text-center min-w-[120px] cursor-pointer"
              >
                Tout refuser
              </button>

              <button
                type="button"
                onClick={acceptAll}
                className="px-5 py-3 rounded-xl border-2 border-primary bg-primary hover:bg-black text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 text-center shadow-md min-w-[120px] cursor-pointer"
              >
                Tout accepter
              </button>

              <button
                type="button"
                onClick={openPreferencesModal}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl text-primary/70 hover:text-accent text-xs font-medium transition-colors text-center cursor-pointer"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Personnaliser</span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
