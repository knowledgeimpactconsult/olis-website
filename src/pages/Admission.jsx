// src/pages/Admission.jsx
import React, { useState, useEffect } from "react";
import { FileDown, FileText, CheckCircle, ArrowUp } from "lucide-react";
import PaystackPop from "@paystack/inline-js";
import { NavLink, Link } from "react-router-dom";

export default function Admission() {
  const [showScroll, setShowScroll] = useState(false);

  // Scroll button visibility
  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Handle Paystack Payment
  const handlePayment = () => {
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: "pk_test_your_public_key_here", // ⚠️ replace with your live/public key
      amount: 100 * 100, // GHS 100
      currency: "GHS",
      email: "parentemail@example.com",
      firstname: "Parent",
      lastname: "Name",
      onSuccess: (transaction) => {
        alert(`✅ Payment successful! Ref: ${transaction.reference}`);
        window.location.href = "/admission-form"; // Redirect to online form
      },
      onCancel: () => {
        alert("❌ Payment was cancelled. Please try again.");
      },
    });
  };

  return (
    <div className="pt-10 bg-gray-50 mt-5 min-h-screen">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-24 text-white text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Admissions at OLIS
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Start your child’s journey to{" "}
            <span className="font-semibold text-yellow-300">excellence</span>.
            Download our admission form or apply online today.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {/* Download PDF Form */}
            <a
              href="/forms/Olis-Admission-Form.pdf"
              download
              className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition inline-flex items-center"
              aria-label="Download admission form"
            >
              <FileDown className="mr-2 w-5 h-5" /> Download Form
            </a>

            {/* Pay & Apply Online */}
            <button
              onClick={handlePayment}
              className="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow hover:bg-yellow-300 transition inline-flex items-center"
              aria-label="Apply online"
            >
              <FileText className="mr-2 w-5 h-5" /> Apply Online (GHS 100)
            </button>
          </div>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-orange-600 mb-8 text-center">
            Admission Requirements
          </h2>
          <div className="bg-gray-50 rounded-2xl shadow-lg p-8">
            <ul className="grid gap-4 sm:grid-cols-2">
              {[
                "Completed admission form",
                "2 recent passport photographs",
                "Copy of birth certificate",
                "Previous academic records (Primary & JHS applicants only)",
                "2 copies of child’s health insurance",
                "Medical/health condition report (if any)",
              ].map((req, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-orange-500 w-5 h-5 mt-1" />
                  <span className="text-gray-700">{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-orange-600 mb-8 text-center">
            Application Process
          </h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-700 max-w-3xl mx-auto">
            <li>Download the admission form OR pay to apply online.</li>
            <li>Fill in all required student & parent/guardian details.</li>
            <li>Attach all supporting documents.</li>
            <li>
              Submit the completed form at the OLIS office (or online if paid).
            </li>
          </ol>
        </div>
      </section>

      {/* Submission Info */}
      <section className="bg-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-orange-600 mb-4">
            Submit Your Application
          </h2>
          <p className="text-gray-700 mb-6">
            Completed forms should be submitted to the school’s administration
            office during working hours. Online applicants will be redirected to
            complete the form after payment.
          </p>

          <NavLink
            to="/contact"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow"
          >
            Contact Admissions Office
          </NavLink>
        </div>
      </section>

      {/* Extra direct access for testing (can remove later) */}
      <section className="bg-gray-50 py-10 text-center">
        <Link
          to="/admission-form"
          className="underline text-orange-600 hover:text-orange-800"
        >
          👉 Go directly to Online Admission Form (for testing)
        </Link>
      </section>
    </div>
  );
}
