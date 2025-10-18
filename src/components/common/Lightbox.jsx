// src/components/common/Lightbox.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) {
  if (!images || images.length === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white hover:text-orange-500 transition"
        >
          <X size={36} />
        </button>

        {/* Prev */}
        <button
          onClick={onPrev}
          className="absolute left-6 text-white hover:text-orange-500 transition"
        >
          <ChevronLeft size={40} />
        </button>

        {/* Next */}
        <button
          onClick={onNext}
          className="absolute right-6 text-white hover:text-orange-500 transition"
        >
          <ChevronRight size={40} />
        </button>

        {/* Zoomed Image */}
        <motion.img
          key={currentIndex}
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-xl"
          initial={{ scale: 0.85 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Caption */}
        <p className="absolute bottom-8 text-white text-lg font-medium px-4 text-center">
          {images[currentIndex].caption}
        </p>
      </motion.div>
    </AnimatePresence>
  );
}
