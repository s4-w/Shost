import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calculator, TrendingUp, Home, Building2, Star, Sparkles, Check, ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "@/components/Logo";

type Step = 1 | 2 | 3;

export default function RevenueEstimator() {
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

  const calculateRevenue = () => {
    setIsCalculating(true);
    
    setTimeout(() => {
      let basePrice = city.toLowerCase().includes("paris") ? 180 : 100;
      const typeMultiplier = propertyType === "villa" ? 2.5 : propertyType === "house" ? 1.8 : 1;
      const standingMultiplier = standing === "luxury" ? 2 : standing === "premium" ? 1.4 : 1;
      const amenityBonus = amenities.length * 25;
      
      const dailyRate = (basePrice * typeMultiplier * standingMultiplier) + amenityBonus;
      const monthlyRevenue = Math.round(dailyRate * 22);
      
      setEstimation({
        monthly: monthlyRevenue,
        annual: monthlyRevenue * 12
      });
      setIsCalculating(false);
    }, 1500);
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
    { id: "view", label: "Vue Exceptionnelle", icon: "🌅" },
    { id: "gym", label: "Salle de sport", icon: "💪" },
  ];

  return (
    <section id="estimateur" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-white shadow-2xl overflow-hidden border border-primary/5 flex flex-col lg:flex-row min-h-[700px]">
          
          {/* Left Side - Info */}
          <div className="lg:w-2/5 bg-primary p-12 md:p-20 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-[-10%] right-[-10%] w-64 h-64 border border-white rounded-full" />
              <div className="absolute bottom-[-20%] left-[-20%] w-96 h-96 border border-white rounded-full" />
            </div>

            <div className="relative z-10">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-accent uppercase tracking-[0.3em] text-[10px] font-bold mb-6 block"
              >
                Simulateur de revenus
              </motion.span>
              <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight text-white">
                Estimez vos <br />gains potentiels
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-12">
                Découvrez en moins de 2 minutes combien votre propriété pourrait vous rapporter avec une gestion professionnelle SHOST.
              </p>

              <div className="space-y-8">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center gap-6">
                    <div className={`w-10 h-10 rounded-full border flex items-center justify-center text-sm font-bold transition-all ${
                      step === s ? "bg-accent border-accent text-white" : 
                      step > s ? "bg-white border-white text-primary" : "border-white/20 text-white/40"
                    }`}>
                      {step > s ? <Check className="w-5 h-5" /> : s}
                    </div>
                    <div>
                      <p className={`text-[10px] uppercase tracking-[0.2em] font-bold ${
                        step === s ? "text-white" : "text-white/40"
                      }`}>
                        {s === 1 ? "Localisation" : s === 2 ? "Caractéristiques" : "Prestations"}
                      </p>
                      <p className={`text-xs ${step === s ? "text-white/60" : "text-white/20"}`}>
                        {s === 1 ? "Ville et type de bien" : s === 2 ? "Standing et chambres" : "Équipements exclusifs"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 pt-10 border-t border-white/10 mt-12">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-primary bg-secondary overflow-hidden">
                      <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <p className="text-[10px] text-white/60 uppercase tracking-widest">+50 propriétaires nous font confiance</p>
              </div>
            </div>
          </div>

          {/* Right Side - Interactive Form */}
          <div className="flex-1 p-12 md:p-24 flex flex-col justify-center bg-surface relative">
            {!estimation ? (
              <div className="w-full max-w-lg mx-auto">
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-10"
                    >
                      <div className="space-y-6">
                        <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary flex items-center gap-2">
                          <Home className="w-3 h-3 text-accent" /> Où se situe votre bien ?
                        </label>
                        <Input 
                          required
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          placeholder="Ex: Paris 8ème, Cannes, Courchevel..." 
                          className="rounded-none border-primary/10 focus:border-accent py-10 text-xl px-8 shadow-sm"
                        />
                      </div>

                      <div className="space-y-6">
                        <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary flex items-center gap-2">
                          <Building2 className="w-3 h-3 text-accent" /> Type de propriété
                        </label>
                        <div className="grid grid-cols-3 gap-6">
                          {(["apartment", "house", "villa"] as const).map((type) => (
                            <button
                              key={type}
                              onClick={() => setPropertyType(type)}
                              className={`py-8 border flex flex-col items-center gap-3 transition-all ${
                                propertyType === type ? "bg-primary text-white border-primary shadow-xl scale-105" : "bg-white border-primary/5 text-primary/60 hover:border-accent"
                              }`}
                            >
                              <span className="text-xs font-bold uppercase tracking-widest">
                                {type === "apartment" ? "Appartement" : type === "house" ? "Maison" : "Villa"}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <Button 
                        disabled={!city}
                        onClick={() => setStep(2)}
                        className="w-full bg-primary hover:bg-accent text-white rounded-none py-10 uppercase tracking-[0.2em] text-xs font-bold transition-all group shadow-2xl"
                      >
                        Continuer l'estimation
                        <ChevronRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-10"
                    >
                      <div className="space-y-6">
                        <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary flex items-center gap-2">
                          <Star className="w-3 h-3 text-accent" /> Standing de la propriété
                        </label>
                        <div className="space-y-4">
                          {(["standard", "premium", "luxury"] as const).map((s) => (
                            <button
                              key={s}
                              onClick={() => setStanding(s)}
                              className={`w-full p-6 border flex items-center justify-between transition-all ${
                                standing === s ? "bg-primary text-white border-primary shadow-xl" : "bg-white border-primary/5 text-primary/60 hover:border-accent"
                              }`}
                            >
                              <div className="text-left">
                                <p className="text-sm font-bold uppercase tracking-widest mb-1">
                                  {s === "standard" ? "Standard" : s === "premium" ? "Premium" : "Ultra Luxe"}
                                </p>
                                <p className={`text-xs ${standing === s ? "text-white/60" : "text-primary/40"}`}>
                                  {s === "standard" ? "Confortable et moderne" : s === "premium" ? "Prestations haut de gamme" : "Exceptionnel, design & services"}
                                </p>
                              </div>
                              {standing === s && <Check className="w-5 h-5 text-accent" />}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-6">
                        <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary flex items-center gap-2">
                          <Calculator className="w-3 h-3 text-accent" /> Nombre de chambres
                        </label>
                        <div className="flex items-center gap-4">
                          {[1, 2, 3, 4, "5+"].map((num) => (
                            <button
                              key={num}
                              onClick={() => setRooms(typeof num === 'number' ? num : 5)}
                              className={`flex-1 py-6 border transition-all text-sm font-bold ${
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

                      <div className="flex gap-6">
                        <Button 
                          variant="outline"
                          onClick={() => setStep(1)}
                          className="flex-1 border-primary/10 text-primary rounded-none py-10 uppercase tracking-[0.2em] text-xs font-bold"
                        >
                          <ChevronLeft className="mr-2 w-4 h-4" /> Retour
                        </Button>
                        <Button 
                          onClick={() => setStep(3)}
                          className="flex-1 bg-primary hover:bg-accent text-white rounded-none py-10 uppercase tracking-[0.2em] text-xs font-bold transition-all"
                        >
                          Suivant
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-10"
                    >
                      <div className="space-y-6">
                        <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary flex items-center gap-2">
                          <Sparkles className="w-3 h-3 text-accent" /> Équipements & Atouts
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                          {amenityList.map((item) => (
                            <button
                              key={item.id}
                              onClick={() => toggleAmenity(item.id)}
                              className={`p-6 border flex items-center gap-4 transition-all ${
                                amenities.includes(item.id) ? "bg-primary text-white border-primary shadow-md" : "bg-white border-primary/5 text-primary/60 hover:border-accent"
                              }`}
                            >
                              <span className="text-2xl">{item.icon}</span>
                              <span className="text-xs font-bold uppercase tracking-widest">{item.label}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-6">
                        <Button 
                          variant="outline"
                          onClick={() => setStep(2)}
                          className="flex-1 border-primary/10 text-primary rounded-none py-10 uppercase tracking-[0.2em] text-xs font-bold"
                        >
                          <ChevronLeft className="mr-2 w-4 h-4" /> Retour
                        </Button>
                        <Button 
                          onClick={calculateRevenue}
                          disabled={isCalculating}
                          className="flex-1 bg-accent hover:bg-primary text-white rounded-none py-10 uppercase tracking-[0.2em] text-xs font-bold transition-all shadow-2xl shadow-accent/20"
                        >
                          {isCalculating ? "Analyse du marché..." : "Calculer mes gains"}
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center w-full max-w-lg mx-auto"
              >
                <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-10 p-4">
                  <Logo className="w-full" light={false} />
                </div>
                
                <div className="mb-12">
                  <h4 className="text-primary uppercase tracking-[0.4em] text-[10px] font-bold mb-6">Estimation mensuelle brute</h4>
                  <p className="text-8xl md:text-9xl font-serif text-primary mb-4 leading-none">
                    {estimation.monthly.toLocaleString()}€
                  </p>
                  <div className="h-[2px] w-32 bg-accent mx-auto mb-8" />
                  <p className="text-primary/40 uppercase tracking-[0.3em] text-xs font-bold">
                    Potentiel annuel : <span className="text-primary">{estimation.annual.toLocaleString()}€</span>
                  </p>
                </div>

                <div className="bg-secondary/50 p-10 mb-12 border border-primary/5">
                  <p className="text-primary/70 leading-relaxed italic text-lg">
                    "Votre bien à {city} présente un fort potentiel. Avec notre gestion optimisée, vous pourriez atteindre ces revenus dès le premier trimestre."
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6">
                  <Button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="flex-1 bg-primary hover:bg-accent text-white rounded-none py-10 uppercase tracking-[0.2em] text-xs font-bold transition-all shadow-xl"
                  >
                    Étude gratuite complète
                  </Button>
                  <Button 
                    onClick={reset}
                    variant="outline"
                    className="flex-1 border-primary/10 text-primary rounded-none py-10 uppercase tracking-[0.2em] text-xs font-bold"
                  >
                    Nouvelle simulation
                  </Button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
