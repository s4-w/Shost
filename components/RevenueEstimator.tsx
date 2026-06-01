import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Calculator, TrendingUp, Home, Building2, Star, Sparkles, 
  Check, ChevronRight, ChevronLeft, Info, X, Shield, 
  MapPin, Users, BedDouble, Award, Coins, BarChart3,
  Waves, Droplets, TreePine, Wind, Car
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import { useLanguage } from "@/src/context/LanguageContext";
import { cn } from "@/lib/utils";

type Step = 1 | 2 | 3 | 4;

const MONTHS_FR = ['Jan','Fév','Mar','Avr','Mai','Juin','Juil','Août','Sept','Oct','Nov','Déc'];
const MONTHS_EN = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const ZONES_DATA = {
  centre: { adr: 105, occ: 0.76, icon: "🏰", img: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&q=80&w=800" },
  montagne: { adr: 145, occ: 0.65, icon: "🏔️", img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800" },
  peripherie: { adr: 85, occ: 0.72, icon: "🏡", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800" }
};

const TYPE_MULT = { appartement: 1.0, maison: 1.15, loft: 1.1, villa: 1.35 };
const STANDING_MULT = { standard: 1.0, premium: 1.25, luxe: 1.50 };
const STANDING_OCC_BOOST = { standard: 0, premium: 0.05, luxe: 0.08 };
const SEASONALITY = [0.95, 1.20, 0.90, 0.85, 0.95, 1.10, 1.25, 1.30, 0.95, 0.85, 0.80, 1.15]; // Peaks in Winter and Late Summer
const AMENITY_BONUS = { piscine: 3200, jacuzzi: 1800, terrasse: 900, clim: 600, parking: 850 };
const MOUNTAIN_AMENITY_BONUS = { ski_storage: 400 }; // Specific to Grenoble area

export default function RevenueEstimator() {
  const { t, language } = useLanguage();
  const [step, setStep] = useState<Step>(1);
  
  // Selection State
  const [zone, setZone] = useState<keyof typeof ZONES_DATA | null>(null);
  const [propertyType, setPropertyType] = useState<keyof typeof TYPE_MULT>("appartement");
  const [bedrooms, setBedrooms] = useState(2);
  const [maxGuests, setMaxGuests] = useState(4);
  const [standing, setStanding] = useState<keyof typeof STANDING_MULT>("premium");
  const [amenities, setAmenities] = useState<string[]>([]);

  const toggleAmenity = (amenity: string) => {
    setAmenities(prev => 
      prev.includes(amenity) ? prev.filter(a => a !== amenity) : [...prev, amenity]
    );
  };

  const results = useMemo(() => {
    if (!zone) return { gross: 0, net: 0, platform: 0, shost: 0, adr: 0, avgOcc: 0, monthly: [] };
    
    const z = ZONES_DATA[zone];
    const adr = z.adr * TYPE_MULT[propertyType] * (1 + (bedrooms - 1) * 0.22) * STANDING_MULT[standing];
    const occBase = Math.min(z.occ + STANDING_OCC_BOOST[standing], 0.95);
    
    const monthlyResults = SEASONALITY.map((s, i) => {
      const adjOcc = Math.min(occBase * s, 0.97);
      return { 
        rev: Math.round(DAYS[i] * adjOcc * adr), 
        occ: adjOcc 
      };
    });

    let gross = monthlyResults.reduce((a, m) => a + m.rev, 0);
    amenities.forEach(a => { 
      gross += (AMENITY_BONUS as any)[a] || (MOUNTAIN_AMENITY_BONUS as any)[a] || 0; 
    });

    const platform = Math.round(gross * 0.15);
    const shost = Math.round(gross * 0.20);
    const net = gross - platform - shost;
    const avgOcc = Math.round(monthlyResults.reduce((a, m) => a + m.occ, 0) / 12 * 100);

    return { 
      gross, 
      net, 
      platform, 
      shost, 
      adr: Math.round(adr), 
      avgOcc, 
      monthly: monthlyResults 
    };
  }, [zone, propertyType, bedrooms, maxGuests, standing, amenities]);

  const formatCurrency = (n: number) => 
    new Intl.NumberFormat(language === 'fr' ? 'fr-FR' : 'en-US', { 
      style: 'currency', 
      currency: 'EUR', 
      maximumFractionDigits: 0 
    }).format(n);

  const reset = () => {
    setStep(1);
    setZone(null);
    setPropertyType("appartement");
    setBedrooms(2);
    setMaxGuests(4);
    setStanding("premium");
    setAmenities([]);
  };

  const amenityIcons: Record<string, any> = {
    piscine: Waves,
    jacuzzi: Droplets,
    terrasse: TreePine,
    clim: Wind,
    parking: Car,
    ski_storage: Shield
  };

  const months = language === 'fr' ? MONTHS_FR : MONTHS_EN;

  return (
    <section id="estimateur" className="py-32 bg-[#F8F9FA] text-primary overflow-hidden relative">
      {/* Éléments décoratifs d'arrière-plan */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-50">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-serif italic mb-6">
              {language === 'fr' ? 'Estimez vos revenus' : 'Estimate your revenue'}
            </h2>
            <p className="text-primary/60 font-light text-lg">
              {language === 'fr' 
                ? 'Découvrez le potentiel locatif de votre bien grâce à notre algorithme basé sur les données réelles du marché grenoblois.' 
                : 'Discover your property\'s rental potential with our algorithm based on real Grenoble market data.'}
            </p>
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-8 p-6 md:p-8 bg-[#FAF5EC]/70 border border-accent/40 rounded-2xl max-w-2xl mx-auto flex flex-col md:flex-row items-center md:justify-between text-left gap-6 shadow-md"
            >
              <div className="space-y-2 flex-grow">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-accent shrink-0" />
                  {language === 'fr' ? "PROJECTION AUTOMATISÉE VS RÉALITÉ DE TERRAIN" : "AUTOMATED ESTIMATION VS REAL MARKET DATA"}
                </p>
                <p className="text-sm font-light text-primary leading-relaxed">
                  {language === 'fr'
                    ? "Bien que performant, notre simulateur en ligne n'égale pas l'analyse sur-mesure d'un expert local. Pour obtenir un rapport de revenus 100% fiable, précis et adapté aux particularités de votre bien, contactez un conseiller."
                    : "While highly useful, our online tool cannot replace a custom expert evaluation of your property. For a 100% accurate projection tailored to your asset's finest details, get in touch with an advisor."}
                </p>
              </div>
              <a 
                href="#contact" 
                className="bg-primary hover:bg-accent text-white hover:text-primary border border-primary/20 hover:border-accent font-bold px-6 py-4.5 text-[10px] uppercase tracking-widest transition-all duration-300 rounded-lg shrink-0 w-full md:w-auto text-center"
              >
                {language === 'fr' ? "Contacter un conseiller" : "Contact an advisor"}
              </a>
            </motion.div>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto bg-white border-2 border-primary/10 shadow-2xl flex flex-col lg:flex-row min-h-[750px] rounded-2xl overflow-hidden font-light">
          
          {/* Côté gauche : Progression & Info */}
          <div className="lg:w-1/3 bg-primary p-12 flex flex-col justify-between relative overflow-hidden text-white">
            {/* Arrière-plan architecture alpine moderne */}
            <div className="absolute inset-0 z-0 opacity-35 transition-transform duration-[10s] hover:scale-110 font-light">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000" 
                alt="Propriété moderne" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/30 to-primary/90" />
            </div>

            <div className="relative z-10">
              <div className="mb-12">
                <Logo light className="w-56" />
              </div>
              
              <div className="mb-12">
                <h2 className="text-3xl font-serif italic mb-4 text-white leading-tight">
                  {language === 'fr' ? 'Estimez votre' : 'Estimate your'} <br />
                  <span className="not-italic text-accent font-sans font-bold uppercase tracking-tighter text-4xl">Revenu</span>
                </h2>
                <div className="h-1 w-12 bg-accent/30" />
              </div>
              
              <div className="space-y-8 mt-16 font-light">
                {[1, 2, 3, 4].map((s) => (
                  <div key={s} className="flex items-center gap-6">
                    <div className={cn(
                      "w-10 h-10 rounded-full border flex items-center justify-center text-sm transition-all duration-500",
                      step === s ? "bg-accent border-accent text-primary scale-110 shadow-lg font-bold" : 
                      step > s ? "bg-white/20 border-white/40 text-white" : "border-white/30 text-white/60"
                    )}>
                      {step > s ? <Check className="w-5 h-5" /> : s}
                    </div>
                    <div className="flex-1">
                      <p className={cn(
                        "text-[10px] uppercase tracking-[0.2em] font-normal transition-colors",
                        step === s ? "text-accent" : "text-white/50"
                      )}>
                        {s === 1 ? (language === 'fr' ? 'Secteur Grenoble' : 'Area') : 
                         s === 2 ? (language === 'fr' ? 'Bien' : 'Property') : 
                         s === 3 ? (language === 'fr' ? 'Configuration' : 'Amenities') : 
                         (language === 'fr' ? 'Revenus' : 'Revenue')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-10 border-t border-white/10 opacity-40 text-[10px] uppercase tracking-widest leading-loose font-normal text-white">
              <p>© 2026 SHOST Conciergerie</p>
              <p>Expertise Marché Isérois</p>
            </div>
          </div>

          {/* Côté droit : Étapes interactives */}
          <div className="flex-1 p-8 lg:p-16 flex flex-col justify-center relative bg-white text-primary">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-10"
                >
                  <div>
                    <h3 className="text-3xl font-serif mb-4 italic text-primary">{language === 'fr' ? 'Secteur géographique' : 'Geographic Sector'}</h3>
                    <p className="text-primary/50 text-sm font-light mb-6">{language === 'fr' ? "Grenoble et sa métropole offrent des dynamiques de loyers variées selon la zone." : "Grenoble and its metropolitan area offer varied rent dynamics depending on the zone."}</p>
                    
                    <div className="bg-[#FAF5EC]/50 border border-accent/20 p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex gap-3 items-start text-left">
                        <Sparkles className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <div className="space-y-1">
                          <p className="text-xs font-bold uppercase tracking-wider text-primary">
                            {language === 'fr' ? "Vous préférez un accompagnement humain d'exception ?" : "Prefer exceptional service and support?"}
                          </p>
                          <p className="text-xs text-primary/60 font-light leading-relaxed">
                            {language === 'fr' 
                              ? "Évitez les estimations algorithmiques standards. Obtenez une étude de revenus approfondie et gratuite par un conseiller local."
                              : "Skip standard algorithm guesswork. Secure an in-depth, complimentary study by our local property expert."}
                          </p>
                        </div>
                      </div>
                      <a 
                        href="#contact" 
                        className="text-xs font-bold text-accent hover:text-primary transition-colors uppercase tracking-widest inline-flex items-center gap-1.5 self-center sm:self-auto shrink-0"
                      >
                        {language === 'fr' ? "Discuter avec nous" : "Speak with us"} <ChevronRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {Object.entries(ZONES_DATA).map(([key, data]) => (
                        <motion.button
                          key={key}
                          whileHover={{ y: -12, boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.15)" }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setZone(key as any)}
                          className={cn(
                            "flex flex-col border-2 transition-all duration-500 rounded-3xl overflow-hidden group relative",
                            zone === key 
                              ? "border-accent shadow-[0_30px_60px_-15px_rgba(212,175,55,0.4)] scale-[1.05] z-20 ring-8 ring-accent/10" 
                              : "bg-white border-black/5 hover:border-black/10 shadow-lg hover:shadow-2xl"
                          )}
                        >
                          <div className="h-40 w-full relative overflow-hidden">
                            <img 
                              src={data.img} 
                              alt={`Secteur ${key === 'centre' ? 'Grenoble Centre' : key === 'montagne' ? 'Massifs Alpins' : 'Périphérie'}`} 
                              className={cn(
                                "w-full h-full object-cover transition-transform duration-1000",
                                zone === key ? "scale-120" : "scale-100 group-hover:scale-110"
                              )}
                            />
                            <div className={cn(
                              "absolute inset-0 bg-primary/20 group-hover:bg-primary/5 transition-colors",
                              zone === key ? "bg-primary/0" : ""
                            )} />
                            <span className={cn(
                              "absolute top-4 right-4 text-3xl drop-shadow-2xl transition-transform duration-500",
                              zone === key ? "scale-125" : "scale-100"
                            )}>
                              {data.icon}
                            </span>
                            
                            {zone === key && (
                              <motion.div 
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="absolute top-4 left-4 bg-accent text-primary p-2 rounded-full shadow-2xl z-30"
                              >
                                <Check className="w-4 h-4 stroke-[3px]" />
                              </motion.div>
                            )}
                          </div>
                          <div className={cn(
                            "p-8 transition-all duration-500 border-t",
                            zone === key ? "bg-accent text-primary border-accent/20" : "bg-white text-primary border-black/5"
                          )}>
                            <span className={cn(
                              "text-sm font-bold uppercase tracking-[0.25em] block text-center transition-all",
                              zone === key ? "scale-110" : ""
                            )}>
                              {key === 'centre' ? (language === 'fr' ? 'Grenoble Centre' : 'Grenoble City Center') : 
                               key === 'montagne' ? (language === 'fr' ? 'Massifs Alpins' : 'Alpine Mountains') : 
                               (language === 'fr' ? 'Périphérie / Sud' : 'Grand Grenoble')}
                            </span>
                          </div>
                        </motion.button>
                    ))}
                  </div>

                  <div className="flex justify-end pt-10">
                    <Button 
                      disabled={!zone}
                      onClick={() => setStep(2)} 
                      className={cn(
                        "transition-all font-light tracking-widest uppercase text-[10px] px-12",
                        !zone ? "bg-primary/10 text-primary/30 cursor-not-allowed" : "bg-primary text-white hover:bg-black"
                      )}
                    >
                      {language === 'fr' ? 'Suivant' : 'Next'} <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-12"
                >
                  <div>
                    <h3 className="text-3xl font-serif mb-4 italic text-primary">{language === 'fr' ? 'Type & Capacité' : 'Type & Capacity'}</h3>
                    <p className="text-primary/50 text-sm font-light">{language === 'fr' ? "Définissez la configuration de votre bien pour affiner l'estimation." : "Define your property configuration to refine the estimate."}</p>
                  </div>

                  <div className="space-y-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {(["appartement", "maison", "loft", "villa"] as const).map((type) => (
                        <motion.button
                          key={type}
                          whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)" }}
                          onClick={() => setPropertyType(type)}
                          className={cn(
                            "py-6 border flex flex-col items-center gap-3 transition-all rounded-xl",
                            propertyType === type ? "bg-accent border-accent text-primary shadow-lg" : "bg-white border-black/5 text-primary hover:border-black/20"
                          )}
                        >
                          {type === 'appartement' ? <Building2 size={24} strokeWidth={1.5} /> : 
                           type === 'maison' ? <Home size={24} strokeWidth={1.5} /> : 
                           type === 'loft' ? <MapPin size={24} strokeWidth={1.5} /> : <Award size={24} strokeWidth={1.5} />}
                          <span className="text-[10px] font-bold uppercase tracking-widest">{type}</span>
                        </motion.button>
                      ))}
                    </div>

                    <div className="space-y-10 bg-slate-50/50 p-8 rounded-2xl border border-black/5 shadow-sm">
                      <div className="space-y-6">
                        <div className="flex justify-between items-center text-xs uppercase tracking-widest font-bold">
                          <span className="text-primary">{language === 'fr' ? 'Nombre de Chambres' : 'Number of Bedrooms'}</span>
                          <span className="bg-primary text-white w-10 h-10 flex items-center justify-center rounded-xl text-sm shadow-lg font-bold">{bedrooms}</span>
                        </div>
                        <input 
                          type="range" min="1" max="6" value={bedrooms} step="1"
                          onChange={(e) => setBedrooms(parseInt(e.target.value))}
                          className="w-full h-2 bg-black/10 rounded-full appearance-none cursor-pointer accent-primary"
                        />
                        <div className="flex justify-between text-[10px] text-primary/30 uppercase font-bold px-1">
                          <span>1</span>
                          <span>6</span>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div className="flex justify-between items-center text-xs uppercase tracking-widest font-bold">
                          <span className="text-primary">{language === 'fr' ? 'Capacité voyageurs' : 'Guest Capacity'}</span>
                          <span className="bg-primary text-white w-10 h-10 flex items-center justify-center rounded-xl text-sm shadow-lg font-bold">{maxGuests}</span>
                        </div>
                        <input 
                          type="range" min="1" max="12" value={maxGuests} step="1"
                          onChange={(e) => setMaxGuests(parseInt(e.target.value))}
                          className="w-full h-2 bg-black/10 rounded-full appearance-none cursor-pointer accent-primary"
                        />
                        <div className="flex justify-between text-[10px] text-primary/30 uppercase font-bold px-1">
                          <span>1</span>
                          <span>12</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between pt-10">
                    <Button variant="outline" onClick={() => setStep(1)} className="border-primary/20 text-primary hover:bg-primary/5 font-light tracking-widest uppercase text-[10px]">
                      <ChevronLeft className="mr-2 w-4 h-4" /> {language === 'fr' ? 'Précédent' : 'Back'}
                    </Button>
                    <Button onClick={() => setStep(3)} className="bg-primary text-white hover:bg-black px-12 transition-all font-light tracking-widest uppercase text-[10px]">
                      {language === 'fr' ? 'Suivant' : 'Next'} <ChevronRight className="ml-2 w-4 h-4" />
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
                  className="space-y-12"
                >
                  <div>
                    <h3 className="text-3xl font-serif mb-4 italic text-primary">{language === 'fr' ? 'Standing & Équipements' : 'Standing & Amenities'}</h3>
                    <p className="text-primary/50 text-sm font-light">{language === 'fr' ? "Chaque option valorise votre annonce et booste vos revenus annuels." : "Every option adds value to your listing and boosts your annual revenue."}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {(["standard", "premium", "luxe"] as const).map((s) => (
                      <motion.button
                        key={s}
                        whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)" }}
                        onClick={() => setStanding(s)}
                        className={cn(
                          "py-6 border flex flex-col items-center justify-center gap-2 transition-all rounded-xl",
                          standing === s ? "bg-accent border-accent text-primary shadow-lg" : "bg-white border-black/5 text-primary hover:border-black/20"
                        )}
                      >
                        <span className="text-sm font-bold uppercase tracking-widest">
                          {s === 'luxe' ? 'Ultra-Luxe' : s === 'premium' ? 'Premium' : 'Standard'}
                        </span>
                      </motion.button>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {Object.entries({ ...AMENITY_BONUS, ...MOUNTAIN_AMENITY_BONUS }).map(([id, bonus]) => {
                      const Icon = amenityIcons[id];
                      return (
                        <motion.button
                          key={id}
                          whileHover={{ scale: 1.02, backgroundColor: "rgba(16, 185, 129, 0.05)" }}
                          onClick={() => toggleAmenity(id)}
                          className={cn(
                            "p-4 border flex items-center gap-4 transition-all text-left rounded-xl",
                            amenities.includes(id) ? "bg-emerald-500 border-emerald-500 text-white shadow-lg" : "bg-white border-black/5 text-primary hover:border-black/10"
                          )}
                        >
                          <Icon size={20} strokeWidth={1.5} />
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-widest block">
                              {id === 'ski_storage' ? (language === 'fr' ? 'Ski/Vélo' : 'Ski Storage') : id.charAt(0).toUpperCase() + id.slice(1)}
                            </span>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>

                  <div className="flex justify-between pt-10">
                    <Button variant="outline" onClick={() => setStep(2)} className="border-primary/20 text-primary hover:bg-primary/5 font-light tracking-widest uppercase text-[10px]">
                      <ChevronLeft className="mr-2 w-4 h-4" /> {language === 'fr' ? 'Précédent' : 'Back'}
                    </Button>
                    <Button onClick={() => setStep(4)} className="bg-primary text-white hover:bg-black px-12 transition-all font-light tracking-widest uppercase text-[10px]">
                      {language === 'fr' ? 'Résultats' : 'Results'} <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-8"
                >
                  <div className="flex items-center gap-4 text-accent text-xs font-light uppercase tracking-[0.3em]">
                    <Award size={20} strokeWidth={1} />
                    <span>Top 15% de la zone</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-slate-50 border border-black/5 p-8 rounded-xl">
                      <div className="flex items-center gap-3 text-primary/40 text-[10px] uppercase tracking-widest mb-4 font-normal">
                        <TrendingUp size={14} /> {language === 'fr' ? 'Revenu brut estimé' : 'Estimated gross revenue'}
                      </div>
                      <div className="text-4xl font-serif text-primary font-light">{formatCurrency(results.gross)}</div>
                      <p className="text-[10px] text-primary/20 mt-2 font-light">basé sur 365 jours</p>
                    </div>

                    <div className="bg-accent text-primary p-8 relative overflow-hidden rounded-xl shadow-xl">
                      <div className="flex items-center gap-3 text-primary/60 text-[10px] uppercase tracking-widest mb-4 font-bold">
                        <Coins size={14} /> {language === 'fr' ? 'Net Propriétaire' : 'Owner Net'}
                      </div>
                      <div className="text-4xl font-serif font-light">{formatCurrency(results.net)}</div>
                      <p className="text-[10px] text-primary/40 mt-2 font-bold uppercase italic font-light">Après tous frais de gestion</p>
                      <Sparkles className="absolute -bottom-2 -right-2 w-20 h-20 opacity-10 text-primary" />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-slate-50 border border-black/5 p-5 text-center rounded-xl">
                      <p className="text-[8px] text-primary/40 uppercase tracking-widest mb-2 font-normal">Taux d'occupation</p>
                      <p className="text-xl font-light text-primary">{results.avgOcc}%</p>
                    </div>
                    <div className="bg-slate-50 border border-black/5 p-5 text-center rounded-xl">
                      <p className="text-[8px] text-primary/40 uppercase tracking-widest mb-2 font-normal">Tarif moyen nuit</p>
                      <p className="text-xl font-light text-primary">{results.adr}€</p>
                    </div>
                    <div className="bg-orange-50 border border-orange-100 p-5 text-center rounded-xl">
                      <p className="text-[8px] text-orange-400 uppercase tracking-widest mb-2 font-bold">Net mensuel moy.</p>
                      <p className="text-xl font-light text-orange-600">{formatCurrency(results.net / 12)}</p>
                    </div>
                  </div>

                  <div className="bg-slate-50 border border-black/5 p-8 rounded-xl">
                    <div className="flex justify-between items-center mb-10">
                      <p className="text-[10px] uppercase tracking-widest font-normal text-primary/40 flex items-center gap-2">
                        <BarChart3 size={14} /> {language === 'fr' ? 'Saisonnalité des revenus' : 'Revenue seasonality'}
                      </p>
                    </div>
                    <div className="flex items-end gap-1 h-32">
                      {results.monthly.map((m, i) => {
                        const maxRev = Math.max(...results.monthly.map(x => x.rev));
                        const height = (m.rev / maxRev) * 100;
                        return (
                          <div key={i} className="flex-1 group relative">
                            <motion.div 
                              initial={{ height: 0 }}
                              animate={{ height: `${height}%` }}
                              className={cn(
                                "w-full transition-colors rounded-t-sm",
                                height > 80 ? "bg-accent" : height > 55 ? "bg-primary/40" : "bg-primary/10"
                              )}
                            />
                            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] text-primary/30 uppercase font-light">
                              {months[i]}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="bg-primary/[0.02] border border-primary/5 p-6 rounded-xl flex gap-4 items-start">
                    <Info className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="text-xs font-bold uppercase tracking-wider text-primary">
                        {language === 'fr' ? "Faire estimer réellement par nos experts" : "Get a real-world expert estimate"}
                      </p>
                      <p className="text-xs text-primary/60 leading-relaxed font-light text-left">
                        {language === 'fr' 
                          ? "Cet outil fournit une projection algorithmique générale. Pour obtenir une étude personnalisée, beaucoup plus poussée, réaliste et adaptée à l'état précis, à l'orientation et au cachet de votre bien, nous vous conseillons vivement de faire réaliser une estimation physique ou sur dossier par notre équipe."
                          : "This tool provides a general algorithmic projection. To obtain a highly advanced, realistic study specific to your property's precise condition, orientation, and unique charm, we strongly advise request a customized valuation by our expert team."}
                      </p>
                      <div className="pt-2 text-left">
                        <a 
                          href="#contact" 
                          className="text-xs font-bold text-accent hover:text-black transition-colors uppercase tracking-widest inline-flex items-center gap-1.5"
                        >
                          {language === 'fr' ? "Demander mon estimation gratuite" : "Request my free estimate"} <ChevronRight className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between pt-10">
                    <Button variant="outline" onClick={() => setStep(3)} className="border-primary/20 text-primary hover:bg-primary/5 font-light tracking-widest uppercase text-[10px]">
                      <ChevronLeft className="mr-2 w-4 h-4" /> {language === 'fr' ? 'Modifier' : 'Edit'}
                    </Button>
                    <Button onClick={reset} className="bg-primary text-white hover:bg-black px-8 transition-all font-light tracking-widest uppercase text-[10px]">
                      {language === 'fr' ? 'Nouvelle estimation' : 'New Estimate'}
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
