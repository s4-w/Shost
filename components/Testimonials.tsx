import React from "react";
import { motion } from "motion/react";
import { Star, Quote, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { REVIEWS_DATA, PROOF_METRICS } from "@/src/data/reviews";
import SectionFooterNav from "./SectionFooterNav";

export default function Testimonials() {
  return (
    <section
      id="temoignages"
      data-header-theme="light"
      className="py-24 bg-secondary rounded-t-[2.5rem] md:rounded-t-[4rem] -mt-10 md:-mt-16 relative z-10 scroll-mt-24 md:scroll-mt-28"
    >
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent uppercase tracking-[0.3em] text-xs font-bold mb-3 block"
          >
            Avis & Résultats Vérifiés
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif text-primary mb-6"
          >
            Ce que disent les propriétaires qui nous font confiance
          </motion.h2>
          <p className="text-primary/70 text-base font-light">
            Découvrez les retours d'expérience authentiques de propriétaires à Grenoble, Voiron, Meylan et dans le Grésivaudan.
          </p>
        </div>

        {/* Quantified Proof Metrics Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 max-w-5xl mx-auto">
          {PROOF_METRICS.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-primary/10 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-2xl sm:text-3xl font-serif font-bold text-accent mb-1">
                {metric.value}
              </div>
              <div className="text-xs uppercase tracking-wider font-bold text-primary mb-1">
                {metric.label}
              </div>
              <p className="text-[11px] text-primary/60 font-light leading-snug">
                {metric.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {REVIEWS_DATA.map((rev, index) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border border-primary/10 shadow-sm bg-white rounded-2xl h-full hover:shadow-xl hover:border-accent/40 transition-all duration-300 text-left flex flex-col justify-between">
                <CardContent className="p-6 sm:p-7 flex flex-col h-full justify-between">
                  <div>
                    {/* Stars & Verification badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex text-amber-500 gap-1">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                        <CheckCircle className="w-3 h-3" /> Vérifié
                      </span>
                    </div>

                    <p className="text-primary/80 italic text-sm leading-relaxed mb-6 font-light">
                      « {rev.comment} »
                    </p>
                  </div>

                  <div className="pt-4 border-t border-primary/5">
                    <h4 className="font-bold text-sm text-primary tracking-tight">{rev.author}</h4>
                    <p className="text-[11px] text-accent uppercase tracking-wider font-semibold">
                      {rev.role} · {rev.location}
                    </p>
                    <p className="text-[10px] text-primary/40 font-light mt-0.5">
                      {rev.propertyType}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Banner */}
        <div className="mt-16 text-center">
          <p className="text-sm text-primary/70 mb-4 font-light">
            Vous souhaitez échanger avec un propriétaire déjà accompagné par SHOST ?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-black text-white px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-[0.2em] transition-all shadow-md"
          >
            Discuter avec notre équipe
          </a>
        </div>

        <SectionFooterNav
          prevId="processus"
          prevLabel="Notre Processus"
          nextId="faq"
          nextLabel="Questions Fréquentes"
          theme="light"
        />
      </div>
    </section>
  );
}
