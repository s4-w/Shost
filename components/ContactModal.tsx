import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, Calendar, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/src/context/LanguageContext";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "Grenoble",
    propertyType: "T2",
    message: "",
  });
  const [consentRgpd, setConsentRgpd] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) {
      setStatus("success");
      return;
    }
    if (!consentRgpd) {
      setErrorMessage(
        language === "fr"
          ? "Veuillez accepter le traitement de vos coordonnées pour être recontacté."
          : "Please consent to our data policy."
      );
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          source: "ContactModal",
          consentRgpd: true,
          honeypot,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Erreur d'envoi");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "Grenoble",
        propertyType: "T2",
        message: "",
      });
      setConsentRgpd(false);
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrorMessage(
        err.message ||
          (language === "fr"
            ? "Une erreur est survenue lors de l'envoi. Veuillez réessayer."
            : "An error occurred. Please try again.")
      );
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-primary/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl bg-white shadow-2xl p-8 sm:p-10 border border-primary/10 rounded-3xl overflow-hidden max-h-[92vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-primary/40 hover:text-primary transition-colors cursor-pointer"
            aria-label="Fermer"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="mb-6 text-left">
            <span className="text-accent uppercase tracking-[0.3em] text-[10px] font-bold mb-2 block">
              {language === "fr" ? "Discutons de votre bien" : "Let's discuss your property"}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-primary">
              {language === "fr" ? "Demande d'estimation gratuite" : "Free Revenue Projection"}
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div className="hidden" aria-hidden="true">
              <input
                type="text"
                name="website_hp"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-[0.16em] font-bold text-black mb-1">
                {language === "fr" ? "Nom & Prénom *" : "Full Name *"}
              </label>
              <input
                type="text"
                required
                maxLength={100}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={language === "fr" ? "Votre nom" : "Your name"}
                className="w-full bg-white border border-black/20 focus:border-black focus:ring-1 focus:ring-black text-black placeholder:text-neutral-500 focus:outline-none rounded-xl py-3 px-4 text-base sm:text-sm transition-all"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] uppercase tracking-[0.16em] font-bold text-black mb-1">
                  {language === "fr" ? "Email *" : "Email Address *"}
                </label>
                <input
                  type="email"
                  required
                  maxLength={120}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="votre@email.com"
                  className="w-full bg-white border border-black/20 focus:border-black focus:ring-1 focus:ring-black text-black placeholder:text-neutral-500 focus:outline-none rounded-xl py-3 px-4 text-base sm:text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-[0.16em] font-bold text-black mb-1">
                  {language === "fr" ? "Téléphone *" : "Phone Number *"}
                </label>
                <input
                  type="tel"
                  required
                  maxLength={20}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="06 12 34 56 78"
                  className="w-full bg-white border border-black/20 focus:border-black focus:ring-1 focus:ring-black text-black placeholder:text-neutral-500 focus:outline-none rounded-xl py-3 px-4 text-base sm:text-sm transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] uppercase tracking-[0.16em] font-bold text-black mb-1">
                  {language === "fr" ? "Ville / Secteur *" : "Location *"}
                </label>
                <select
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full bg-white border border-black/20 focus:border-black focus:ring-1 focus:ring-black text-black focus:outline-none rounded-xl py-3 px-4 text-base sm:text-sm transition-all cursor-pointer"
                >
                  <option value="Grenoble">Grenoble</option>
                  <option value="Voiron">Voiron</option>
                  <option value="Meylan">Meylan</option>
                  <option value="Échirolles">Échirolles</option>
                  <option value="Saint-Martin-d'Hères">Saint-Martin-d'Hères</option>
                  <option value="Grésivaudan">Grésivaudan</option>
                  <option value="Autre Isère">Autre commune Isère</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-[0.16em] font-bold text-black mb-1">
                  {language === "fr" ? "Type du bien" : "Property type"}
                </label>
                <select
                  value={formData.propertyType}
                  onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                  className="w-full bg-white border border-black/20 focus:border-black focus:ring-1 focus:ring-black text-black focus:outline-none rounded-xl py-3 px-4 text-base sm:text-sm transition-all cursor-pointer"
                >
                  <option value="Studio / T1">Studio / T1</option>
                  <option value="T2">Appartement T2</option>
                  <option value="T3 / T4">T3 ou T4</option>
                  <option value="Maison / Chalet">Maison ou Chalet</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-[0.16em] font-bold text-black mb-1">
                {language === "fr" ? "Message / Objectifs *" : "Message *"}
              </label>
              <textarea
                required
                rows={3}
                maxLength={2000}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={
                  language === "fr"
                    ? "Ex: Disponibilité souhaitée, résidence principale ou secondaire, surface..."
                    : "Property details..."
                }
                className="w-full bg-white border border-black/20 focus:border-black focus:ring-1 focus:ring-black text-black placeholder:text-neutral-500 focus:outline-none rounded-xl py-3 px-4 text-base sm:text-sm resize-none transition-all"
              />
            </div>

            <div className="flex items-start gap-3 pt-1">
              <input
                id="modal-consent-rgpd"
                type="checkbox"
                checked={consentRgpd}
                onChange={(e) => setConsentRgpd(e.target.checked)}
                required
                className="mt-1 w-5 h-5 rounded text-black focus:ring-black border-black/30 cursor-pointer shrink-0"
              />
              <label htmlFor="modal-consent-rgpd" className="text-xs text-black leading-relaxed font-normal cursor-pointer select-none">
                J'accepte d'être recontacté(e) pour recevoir mon estimation de gains locatifs (
                <a href="/politique-de-confidentialite" className="underline hover:text-accent font-medium">
                  RGPD
                </a>
                ).
              </label>
            </div>

            {status === "success" && (
              <div className="p-4 bg-emerald-50 text-emerald-900 border border-emerald-200 rounded-xl text-sm flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Votre demande a été transmise avec succès ! Nous vous recontacterons sous 24h.</span>
              </div>
            )}

            {status === "error" && (
              <div className="p-4 bg-rose-50 text-rose-800 border border-rose-100 rounded-xl text-sm">
                {errorMessage}
              </div>
            )}

            <Button
              type="submit"
              disabled={status === "loading"}
              className="w-full min-h-[48px] bg-black hover:bg-neutral-800 text-white rounded-xl py-4 uppercase tracking-[0.2em] text-xs font-bold transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>{status === "loading" ? "Envoi..." : "Envoyer ma demande"}</span>
            </Button>
          </form>

          <div className="mt-6 pt-4 border-t border-primary/5 text-center">
            <a
              href="https://calendly.com/shost-manage/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-accent hover:text-primary transition-colors font-medium flex items-center justify-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Vous préférez choisir un créneau directement ? Prendre rendez-vous sur Calendly</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
