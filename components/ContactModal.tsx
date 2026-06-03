import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { X, Mail, Phone, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const iconVariants = {
    hover: { 
      scale: 1.1,
      rotate: 5,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] overflow-y-auto flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-primary/40 backdrop-blur-md"
          />
          
          <div className="flex min-h-full w-full items-center justify-center p-4 sm:p-6 md:p-10 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="relative bg-white w-full max-w-2xl shadow-2xl rounded-xl md:rounded-none overflow-hidden border border-primary/5 flex flex-col md:flex-row z-[10000] pointer-events-auto"
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

            {/* Left Side - Accent */}
            <div className="w-full md:w-1/3 bg-primary p-12 text-white flex flex-col justify-center items-center text-center">
              <div className="w-16 h-16 border border-white/10 flex items-center justify-center rounded-full mb-6">
                <Calendar className="text-accent w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif text-white">Contact</h3>
            </div>

            {/* Right Side - Info */}
            <div className="flex-1 p-10 md:p-16 bg-surface flex flex-col justify-center text-left">
              <div className="space-y-6">
                <motion.div 
                  initial="initial"
                  whileHover="hover"
                  className="flex items-center gap-6 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-white border border-primary/10 flex items-center justify-center rounded-none shadow-sm group-hover:bg-black transition-all">
                    <motion.div variants={iconVariants}>
                      <Phone className="text-primary group-hover:text-accent w-5 h-5 transition-colors" />
                    </motion.div>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-primary/40 mb-1">Téléphone</p>
                    <p className="font-medium text-lg text-primary transition-colors group-hover:text-black">06 26 29 06 49</p>
                  </div>
                </motion.div>

                <motion.div 
                  initial="initial"
                  whileHover="hover"
                  className="flex items-center gap-6 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-white border border-primary/10 flex items-center justify-center rounded-none shadow-sm group-hover:bg-black transition-all">
                    <motion.div variants={iconVariants}>
                      <Mail className="text-primary group-hover:text-accent w-5 h-5 transition-colors" />
                    </motion.div>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-primary/40 mb-1">Email</p>
                    <p className="font-medium text-lg text-primary transition-colors group-hover:text-black">shost.services@gmail.com</p>
                  </div>
                </motion.div>

                <motion.a 
                  href="https://calendly.com/shost-manage/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial="initial"
                  whileHover="hover"
                  className="flex items-center gap-6 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-white border border-primary/10 flex items-center justify-center rounded-none shadow-sm group-hover:bg-black transition-all">
                    <motion.div variants={iconVariants}>
                      <Calendar className="text-primary group-hover:text-accent w-5 h-5 transition-colors" />
                    </motion.div>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-accent mb-1">Calendly</p>
                    <p className="font-medium text-lg text-primary transition-colors group-hover:text-black hover:text-accent">Réserver un appel</p>
                  </div>
                </motion.a>

                <motion.div 
                  initial="initial"
                  whileHover="hover"
                  className="flex items-center gap-6 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-white border border-primary/10 flex items-center justify-center rounded-none shadow-sm group-hover:bg-black transition-all">
                    <motion.div variants={iconVariants}>
                      <MapPin className="text-primary group-hover:text-accent w-5 h-5 transition-colors" />
                    </motion.div>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-primary/40 mb-1">Ville</p>
                    <p className="font-medium text-lg text-primary transition-colors group-hover:text-black">Grenoble</p>
                  </div>
                </motion.div>
              </div>

              <Button 
                onClick={onClose}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 w-full bg-primary hover:bg-black text-white rounded-none py-8 uppercase tracking-[0.2em] text-[10px] font-bold transition-all shadow-lg"
              >
                Fermer
              </Button>
            </div>
          </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
