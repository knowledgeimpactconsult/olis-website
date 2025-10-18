// src/utils/openImageFullscreen.jsx
import React, { useEffect } from "react";
import ReactDOM from "react-dom";

export default function openImageFullscreen(src) {
  const modalRoot = document.createElement("div");
  document.body.appendChild(modalRoot);

  const close = () => {
    ReactDOM.unmountComponentAtNode(modalRoot);
    document.body.removeChild(modalRoot);
  };

  const Modal = () => {
    // ✅ Close on Esc key
    useEffect(() => {
      const handleEsc = (e) => {
        if (e.key === "Escape") close();
      };
      document.addEventListener("keydown", handleEsc);
      return () => document.removeEventListener("keydown", handleEsc);
    }, []);

    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
        onClick={close}
      >
        <img
          src={src}
          alt="Fullscreen"
          className="max-w-[95vw] max-h-[90vh] object-contain rounded-lg shadow-lg"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    );
  };

  ReactDOM.render(<Modal />, modalRoot);
}
