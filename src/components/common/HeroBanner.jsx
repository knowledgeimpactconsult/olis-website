// src/components/common/HeroBanner.jsx
import React from "react";

export default function HeroBanner({ title, subtitle }) {
  return (
    <div className="relative w-full h-72 md:h-96 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 flex items-center justify-center text-center overflow-hidden">
      {/* Decorative circles for dynamic effect */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-black/10 rounded-full animate-pulse"></div>

      <div className="relative z-10 px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-white text-lg md:text-2xl drop-shadow-md">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
