// // src/components/Loader.jsx
// export default function Loader() {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-white">
//       <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
//     </div>
//   );
// }

// src/components/Loader.jsx
import { motion } from "framer-motion";
import logo from "../assets/logo.png"; // adjust path if needed

export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <motion.img
        src={logo}
        alt="Loading..."
        className="w-24 h-24"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "linear",
        }}
      />
    </div>
  );
}
