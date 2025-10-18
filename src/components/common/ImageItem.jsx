// src/components/common/ImageItem.jsx
import React, { useState, useCallback } from "react";

// Single image responsible for its own loading state.
// Keeps placeholder until loaded and fades the image in.
export default function ImageItem({ src, alt = "", caption, onClick }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  const handleLoad = useCallback((e) => {
    setLoaded(true);
  }, []);

  const handleError = useCallback(
    (e) => {
      // prevent infinite loop if fallback missing
      if (!failed) {
        setFailed(true);
        e.currentTarget.src = "/images/placeholder.png";
      }
    },
    [failed]
  );

  return (
    <button
      type="button"
      onClick={onClick}
      className="relative group rounded-2xl overflow-hidden bg-gray-100 focus:outline-none"
      aria-label={alt || caption || "Open image"}
    >
      {/* Stable aspect box: avoids CLS */}
      <div className="aspect-[4/3] bg-gray-200">
        {/* placeholder shimmer only when not loaded */}
        {!loaded && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />
        )}
        <img
          src={src}
          alt={alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          loading="lazy"
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
        />
      </div>

      {caption ? (
        <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white text-xs p-2">
          {caption}
        </div>
      ) : null}
    </button>
  );
}
