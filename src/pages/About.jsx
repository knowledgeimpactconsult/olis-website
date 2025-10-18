// About.jsx
import React from "react";
import {
  Target,
  Globe2,
  Users,
  Laptop,
  ShieldCheck,
  Award,
} from "lucide-react";
import CoreValues from "../components/CoreValues"; // adjust path

function About() {
  return (
    <div className="pt-10 bg-gray-50 mt-5 min-h-screen">
      {/* Hero Banner */}
      <header className="relative h-[50vh] flex flex-col items-center justify-center text-white text-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="/images/olis.jpg" // replace with actual OLIS image
            alt="OLIS students"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 px-6">
          <span className="text-4xl md:text-5xl font-regular mb-4 drop-shadow-lg">
            About
          </span>
          <h1 className="text-7xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            OLIS
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-5xl mx-auto leading-relaxed bg-orange/70 px-4 py-3 rounded-lg shadow-lg">
            At OLIS ( Osagyefo Leadership International School), we believe
            education is the foundation for building future leaders. We are more
            than a school — we are a community that inspires ethical leadership,
            embraces change, and equips learners to shape the future with
            confidence.
          </p>
        </div>
      </header>

      {/* Mission & Vision */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
          <Target className="text-orange-600 w-10 h-10 mb-4" />
          <h2 className="text-2xl font-bold text-orange-600 mb-3">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-loose">
            To provide holistic education that nurtures knowledge, creativity,
            values, and leadership qualities in every child, preparing them to
            excel academically and socially in a global world.
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
          <Globe2 className="text-orange-600 w-10 h-10 mb-4" />
          <h2 className="text-2xl font-bold text-orange-600 mb-3">
            Our Vision
          </h2>
          <p className="text-gray-700 leading-loose">
            To be a center of excellence where learners are empowered to lead
            with integrity, innovation, and impact in their communities and
            beyond.
          </p>
        </div>
      </section>

      {/* Core Values (reusable component) */}
      <CoreValues />

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Why Choose OLIS?
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition text-center">
            <Users className="text-orange-600 w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Qualified Teachers</h3>
            <p className="text-gray-600">
              Passionate educators who bring out the best in every learner.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition text-center">
            <Laptop className="text-orange-600 w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Modern Facilities</h3>
            <p className="text-gray-600">
              ICT-integrated learning with up-to-date tools and resources.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition text-center">
            <ShieldCheck className="text-orange-600 w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Safe Environment</h3>
            <p className="text-gray-600">
              A nurturing space where every learner feels protected and valued.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition text-center">
            <Award className="text-orange-600 w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Academic Excellence</h3>
            <p className="text-gray-600">
              Proven record of high performance and moral discipline.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-orange-600 to-black text-white text-center py-16 px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Be Part of Our Community
        </h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Join OLIS today and give your child the opportunity to grow into a
          confident leader of tomorrow.
        </p>
        <a
          href="/admission"
          className="bg-white text-orange-600 font-semibold px-8 py-4 rounded-lg shadow hover:bg-gray-100 transition inline-block"
        >
          Start Admission
        </a>
      </section>
    </div>
  );
}

export default About;
