import React, { useState } from 'react';

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
    <div className={`flex items-center justify-start ${className}`}>
      <img 
        src={imgSrc} 
        alt="SHOST – Conciergerie Airbnb Grenoble" 
        className="w-auto h-full max-h-full object-contain object-left transition-all duration-300"
        style={{
          filter: light ? 'brightness(0) invert(1) drop-shadow(0 2px 4px rgba(0,0,0,0.3))' : 'brightness(0)',
        }}
        referrerPolicy="no-referrer"
        onError={() => {
          if (imgSrc === "/Logo-sans-fond.png") {
            setImgSrc("https://i.postimg.cc/W1jN70Wd/Logo-sans-fond.png");
          } else {
            setHasError(true);
          }
        }}
      />
    </div>
  );
}
