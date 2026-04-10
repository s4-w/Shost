import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

export default function Logo({ className = "", light = false }: LogoProps) {
  const logoUrl = "https://i.postimg.cc/W1jN70Wd/Logo-sans-fond.png";

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img 
        src={logoUrl} 
        alt="SHOST Logo" 
        className="w-full h-auto object-contain transition-all duration-300"
        style={{
          // Since it's a transparent PNG, we just need to handle the color contrast.
          // If the original is white, we invert it for light backgrounds.
          // If the original is black, we invert it for dark backgrounds.
          // Based on the previous black background version, the logo itself was white.
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
