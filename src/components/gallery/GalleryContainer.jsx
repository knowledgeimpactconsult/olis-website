// src/components/gallery/GalleryContainer.jsx
import React, { useState, useEffect, useRef } from "react";
import GallerySection from "./GallerySection";
import Lightbox from "./Lightbox";
import { categories } from "../../data/galleryData";
import ScrollToTopButton from "../common/ScrollToTopButton";

export default function GalleryContainer() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightbox, setLightbox] = useState({
    open: false,
    images: [],
    currentIndex: 0,
  });

  const sectionRefs = useRef({});

  // Scroll to section when chevron clicked
  const scrollToSection = (id) => {
    const section = sectionRefs.current[id];
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Lightbox controls
  const openLightbox = (images, index) => {
    setLightbox({ open: true, images, currentIndex: index });
  };

  const closeLightbox = () => {
    setLightbox((prev) => ({ ...prev, open: false }));
  };

  const prevImage = () => {
    setLightbox((prev) => ({
      ...prev,
      currentIndex:
        (prev.currentIndex - 1 + prev.images.length) % prev.images.length,
    }));
  };

  const nextImage = () => {
    setLightbox((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length,
    }));
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero Banner */}
      <div className="relative w-full h-72 md:h-96 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 flex items-center justify-center text-center overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-black/10 rounded-full animate-pulse"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Gallery
          </h1>
          <p className="mt-4 text-white text-lg md:text-2xl drop-shadow-md">
            Celebrating our school life and achievements
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mt-8 px-4">
        <button
          className={`px-4 py-2 rounded-full font-semibold transition ${
            activeCategory === "all"
              ? "bg-orange-600 text-white shadow"
              : "bg-white border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
          }`}
          onClick={() => setActiveCategory("all")}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`px-4 py-2 rounded-full font-semibold transition ${
              activeCategory === cat.id
                ? "bg-orange-600 text-white shadow"
                : "bg-white border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            }`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Gallery Sections */}
      <div className="max-w-7xl w-[80%] mx-auto py-10">
        {categories.map((cat, index) =>
          activeCategory === "all" || activeCategory === cat.id ? (
            <GallerySection
              key={cat.id}
              id={cat.id}
              ref={(el) => (sectionRefs.current[cat.id] = el)}
              title={cat.label}
              images={cat.images}
              onImageClick={(i) => openLightbox(cat.images, i)}
              onChevronClick={() => {
                const nextCat = categories[index + 1];
                if (nextCat) scrollToSection(nextCat.id);
              }}
            />
          ) : null
        )}
      </div>

      {/* Lightbox */}
      {lightbox.open && (
        <Lightbox
          images={lightbox.images}
          currentIndex={lightbox.currentIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}

      {/* Scroll-to-top */}
      <ScrollToTopButton />
    </div>
  );
}
