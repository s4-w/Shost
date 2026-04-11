import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/src/context/LanguageContext";

export default function FAQ() {
  const { language } = useLanguage();

  const faqs = [
    {
      question: language === 'fr' ? "Comment sont gérées les cautions ?" : "How are security deposits managed?",
      answer: language === 'fr' ? "Nous utilisons des solutions partenaires intégrées aux plateformes (comme AirCover sur Airbnb) ou des services tiers de pré-autorisation bancaire. Cela garantit une protection optimale de votre bien sans impacter la trésorerie du voyageur." : "We use partner solutions integrated into platforms (like AirCover on Airbnb) or third-party bank pre-authorization services. This ensures optimal protection of your property without impacting the guest's cash flow."
    },
    {
      question: language === 'fr' ? "Qui paie les frais de ménage ?" : "Who pays for cleaning fees?",
      answer: language === 'fr' ? "Les frais de ménage sont systématiquement facturés aux voyageurs lors de leur réservation. Ces frais couvrent l'intégralité de la prestation de nettoyage professionnel et le blanchissage du linge de maison." : "Cleaning fees are systematically charged to guests at the time of booking. These fees cover the entire professional cleaning service and the laundering of household linens."
    },
    {
      question: language === 'fr' ? "Quelle assurance couvre mon bien ?" : "What insurance covers my property?",
      answer: language === 'fr' ? "En plus de votre assurance PNO (Propriétaire Non Occupant) obligatoire, les plateformes comme Airbnb offrent des garanties solides. Nous vous conseillons également sur les extensions d'assurance spécifiques à la location courte durée pour une sérénité totale." : "In addition to your mandatory PNO (Non-Occupant Owner) insurance, platforms like Airbnb offer solid guarantees. We also advise you on specific short-term rental insurance extensions for total peace of mind."
    },
    {
      question: language === 'fr' ? "Puis-je continuer à occuper mon logement ?" : "Can I still occupy my home?",
      answer: language === 'fr' ? "Absolument. Vous restez maître de votre calendrier. Il vous suffit de bloquer les dates souhaitées sur votre espace propriétaire ou de nous en informer à l'avance pour que nous fermions les réservations sur ces périodes." : "Absolutely. You remain in control of your calendar. Simply block the desired dates on your owner dashboard or inform us in advance so we can close bookings for those periods."
    },
    {
      question: language === 'fr' ? "Comment sont sélectionnés les voyageurs ?" : "How are guests selected?",
      answer: language === 'fr' ? "Nous effectuons une sélection rigoureuse basée sur les commentaires précédents, l'identité vérifiée et le respect des règles de votre logement. Nous privilégions toujours la qualité des profils à la quantité de réservations." : "We perform a rigorous selection based on previous reviews, verified identity, and compliance with your house rules. We always prioritize profile quality over the quantity of bookings."
    },
    {
      question: language === 'fr' ? "Quand et comment suis-je payé ?" : "When and how am I paid?",
      answer: language === 'fr' ? "Les revenus sont versés mensuellement. Vous recevez un reporting détaillé de l'activité du mois écoulé, et le virement est effectué directement sur votre compte bancaire." : "Income is paid monthly. You receive a detailed report of the past month's activity, and the transfer is made directly to your bank account."
    }
  ];

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
              {language === 'fr' ? 'Des réponses à vos questions' : 'Answers to your questions'}
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif text-primary mb-8 leading-tight"
            >
              {language === 'fr' ? <>Questions <br />Fréquentes</> : <>Frequently <br />Asked Questions</>}
            </motion.h2>
            <p className="text-primary/60 leading-relaxed">
              {language === 'fr' 
                ? "Vous avez une interrogation spécifique qui ne figure pas dans cette liste ? N'hésitez pas à nous contacter directement, notre équipe vous répondra sous 24h."
                : "Do you have a specific question that is not listed here? Feel free to contact us directly, our team will respond within 24 hours."}
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
