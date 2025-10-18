// src/pages/EventDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, MapPin, Clock, Download } from "lucide-react";

export default function EventDetail() {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/events.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((e) => e.id === eventId);
        setEvent(found);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading events:", err);
        setLoading(false);
      });
  }, [eventId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading event details...
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-700">
        <p>Event not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <header className="relative h-64 md:h-80 bg-gray-800 flex items-center justify-center text-white">
        <h1 className="text-3xl md:text-5xl font-bold">{event.title}</h1>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Event Info */}
        <section className="bg-white rounded-2xl shadow p-6 mb-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div className="flex items-center gap-3 mb-3 md:mb-0">
              <Calendar className="w-5 h-5 text-orange-600" />
              <span className="text-gray-700 font-medium">{event.date}</span>
            </div>
            {event.time && (
              <div className="flex items-center gap-3 mb-3 md:mb-0">
                <Clock className="w-5 h-5 text-orange-600" />
                <span className="text-gray-700 font-medium">{event.time}</span>
              </div>
            )}
            {event.venue && (
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-orange-600" />
                <span className="text-gray-700 font-medium">{event.venue}</span>
              </div>
            )}
          </div>
          <p className="text-gray-700 leading-relaxed">{event.description}</p>
        </section>

        {/* Program */}
        {event.program && event.program.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4">Program Outline</h2>
            <ul className="space-y-2">
              {event.program.map((item, idx) => (
                <li
                  key={idx}
                  className="bg-white shadow rounded-lg px-4 py-2 text-gray-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Resources */}
        {event.resources && event.resources.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4">Resources</h2>
            <div className="flex flex-col gap-3">
              {event.resources.map((res, idx) => (
                <a
                  key={idx}
                  href={res.link}
                  download
                  className="flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-lg shadow hover:bg-orange-700 transition"
                >
                  <Download className="w-5 h-5" />
                  {res.label}
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Gallery */}
        {event.images && event.images.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4">Highlights</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {event.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${event.title} highlight ${idx + 1}`}
                  className="rounded-lg shadow hover:scale-105 transition-transform"
                />
              ))}
            </div>
          </section>
        )}

        {/* Call-to-Action */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-12">
          <Link
            to="/events"
            className="text-orange-600 font-semibold hover:underline"
          >
            ← Back to Events
          </Link>
          <Link
            to="/contact"
            className="bg-orange-600 text-white px-6 py-3 rounded-full shadow hover:bg-orange-700 transition"
          >
            Contact Us
          </Link>
        </div>
      </main>
    </div>
  );
}
