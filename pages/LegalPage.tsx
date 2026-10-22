import React from "react";
import { LEGAL_DATA, LegalDocument } from "@/src/data/legalData";
import { 
  ShieldCheck, 
  ArrowLeft, 
  Building2, 
  UserCheck, 
  Server, 
  Mail, 
  Phone, 
  ExternalLink,
  Scale,
  FileText,
  Lock,
  Cookie
} from "lucide-react";
import { useCookies } from "@/src/context/CookieContext";
import { useRouter } from "@/src/context/RouterContext";

interface LegalPageProps {
  slug: string;
}

export default function LegalPage({ slug }: LegalPageProps) {
  const doc: LegalDocument = LEGAL_DATA[slug] || LEGAL_DATA["mentions-legales"];
  const { openPreferencesModal } = useCookies();
  const { navigate } = useRouter();

  const legalTabs = [
    { slug: "mentions-legales", label: "Mentions Légales", icon: Scale },
    { slug: "politique-de-confidentialite", label: "Confidentialité & RGPD", icon: Lock },
    { slug: "politique-cookies", label: "Cookies & Traceurs", icon: Cookie },
    { slug: "cgv", label: "CGV & Prestations", icon: FileText },
  ];

  // Helper to format line content with links and bullet styling
  const renderParagraph = (text: string, pIdx: number) => {
    // Check if line is a bullet item
    if (text.startsWith("• ")) {
      const parts = text.slice(2).split(" : ");
      if (parts.length >= 2) {
        const label = parts[0];
        const val = parts.slice(1).join(" : ");
        return (
          <li key={pIdx} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 text-primary/85 text-sm sm:text-base leading-relaxed">
            <span className="font-semibold text-primary shrink-0 min-w-[200px]">{label} :</span>
            <span className="text-primary/80">
              {formatInlineLinks(val)}
            </span>
          </li>
        );
      }
      return (
        <li key={pIdx} className="text-primary/85 text-sm sm:text-base leading-relaxed pl-1">
          {formatInlineLinks(text.slice(2))}
        </li>
      );
    }

    return (
      <p key={pIdx} className="text-primary/85 text-sm sm:text-base leading-relaxed">
        {formatInlineLinks(text)}
      </p>
    );
  };

  const formatInlineLinks = (str: string) => {
    // If it contains an email address
    if (str.includes("shost.services@gmail.com")) {
      const segments = str.split("shost.services@gmail.com");
      return (
        <>
          {segments[0]}
          <a
            href="mailto:shost.services@gmail.com"
            className="text-accent font-medium hover:underline inline-flex items-center gap-1"
          >
            shost.services@gmail.com
          </a>
          {segments[1]}
        </>
      );
    }

    // If it contains https://www.cloudflare.com
    if (str.includes("https://www.cloudflare.com")) {
      const segments = str.split("https://www.cloudflare.com");
      return (
        <>
          {segments[0]}
          <a
            href="https://www.cloudflare.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent font-medium hover:underline inline-flex items-center gap-1"
          >
            cloudflare.com <ExternalLink className="w-3 h-3 inline" />
          </a>
          {segments[1]}
        </>
      );
    }

    // If it contains https://www.hostinger.fr
    if (str.includes("https://www.hostinger.fr")) {
      const segments = str.split("https://www.hostinger.fr");
      return (
        <>
          {segments[0]}
          <a
            href="https://www.hostinger.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent font-medium hover:underline inline-flex items-center gap-1"
          >
            hostinger.fr <ExternalLink className="w-3 h-3 inline" />
          </a>
          {segments[1]}
        </>
      );
    }

    return str;
  };

  return (
    <div data-header-theme="light" className="pt-28 md:pt-32 pb-20 bg-surface">
      <div className="container mx-auto px-6 max-w-4xl text-left">
        {/* Navigation back */}
        <div className="mb-6">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
            className="inline-flex items-center gap-2 text-xs font-medium text-primary/60 hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Retour à l'accueil SHOST</span>
          </a>
        </div>

        {/* Page Header */}
        <header className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent uppercase tracking-[0.25em] text-[11px] font-bold mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Conformité LCEN (Loi n° 2004-575) & RGPD</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-primary font-bold tracking-tight mb-3">
            {doc.title}
          </h1>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-primary/60 font-light">
            <span>Site officiel : <strong className="font-medium text-primary">shost-services.com</strong></span>
            <span>•</span>
            <span>Dernière mise à jour : {doc.lastUpdated}</span>
          </div>
        </header>

        {/* Legal documents tabs switcher */}
        <nav aria-label="Onglets documents juridiques" className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-primary/10">
          {legalTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = slug === tab.slug;
            return (
              <a
                key={tab.slug}
                href={`/${tab.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/${tab.slug}`);
                }}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium transition-all ${
                  isActive
                    ? "bg-primary text-white shadow-sm font-semibold"
                    : "bg-white text-primary/70 hover:text-primary hover:bg-primary/5 border border-primary/10"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-accent" : "text-primary/50"}`} />
                <span>{tab.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Highlight Summary Cards for Mentions Légales */}
        {slug === "mentions-legales" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {/* Card 1: Éditeur */}
            <div className="bg-white p-5 rounded-2xl border border-primary/10 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-3">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-xs uppercase tracking-wider text-accent font-bold mb-1">
                  Éditeur du Site
                </h3>
                <p className="font-semibold text-primary text-sm mb-1">
                  Salah .M
                </p>
                <p className="text-xs text-primary/70 leading-relaxed">
                  Entrepreneur individuel (micro-entreprise)<br />
                  SIRET : 939 776 696 00022<br />
                  NAF : 68.20B (Location de biens)
                </p>
              </div>
              <div className="mt-3 pt-3 border-t border-primary/5 text-[11px] text-primary/60">
                Créé le 18/01/2025
              </div>
            </div>

            {/* Card 2: Contact & Publication */}
            <div className="bg-white p-5 rounded-2xl border border-primary/10 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-3">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h3 className="text-xs uppercase tracking-wider text-accent font-bold mb-1">
                  Publication & Contact
                </h3>
                <p className="font-semibold text-primary text-sm mb-1">
                  Salah .M
                </p>
                <p className="text-xs text-primary/70 leading-relaxed space-y-1">
                  <span className="block">Directeur de la publication</span>
                  <a href="mailto:shost.services@gmail.com" className="text-accent hover:underline block font-medium">
                    shost.services@gmail.com
                  </a>
                  <a href="tel:0626290649" className="text-primary hover:text-accent block">
                    06 26 29 06 49
                  </a>
                </p>
              </div>
              <div className="mt-3 pt-3 border-t border-primary/5 text-[11px] text-primary/60">
                Grenoble & Isère (38)
              </div>
            </div>

            {/* Card 3: Hébergement & Domaine */}
            <div className="bg-white p-5 rounded-2xl border border-primary/10 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-3">
                  <Server className="w-5 h-5" />
                </div>
                <h3 className="text-xs uppercase tracking-wider text-accent font-bold mb-1">
                  Hébergeur & Domaine
                </h3>
                <p className="font-semibold text-primary text-sm mb-1">
                  Cloudflare, Inc.
                </p>
                <p className="text-xs text-primary/70 leading-relaxed">
                  San Francisco, CA, USA<br />
                  Tél : +1 (888) 993-5273<br />
                  Domaine : Hostinger (Chypre)
                </p>
              </div>
              <div className="mt-3 pt-3 border-t border-primary/5 text-[11px] text-primary/60">
                Protection anti-DDoS & CDN
              </div>
            </div>
          </div>
        )}

        {/* Detailed Content Card */}
        <article className="bg-white p-8 sm:p-12 rounded-3xl border border-primary/10 shadow-sm space-y-10 text-primary">
          {doc.sections.map((section, idx) => {
            const hasBullets = section.content.some((p) => p.startsWith("• "));
            const introParagraphs = section.content.filter((p) => !p.startsWith("• "));
            const bulletParagraphs = section.content.filter((p) => p.startsWith("• "));

            return (
              <section key={idx} className="space-y-4 pb-8 border-b border-primary/10 last:border-b-0 last:pb-0">
                <h2 className="text-lg sm:text-xl font-serif font-bold text-primary flex items-baseline gap-2">
                  <span className="w-1.5 h-5 rounded-full bg-accent inline-block self-center shrink-0" />
                  <span>{section.title}</span>
                </h2>

                {introParagraphs.map((p, pIdx) => renderParagraph(p, pIdx))}

                {hasBullets && (
                  <ul className="space-y-2.5 bg-surface/50 p-5 rounded-2xl border border-primary/5 my-3">
                    {bulletParagraphs.map((p, pIdx) => renderParagraph(p, pIdx))}
                  </ul>
                )}
              </section>
            );
          })}

          {/* Special Action: Cookie Preferences Button */}
          {slug === "politique-cookies" && (
            <div className="pt-6 border-t border-primary/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-semibold text-sm text-primary">Préférences de consentement</h3>
                <p className="text-xs text-primary/60">Vous pouvez revoir vos choix à tout moment.</p>
              </div>
              <button
                type="button"
                onClick={openPreferencesModal}
                className="px-6 py-3 bg-primary hover:bg-black text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer inline-flex items-center gap-2"
              >
                <Cookie className="w-4 h-4 text-accent" />
                <span>Ouvrir le gestionnaire de cookies</span>
              </button>
            </div>
          )}

          {/* Contact Support Banner */}
          <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border border-accent/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <h4 className="font-serif font-bold text-primary text-base">
                Une question relative à nos mentions légales ou au RGPD ?
              </h4>
              <p className="text-xs text-primary/70 mt-1 font-light">
                Nous nous engageons à répondre à toute demande sous 30 jours conformément à la réglementation.
              </p>
            </div>
            <a
              href="mailto:shost.services@gmail.com"
              className="px-5 py-2.5 bg-primary hover:bg-black text-white text-xs font-bold rounded-xl transition-colors shrink-0 inline-flex items-center gap-2"
            >
              <Mail className="w-3.5 h-3.5 text-accent" />
              <span>Contacter l'exploitant</span>
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
