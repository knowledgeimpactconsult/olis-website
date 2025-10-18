// src/pages/Clubs.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

// ✅ Clubs Data
const clubs = [
  {
    name: "STEM Club",
    image: "/images/clubs/stem.jpg",
    description:
      "Hands-on exploration in robotics, coding, and science experiments that prepare learners for the future of technology.",
  },
  {
    name: "Cadet",
    image: "/images/clubs/cadet-club.jpg",
    description:
      "Learners build discipline, teamwork, and leadership through drills and structured cadet training.",
  },
  {
    name: "Sports",
    image: "/images/clubs/sports.jpg",
    description:
      "From football to athletics, our sports teams promote fitness, teamwork, and competitive spirit.",
  },
  {
    name: "Taekwondo",
    image: "/images/clubs/taekwondo.png",
    description:
      "Learners practice self-defense, focus, and discipline through the martial art of Taekwondo.",
  },
  {
    name: "Writers & Debaters",
    image: "/images/clubs/debate.jpg",
    description:
      "A platform to sharpen critical thinking, communication, and public speaking skills.",
  },
  {
    name: "Arts & Culture",
    image: "/images/clubs/arts.jpg",
    description:
      "Learners express creativity and heritage through music, dance, drama, and cultural performances.",
  },
];

export default function Clubs() {
  const [selectedClub, setSelectedClub] = useState(null);

  return (
    <div className="pt-10 bg-white">
      {/* ✅ Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center text-white">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/clubs/stem-hero.jpg')" }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg"
          >
            Discover Our Clubs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl leading-relaxed text-gray-200"
          >
            At OLIS, clubs inspire creativity, discipline, and innovation.
            Learners explore passions beyond the classroom while building
            lifelong skills.
          </motion.p>
        </div>
      </section>

      {/* ✅ Clubs Grid */}
      <section className="py-16 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
        >
          {clubs.map((club, index) => (
            <motion.div
              key={club.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer"
              onClick={() => setSelectedClub(club)}
            >
              {/* ✅ Club Image */}
              <img
                src={club.image}
                alt={club.name}
                className="h-56 w-full object-cover hover:scale-105 transition duration-500"
              />

              {/* ✅ Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800">
                  {club.name}
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {club.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ✅ Modal for Zoomed Image */}
      {selectedClub && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedClub(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-3xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedClub.image}
              alt={selectedClub.name}
              className="w-full h-96 object-cover"
            />
            <div className="p-6 text-center">
              <h2 className="text-3xl font-bold text-gray-800">
                {selectedClub.name}
              </h2>
              <p className="mt-4 text-gray-600">{selectedClub.description}</p>
              <button
                onClick={() => setSelectedClub(null)}
                className="mt-6 px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
