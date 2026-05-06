import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calculator, TrendingUp, Home, Building2, Star, Sparkles, Check, ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface EstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Step = 1 | 2 | 3;

export default function EstimatorModal({ isOpen, onClose }: EstimatorModalProps) {
  const [step, setStep] = useState<Step>(1);
  const [city, setCity] = useState("");
  const [propertyType, setPropertyType] = useState<"apartment" | "house" | "villa">("apartment");
  const [rooms, setRooms] = useState<number>(1);
  const [standing, setStanding] = useState<"standard" | "premium" | "luxury">("premium");
  const [amenities, setAmenities] = useState<string[]>([]);
  
  const [estimation, setEstimation] = useState<{ monthly: number; annual: number } | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const toggleAmenity = (amenity: string) => {
    setAmenities(prev => 
      prev.includes(amenity) ? prev.filter(a => a !== amenity) : [...prev, amenity]
    );
  };

  const calculateRevenue = async () => {
    setIsCalculating(true);
    
    // Logic for estimation calculation
    let basePrice = city.toLowerCase().includes("grenoble") ? 140 : 100;
    const typeMultiplier = propertyType === "villa" ? 2.5 : propertyType === "house" ? 1.8 : 1;
    const standingMultiplier = standing === "luxury" ? 2 : standing === "premium" ? 1.4 : 1;
    const amenityBonus = amenities.length * 25;
    
    const dailyRate = (basePrice * typeMultiplier * standingMultiplier) + amenityBonus;
    const monthlyRevenue = Math.round(dailyRate * 22);
    const est = {
      monthly: monthlyRevenue,
      annual: monthlyRevenue * 12
    };

    setEstimation(est);
    setIsCalculating(false);
  };

  const reset = () => {
    setStep(1);
    setEstimation(null);
    setCity("");
    setRooms(1);
    setAmenities([]);
  };

  const amenityList = [
    { id: "pool", label: "Piscine", icon: "🏊‍♂️" },
    { id: "terrace", label: "Terrasse", icon: "☀️" },
    { id: "parking", label: "Parking", icon: "🚗" },
    { id: "ac", label: "Climatisation", icon: "❄️" },
    { id: "smart_access", label: "Accès Connecté", icon: "🔐" },
    { id: "view", label: "Vue Exceptionnelle", icon: "🌅" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-primary/60 backdrop-blur-xl"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white w-full max-w-4xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.3)] overflow-hidden border border-primary/5 flex flex-col md:flex-row min-h-[600px]"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-50 text-primary/40 hover:text-primary transition-colors bg-white/80 backdrop-blur p-2 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Side - Progress & Info */}
            <div className="md:w-1/3 bg-primary p-10 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-64 h-64 border border-white rounded-full" />
                <div className="absolute bottom-[-20%] left-[-20%] w-96 h-96 border border-white rounded-full" />
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 bg-accent flex items-center justify-center mb-8">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-serif mb-4">Estimateur de Prestige</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-12">
                  Obtenez une analyse précise du potentiel locatif de votre propriété en quelques étapes.
                </p>

                <div className="space-y-6">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs font-bold transition-all ${
                        step === s ? "bg-accent border-accent text-white" : 
                        step > s ? "bg-white border-white text-primary" : "border-white/20 text-white/40"
                      }`}>
                        {step > s ? <Check className="w-4 h-4" /> : s}
                      </div>
                      <span className={`text-[10px] uppercase tracking-[0.2em] font-bold ${
                        step === s ? "text-white" : "text-white/40"
                      }`}>
                        {s === 1 ? "Localisation" : s === 2 ? "Caractéristiques" : "Prestations"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 pt-10 border-t border-white/10">
                <p className="text-[10px] text-white/40 uppercase tracking-widest">Confidentialité garantie</p>
              </div>
            </div>

            {/* Right Side - Form Steps */}
            <div className="flex-1 p-8 md:p-16 flex flex-col justify-center bg-surface">
              {!estimation ? (
                <div className="w-full max-w-md mx-auto">
                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-8"
                      >
                        <div className="space-y-6">
                          <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary flex items-center gap-2">
                            <Home className="w-3 h-3 text-accent" /> Où se situe votre bien ?
                          </label>
                          <Input 
                            required
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder="Ex: Grenoble, Meylan, Saint-Ismier..." 
                            className="rounded-none border-primary/10 focus:border-accent py-8 text-lg px-6 shadow-sm"
                          />
                        </div>

                        <div className="space-y-6">
                          <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary flex items-center gap-2">
                            <Building2 className="w-3 h-3 text-accent" /> Type de propriété
                          </label>
                          <div className="grid grid-cols-3 gap-4">
                            {(["apartment", "house", "villa"] as const).map((type) => (
                              <button
                                key={type}
                                onClick={() => setPropertyType(type)}
                                className={`py-6 border flex flex-col items-center gap-2 transition-all ${
                                  propertyType === type ? "bg-primary text-white border-primary shadow-lg" : "bg-white border-primary/5 text-primary/60 hover:border-accent"
                                }`}
                              >
                                <span className="text-xs font-bold uppercase tracking-tighter">
                                  {type === "apartment" ? "Appartement" : type === "house" ? "Maison" : "Villa"}
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>

                        <Button 
                          disabled={!city}
                          onClick={() => setStep(2)}
                          className="w-full bg-primary hover:bg-accent text-white rounded-none py-8 uppercase tracking-[0.2em] text-xs font-bold transition-all group"
                        >
                          Continuer
                          <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-8"
                      >
                        <div className="space-y-6">
                          <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary flex items-center gap-2">
                            <Star className="w-3 h-3 text-accent" /> Standing de la propriété
                          </label>
                          <div className="space-y-3">
                            {(["standard", "premium", "luxury"] as const).map((s) => (
                              <button
                                key={s}
                                onClick={() => setStanding(s)}
                                className={`w-full p-5 border flex items-center justify-between transition-all ${
                                  standing === s ? "bg-primary text-white border-primary shadow-md" : "bg-white border-primary/5 text-primary/60 hover:border-accent"
                                }`}
                              >
                                <div className="text-left">
                                  <p className="text-xs font-bold uppercase tracking-widest mb-1">
                                    {s === "standard" ? "Standard" : s === "premium" ? "Premium" : "Ultra Luxe"}
                                  </p>
                                  <p className={`text-[10px] ${standing === s ? "text-white/60" : "text-primary/40"}`}>
                                    {s === "standard" ? "Confortable et moderne" : s === "premium" ? "Prestations haut de gamme" : "Exceptionnel, design & services"}
                                  </p>
                                </div>
                                {standing === s && <Check className="w-4 h-4 text-accent" />}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-6">
                          <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary flex items-center gap-2">
                            <Calculator className="w-3 h-3 text-accent" /> Nombre de chambres
                          </label>
                          <div className="flex items-center gap-3">
                            {[1, 2, 3, 4, "5+"].map((num) => (
                              <button
                                key={num}
                                onClick={() => setRooms(typeof num === 'number' ? num : 5)}
                                className={`flex-1 py-4 border transition-all text-sm font-bold ${
                                  (typeof num === 'number' ? rooms === num : rooms >= 5)
                                    ? "bg-primary text-white border-primary"
                                    : "bg-white border-primary/5 text-primary/60 hover:border-accent"
                                }`}
                              >
                                {num}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <Button 
                            variant="outline"
                            onClick={() => setStep(1)}
                            className="flex-1 border-primary/10 text-primary rounded-none py-8 uppercase tracking-[0.2em] text-xs font-bold"
                          >
                            <ChevronLeft className="mr-2 w-4 h-4" /> Retour
                          </Button>
                          <Button 
                            onClick={() => setStep(3)}
                            className="flex-1 bg-primary hover:bg-accent text-white rounded-none py-8 uppercase tracking-[0.2em] text-xs font-bold transition-all"
                          >
                            Suivant
                          </Button>
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-8"
                      >
                        <div className="space-y-6">
                          <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary flex items-center gap-2">
                            <Sparkles className="w-3 h-3 text-accent" /> Équipements & Atouts
                          </label>
                          <div className="grid grid-cols-2 gap-3">
                            {amenityList.map((item) => (
                              <button
                                key={item.id}
                                onClick={() => toggleAmenity(item.id)}
                                className={`p-4 border flex items-center gap-3 transition-all ${
                                  amenities.includes(item.id) ? "bg-primary text-white border-primary shadow-sm" : "bg-white border-primary/5 text-primary/60 hover:border-accent"
                                }`}
                              >
                                <span className="text-lg">{item.icon}</span>
                                <span className="text-[10px] font-bold uppercase tracking-tight">{item.label}</span>
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <Button 
                            variant="outline"
                            onClick={() => setStep(2)}
                            className="flex-1 border-primary/10 text-primary rounded-none py-8 uppercase tracking-[0.2em] text-xs font-bold"
                          >
                            <ChevronLeft className="mr-2 w-4 h-4" /> Retour
                          </Button>
                          <Button 
                            onClick={calculateRevenue}
                            disabled={isCalculating}
                            className="flex-1 bg-accent hover:bg-primary text-white rounded-none py-8 uppercase tracking-[0.2em] text-xs font-bold transition-all shadow-xl shadow-accent/20"
                          >
                            {isCalculating ? "Analyse..." : "Voir l'estimation"}
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-8">
                    <TrendingUp className="text-accent w-10 h-10" />
                  </div>
                  
                  <div className="mb-12">
                    <h4 className="text-primary uppercase tracking-[0.4em] text-[10px] font-bold mb-4">Potentiel mensuel estimé</h4>
                    <p className="text-7xl font-serif text-primary mb-2">
                      {estimation.monthly.toLocaleString()}€
                    </p>
                    <div className="h-[1px] w-24 bg-accent mx-auto mb-6" />
                    <p className="text-primary/40 uppercase tracking-[0.2em] text-[10px] font-bold">
                      Soit environ <span className="text-primary">{estimation.annual.toLocaleString()}€</span> par an
                    </p>
                  </div>

                  <div className="bg-secondary/50 p-8 mb-10 border border-primary/5">
                    <p className="text-sm text-primary/70 leading-relaxed italic">
                      "Cette estimation est basée sur les données du marché à {city} pour un bien de standing {standing === "luxury" ? "Ultra Luxe" : standing === "premium" ? "Premium" : "Standard"}."
                    </p>
                  </div>

                  <div className="flex flex-col gap-4">
                    <Button 
                      onClick={() => {
                        onClose();
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full bg-primary hover:bg-accent text-white rounded-none py-8 uppercase tracking-[0.2em] text-xs font-bold transition-all"
                    >
                      Recevoir l'étude complète
                    </Button>
                    <Button 
                      onClick={reset}
                      variant="link"
                      className="text-primary/40 hover:text-primary uppercase tracking-[0.2em] text-[10px] font-bold"
                    >
                      Refaire une simulation
                    </Button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
