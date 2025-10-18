// src/components/gallery/GallerySection.jsx
import React, { forwardRef } from "react";
import { ChevronDown } from "lucide-react";

const GallerySection = forwardRef(
  ({ id, title, images, onImageClick, onChevronClick }, ref) => {
    return (
      <section ref={ref} id={id} className="mb-20 scroll-mt-24">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-700 mb-3">
            {title}
          </h2>
          <div className="w-16 h-1 bg-orange-600 mx-auto rounded-full"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {images.map((img, index) => (
            <div
              key={index}
              className="group relative cursor-pointer rounded-xl overflow-hidden shadow hover:shadow-lg transition-transform duration-300 hover:scale-105"
              onClick={() => onImageClick(index)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-56 object-cover transform transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-lg font-semibold">
                {img.caption}
              </div>
            </div>
          ))}
        </div>

        {/* Chevron to next section */}
        <div className="flex justify-center mt-8">
          <button
            onClick={onChevronClick}
            className="p-3 bg-orange-600 text-white rounded-full shadow hover:bg-orange-700 transition-transform hover:scale-110"
            aria-label="Scroll to next section"
          >
            <ChevronDown size={30} />
          </button>
        </div>
      </section>
    );
  }
);

export default GallerySection;
