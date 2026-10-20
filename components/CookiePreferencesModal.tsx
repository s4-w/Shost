import React, { useState } from "react";
import { useCookies } from "@/src/context/CookieContext";
import { X, ShieldCheck, BarChart3, Target, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function CookiePreferencesModal() {
  const { isPreferencesModalOpen, closePreferencesModal, preferences, savePreferences, acceptAll, rejectAll } = useCookies();
  const [localAnalytics, setLocalAnalytics] = useState(preferences.analytics);
  const [localMarketing, setLocalMarketing] = useState(preferences.marketing);

  if (!isPreferencesModalOpen) return null;

  const handleSave = () => {
    savePreferences({
      analytics: localAnalytics,
      marketing: localMarketing,
    });
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-primary/10 overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="p-6 sm:p-8 border-b border-black/10 flex items-center justify-between bg-white">
            <div>
              <h3 className="text-xl font-serif text-black">Gestion des préférences de cookies</h3>
              <p className="text-xs text-black/70 font-normal mt-1">Personnalisez l’utilisation des traceurs sur SHOST Conciergerie</p>
            </div>
            <button
              onClick={closePreferencesModal}
              className="p-2 text-black/60 hover:text-black rounded-full hover:bg-black/5 transition-colors cursor-pointer"
              aria-label="Fermer la boîte de dialogue"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-left">
            {/* Essential Cookies */}
            <div className="p-5 rounded-2xl bg-stone-50 border border-black/10 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm font-bold text-black">Cookies strictement nécessaires</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-emerald-100 text-emerald-900 rounded-full">
                  Toujours actif
                </span>
              </div>
              <p className="text-xs text-black leading-relaxed font-normal">
                Indispensables pour naviguer sur le site, mémoriser vos préférences de consentement et garantir la sécurité des échanges. Ces cookies ne collectent aucune information publicitaire.
              </p>
            </div>

            {/* Analytics Cookies */}
            <div className="p-5 rounded-2xl bg-white border border-black/10 space-y-2 hover:border-accent/40 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <BarChart3 className="w-5 h-5 text-accent" />
                  <span className="text-sm font-bold text-black">Mesure d’audience & Statistiques</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={localAnalytics}
                    onChange={(e) => setLocalAnalytics(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
                </label>
              </div>
              <p className="text-xs text-black leading-relaxed font-normal">
                Ces cookies anonymisés nous permettent de connaître le nombre de visites et les pages les plus consultées afin d’améliorer l’ergonomie générale de notre conciergerie.
              </p>
            </div>

            {/* Marketing Cookies */}
            <div className="p-5 rounded-2xl bg-white border border-black/10 space-y-2 hover:border-accent/40 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Target className="w-5 h-5 text-accent" />
                  <span className="text-sm font-bold text-black">Cookies marketing & Réseaux sociaux</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={localMarketing}
                    onChange={(e) => setLocalMarketing(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
                </label>
              </div>
              <p className="text-xs text-black leading-relaxed font-normal">
                Utilisés pour mesurer l'efficacité de nos campagnes de communication et afficher des contenus interactifs enrichis (cartes, réseaux sociaux).
              </p>
            </div>
          </div>

          {/* Footer actions */}
          <div className="p-6 border-t border-primary/10 bg-surface flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={rejectAll}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-primary/20 text-primary hover:bg-black/5 text-xs font-semibold uppercase tracking-wider cursor-pointer"
              >
                Tout refuser
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-primary/20 text-primary hover:bg-black/5 text-xs font-semibold uppercase tracking-wider cursor-pointer"
              >
                Tout accepter
              </button>
            </div>

            <button
              type="button"
              onClick={handleSave}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-primary hover:bg-black text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              <Check className="w-4 h-4" />
              <span>Enregistrer mes choix</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
