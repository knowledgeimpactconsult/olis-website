import React, { useState, useEffect } from "react";

export default function AnnouncementsCarousel() {
  const [announcements, setAnnouncements] = useState([]);
  const [index, setIndex] = useState(0);

  // Fetch announcements.json from /public/data
  useEffect(() => {
    fetch("/data/announcements.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ Announcements loaded:", data);
        setAnnouncements(data);
      })
      .catch((err) => console.error("Error loading announcements:", err));
  }, []);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    if (announcements.length > 0) {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % announcements.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [announcements]);

  // If nothing loaded, show nothing
  if (announcements.length === 0) return null;

  return (
    <div className="w-full bg-orange-50 py-6">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-3xl font-bold text-orange-600 mb-4">
          Latest Announcements
        </h2>

        {/* Active announcement */}
        <div className="bg-white shadow-lg rounded-lg p-6 border border-orange-100 transition duration-500">
          <p className="text-gray-800 text-xl font-bold">
            {announcements[index].message}
          </p>
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center mt-4 gap-2">
          {announcements.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition ${
                index === i ? "bg-orange-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
