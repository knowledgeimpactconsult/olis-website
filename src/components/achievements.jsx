// src/components/Achievements.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, X } from "lucide-react";

export default function Achievements() {
  const [openModal, setOpenModal] = useState(false);

  // ESC closes modal
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && setOpenModal(false);
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Scroll to Academics section
  const handleScroll = () => {
    const next = document.querySelector("#academics");
    if (next) next.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="achievements"
      className="relative py-20 bg-gradient-to-r from-white via-orange-50 to-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-3"
        >
          Celebrating Excellence at OLIS
        </motion.h2>

        {/* Orange underline */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "100px", opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="h-1 bg-orange-500 mx-auto mb-6 rounded"
        />

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12"
        >
          Our alumni continue to inspire. Meet{" "}
          <span className="font-bold text-orange-600">
            David Nii Commey Ankrah
          </span>
          , an OLIS graduate (BECE 2021), who emerged as the{" "}
          <span className="font-semibold">
            Overall Best WASSCE Candidate 2024
          </span>{" "}
          across the West African sub-region.
        </motion.p>

        {/* Spotlight Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl mx-auto relative group cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition"
          onClick={() => setOpenModal(true)}
        >
          <img
            src="/images/david.png"
            alt="David Nii Commey Ankrah"
            className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-orange-500 mb-6 group-hover:scale-105 transition"
          />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            David Nii Commey Ankrah
          </h3>
          <p className="text-gray-600">
            Awarded in Monrovia by H.E. Joseph Nyuma Boakai Sr., President of
            Liberia. A true inspiration and pride of OLIS.
          </p>
          <p className="mt-4 text-orange-600 font-semibold animate-pulse">
            Click to read his story →
          </p>
        </motion.div>
      </div>

      {/* Scroll Down Button */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.button
          onClick={handleScroll}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="cursor-pointer text-orange-600"
        >
          <ChevronDown size={40} />
        </motion.button>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {openModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenModal(false)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setOpenModal(false)}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              >
                <X size={28} />
              </button>

              {/* Adjusted Image for Portrait */}
              <div className="flex items-center justify-center bg-gray-100">
                <img
                  src="/images/david.png"
                  alt="David Nii Commey Ankrah"
                  className="max-h-[450px] w-auto object-contain rounded-t-2xl"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-orange-600 mb-3">
                  David Nii Commey Ankrah
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  David, an OLIS alumnus who completed BECE in 2021, brought
                  immense pride to OLIS and Ghana when he was crowned the{" "}
                  <strong>Overall Best WASSCE Candidate in 2024</strong>, among
                  over 2.4 million candidates across West Africa.
                  <br />
                  <br />
                  The award was presented during an elaborate ceremony in
                  Monrovia, Liberia, on March 18, 2024, by{" "}
                  <strong>President Joseph Nyuma Boakai Sr.</strong> of Liberia.
                  This recognition affirms the academic excellence nurtured at
                  OLIS.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
