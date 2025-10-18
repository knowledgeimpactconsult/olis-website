// src/components/Contact.jsx
import React from "react";
import { FaTiktok, FaFacebook, FaInstagram } from "react-icons/fa";
import HeroBanner from "@/components/common/HeroBanner";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero Banner */}
      <HeroBanner
        title="Contact Us"
        subtitle="We’d love to hear from you – reach out anytime!"
      />

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto p-6 md:p-12">
        {/* Left: Contact Info */}
        <div className="shadow-xl border-l-4 border-orange-600 p-8 space-y-6 rounded-lg">
          <h2 className="text-2xl font-bold text-orange-600">Get in Touch</h2>
          <div className="flex items-start gap-3">
            <Mail className="text-orange-600 w-6 h-6" />
            <p>olisghana@gmail.com</p>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="text-orange-600 w-6 h-6" />
            <p>+233 (0)553 476 681</p>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="text-orange-600 w-6 h-6" />
            <p>Osagyefo Leadership International School, Accra, Ghana</p>
          </div>

          {/* Social Media */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://web.facebook.com/OsagyefoLeadershipInternationalSchool/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-orange-600 transition transform hover:scale-125 hover:text-blue-400 animate-pulse"
            >
              <FaFacebook />
            </a>
            <a
              href="https://tiktok.com/@osagyefoschool"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-orange-600 transition transform hover:scale-125 hover:text-pink-400 animate-pulse"
            >
              <FaTiktok />
            </a>
            <a
              href="https://instagram.com/@osagyefoschool"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-orange-600 transition transform hover:scale-125 hover:text-sky-400 animate-pulse"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="shadow-xl border-l-4 border-black p-4 rounded-lg">
          <h2 className="text-2xl font-bold text-black">Send Us a Message</h2>
          <form className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-600"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-600"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
            <textarea
              placeholder="Your Message"
              rows={3}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-600"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-orange-600 hover:bg-black text-white font-semibold w-full py-2 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Google Map Embed */}
      <div className="w-full h-80 mt-12">
        <iframe
          title="OLIS Location"
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=YOUR_EMBED_LINK_HERE"
        ></iframe>
      </div>
    </div>
  );
}
