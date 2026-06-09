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
                alt="Équipe de conciergerie professionnelle SHOST s'occupant de la gestion d'un bien immobilier" 
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
            <div className="space-y-6 text-primary text-base md:text-lg leading-relaxed font-sans text-justify">
              {language === 'fr' ? (
                <>
                  <p>
                    Vous possédez un appartement à Grenoble ou dans la métropole alpine et vous manquez de temps pour optimiser son potentiel sur les plateformes de réservation ? SHOST est votre <strong className="font-bold text-black border-b border-primary/20">conciergerie airbnb grenoble</strong> de confiance, dédiée à transformer votre bien immobilier en une véritable source de revenus passifs, en toute simplicité et sérénité.
                  </p>
                  <p>
                    En tant que spécialiste de la <strong className="font-bold text-black border-b border-primary/20">gestion locative courte durée</strong> en Isère, nous prenons en charge l’intégralité de l'expérience de location. De la création et l’optimisation de votre annonce professionnelle (avec photos de qualité et tarification dynamique en temps réel) à la communication chaleureuse 24h/24 et 7j/7 avec les voyageurs, notre équipe est à l'écoute de chaque détail. Nous assurons un accueil irréprochable avec remise de clés intelligente et un ménage hôtelier méticuleux accompagné de la blanchisserie professionnelle pour que chaque séjour soit exceptionnel.
                  </p>
                  <p>
                    Faire appel à un <strong className="font-bold text-black border-b border-primary/20">gestionnaire airbnb isère</strong> d'expérience comme SHOST, c'est s’assurer d'un taux d'occupation optimisé et d’évaluations 5 étoiles régulières, tout en conservant une liberté totale sur votre calendrier d’occupation. Que ce soit pour un studio chaleureux au centre-ville de Grenoble, un appartement contemporain près de la presqu’île, ou un bien idéalement situé au pied du massif du Vercors ou de Belledonne, nous mettons notre rigueur et notre art de l'hospitalité au service de votre sérénité logistique et financière.
                  </p>
                  <p>
                    Libérez-vous des contraintes quotidiennes de la location de courte durée. Ensemble, redonnons de la valeur à votre patrimoine immobilier alpin et offrons à vos voyageurs une expérience mémorable.
                  </p>
                  <p className="font-serif italic text-primary text-center pt-4">
                    "Nous traitons chaque appartement comme s'il était le nôtre."
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Do you own an apartment in Grenoble or the Alpine metropolis and lack the time to optimize its potential on booking platforms? SHOST is your trusted <strong className="font-bold text-black border-b border-primary/20">airbnb concierge in grenoble</strong>, dedicated to transforming your property into a steady source of passive income, with complete ease and peace of mind.
                  </p>
                  <p>
                    As specialists in <strong className="font-bold text-black border-b border-primary/20">short-term rental management</strong> in Isère, we handle the entire rental experience. From the creation and optimization of your professional listing (with high-quality photos and real-time dynamic pricing) to warm 24/7 guest communication, our team is attentive to every detail. We ensure an impeccable welcome with smart key exchange and meticulous, hotel-standard cleaning along with professional laundry so that each stay is exceptional.
                  </p>
                  <p>
                    Hiring an experienced <strong className="font-bold text-black border-b border-primary/20">airbnb property manager in isère</strong> like SHOST means securing an optimized occupancy rate and consistent 5-star reviews, while maintaining total freedom over your booking calendar. Whether it is for a cozy studio in Grenoble's city center, a contemporary apartment near the Presqu'île, or a property ideally located at the foot of the Vercors or Belledonne mountain ranges, we leverage our rigor and hospitality to serve your peace of mind and financial success.
                  </p>
                  <p>
                    Free yourself from the daily constraints of short-term renting. Together, let us enhance the value of your Alpine real estate assets and offer your guests a memorable experience.
                  </p>
                  <p className="font-serif italic text-primary text-center pt-4">
                    "We treat every apartment as if it were our own."
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
