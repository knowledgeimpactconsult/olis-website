// src/components/common/ImageGallery.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import ImageModal from "./ImageModal";

export default function ImageGallery({
  title,
  images = [],
  seeMoreLink,
  gridCols = "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
}) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openModal = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  if (!Array.isArray(images) || images.length === 0) {
    return <div className="text-center text-gray-500 py-10">No images yet</div>;
  }

  return (
    <section className="my-10">
      {/* Header */}
      {title && (
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-orange-600 tracking-wide text-center md:text-left">
            {title}
          </h2>
          {seeMoreLink && (
            <Link
              to={seeMoreLink}
              className="mt-3 md:mt-0 inline-block bg-orange-600 text-white px-4 py-2 rounded-xl text-sm hover:bg-orange-700 transition"
            >
              See More
            </Link>
          )}
        </div>
      )}

      {/* Image Grid */}
      <div className={`grid gap-3 ${gridCols}`}>
        {images.map((img, idx) => (
          <motion.div
            key={`${img.src}-${idx}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="relative group overflow-hidden rounded-2xl shadow-md cursor-pointer"
            onClick={() => openModal(idx)}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-48 object-cover transform group-hover:scale-105 transition duration-300"
            />
            {img.caption && (
              <div className="absolute bottom-0 w-full bg-black/50 text-white text-sm py-1 text-center">
                {img.caption}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <ImageModal isOpen={true} onClose={closeModal}>
            <motion.img
              key={images[selectedIndex].src}
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="max-w-full max-h-[90vh] rounded-2xl object-contain mx-auto"
            />
            {images[selectedIndex].caption && (
              <p className="text-center text-white mt-3 text-sm bg-black/50 px-3 py-1 rounded-lg inline-block">
                {images[selectedIndex].caption}
              </p>
            )}
          </ImageModal>
        )}
      </AnimatePresence>
    </section>
  );
}
