import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Instagram, Calendar, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import SectionFooterNav from "./SectionFooterNav";

export default function Contact() {
  const { language } = useLanguage();
  const [nom, setNom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("Grenoble");
  const [propertyType, setPropertyType] = useState("T2");
  const [message, setMessage] = useState("");
  const [consentRgpd, setConsentRgpd] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [formStartedAt, setFormStartedAt] = useState<number>(0);

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setFormStartedAt(Date.now());
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot detection
    if (honeypot) {
      // Silently discard spam bots
      setStatus("success");
      return;
    }

    // Minimum interaction time check (at least 2 seconds)
    if (Date.now() - formStartedAt < 2000) {
      setErrorMessage(
        language === "fr"
          ? "Soumission trop rapide. Veuillez patienter un instant."
          : "Submission too fast. Please take your time."
      );
      setStatus("error");
      return;
    }

    if (!nom.trim() || !email.trim() || !telephone.trim() || !message.trim()) {
      setErrorMessage(
        language === "fr"
          ? "Veuillez renseigner tous les champs obligatoires."
          : "Please fill in all required fields."
      );
      setStatus("error");
      return;
    }

    if (!consentRgpd) {
      setErrorMessage(
        language === "fr"
          ? "Veuillez accepter le traitement de vos données pour que nous puissions vous répondre."
          : "Please consent to the processing of your data so we can respond."
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
          name: nom.trim(),
          email: email.trim(),
          phone: telephone.trim(),
          city: city.trim(),
          propertyType: propertyType.trim(),
          message: message.trim(),
          consentRgpd: true,
          honeypot: honeypot,
          formStartedAt: formStartedAt,
        }),
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.error || "Erreur lors de l'envoi");
      }

      setStatus("success");
      setNom("");
      setTelephone("");
      setEmail("");
      setMessage("");
      setConsentRgpd(false);
    } catch (err: any) {
      console.error("Error submitting contact form", err);
      setStatus("error");
      setErrorMessage(
        err.message ||
          (language === "fr"
            ? "Une erreur est survenue lors de l'envoi. Veuillez réessayer ou nous contacter directement au 06 26 29 06 49."
            : "An error occurred. Please try again or call us directly at +33 6 26 29 06 49.")
      );
    }
  };

  return (
    <section
      id="contact"
      data-header-theme="light"
      className="py-24 bg-secondary rounded-t-[2.5rem] md:rounded-t-[4rem] -mt-10 md:-mt-16 relative z-10 scroll-mt-24 md:scroll-mt-28"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-white shadow-[0_30px_70px_rgba(17,34,51,0.25)] overflow-hidden rounded-3xl border border-primary/10">
          <div className="flex flex-col md:flex-row">
            {/* Header / Intro & Info Section */}
            <div className="md:w-5/12 bg-primary text-white p-10 md:p-14 flex flex-col justify-between min-h-[500px]">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif mb-4 leading-tight text-white text-left">
                  {language === "fr" ? "Contactez votre conciergerie" : "Contact your concierge"}
                </h2>
                <p className="text-white/80 leading-relaxed text-sm mb-8 text-left font-light">
                  {language === "fr"
                    ? "Vous souhaitez déléguer la gestion de votre bien à Grenoble ou en Isère ? Notre équipe locale vous répond sous 24h avec une estimation détaillée."
                    : "Looking to delegate the management of your property in Grenoble or Isère? Our local team gets back to you within 24 hours with a detailed projection."}
                </p>

                {/* Compact Info List */}
                <div className="space-y-4 my-6 text-left text-base font-medium text-white/90">
                  <div className="flex items-center gap-3.5 hover:text-accent transition-colors">
                    <Phone className="w-5 h-5 text-accent shrink-0" />
                    <a href="tel:0626290649" className="hover:underline font-semibold" aria-label="Téléphone SHOST 06 26 29 06 49">
                      06 26 29 06 49
                    </a>
                  </div>
                  <div className="flex items-center gap-3.5 hover:text-accent transition-colors">
                    <Mail className="w-5 h-5 text-accent shrink-0" />
                    <a href="mailto:shost.services@gmail.com" className="hover:underline text-sm truncate" aria-label="Email SHOST shost.services@gmail.com">
                      shost.services@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3.5 hover:text-accent transition-colors">
                    <Instagram className="w-5 h-5 text-accent shrink-0" />
                    <a
                      href="https://www.instagram.com/shost.services/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-sm"
                      aria-label="Profil Instagram de SHOST"
                    >
                      @shost.services
                    </a>
                  </div>
                  <div className="flex items-center gap-3.5">
                    <MapPin className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-sm">Grenoble & Métropole Iséroise</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <a
                  href="https://calendly.com/shost-manage/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 w-full bg-white text-primary border border-white/10 py-4 px-6 rounded-xl text-xs font-bold uppercase tracking-[0.2em] hover:bg-accent hover:text-primary transition-all duration-300 shadow-xl"
                >
                  <Calendar className="w-4 h-4 shrink-0" />
                  <span>{language === "fr" ? "Réserver un appel découverte" : "Book a discovery call"}</span>
                </a>
                <p className="text-[11px] text-white/60 text-center font-light">
                  Échange direct de 15 minutes sans engagement
                </p>
              </div>
            </div>

            {/* Interactive Form Section */}
            <div className="md:w-7/12 p-8 md:p-12 bg-surface flex flex-col justify-center text-left">
              <h3 className="text-2xl font-serif text-[#111] mb-2">
                {language === "fr" ? "Parlons de votre projet" : "Let's discuss your project"}
              </h3>
              <p className="text-xs text-[#111] font-normal mb-6">
                Remplissez ce formulaire court pour recevoir une estimation gratuite de vos gains locatifs.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot field - invisible to genuine users */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website_hp">Leave this empty</label>
                  <input
                    type="text"
                    id="website_hp"
                    name="website_hp"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="form-nom" className="block text-[11px] uppercase tracking-[0.16em] font-bold text-black mb-1.5">
                      {language === "fr" ? "Nom & Prénom *" : "Full Name *"}
                    </label>
                    <input
                      id="form-nom"
                      type="text"
                      required
                      maxLength={100}
                      value={nom}
                      onChange={(e) => setNom(e.target.value)}
                      placeholder={language === "fr" ? "Ex: Pierre Martin" : "e.g. John Doe"}
                      className="w-full bg-white border border-black/20 focus:border-black focus:ring-1 focus:ring-black text-black placeholder:text-neutral-500 focus:outline-none rounded-xl py-3 px-4 text-base sm:text-sm transition-all shadow-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="form-telephone" className="block text-[11px] uppercase tracking-[0.16em] font-bold text-black mb-1.5">
                      {language === "fr" ? "Téléphone *" : "Phone Number *"}
                    </label>
                    <input
                      id="form-telephone"
                      type="tel"
                      required
                      maxLength={20}
                      value={telephone}
                      onChange={(e) => setTelephone(e.target.value)}
                      placeholder="06 12 34 56 78"
                      className="w-full bg-white border border-black/20 focus:border-black focus:ring-1 focus:ring-black text-black placeholder:text-neutral-500 focus:outline-none rounded-xl py-3 px-4 text-base sm:text-sm transition-all shadow-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="form-email" className="block text-[11px] uppercase tracking-[0.16em] font-bold text-black mb-1.5">
                      {language === "fr" ? "Email *" : "Email Address *"}
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      maxLength={120}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="pierre.martin@exemple.fr"
                      className="w-full bg-white border border-black/20 focus:border-black focus:ring-1 focus:ring-black text-black placeholder:text-neutral-500 focus:outline-none rounded-xl py-3 px-4 text-base sm:text-sm transition-all shadow-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="form-city" className="block text-[11px] uppercase tracking-[0.16em] font-bold text-black mb-1.5">
                      {language === "fr" ? "Ville / Secteur du bien *" : "Property City *"}
                    </label>
                    <select
                      id="form-city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full bg-white border border-black/20 focus:border-black focus:ring-1 focus:ring-black text-black focus:outline-none rounded-xl py-3 px-4 text-base sm:text-sm transition-all shadow-sm cursor-pointer"
                    >
                      <option value="Grenoble">Grenoble (Hyper-centre / Europole / Championnet)</option>
                      <option value="Voiron">Voiron & Pays Voironnais</option>
                      <option value="Meylan">Meylan & Inovallée</option>
                      <option value="Échirolles">Échirolles & Agglo Sud</option>
                      <option value="Saint-Martin-d'Hères">Saint-Martin-d'Hères & Campus</option>
                      <option value="Grésivaudan">Vallée du Grésivaudan (Saint-Ismier, Crolles...)</option>
                      <option value="Autre commune Isère">Autre commune en Isère</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="form-type" className="block text-[11px] uppercase tracking-[0.16em] font-bold text-black mb-1.5">
                    {language === "fr" ? "Type de logement" : "Property Type"}
                  </label>
                  <select
                    id="form-type"
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full bg-white border border-black/20 focus:border-black focus:ring-1 focus:ring-black text-black focus:outline-none rounded-xl py-3 px-4 text-base sm:text-sm transition-all shadow-sm cursor-pointer"
                  >
                    <option value="Studio / T1">Studio ou T1 (jusqu'à 30 m²)</option>
                    <option value="T2">Appartement T2 (30 à 50 m²)</option>
                    <option value="T3 / T4">Grand appartement T3 / T4 (50 à 100 m²)</option>
                    <option value="Maison / Villa">Maison individuelle ou Villa</option>
                    <option value="Chalet / Bien d'exception">Chalet alpin ou Bien de prestige</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="form-message" className="block text-[11px] uppercase tracking-[0.16em] font-bold text-black mb-1.5">
                    {language === "fr" ? "Votre message ou projet *" : "Your Message or Project *"}
                  </label>
                  <textarea
                    id="form-message"
                    required
                    rows={3}
                    maxLength={2000}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={
                      language === "fr"
                        ? "Précisez vos besoins : résidence principale à louer 120 jours, investissement locatif, meublé disponible toute l'année..."
                        : "Describe your property and goals..."
                    }
                    className="w-full bg-white border border-black/20 focus:border-black focus:ring-1 focus:ring-black text-black placeholder:text-neutral-500 focus:outline-none rounded-xl py-3 px-4 text-base sm:text-sm resize-none transition-all shadow-sm"
                  />
                  <div className="text-[10px] text-right text-black/60 mt-1">
                    {message.length} / 2000 caractères
                  </div>
                </div>

                {/* RGPD Consent Checkbox - NOT pre-checked */}
                <div className="flex items-start gap-3 pt-1">
                  <input
                    id="form-consent-rgpd"
                    type="checkbox"
                    checked={consentRgpd}
                    onChange={(e) => setConsentRgpd(e.target.checked)}
                    required
                    className="mt-1 w-5 h-5 rounded text-black focus:ring-black border-black/30 cursor-pointer shrink-0"
                  />
                  <label htmlFor="form-consent-rgpd" className="text-xs text-black leading-relaxed font-normal cursor-pointer select-none">
                    {language === "fr" ? (
                      <>
                        J'accepte que mes coordonnées soient traitées par SHOST Conciergerie pour me recontacter et établir mon estimation locative, conformément à la{" "}
                        <a href="/politique-de-confidentialite" className="underline hover:text-accent font-medium">
                          politique de confidentialité
                        </a>
                        . Aucune cession à des tiers.
                      </>
                    ) : (
                      <>
                        I agree that my contact information will be processed by SHOST to provide my rental estimate in accordance with the{" "}
                        <a href="/politique-de-confidentialite" className="underline hover:text-accent font-medium">
                          privacy policy
                        </a>
                        .
                      </>
                    )}
                  </label>
                </div>

                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-emerald-50 text-emerald-900 border border-emerald-200 rounded-xl text-sm font-medium flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <div>
                      <p className="font-bold">
                        {language === "fr" ? "Message envoyé avec succès !" : "Message sent successfully!"}
                      </p>
                      <p className="text-xs text-emerald-800 font-light mt-0.5">
                        {language === "fr"
                          ? "Notre conseiller local vous contactera sous 24h avec une étude détaillée de rentabilité."
                          : "Our local advisor will contact you within 24h with your detailed revenue study."}
                      </p>
                    </div>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-rose-50 text-rose-800 border border-rose-100 rounded-xl text-sm font-medium"
                  >
                    {errorMessage}
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-primary hover:bg-black text-white py-4 px-6 rounded-xl text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-lg disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  {status === "loading" ? (
                    <span>{language === "fr" ? "Transmission en cours..." : "Submitting..."}</span>
                  ) : (
                    <span>{language === "fr" ? "Envoyer ma demande d'estimation" : "Submit my estimate request"}</span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        <SectionFooterNav
          prevId="a-propos"
          prevLabel="À Propos de SHOST"
          nextId="home"
          nextLabel="Haut de page (Accueil)"
          theme="light"
        />
      </div>
    </section>
  );
}
