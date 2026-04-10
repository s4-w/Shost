import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="bg-white shadow-2xl flex flex-col lg:flex-row overflow-hidden border border-primary/5">
          {/* Contact Info */}
          <div className="lg:w-2/5 bg-primary text-white p-12 md:p-20">
            <h2 className="text-5xl font-serif mb-10 leading-tight text-white">Parlons de votre projet</h2>
            <p className="text-white mb-16 leading-relaxed text-lg">
              Vous souhaitez déléguer la gestion de votre bien ou obtenir une estimation ? Notre équipe dédiée est à votre entière disposition.
            </p>

            <div className="space-y-10">
              <div className="flex items-center gap-8 group">
                <div className="w-14 h-14 border border-white/10 flex items-center justify-center rounded-full group-hover:border-accent transition-colors">
                  <Phone className="text-accent w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white mb-2 font-bold">Téléphone</p>
                  <p className="text-xl font-medium">+33 1 23 45 67 89</p>
                </div>
              </div>
              <div className="flex items-center gap-8 group">
                <div className="w-14 h-14 border border-white/10 flex items-center justify-center rounded-full group-hover:border-accent transition-colors">
                  <Mail className="text-accent w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white mb-2 font-bold">Email</p>
                  <p className="text-xl font-medium">contact@shost.fr</p>
                </div>
              </div>
              <div className="flex items-center gap-8 group">
                <div className="w-14 h-14 border border-white/10 flex items-center justify-center rounded-full group-hover:border-accent transition-colors">
                  <MapPin className="text-accent w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white mb-2 font-bold">Adresse</p>
                  <p className="text-xl font-medium">123 Avenue des Champs-Élysées, Paris</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-3/5 p-12 md:p-20 bg-surface relative min-h-[600px] flex items-center">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubmit} 
                  className="space-y-8 w-full"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary">Nom Complet</label>
                      <Input required placeholder="Jean Dupont" className="rounded-none border-primary/5 bg-white focus:border-accent transition-all py-8 px-6 shadow-sm" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary">Email</label>
                      <Input required type="email" placeholder="jean@example.com" className="rounded-none border-primary/5 bg-white focus:border-accent transition-all py-8 px-6 shadow-sm" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary">Ville du bien</label>
                    <Input required placeholder="Paris, Lyon, Bordeaux..." className="rounded-none border-primary/5 bg-white focus:border-accent transition-all py-8 px-6 shadow-sm" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary">Message</label>
                    <Textarea required placeholder="Parlez-nous de votre bien..." className="rounded-none border-primary/5 bg-white focus:border-accent transition-all min-h-[180px] p-6 shadow-sm" />
                  </div>
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-accent text-white rounded-none py-10 uppercase tracking-[0.3em] text-xs font-bold transition-all shadow-xl hover:shadow-accent/20"
                  >
                    {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
                  </Button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center w-full py-12"
                >
                  <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 className="text-accent w-12 h-12" />
                  </div>
                  <h3 className="text-4xl font-serif mb-4">Demande envoyée !</h3>
                  <p className="text-primary text-lg mb-10 max-w-sm mx-auto">
                    Merci pour votre confiance. Un conseiller SHOST vous contactera sous 24h pour discuter de votre projet.
                  </p>
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="border-primary/10 text-primary uppercase tracking-[0.2em] text-[10px] font-bold rounded-none px-10 py-6"
                  >
                    Envoyer un autre message
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
