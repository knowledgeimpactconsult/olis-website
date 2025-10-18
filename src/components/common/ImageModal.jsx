// // src/components/common/ImageModal.jsx
// import React, { useEffect, useRef, useState } from "react";
// import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";

// export default function ImageModal({
//   isOpen,
//   onClose,
//   images,
//   currentIndex,
//   setCurrentIndex,
// }) {
//   const modalRef = useRef(null);
//   const [zoom, setZoom] = useState(1);

//   // Close on ESC
//   useEffect(() => {
//     const handleEsc = (e) => e.key === "Escape" && onClose();
//     const handleArrows = (e) => {
//       if (e.key === "ArrowRight") nextImage();
//       if (e.key === "ArrowLeft") prevImage();
//     };
//     window.addEventListener("keydown", handleEsc);
//     window.addEventListener("keydown", handleArrows);
//     return () => {
//       window.removeEventListener("keydown", handleEsc);
//       window.removeEventListener("keydown", handleArrows);
//     };
//   }, [currentIndex]);

//   if (!isOpen) return null;

//   const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
//   const prevImage = () =>
//     setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

//   return (
//     <div
//       ref={modalRef}
//       className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
//       onClick={(e) => e.target === modalRef.current && onClose()} // outside click
//     >
//       {/* Close Button */}
//       <button
//         onClick={onClose}
//         className="absolute top-6 right-6 text-white hover:text-gray-300"
//       >
//         <X size={28} />
//       </button>

//       {/* Prev Button */}
//       <button
//         onClick={prevImage}
//         className="absolute left-6 text-white hover:text-gray-300"
//       >
//         <ChevronLeft size={40} />
//       </button>

//       {/* Image */}
//       <div className="relative max-w-5xl max-h-[80vh] overflow-hidden flex items-center">
//         <img
//           src={images[currentIndex].src}
//           alt={images[currentIndex].alt}
//           className="max-h-[80vh] mx-auto transition-transform duration-300"
//           style={{ transform: `scale(${zoom})` }}
//           loading="lazy"
//         />
//       </div>

//       {/* Next Button */}
//       <button
//         onClick={nextImage}
//         className="absolute right-6 text-white hover:text-gray-300"
//       >
//         <ChevronRight size={40} />
//       </button>

//       {/* Zoom Controls */}
//       <div className="absolute bottom-6 flex gap-3 text-white">
//         <button
//           onClick={() => setZoom((z) => Math.max(1, z - 0.25))}
//           className="bg-black/50 px-3 py-2 rounded-lg hover:bg-black/70"
//         >
//           <ZoomOut size={20} />
//         </button>
//         <button
//           onClick={() => setZoom((z) => z + 0.25)}
//           className="bg-black/50 px-3 py-2 rounded-lg hover:bg-black/70"
//         >
//           <ZoomIn size={20} />
//         </button>
//       </div>
//     </div>
//   );
// }

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
