import React from "react";
import { Link } from "react-router-dom";

export default function StudentLife() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="relative w-full h-[65vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/studentlife-hero.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <section className="relative z-10 text-center text-white max-w-3xl px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
            Student Life at OLIS
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Beyond the Classroom
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-200">
            At OLIS, education goes beyond academics. Our students take part in
            houses, clubs, sports, excursions, and cultural activities that
            develop leadership, creativity, teamwork, and global citizenship.
          </p>
        </section>
      </div>

      {/* Sections Grid */}
      <section className="py-12 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Houses */}
        <Link
          to="/houses"
          className="group relative overflow-hidden rounded-2xl shadow-lg"
        >
          <img
            src="/images/houses/houses.jpg"
            alt="Houses"
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h3 className="text-white text-2xl font-bold">Houses</h3>
          </div>
        </Link>

        {/* Clubs */}
        <Link
          to="/clubs"
          className="group relative overflow-hidden rounded-2xl shadow-lg"
        >
          <img
            src="/images/clubs/clubs.jpg"
            alt="Clubs"
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h3 className="text-white text-2xl font-bold">Clubs</h3>
          </div>
        </Link>

        {/* Excursions */}
        <Link
          to="/excursions"
          className="group relative overflow-hidden rounded-2xl shadow-lg"
        >
          <img
            src="/images/excursions/excursions.jpg"
            alt="Excursions"
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h3 className="text-white text-2xl font-bold">Excursions</h3>
          </div>
        </Link>

        {/* Sports & Culture */}
        <Link
          to="/sports-culture"
          className="group relative overflow-hidden rounded-2xl shadow-lg"
        >
          <img
            src="/images/clubs/culture.jpg"
            alt="Sports & Culture"
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h3 className="text-white text-2xl font-bold">Sports & Culture</h3>
          </div>
        </Link>
      </section>
    </div>
  );
}
