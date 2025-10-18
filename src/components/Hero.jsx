// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImage from "../assets/herobg_premium.jpg";
import AnnouncementsBanner from "./AnnouncementsBanner";
import AnnouncementsCarousel from "./AnnouncementsCarousel";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.1 * i },
  }),
};

const item = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

function Hero() {
  return (
    <section id="top" className="relative w-full h-screen overflow-hidden">
      {/* Background with slow zoom-out */}

      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 12, ease: "easeOut" }}
      ></motion.div>

      {/* Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-white max-w-4xl"
        >
          {/* Headline */}
          <motion.h1
            className="text-4xl md:text-7xl leading-tight mb-4"
            variants={container}
          >
            <motion.span className="block font-light" variants={item}>
              Welcome to
            </motion.span>
            <motion.span className="block font-extrabold" variants={item}>
              Osagyefo Leadership
            </motion.span>
            <motion.span className="block font-extrabold" variants={item}>
              International School
            </motion.span>
          </motion.h1>

          {/* Orange underline accent */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "140px", opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="h-1 bg-orange-500 mx-auto mb-8 rounded"
          />

          {/* Subtext */}
          <motion.p
            className="text-lg md:text-2xl mb-12 text-gray-200"
            variants={item}
          >
            Inspiring Ethical Leadership, Embracing Change, and Shaping the
            Future through Child-Centered Education and Skills Development.
          </motion.p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/academics"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 hover:shadow-orange-500/50"
              variants={item}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Academics
            </motion.a>
            <motion.a
              href="/contact"
              className="backdrop-blur-sm bg-white/10 border border-white/50 hover:bg-white hover:text-black text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300"
              variants={item}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>
      </div>
      

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="cursor-pointer text-white flex items-center justify-center w-12 h-12 border-2 border-white/70 rounded-full hover:border-orange-500 hover:text-orange-500 transition"
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
