import React from "react";
import { ChevronUp, ChevronDown, ArrowUp, ArrowDown } from "lucide-react";
import { scrollToSection } from "./SectionNavigator";

interface SectionFooterNavProps {
  prevId?: string;
  prevLabel?: string;
  nextId?: string;
  nextLabel?: string;
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionFooterNav({
  prevId,
  prevLabel,
  nextId,
  nextLabel,
  theme = "light",
  className = "",
}: SectionFooterNavProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={`mt-16 pt-8 border-t flex flex-wrap items-center justify-between gap-4 text-xs font-medium ${
        isDark ? "border-white/10 text-white/70" : "border-primary/10 text-primary/70"
      } ${className}`}
    >
      {/* Previous Section link */}
      <div>
        {prevId ? (
          <button
            type="button"
            onClick={() => scrollToSection(prevId)}
            className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
              isDark
                ? "bg-white/5 hover:bg-white/15 text-white/90 hover:text-accent border border-white/10"
                : "bg-surface hover:bg-white text-primary hover:text-accent border border-primary/10 shadow-2xs hover:shadow-xs"
            }`}
          >
            <ChevronUp className="w-3.5 h-3.5 text-accent" />
            <span>
              <span className="opacity-60 text-[10px] uppercase tracking-wider block text-left">Précédent</span>
              {prevLabel}
            </span>
          </button>
        ) : (
          <span />
        )}
      </div>

      {/* Next Section link */}
      <div>
        {nextId && (
          <button
            type="button"
            onClick={() => scrollToSection(nextId)}
            className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
              isDark
                ? "bg-white/5 hover:bg-white/15 text-white/90 hover:text-accent border border-white/10"
                : "bg-surface hover:bg-white text-primary hover:text-accent border border-primary/10 shadow-2xs hover:shadow-xs"
            }`}
          >
            <span className="text-right">
              <span className="opacity-60 text-[10px] uppercase tracking-wider block">Suivant</span>
              {nextLabel}
            </span>
            <ChevronDown className="w-3.5 h-3.5 text-accent" />
          </button>
        )}
      </div>
    </div>
  );
}
