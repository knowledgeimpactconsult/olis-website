// src/pages/SportsAndCulture.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const activities = [
  {
    name: "Sports & Athletics",
    image: "/images/sportsandculture/sports.jpg",
    description:
      "Our students excel in football, athletics, and inter-school tournaments, building teamwork, resilience, and a winning spirit.",
  },
  {
    name: "Cultural Dance",
    image: "/images/sportsandculture/cultural-dance.jpg",
    description:
      "Celebrating our heritage with vibrant cultural dances that showcase tradition, creativity, and unity.",
  },
  {
    name: "Choreography & Music",
    image: "/images/sportsandculture/choreography.png",
    description:
      "Modern choreography, music, and drama that inspire confidence, talent, and artistic expression.",
  },
];

export default function SportsAndCulture() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="w-full pt-10 bg-white">
      {/* ✅ Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/sportsandculture/hero-sports.jpg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-3xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold drop-shadow-lg"
          >
            Sports & Cultural Life
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl leading-relaxed text-gray-200"
          >
            At OLIS, we believe in nurturing the body and soul through sports,
            cultural dance, and artistic expression. Discover how student life
            goes beyond the classroom.
          </motion.p>
        </div>
      </section>

      {/* ✅ Activities Grid */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
        >
          {activities.map((activity, index) => (
            <motion.div
              key={activity.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer"
              onClick={() => setSelected(activity)}
            >
              <img
                src={activity.image}
                alt={activity.name}
                className="h-56 w-full object-cover hover:scale-105 transition duration-500"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800">
                  {activity.name}
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ✅ Modal Zoom */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              className="relative bg-white rounded-2xl shadow-xl overflow-hidden max-w-3xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl"
              >
                ✕
              </button>

              <img
                src={selected.image}
                alt={selected.name}
                className="w-full h-96 object-cover"
              />
              <div className="p-6 text-center">
                <h2 className="text-3xl font-bold text-orange-600">
                  {selected.name}
                </h2>
                <p className="mt-4 text-gray-600">{selected.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
