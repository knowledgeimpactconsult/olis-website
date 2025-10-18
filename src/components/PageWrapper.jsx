// src/components/PageWrapper.jsx
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function PageWrapper({ children }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}
