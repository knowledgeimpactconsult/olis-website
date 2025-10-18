import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const previews = [
  { title: "Cadet", img: "/images/cadet.jpg" },
  { title: "Sports", img: "/images/sports.jpg" },
  { title: "Cultural Dance", img: "/images/cultural-dance.jpg" },
];

export default function StudentLifePreview() {
  const [selectedImage, setSelectedImage] = useState(null);

  // 🔑 Reusable scroll helper
  const handleScrollTo = (id) => {
    const section = document.querySelector(`#${id}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="studentlifepreview" className="relative bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6 relative inline-block"
        >
          Experience Student Life
          {/* Orange underline */}
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-orange-600 rounded-full origin-left"
          />
        </motion.h2>

        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          At OLIS, education goes beyond classrooms — from cadet training and
          cultural dance to sports and creative arts, our students grow as
          leaders and global citizens.
        </p>

        {/* Preview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {previews.map((item, idx) => (
            <div
              key={idx}
              className="relative group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer"
              onClick={() => setSelectedImage(item.img)}
            >
              {/* Full image cover */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
              />
              {/* Overlay title */}
              <div className="absolute bottom-0 inset-x-0 bg-black bg-opacity-50 text-white py-2 text-lg font-semibold">
                {item.title}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          to="/student-life"
          className="inline-block px-8 py-3 bg-orange-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-orange-700 transition"
        >
          Explore More
        </Link>
      </div>

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Preview Enlarged"
            className="max-h-[90%] max-w-[90%] rounded-lg shadow-2xl animate-zoomIn"
          />
        </div>
      )}

      {/* Scroll Down Button */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="cursor-pointer text-gray-700 hover:text-orange-500"
          onClick={() => handleScrollTo("clubspreview")} // ✅ functional scroll
        >
          <ChevronDown size={36} />
        </motion.div>
      </motion.div>
    </section>
  );
}
