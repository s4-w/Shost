import React from 'react';
import { motion } from "motion/react";

interface LogoProps {
  className?: string;
  light?: boolean;
}

export default function Logo({ className = "", light = false }: LogoProps) {
  const logoUrl = "/Logo-sans-fond.png";

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img 
        src={logoUrl} 
        alt="SHOST Logo" 
        className="w-full h-auto object-contain transition-all duration-300"
        style={{
          // Since it's a transparent PNG, we just need to handle the color contrast.
          filter: light ? 'none' : 'brightness(0)',
        }}
        referrerPolicy="no-referrer"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
      />
    </div>
  );
}
