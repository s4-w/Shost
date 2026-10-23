import React from "react";
import { Instagram, Phone, Mail, MapPin, ShieldCheck, Heart } from "lucide-react";
import Logo from "@/components/Logo";
import { useCookies } from "@/src/context/CookieContext";

export default function Footer() {
  const { openPreferencesModal } = useCookies();

  return (
    <footer
      data-header-theme="dark"
      className="bg-primary text-white pt-20 pb-16 rounded-t-[2.5rem] md:rounded-t-[4rem] -mt-10 md:-mt-16 relative z-10"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-left">
          {/* Col 1: Identity & Contact */}
          <div className="space-y-6">
            <a href="/" className="inline-block max-w-[125px]" aria-label="SHOST Conciergerie">
              <Logo className="w-full" light={true} />
            </a>
            <p className="text-white/90 leading-relaxed text-xs font-light">
              Votre partenaire de référence pour la gestion locative courte durée à Grenoble et en Isère. Prestations hôtelières haut de gamme, rentabilité optimisée et sérénité absolue pour propriétaires exigeants.
            </p>

            <div className="space-y-2.5 text-xs text-white/95">
              <div className="flex items-center gap-2.5 hover:text-accent transition-colors">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a href="tel:0626290649" className="hover:underline font-semibold">
                  06 26 29 06 49
                </a>
              </div>
              <div className="flex items-center gap-2.5 hover:text-accent transition-colors">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a href="mailto:shost.services@gmail.com" className="hover:underline">
                  shost.services@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-accent shrink-0" />
                <span>Grenoble & Agglomération Iséroise</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://www.instagram.com/shost.services/"
                target="_blank"
                rel="noopener noreferrer"
                title="Suivez SHOST Conciergerie sur Instagram"
                className="inline-flex items-center gap-2 text-xs text-white/90 hover:text-accent transition-colors border border-white/20 px-3.5 py-2 rounded-xl"
              >
                <Instagram className="w-4 h-4 text-accent" />
                <span>@shost.services</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation & Services */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] font-bold mb-5 text-accent">
              Services & Navigation
            </h3>
            <ul className="space-y-3 text-xs text-white/85 font-light">
              <li>
                <a href="/" className="hover:text-accent transition-colors">Accueil</a>
              </li>
              <li>
                <a href="/services" className="hover:text-accent transition-colors">Nos Services</a>
              </li>
              <li>
                <a href="/tarifs" className="hover:text-accent transition-colors">Tarifs & Commission (20%)</a>
              </li>
              <li>
                <a href="/#estimateur" className="hover:text-accent transition-colors">Simulateur de Revenus</a>
              </li>
              <li>
                <a href="/qui-sommes-nous" className="hover:text-accent transition-colors">Qui Sommes-Nous</a>
              </li>
              <li>
                <a href="/blog" className="hover:text-accent transition-colors">Blog & Guides Locatifs</a>
              </li>
              <li>
                <a href="/#faq" className="hover:text-accent transition-colors">FAQ Propriétaires</a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-accent transition-colors">Contact & Devis Gratuit</a>
              </li>
              <li>
                <a href="/mentions-legales" className="hover:text-accent transition-colors">Mentions Légales</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Secteurs d'intervention Isère */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] font-bold mb-5 text-accent">
              Secteurs d'Intervention
            </h3>
            <ul className="space-y-3 text-xs text-white/85 font-light">
              <li>
                <a href="/conciergerie-airbnb-grenoble" className="hover:text-accent transition-colors">
                  Grenoble Hyper-Centre (38000)
                </a>
              </li>
              <li>
                <a href="/secteur-voiron" className="hover:text-accent transition-colors">
                  Voiron & Pays Voironnais (38500)
                </a>
              </li>
              <li>
                <a href="/secteur-meylan" className="hover:text-accent transition-colors">
                  Meylan & Inovallée (38240)
                </a>
              </li>
              <li>
                <a href="/secteur-echirolles" className="hover:text-accent transition-colors">
                  Échirolles & Agglo Sud (38130)
                </a>
              </li>
              <li>
                <a href="/secteur-saint-martin-d-heres" className="hover:text-accent transition-colors">
                  Saint-Martin-d'Hères Campus (38400)
                </a>
              </li>
              <li>
                <a href="/secteur-gresivaudan" className="hover:text-accent transition-colors">
                  Vallée du Grésivaudan (38330)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Blog Récent & Engagements */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] font-bold mb-5 text-accent">
              Derniers Articles
            </h3>
            <div className="space-y-3.5 text-xs text-white/85 font-light">
              <div>
                <a
                  href="/blog/combien-rapporte-un-airbnb-a-grenoble"
                  className="hover:text-accent transition-colors font-medium text-white block leading-snug"
                >
                  Combien rapporte un Airbnb à Grenoble en 2026 ?
                </a>
                <span className="text-[10px] text-white/70">Analyse de rentabilité réelle</span>
              </div>
              <div>
                <a
                  href="/blog/reglementation-location-saisonniere-isere"
                  className="hover:text-accent transition-colors font-medium text-white block leading-snug"
                >
                  Réglementation de la location saisonnière en Isère
                </a>
                <span className="text-[10px] text-white/70">120 jours, numéro d'enregistrement</span>
              </div>
              <div>
                <a
                  href="/blog/conciergerie-ou-gestion-solo"
                  className="hover:text-accent transition-colors font-medium text-white block leading-snug"
                >
                  Conciergerie ou gestion solo ? Le comparatif
                </a>
                <span className="text-[10px] text-white/70">Temps, revenus nets et avis</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Cookie Policy row */}
        <div className="border-t border-white/20 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-white/80 text-[11px]">
          <div>
            © 2026 SHOST Conciergerie. Tous droits réservés. Gestion locative touristique en Isère.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a href="/mentions-legales" className="hover:text-accent transition-colors">
              Mentions légales
            </a>
            <a href="/politique-de-confidentialite" className="hover:text-accent transition-colors">
              Politique de confidentialité (RGPD)
            </a>
            <a href="/politique-cookies" className="hover:text-accent transition-colors">
              Politique cookies
            </a>
            <a href="/cgv" className="hover:text-accent transition-colors">
              CGV
            </a>
            <button
              type="button"
              onClick={openPreferencesModal}
              className="hover:text-accent underline transition-colors cursor-pointer"
            >
              Gestion des cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
