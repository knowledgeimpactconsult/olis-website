// src/pages/Houses.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// ✅ House Data with Colors
const houses = [
  {
    name: "Osagyefo House",
    image: "/images/houses/osagyefo.png",
    description:
      "Inspired by Osagyefo Dr. Kwame Nkrumah, this house embodies vision, determination, and the spirit of African unity.",
    color: "text-orange-600 border-orange-500",
  },
  {
    name: "Mandela House",
    image: "/images/houses/mandela.png",
    description:
      "Learners in Mandela House reflect on resilience, justice, and the power of forgiveness, inspired by Nelson Mandela.",
    color: "text-green-600 border-green-500",
  },
  {
    name: "Churchill House",
    image: "/images/houses/churchill.png",
    description:
      "Churchill House represents courage, strategic thinking, and persistence in the face of challenges.",
    color: "text-red-600 border-red-500",
  },
  {
    name: "Gandhi House",
    image: "/images/houses/gandhi.jpg",
    description:
      "Rooted in the values of non-violence and truth, Gandhi House encourages learners to lead with peace and conviction.",
    color: "text-yellow-600 border-yellow-500",
  },
  {
    name: "Mother Theresa House",
    image: "/images/houses/teresa.png",
    description:
      "Inspired by Mother Theresa, this house highlights compassion, service, and humility as essential leadership qualities.",
    color: "text-blue-600 border-blue-500",
  },
];

export default function Houses() {
  const [selectedHouse, setSelectedHouse] = useState(null);

  // Close modal on ESC
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && setSelectedHouse(null);
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="pt-10 bg-gray-50  min-h-screen">
      {/* ✅ Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center text-white">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/houses/houses.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg"
          >
            Our School Houses
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl leading-relaxed text-gray-200"
          >
            At OLIS, House meetings go beyond tradition — they nurture future
            leaders. Learners dive into the values and leadership lessons of
            renowned figures, while interactive quizzes make the learning
            exciting, reflective, and impactful.
          </motion.p>
        </div>
      </section>

      {/* ✅ Houses Grid */}
      <section className="py-16 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
        >
          {houses.map((house, index) => (
            <motion.div
              key={house.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              onClick={() => setSelectedHouse(house)}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition border-t-8 cursor-pointer"
            >
              <img
                src={house.image}
                alt={house.name}
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <h3
                  className={`text-2xl font-bold ${house.color.split(" ")[0]}`}
                >
                  {house.name}
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {house.description}
                </p>
              </div>
              <div className={`h-2 w-full ${house.color.split(" ")[1]}`}></div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ✅ Fullscreen Modal */}
      <AnimatePresence>
        {selectedHouse && (
          <motion.div
            key="modal"
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedHouse(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedHouse(null)}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              >
                <X size={26} />
              </button>

              <motion.img
                src={selectedHouse.image}
                alt={selectedHouse.name}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full max-h-[80vh] object-contain"
              />

              <div className="p-6 text-center">
                <h3
                  className={`text-2xl font-bold ${
                    selectedHouse.color.split(" ")[0]
                  } mb-3`}
                >
                  {selectedHouse.name}
                </h3>
                <p className="text-gray-600">{selectedHouse.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ✅ Call to Action */}
      <section className="bg-orange-50 py-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-orange-700"
        >
          Building Leaders, One House at a Time
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-4 max-w-2xl mx-auto text-lg text-gray-700"
        >
          Through mentorship, teamwork, and leadership reflections, our Houses
          empower learners to embody the values of great leaders while forging
          their own path.
        </motion.p>
      </section>
    </div>
  );
}
