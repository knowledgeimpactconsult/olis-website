// src/components/common/ImageModal.jsx
import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ImageModal({ isOpen, onClose, children }) {
  const [zoom, setZoom] = useState(false);

  // ✅ ESC closes modal
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // ✅ Zoom toggle (optional)
  const handleZoom = () => setZoom((z) => !z);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative p-4 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} // prevent close on image click
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:text-orange-400 transition"
              aria-label="Close"
            >
              <X size={28} />
            </button>

            {/* Zoomable content */}
            <motion.div
              onClick={handleZoom}
              animate={{ scale: zoom ? 1.3 : 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="cursor-zoom-in"
            >
              {children}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
