import React, { useState } from 'react';
import { motion } from "motion/react";

interface LogoProps {
  className?: string;
  light?: boolean;
}

export default function Logo({ className = "", light = false }: LogoProps) {
  const [imgSrc, setImgSrc] = useState("/Logo-sans-fond.png");
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <span className={`font-serif tracking-[0.25em] text-sm md:text-md lg:text-lg font-bold transition-colors ${light ? 'text-white' : 'text-primary'}`}>
          SHOST
        </span>
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img 
        src={imgSrc} 
        alt="SHOST Logo" 
        className="w-full h-auto object-contain transition-all duration-300"
        style={{
          // Since it's a transparent PNG, we handle color contrast based on light state.
          filter: light ? 'none' : 'brightness(0)',
        }}
        referrerPolicy="no-referrer"
        onError={() => {
          if (imgSrc === "/Logo-sans-fond.png") {
            // First fallback to postimg
            setImgSrc("https://i.postimg.cc/W1jN70Wd/Logo-sans-fond.png");
          } else {
            // In case both fail, fallback to a beautiful text logo
            setHasError(true);
          }
        }}
      />
    </div>
  );
}
