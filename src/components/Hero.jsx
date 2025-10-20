// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

/**
 * Hero component
 * - Preserves original design: layered animated headline, accent underline, hero background (cloudinary),
 *   announcements components, and scroll indicator.
 * - Replaces plain <a href> with react-router <Link> wrapped in framer-motion for animation.
 */

const heroImage =
  "https://res.cloudinary.com/do9lqb7hd/image/upload/v1760815053/herobg_zj7tg6.jpg";

/* Animation variants */
const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.22, delayChildren: 0.08 * i },
  }),
};

const item = {
  hidden: { y: 48, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.85, ease: "easeOut" },
  },
};

const MotionLink = motion(Link);

export default function Hero() {
  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section id="top" className="relative w-full h-screen overflow-hidden">
      {/* Background image with slow zoom-out */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 12, ease: "easeOut" }}
        aria-hidden="true"
      />

      {/* Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-white max-w-4xl"
        >
          {/* Headline - preserve original multi-line style */}
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
            className="text-lg md:text-3xl mb-12 text-gray-200"
            variants={item}
          >
            Inspiring Ethical Leadership, Embracing Change, and Shaping the
            Future through Child-Centered Education and Skills Development.
          </motion.p>

          {/* CTA Buttons – use MotionLink so framer-motion animates the Link element */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <MotionLink
              to="/academics"
              variants={item}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 hover:shadow-orange-500/50 inline-block"
            >
              Explore Academics
            </MotionLink>

            <MotionLink
              to="/contact"
              variants={item}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              className="backdrop-blur-sm bg-white/10 border border-white/50 hover:bg-white hover:text-black text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 inline-block"
            >
              Contact Us
            </MotionLink>
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
        <motion.button
          onClick={scrollToNext}
          aria-label="Scroll down"
          className="cursor-pointer text-white flex items-center justify-center w-12 h-12 border-2 border-white/70 rounded-full hover:border-orange-500 hover:text-orange-500 transition"
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
        >
          <ChevronDown size={28} />
        </motion.button>
      </motion.div>
    </section>
  );
}
