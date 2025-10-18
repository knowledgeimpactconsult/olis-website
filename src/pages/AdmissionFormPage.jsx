// src/pages/AdmissionFormPage.jsx
import React from "react";
import AdmissionForm from "../components/AdmissionForm";

export default function AdmissionFormPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      {/* <section
        className="relative bg-cover bg-center py-20 text-white text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Online Admission Form
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Kindly fill in all required details to complete your child’s
            admission process.
          </p>
        </div>
      </section> */}

      {/* Admission Form Section */}
      <section className="py-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <AdmissionForm />
        </div>
      </section>
    </div>
  );
}
