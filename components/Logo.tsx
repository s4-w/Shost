import React from 'react';
import { motion } from "motion/react";

interface LogoProps {
  className?: string;
  light?: boolean;
}

export default function Logo({ className = "", light = false }: LogoProps) {
  const logoUrl = "https://i.postimg.cc/W1jN70Wd/Logo-sans-fond.png";

  return (
    <div className={`flex items-center justify-center pt-8 ${className}`}>
      <motion.img 
        animate={{ 
          y: [0, -55, 0],
          rotate: [-12, 12, -12],
          scale: [1, 1.15, 1]
        }}
        whileHover={{ scale: 1.3 }}
        transition={{ 
          y: {
            duration: 2.0,
            repeat: Infinity,
            ease: "easeInOut"
          },
          rotate: {
            duration: 3.75,
            repeat: Infinity,
            ease: "easeInOut"
          },
          scale: {
            duration: 2.75,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        src={logoUrl} 
        alt="SHOST Logo" 
        className="w-full h-auto object-contain transition-all duration-300 cursor-pointer"
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
