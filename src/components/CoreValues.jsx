// src/components/CoreValues.jsx
import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import {
  FaUserTie,
  FaHandsHelping,
  FaBalanceScale,
  FaClipboardCheck,
} from "react-icons/fa";

const values = [
  {
    title: "LEADERSHIP",
    description:
      "We nurture the strengths and abilities of our learners and staff, enabling them to overcome challenges and obstacles on their journey through life.",
    icon: <FaUserTie className="text-orange-500 text-5xl mb-4" />,
  },
  {
    title: "SERVICE",
    description:
      "We are driven by a spirit of service that inspires us to make the world—and every place we find ourselves—a better place.",
    icon: <FaHandsHelping className="text-orange-500 text-5xl mb-4" />,
  },
  {
    title: "INTEGRITY",
    description:
      "We believe integrity is choosing what is right, even when no one is watching. We strive to live consistently by upholding honesty and moral principles in all we do.",
    icon: <FaBalanceScale className="text-orange-500 text-5xl mb-4" />,
  },
  {
    title: "RESPONSIBILITY",
    description:
      "We embrace responsibility by being accountable and in control of our actions and attitudes. We take ownership of our choices and lead by example.",
    icon: <FaClipboardCheck className="text-orange-500 text-5xl mb-4" />,
  },
];

function CoreValues() {
  const handleScroll = () => {
    const section = document.querySelector("#achievements");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="core-values"
      className="relative py-20 bg-gradient-to-r from-orange-50 to-white"
    >
      <div className="container mx-auto px-6 lg:px-16 text-center">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-gray-800 mb-3"
        >
          Our Core Values
        </motion.h2>

        {/* Orange underline */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "80px", opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="h-1 bg-orange-500 mx-auto mb-6 rounded"
        />

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto"
        >
          At OLIS, our values guide everything we do, shaping our students into
          disciplined, ethical, and visionary leaders of tomorrow.
        </motion.p>

        {/* Core Values Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2 flex flex-col items-center text-center"
            >
              {value.icon}
              <h3 className="text-xl font-semibold text-orange-600 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="cursor-pointer text-orange-600"
          onClick={handleScroll}
        >
          <ChevronDown size={36} />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default CoreValues;
