// src/components/gallery/Lightbox.jsx
import React, { useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Lightbox({
  isOpen,
  onClose,
  images = [],
  currentIndex = 0,
}) {
  const [index, setIndex] = useState(currentIndex);
  const [zoom, setZoom] = useState(1);
  const overlayRef = useRef(null);
  const imageRef = useRef(null);

  // ✅ Sync when lightbox opens
  useEffect(() => {
    if (isOpen) {
      setIndex(currentIndex);
      setZoom(1);
      document.body.style.overflow = "hidden"; // prevent background scroll
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen, currentIndex]);

  // ✅ Keyboard shortcuts
  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") nextImage();
      else if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, index]);

  // ✅ Overlay close (only if clicked outside image)
  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
    setZoom(1);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
    setZoom(1);
  };

  if (!isOpen || !images.length || !images[index]) return null;

  const image = images[index];

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm transition-opacity duration-300"
      onClick={handleOverlayClick}
    >
      {/* Close Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-6 right-6 text-white hover:text-orange-500 transition-colors"
        aria-label="Close lightbox"
      >
        <X size={32} />
      </button>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-6 text-white hover:text-orange-500 transition-transform hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft size={48} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-6 text-white hover:text-orange-500 transition-transform hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight size={48} />
          </button>
        </>
      )}

      {/* Image + Zoom */}
      <img
        ref={imageRef}
        src={image.src}
        alt={image.alt || "Gallery image"}
        className="max-h-[90%] max-w-[90%] object-contain select-none transition-transform duration-300 cursor-zoom-in"
        style={{ transform: `scale(${zoom})` }}
        onWheel={(e) => {
          e.preventDefault();
          setZoom((z) => Math.min(Math.max(z - e.deltaY * 0.001, 1), 3));
        }}
        onClick={(e) => {
          e.stopPropagation();
          setZoom((z) => (z === 1 ? 2 : 1));
        }}
      />

      {/* Caption */}
      {image.caption && (
        <div className="absolute bottom-6 text-white text-lg bg-gradient-to-r from-orange-500 to-orange-700 px-5 py-2 rounded-xl shadow-lg max-w-[80%] text-center">
          {image.caption}
        </div>
      )}
    </div>
  );
}
