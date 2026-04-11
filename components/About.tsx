import { motion } from "motion/react";
import { useLanguage } from "@/src/context/LanguageContext";

export default function About() {
  const { language } = useLanguage();

  return (
    <section id="a-propos" className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="flex justify-center">
              <motion.img 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=2070&auto=format&fit=crop" 
                alt="Concierge Team" 
                className="w-full max-w-md h-[500px] object-cover grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2">
            <motion.span 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary uppercase tracking-[0.3em] text-sm font-semibold mb-4 block"
            >
              {language === 'fr' ? 'À Propos de SHOST' : 'About SHOST'}
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif mb-8 leading-tight"
            >
              {language === 'fr' 
                ? <>L'art de l'hospitalité, <br />la rigueur de la gestion</>
                : <>The art of hospitality, <br />the rigor of management</>}
            </motion.h2>
            <div className="space-y-6 text-primary text-lg leading-relaxed">
              <p>
                {language === 'fr' 
                  ? "SHOST est née de notre propre expérience en tant que voyageurs réguliers sur Airbnb. À force de parcourir le monde et de séjourner dans divers logements, nous avons compris que l'excellence d'un séjour réside dans les détails et la réactivité. C'est de ce vécu qu'est née l'idée de mettre notre exigence au service des propriétaires pour une gestion irréprochable."
                  : "SHOST was born from our own experience as regular Airbnb travelers. By traveling the world and staying in various accommodations, we understood that the excellence of a stay lies in the details and responsiveness. It is from this experience that the idea was born to put our high standards at the service of owners for impeccable management."}
              </p>
              <p>
                {language === 'fr'
                  ? "Notre mission est de redonner de la valeur à votre patrimoine tout en offrant aux voyageurs une expérience authentique et mémorable. Nous combinons technologie de pointe et savoir-faire traditionnel pour garantir des résultats exceptionnels."
                  : "Our mission is to restore value to your heritage while offering travelers an authentic and memorable experience. We combine cutting-edge technology and traditional know-how to guarantee exceptional results."}
              </p>
              <p className="font-serif italic text-primary">
                {language === 'fr'
                  ? '"Nous traitons chaque appartement comme s\'il était le nôtre."'
                  : '"We treat every apartment as if it were our own."'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
