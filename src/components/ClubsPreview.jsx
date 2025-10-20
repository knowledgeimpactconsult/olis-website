// src/components/ClubsPreview.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, X } from "lucide-react";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

const clubs = [
  {
    name: "STEM Club",
    img: "https://res.cloudinary.com/do9lqb7hd/image/upload/v1760815642/stem_siaeuj.png",
    desc: "Innovating with science, technology, engineering, and mathematics to build future-ready leaders.",
  },
  {
    name: "Sports Club",
    img: "https://res.cloudinary.com/do9lqb7hd/image/upload/v1760815635/sports-club_jnvjng.png",
    desc: "Building teamwork, discipline, and resilience through athletics and physical fitness.",
  },
  {
    name: "Taekwondo Club",
    img: "https://res.cloudinary.com/do9lqb7hd/image/upload/v1760815635/taekwondo_uaf1km.png",
    desc: "Instilling focus, respect, and self-control through martial arts training.",
  },
];

// 🔑 Variants for smoother animations
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ClubsPreview() {
  const navigate = useNavigate();
  const [selectedClub, setSelectedClub] = useState(null);

  // 🔼 Scroll to top helper
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="clubspreview"
      className="py-20 bg-gradient-to-b from-white to-orange-50 relative"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative inline-block"
        >
          Our Clubs
          {/* Orange underline */}
          <span className="absolute left-1/2 -bottom-2 w-16 h-1 bg-orange-500 transform -translate-x-1/2 rounded-full"></span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto"
        >
          At OLIS, clubs are at the heart of student growth. They inspire
          creativity, leadership, and discipline, shaping students beyond the
          classroom.
        </motion.p>
        {/* Clubs Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {clubs.map((club, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer"
              onClick={() => setSelectedClub(club)}
            >
              <img
                src={club.img}
                alt={club.name}
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-orange-600 bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                <span className="text-white text-xl font-semibold">
                  {club.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* /* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center mt-[10px]" // Center + top margin
        >
          <MotionLink
            to="/clubs"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-orange-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-orange-600 transition"
          >
            View All Clubs
          </MotionLink>
        </motion.div>
      </div>

      {/* Modal for Club Preview */}
      <AnimatePresence>
        {selectedClub && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white rounded-2xl shadow-xl max-w-lg w-full overflow-hidden relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedClub(null)}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              >
                <X size={24} />
              </button>

              <img
                src={selectedClub.img}
                alt={selectedClub.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-orange-600 mb-3">
                  {selectedClub.name}
                </h3>
                <p className="text-gray-600 text-sm">{selectedClub.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🔼 Back to Top Floating Button */}
      <motion.div
        className="fixed bottom-6 right-6 group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.button
          onClick={handleScrollTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="p-4 rounded-full bg-orange-600 text-white shadow-lg hover:bg-orange-700 transition relative"
        >
          <ArrowUp size={24} />
          {/* Tooltip */}
          <span className="absolute -top-10 right-1/2 translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
            Back to Top
          </span>
        </motion.button>
      </motion.div>
    </section>
  );
}
