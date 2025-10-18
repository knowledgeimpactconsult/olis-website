// src/pages/Events.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Clock } from "lucide-react";
import AnnouncementsCarousel from "@/components/AnnouncementsCarousel";

// Utility: check if event date is in the past
const isPastEvent = (dateString) => {
  const today = new Date();
  const eventDate = new Date(dateString);
  return eventDate < today.setHours(0, 0, 0, 0);
};

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/events.json")
      .then((res) => res.json())
      .then((data) => {
        // Sort events by date ascending
        const sorted = data.sort((a, b) => new Date(a.date) - new Date(b.date));
        setEvents(sorted);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading events:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading events...
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          No events available
        </h2>
        <p className="text-gray-500">
          Please check back later for upcoming activities.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero Banner */}
      <div className="relative w-full h-60 md:h-96 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 flex items-center justify-center text-center overflow-hidden">
        {/* Decorative circles for dynamic effect */}
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-black/10 rounded-full animate-pulse"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Upcoming Events
          </h1>
          <p className="mt-3 text-white text-xl opacity-90">
            Stay updated with our school’s latest programs and activities
          </p>
        </div>{" "}
      </div>
      {/* AnnouncementsCarousel*/}
      <AnnouncementsCarousel />

      {/* Events Grid */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => {
            const past = isPastEvent(event.date);

            return (
              <Link
                to={`/events/${event.id}`}
                key={event.id}
                id={`event-${event.id}`} // ✅ unique id wrapper
                className={`group block rounded-2xl shadow hover:shadow-lg transition overflow-hidden ${
                  past ? "bg-gray-100 opacity-70" : "bg-white"
                }`}
              >
                {/* Image */}
                {event.images && event.images.length > 0 && (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={event.images[0]}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                )}

                {/* Card Body */}
                <div className="p-5">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    {event.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {event.description}
                  </p>

                  {/* Meta Info */}
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-orange-600" />
                      <span>{event.date}</span>
                    </div>
                    {event.time && (
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-orange-600" />
                        <span>{event.time}</span>
                      </div>
                    )}
                    {event.venue && (
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-orange-600" />
                        <span>{event.venue}</span>
                      </div>
                    )}
                  </div>

                  {/* Past event badge */}
                  {past && (
                    <span className="inline-block mt-3 px-3 py-1 text-xs font-semibold bg-gray-300 text-gray-700 rounded-full">
                      Past Event
                    </span>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}
