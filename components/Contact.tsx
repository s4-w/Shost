import React from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Instagram, Calendar } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";

export default function Contact() {
  const { language } = useLanguage();
  const [nom, setNom] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [telephone, setTelephone] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = React.useState("");

  const iconVariants = {
    hover: { 
      scale: 1.1,
      rotate: 5,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nom.trim() || !email.trim() || !message.trim()) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbzXCEisWvz0rEikh_JPHufMZL3PnuRIds63DAoqKcfuEanh0gxeF-nj-NZ9Utb_lL5R/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain",
        },
        body: JSON.stringify({ nom, email, telephone, message }),
      });

      // Google Apps Script can redirect (status 302) or return an opaque response in 'no-cors' mode.
      // If the response is opaque or status is 0 or 200/ok, we treat it as successfully sent.
      if (response.type === 'opaque' || response.status === 0 || response.ok || response.status === 200) {
        setStatus("success");
        setNom("");
        setEmail("");
        setTelephone("");
        setMessage("");
      } else {
        throw new Error("HTTP error " + response.status);
      }
    } catch (err) {
      console.error("Error submitting contact form", err);
      setStatus("error");
      setErrorMessage(
        language === "fr"
          ? "Une erreur est survenue lors de l'envoi. Veuillez réessayer."
          : "An error occurred while sending. Please try again."
      );
    }
  };

  return (
    <section id="contact" className="py-24 bg-secondary rounded-t-[2.5rem] md:rounded-t-[4rem] -mt-10 md:-mt-16 relative z-10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white shadow-[0_30px_70px_rgba(17,34,51,0.25)] overflow-hidden rounded-3xl border border-primary/10">
          <div className="flex flex-col md:flex-row">
            {/* Header / Intro & Info Section */}
            <div className="md:w-1/2 bg-primary text-white p-12 md:p-16 flex flex-col justify-between min-h-[500px]">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight text-white text-left">
                  {language === 'fr' ? 'Contactez-nous' : 'Contact Us'}
                </h2>
                <p className="text-white/80 leading-relaxed text-base mb-8 text-left font-light">
                  {language === 'fr' 
                    ? "Vous souhaitez déléguer la gestion de votre bien ou obtenir une estimation ? Notre équipe dédiée est à votre entière disposition."
                    : "Would you like to delegate the management of your property or get an estimate? Our dedicated team is at your full disposal."}
                </p>

                {/* Compact Info List */}
                <div className="space-y-5.5 my-8 text-left text-lg md:text-[19px] font-medium text-white/90">
                  <div className="flex items-center gap-4 hover:text-accent transition-colors">
                    <Phone className="w-5 h-5 text-accent shrink-0" />
                    <a href="tel:0626290649" className="hover:underline">06 26 29 06 49</a>
                  </div>
                  <div className="flex items-center gap-4 hover:text-accent transition-colors">
                    <Mail className="w-5 h-5 text-accent shrink-0" />
                    <a href="mailto:shost.services@gmail.com" className="hover:underline">shost.services@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-4 hover:text-accent transition-colors">
                    <Instagram className="w-5 h-5 text-accent shrink-0" />
                    <a href="https://www.instagram.com/shost.services/" target="_blank" rel="noopener noreferrer" className="hover:text-accent hover:underline transition-colors">
                      @shost.services
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="w-5 h-5 text-accent shrink-0" />
                    <span>Grenoble</span>
                  </div>
                </div>
              </div>

              <motion.a 
                href="https://calendly.com/shost-manage/30min"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, backgroundColor: "#c5a059", color: "#112233" }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 w-full bg-white text-primary border border-white/10 py-4.5 px-6 rounded-xl text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-xl mb-6 md:mb-10"
              >
                <Calendar className="w-4 h-4 shrink-0" />
                <span>
                  {language === 'fr' ? 'Réserver un appel' : 'Book a call'}
                </span>
              </motion.a>
            </div>

            {/* Interactive Form Section */}
            <div className="md:w-1/2 p-12 md:p-16 bg-surface flex flex-col justify-center text-left">
              <h3 className="text-2xl font-serif text-primary mb-6">
                {language === 'fr' ? 'Parlons de votre projet' : "Let's discuss your project"}
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="form-nom" className="block text-[10px] uppercase tracking-[0.2em] font-bold text-primary/60 mb-2">
                    {language === 'fr' ? 'Nom' : 'Name'}
                  </label>
                  <input
                    id="form-nom"
                    type="text"
                    required
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    placeholder={language === 'fr' ? 'Votre nom complet' : 'Your full name'}
                    className="w-full bg-white border border-primary/10 focus:border-accent text-primary focus:outline-none rounded-xl py-3.5 px-4 text-sm transition-all shadow-sm"
                  />
                </div>

                <div>
                  <label htmlFor="form-email" className="block text-[10px] uppercase tracking-[0.2em] font-bold text-primary/60 mb-2">
                    {language === 'fr' ? 'Email' : 'Email'}
                  </label>
                  <input
                    id="form-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={language === 'fr' ? 'votre@email.com' : 'your@email.com'}
                    className="w-full bg-white border border-primary/10 focus:border-accent text-primary focus:outline-none rounded-xl py-3.5 px-4 text-sm transition-all shadow-sm"
                  />
                </div>

                <div>
                  <label htmlFor="form-telephone" className="block text-[10px] uppercase tracking-[0.2em] font-bold text-primary/60 mb-2">
                    {language === 'fr' ? 'Téléphone' : 'Phone Number'}
                  </label>
                  <input
                    id="form-telephone"
                    type="tel"
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                    placeholder={language === 'fr' ? 'Ex: 06 12 34 56 78' : 'e.g. +33 6 12 34 56 78'}
                    className="w-full bg-white border border-primary/10 focus:border-accent text-primary focus:outline-none rounded-xl py-3.5 px-4 text-sm transition-all shadow-sm"
                  />
                </div>

                <div>
                  <label htmlFor="form-message" className="block text-[10px] uppercase tracking-[0.2em] font-bold text-primary/60 mb-2">
                    {language === 'fr' ? 'Message' : 'Message'}
                  </label>
                  <textarea
                    id="form-message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={language === 'fr' ? 'Comment pouvons-nous vous aider ?' : 'How can we help you?'}
                    className="w-full bg-white border border-primary/10 focus:border-accent text-primary focus:outline-none rounded-xl py-3.5 px-4 text-sm resize-none transition-all shadow-sm"
                  />
                </div>

                {status === "success" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-emerald-50 text-emerald-800 border border-emerald-100 rounded-xl text-sm font-medium"
                  >
                    {language === 'fr' ? 'Votre message a bien été envoyé !' : 'Your message has been successfully sent!'}
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

                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary hover:bg-black text-white py-4 px-6 rounded-xl text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-lg disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {status === "loading" ? (
                    <span>{language === 'fr' ? 'Envoi...' : 'Sending...'}</span>
                  ) : (
                    <span>{language === 'fr' ? 'Envoyer' : 'Send'}</span>
                  )}
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
