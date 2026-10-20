import React from "react";
import { Phone, Calculator } from "lucide-react";
import { useRouter } from "@/src/context/RouterContext";

export default function MobileFloatingBar() {
  const { path, navigate } = useRouter();

  const handleEstimateClick = () => {
    navigate(path === "/" ? "#estimateur" : "/#estimateur");
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-primary/10 px-4 py-2.5 shadow-[0_-4px_25px_rgba(0,0,0,0.08)]">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* Clickable direct phone call */}
        <a
          href="tel:0626290649"
          className="flex-1 flex items-center justify-center gap-2 bg-secondary text-primary border border-primary/15 py-3 px-3 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-primary hover:text-white transition-colors min-h-[44px]"
          aria-label="Appeler la conciergerie SHOST au 06 26 29 06 49"
        >
          <Phone className="w-4 h-4 text-accent shrink-0" />
          <span className="truncate">06 26 29 06 49</span>
        </a>

        {/* Direct revenue estimate button */}
        <button
          type="button"
          onClick={handleEstimateClick}
          className="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-3 px-3 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-black transition-colors shadow-md min-h-[44px] cursor-pointer"
          aria-label="Estimer mes revenus locatifs"
        >
          <Calculator className="w-4 h-4 text-accent shrink-0" />
          <span className="truncate">Estimer mes revenus</span>
        </button>
      </div>
    </div>
  );
}
