import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Comment sont gérées les cautions ?",
    answer: "Nous utilisons des solutions partenaires intégrées aux plateformes (comme AirCover sur Airbnb) ou des services tiers de pré-autorisation bancaire. Cela garantit une protection optimale de votre bien sans impacter la trésorerie du voyageur."
  },
  {
    question: "Qui paie les frais de ménage ?",
    answer: "Les frais de ménage sont systématiquement facturés aux voyageurs lors de leur réservation. Ces frais couvrent l'intégralité de la prestation de nettoyage professionnel et le blanchissage du linge de maison."
  },
  {
    question: "Quelle assurance couvre mon bien ?",
    answer: "En plus de votre assurance PNO (Propriétaire Non Occupant) obligatoire, les plateformes comme Airbnb offrent des garanties solides. Nous vous conseillons également sur les extensions d'assurance spécifiques à la location courte durée pour une sérénité totale."
  },
  {
    question: "Puis-je continuer à occuper mon logement ?",
    answer: "Absolument. Vous restez maître de votre calendrier. Il vous suffit de bloquer les dates souhaitées sur votre espace propriétaire ou de nous en informer à l'avance pour que nous fermions les réservations sur ces périodes."
  },
  {
    question: "Comment sont sélectionnés les voyageurs ?",
    answer: "Nous effectuons une sélection rigoureuse basée sur les commentaires précédents, l'identité vérifiée et le respect des règles de votre logement. Nous privilégions toujours la qualité des profils à la quantité de réservations."
  },
  {
    question: "Quand et comment suis-je payé ?",
    answer: "Les revenus sont versés mensuellement. Vous recevez un reporting détaillé de l'activité du mois écoulé, et le virement est effectué directement sur votre compte bancaire."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block"
            >
              Des réponses à vos questions
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif text-primary mb-8 leading-tight"
            >
              Questions <br />Fréquentes
            </motion.h2>
            <p className="text-primary/60 leading-relaxed">
              Vous avez une interrogation spécifique qui ne figure pas dans cette liste ? 
              N'hésitez pas à nous contacter directement, notre équipe vous répondra sous 24h.
            </p>
          </div>

          <div className="lg:w-2/3">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <AccordionItem value={`item-${index}`} className="border border-primary/5 bg-white px-6">
                    <AccordionTrigger className="text-left font-serif text-xl py-6 hover:text-accent hover:no-underline transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-primary/70 leading-relaxed pb-6 text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
