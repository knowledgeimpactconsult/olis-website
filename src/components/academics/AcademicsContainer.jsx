// src/components/academics/AcademicsContainer.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

function AcademicsContainer() {
  const [selectedImage, setSelectedImage] = useState(null);

  const academicsImage =
    "https://res.cloudinary.com/do9lqb7hd/image/upload/v1760815050/aca_qvkxqo.png";

  const handleScrollTo = (id) => {
    const section = document.querySelector(`#${id}`);
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="academics-container"
      className="relative py-20 bg-gradient-to-r from-gray-50 via-orange-50/40 to-white overflow-hidden"
    >
      {/* Floating Background Elements */}
      <motion.div
        className="absolute -top-20 -left-20 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-40"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-40 -right-24 w-80 h-80 bg-orange-200 rounded-full blur-3xl opacity-30"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 w-64 h-64 bg-gradient-to-r from-orange-300 to-yellow-200 rounded-full blur-2xl opacity-20"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 lg:px-16 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column: Image with overlay & modal trigger */}
        <motion.div
          className="relative rounded-2xl overflow-hidden shadow-xl cursor-pointer group"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.02 }}
          onClick={() => setSelectedImage(academicsImage)}
        >
          <img
            src={academicsImage}
            alt="Academics at OLIS"
            className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <p className="text-white text-lg md:text-xl font-semibold px-6 text-center leading-relaxed">
              Leadership • Service • Integrity • Responsibility • Discipline
              <br />
              <span className="italic font-light">
                (with child-centered education)
              </span>
            </p>
          </div>
        </motion.div>

        {/* Right Column: Intro Text */}
        <motion.div
          className="flex flex-col items-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 relative">
            Academics at OLIS
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-2 left-0 w-20 h-1 bg-orange-600 rounded-full origin-left"
            />
          </h2>

          <p className="text-gray-700 mb-8 leading-relaxed">
            Our academic programs inspire students to achieve excellence while
            nurturing holistic growth. Explore the pathways that prepare them
            for tomorrow’s leadership.
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="cursor-pointer text-orange-600 drop-shadow-md hover:drop-shadow-xl"
          onClick={() => handleScrollTo("studentlifepreview")}
        >
          <ChevronDown size={40} />
        </motion.div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              key={selectedImage}
              src={selectedImage}
              alt="Academics zoom"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
      {/* CTA Button */}

      <div className="flex justify-center mt-10">
        <MotionLink
          to="/academics"
          className="px-6 py-3 bg-orange-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-orange-600 transition"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Academics
        </MotionLink>
      </div>
    </section>
  );
}

export default AcademicsContainer;
