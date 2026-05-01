import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: "Non spécifié (Modal)",
      city: "Général (Modal)",
      message: formData.get("message"),
      source: "Formulaire de contact (Modal)"
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const errorData = await response.json();
        alert(`Erreur: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Une erreur est survenue lors de l'envoi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-primary/40 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-4xl shadow-2xl overflow-hidden border border-primary/5 flex flex-col md:flex-row"
          >
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="absolute top-6 right-6 z-[110] text-primary/40 hover:text-primary transition-colors p-2 hover:bg-primary/5 rounded-full"
              aria-label="Fermer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Side - Info */}
            <div className="hidden md:flex md:w-2/5 bg-primary p-12 text-white flex-col justify-center items-start text-left">
              <h3 className="text-3xl font-serif mb-8">Contact Privilégié</h3>
              <p className="text-white mb-12 text-sm leading-relaxed opacity-80">
                Notre équipe vous accompagne avec passion dans la valorisation de votre patrimoine immobilier.
              </p>
              
              <div className="space-y-8 w-full">
                <div className="flex flex-row items-center gap-4">
                  <div className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-full shrink-0">
                    <Phone className="text-accent w-4 h-4" />
                  </div>
                  <span className="text-sm">06 26 29 06 49</span>
                </div>
                <div className="flex flex-row items-center gap-4">
                  <div className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-full shrink-0">
                    <Mail className="text-accent w-4 h-4" />
                  </div>
                  <span className="text-sm">shost.services@gmail.com</span>
                </div>
                <div className="flex flex-row items-center gap-4">
                  <div className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-full shrink-0">
                    <MapPin className="text-accent w-4 h-4" />
                  </div>
                  <span className="text-sm">Grenoble</span>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="flex-1 p-10 md:p-12 bg-surface">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary">Nom Complet</label>
                      <Input name="name" required placeholder="Jean Dupont" className="rounded-none border-primary/10 py-6" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary">Email</label>
                      <Input name="email" required type="email" placeholder="jean@example.com" className="rounded-none border-primary/10 py-6" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary">Message</label>
                      <Textarea name="message" required placeholder="Votre projet..." className="rounded-none border-primary/10 min-h-[120px]" />
                    </div>
                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-accent text-white rounded-none py-8 uppercase tracking-[0.2em] text-[10px] font-bold transition-all"
                    >
                      {isSubmitting ? "Envoi..." : "Envoyer"}
                    </Button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle2 className="text-accent w-16 h-16 mx-auto mb-6" />
                    <h4 className="text-2xl font-serif mb-2">Merci !</h4>
                    <p className="text-primary text-sm mb-8">Nous vous recontactons très rapidement.</p>
                    <Button 
                      onClick={onClose}
                      variant="outline"
                      className="border-primary/10 text-primary uppercase tracking-[0.2em] text-[10px] font-bold rounded-none"
                    >
                      Fermer
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
