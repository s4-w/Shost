import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sophie Laurent",
    role: "Propriétaire à Grenoble",
    content: "Depuis que SHOST gère mon appartement, je n'ai plus aucun souci. Les voyageurs sont ravis et mes revenus ont considérablement augmenté.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
  },
  {
    name: "Marc Dubois",
    role: "Investisseur immobilier",
    content: "Une équipe professionnelle et réactive. La gestion des prix est impressionnante, ils arrivent à louer même en basse saison.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Hélène Martin",
    role: "Propriétaire à Lyon",
    content: "Le ménage est impeccable, c'est ce qui m'importait le plus. Mes commentaires sur Airbnb sont passés de 4.2 à 4.9 étoiles.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  return (
    <section id="temoignages" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary uppercase tracking-[0.4em] text-xs font-bold mb-4 block"
          >
            Témoignages
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif"
          >
            Ce que nos clients disent de nous
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border border-primary/5 shadow-sm bg-surface rounded-none h-full hover:shadow-xl transition-all duration-500">
                <CardContent className="p-12 flex flex-col h-full">
                  <Quote className="text-accent/20 w-16 h-16 mb-8" />
                  <p className="text-primary italic mb-10 flex-grow leading-relaxed text-lg">
                    "{t.content}"
                  </p>
                  <div className="flex items-center gap-5">
                    <img 
                      src={t.image} 
                      alt={t.name} 
                      className="w-14 h-14 rounded-full object-cover shadow-md"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="font-bold text-sm tracking-tight">{t.name}</h4>
                      <p className="text-[10px] text-accent uppercase tracking-[0.2em] font-bold">{t.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
