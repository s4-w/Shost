import React from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";

export default function Contact() {
  const { language } = useLanguage();

  const iconVariants = {
    hover: { 
      scale: 1.1,
      rotate: 5,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white shadow-2xl overflow-hidden border border-primary/5">
          <div className="flex flex-col md:flex-row">
            {/* Header / Intro */}
            <div className="md:w-1/2 bg-primary text-white p-12 md:p-16 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight text-white text-left">
                {language === 'fr' ? 'Contactez-nous' : 'Contact Us'}
              </h2>
              <p className="text-white/80 leading-relaxed text-lg mb-0 text-left">
                {language === 'fr' 
                  ? "Vous souhaitez déléguer la gestion de votre bien ou obtenir une estimation ? Notre équipe dédiée est à votre entière disposition."
                  : "Would you like to delegate the management of your property or get an estimate? Our dedicated team is at your full disposal."}
              </p>
            </div>

            {/* Info Section */}
            <div className="md:w-1/2 p-12 md:p-16 bg-surface flex flex-col justify-center">
              <div className="space-y-10">
                <motion.div 
                  initial="initial"
                  whileHover="hover"
                  className="flex items-center gap-6 group cursor-pointer"
                >
                  <div className="w-14 h-14 bg-white border border-primary/10 flex items-center justify-center rounded-none shadow-sm group-hover:bg-black transition-all duration-300">
                    <motion.div variants={iconVariants}>
                      <Phone className="text-primary group-hover:text-accent w-6 h-6 transition-colors" />
                    </motion.div>
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-primary/40 mb-1 font-bold">
                      {language === 'fr' ? 'Téléphone' : 'Phone'}
                    </p>
                    <p className="text-xl font-medium text-primary tracking-wide transition-colors group-hover:text-black">06 26 29 06 49</p>
                  </div>
                </motion.div>

                <motion.div 
                  initial="initial"
                  whileHover="hover"
                  className="flex items-center gap-6 group cursor-pointer"
                >
                  <div className="w-14 h-14 bg-white border border-primary/10 flex items-center justify-center rounded-none shadow-sm group-hover:bg-black transition-all duration-300">
                    <motion.div variants={iconVariants}>
                      <Mail className="text-primary group-hover:text-accent w-6 h-6 transition-colors" />
                    </motion.div>
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-primary/40 mb-1 font-bold">Email</p>
                    <p className="text-xl font-medium text-primary transition-colors group-hover:text-black">shost.services@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div 
                  initial="initial"
                  whileHover="hover"
                  className="flex items-center gap-6 group cursor-pointer"
                >
                  <div className="w-14 h-14 bg-white border border-primary/10 flex items-center justify-center rounded-none shadow-sm group-hover:bg-black transition-all duration-300">
                    <motion.div variants={iconVariants}>
                      <MapPin className="text-primary group-hover:text-accent w-6 h-6 transition-colors" />
                    </motion.div>
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-primary/40 mb-1 font-bold">
                      {language === 'fr' ? 'Adresse' : 'Address'}
                    </p>
                    <p className="text-xl font-medium text-primary uppercase tracking-wider transition-colors group-hover:text-black">
                      Grenoble
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
