// src/pages/Academics.jsx
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import ImageGallery from "@/components/common/ImageGallery";
import ImageModal from "@/components/common/ImageModal";
import ScrollToTopButton from "@/components/common/ScrollToTopButton";
import { ChevronDown } from "lucide-react";

/* ===== IMAGE DATA ===== */
const earlyYearsImages = [
  { src: "/images/early1.jpg", alt: "Creative Play", caption: "Creative Play" },
  {
    src: "https://res.cloudinary.com/do9lqb7hd/image/upload/v1760815637/collaboration_gj1yuf.jpg",
    alt: "students collaboration",
    caption: "Collaboration Time",
  },
  { src: "/images/early3.jpg", alt: "Art & Craft", caption: "Art & Craft" },
  {
    src: "https://res.cloudinary.com/do9lqb7hd/image/upload/v1760815637/sports-club_eauere.jpg",
    alt: "Outdoor Fun",
    caption: "Outdoor Fun",
  },
];

const primaryImages = [
  {
    src: "https://res.cloudinary.com/do9lqb7hd/image/upload/v1760815648/math_k8dtfh.jpg",
    alt: "Class Participation",
    caption: "Class Participation",
  },
  {
    src: "/images/primary2.jpg",
    alt: "Science Projects",
    caption: "Science Projects",
  },
  { src: "/images/primary3.jpg", alt: "Group Work", caption: "Group Work" },
  {
    src: "/images/primary4.jpg",
    alt: "Creative Arts",
    caption: "Creative Arts",
  },
];

const juniorHighImages = [
  {
    src: "https://res.cloudinary.com/do9lqb7hd/image/upload/v1760815649/stem_ozav4u.jpg",
    alt: "STEM Workshop",
    caption: "STEM Workshop",
  },
  {
    src: "/images/jhs2.jpg",
    alt: "Computing Lesson",
    caption: "Computing Lab",
  },
  {
    src: "https://res.cloudinary.com/do9lqb7hd/image/upload/v1760815648/science_r3iclr.jpg",
    alt: "Science Fair",
    caption: "Science Fair",
  },
  {
    src: "https://res.cloudinary.com/do9lqb7hd/image/upload/v1760815651/group_hmnb9p.jpg",
    alt: "Team Collaboration",
    caption: "Team Collaboration",
  },
];

export default function Academics() {
  const [lightbox, setLightbox] = useState({
    open: false,
    images: [],
    index: 0,
  });

  const nextSectionRef = useRef(null);

  const openLightbox = (images, index) =>
    setLightbox({ open: true, images, index });

  const closeLightbox = () =>
    setLightbox({ open: false, images: [], index: 0 });

  const prevImage = () =>
    setLightbox((s) => ({
      ...s,
      index: (s.index - 1 + s.images.length) % s.images.length,
    }));

  const nextImage = () =>
    setLightbox((s) => ({ ...s, index: (s.index + 1) % s.images.length }));

  const scrollToNextSection = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gray-50 min-h-screen relative">
      {/* ===== HERO SECTION ===== */}
      <div className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden">
        <img
          // src="/images/academics/academics-hero.jpg"
          src="https://res.cloudinary.com/do9lqb7hd/image/upload/v1760815642/academics-hero_i799u1.jpg"
          alt="Academics Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Academics
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl font-light mb-6 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Nurturing Excellence from Early Years to Junior High
          </motion.p>

          <motion.div
            // className="flex space-x-6 text-base md:text-lg"
            className="flex space-x-6 text-base md:text-lg backdrop-blur-sm bg-white/10 border border-white/50 hover:bg-white hover:text-black text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <a href="#early-years" className="hover:text-orange-300 transition">
              Early Years
            </a>
            <a href="#primary" className="hover:text-orange-300 transition">
              Primary
            </a>
            <a href="#junior-high" className="hover:text-orange-300 transition">
              Junior High
            </a>
          </motion.div>

          {/* ✅ Scroll Down Button */}
          <button
            onClick={scrollToNextSection}
            className="absolute bottom-6 text-white animate-bounce hover:text-orange-400 transition"
            aria-label="Scroll Down"
          >
            <ChevronDown size={36} />
          </button>
        </div>
      </div>

      {/* ===== EARLY YEARS ===== */}
      <section ref={nextSectionRef}>
        <Section
          id="early-years"
          title="Early Years"
          text="Our Early Years program nurtures curiosity, creativity, and foundational social and emotional skills through joyful, play-based learning."
          images={earlyYearsImages}
          onImageClick={(idx) => openLightbox(earlyYearsImages, idx)}
        />
      </section>

      {/* ===== PRIMARY ===== */}
      <Section
        id="primary"
        title="Primary"
        text="The Primary curriculum focuses on building literacy, numeracy, digital fluency, and creativity through hands-on, project-based learning."
        images={primaryImages}
        bg="bg-orange-50"
        onImageClick={(idx) => openLightbox(primaryImages, idx)}
      />

      {/* ===== JUNIOR HIGH ===== */}
      <Section
        id="junior-high"
        title="Junior High"
        text="Our Junior High students engage deeply in STEM, Arts, and Leadership programs, preparing them for academic success and global citizenship."
        images={juniorHighImages}
        onImageClick={(idx) => openLightbox(juniorHighImages, idx)}
      />

      {/* ===== LIGHTBOX / IMAGE MODAL ===== */}
      {lightbox.open && (
        <ImageModal isOpen={lightbox.open} onClose={closeLightbox}>
          <div className="flex flex-col items-center justify-center space-y-3">
            <motion.img
              key={lightbox.index}
              src={lightbox.images[lightbox.index].src}
              alt={lightbox.images[lightbox.index].alt}
              className="max-h-[80vh] rounded-2xl shadow-2xl object-contain"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            />
            <p className="text-white text-lg font-medium">
              {lightbox.images[lightbox.index].caption}
            </p>
            <div className="flex justify-center gap-6 mt-2">
              <button
                onClick={prevImage}
                className="text-white hover:text-orange-300"
              >
                ← Prev
              </button>
              <button
                onClick={nextImage}
                className="text-white hover:text-orange-300"
              >
                Next →
              </button>
            </div>
          </div>
        </ImageModal>
      )}

      {/* ✅ FLOATING SCROLL-TO-TOP BUTTON */}
      <ScrollToTopButton />
    </div>
  );
}

/* ===== REUSABLE SECTION COMPONENT ===== */
function Section({ id, title, text, images, onImageClick, bg }) {
  return (
    <section id={id} className={`max-w-6xl mx-auto px-6 py-20 ${bg || ""}`}>
      <motion.h2
        className="text-3xl font-semibold text-orange-600 mb-4 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>

      <motion.p
        className="text-gray-700 mb-8 text-center max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        {text}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <ImageGallery images={images} onImageClick={onImageClick} />
      </motion.div>
    </section>
  );
}
