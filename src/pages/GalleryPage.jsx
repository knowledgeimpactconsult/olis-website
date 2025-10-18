// src/pages/GalleryPage.jsx
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import HeroBanner from "@/components/common/HeroBanner";
import ScrollToTopButton from "@/components/common/ScrollToTopButton";
import Lightbox from "@/components/gallery/Lightbox";
import { categories } from "@/data/galleryData";

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    images: [],
    currentIndex: 0,
  });

  const sectionRefs = useRef([]);

  const openLightbox = (images, index) => {
    setLightbox({ isOpen: true, images, currentIndex: index });
  };

  const closeLightbox = () => {
    setLightbox({ ...lightbox, isOpen: false });
  };

  const scrollToNextSection = (index) => {
    const next = sectionRefs.current[index + 1];
    if (next) {
      const heading = next.querySelector("h2");
      if (heading) {
        const offsetTop =
          heading.getBoundingClientRect().top + window.scrollY - 100; // offset for navbar
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      } else {
        next.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div className="relative w-full bg-white text-gray-900">
      {/* Hero Banner */}
      <HeroBanner
        title="Our Gallery"
        subtitle="Explore moments from our vibrant school life"
      />

      {/* Gallery Sections */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
        {categories.map((category, index) => (
          <motion.section
            key={category.id}
            ref={(el) => (sectionRefs.current[index] = el)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl shadow-sm relative"
          >
            {/* Section Heading */}
            <div className="mb-10 text-center relative group/heading">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-extrabold text-gray-900 relative"
              >
                {category.label}

                {/* Chevron Button */}
                {index < categories.length - 1 && (
                  <motion.button
                    onClick={() => scrollToNextSection(index)}
                    className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover/heading:opacity-100 transition-opacity duration-300"
                    whileHover={{ y: 4 }}
                    aria-label="Scroll to next section"
                  >
                    <ChevronDown className="text-orange-600 w-7 h-7 hover:text-orange-700 transition-colors animate-bounce" />
                  </motion.button>
                )}
              </motion.h2>

              {/* Divider */}
              <div className="mt-3 w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-700 mx-auto rounded-full"></div>
            </div>

            {/* Grid of Images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {category.images.map((image, imgIndex) => (
                <motion.div
                  key={imgIndex}
                  whileHover={{ scale: 1.03 }}
                  className="relative group/card rounded-xl overflow-hidden shadow-lg cursor-pointer transition-transform duration-500"
                  onClick={() => openLightbox(category.images, imgIndex)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="w-full h-64 object-cover transform group-hover/card:scale-105 transition duration-700"
                  />

                  {/* Overlay Caption */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-center py-2 text-sm font-medium transition-all duration-300 group-hover/card:bg-gradient-to-r group-hover/card:from-orange-500 group-hover/card:to-orange-700">
                    {image.alt}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* See More Link */}
            {category.seeMoreLink && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-8 text-center"
              >
                <a
                  href={category.seeMoreLink}
                  className="inline-block px-8 py-2 text-white bg-gradient-to-r from-orange-500 to-orange-700 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  See More
                </a>
              </motion.div>
            )}
          </motion.section>
        ))}
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightbox.isOpen}
        onClose={closeLightbox}
        images={lightbox.images}
        currentIndex={lightbox.currentIndex}
      />

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  );
}
