// src/context/ModalContext.jsx
import React, { createContext, useContext, useState, useCallback } from "react";
import ImageModal from "../components/common/ImageModal";

// 1️⃣ Create context
const ModalContext = createContext();

// 2️⃣ Provider with modal state
export function ModalProvider({ children }) {
  const [modalContent, setModalContent] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // Open modal with any React content
  const openModal = useCallback((content) => {
    setModalContent(content);
    setIsOpen(true);
  }, []);

  // Close modal
  const closeModal = useCallback(() => {
    setIsOpen(false);
    setModalContent(null);
  }, []);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}

      {/* 3️⃣ Mount ImageModal once globally */}
      <ImageModal isOpen={isOpen} onClose={closeModal}>
        {modalContent}
      </ImageModal>
    </ModalContext.Provider>
  );
}

// 4️⃣ Custom hook for convenience
export function useModal() {
  return useContext(ModalContext);
}
