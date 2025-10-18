import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Megaphone } from "lucide-react";

const Notices = () => {
  const [filter, setFilter] = useState("all");
  const [combinedData, setCombinedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [eventsRes, announcementsRes] = await Promise.all([
          fetch("/data/events.json"),
          fetch("/data/announcements.json"),
        ]);

        const events = await eventsRes.json();
        const announcements = await announcementsRes.json();

        // normalize structures
        const formattedEvents = events.map((e) => ({ ...e, type: "event" }));
        const formattedAnnouncements = announcements.map((a) => ({
          id: a.id,
          title: a.title || "Announcement",
          description: a.description || a.message,
          type: "announcement",
        }));

        setCombinedData([...formattedEvents, ...formattedAnnouncements]);
      } catch (err) {
        console.error("Error loading data:", err);
      }
    };

    fetchData();
  }, []);

  const filteredData =
    filter === "all"
      ? combinedData
      : combinedData.filter((item) => item.type === filter);

  return (
    <section className="py-12 px-6 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-6">
        Events & Announcements
      </h2>

      {/* Filter buttons */}
      <div className="flex justify-center gap-3 mb-6">
        {["all", "event", "announcement"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded ${
              filter === cat ? "bg-orange-600 text-white" : "bg-gray-200"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredData.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="bg-white rounded-xl shadow p-6"
            >
              <div className="flex items-center gap-2 mb-2 text-orange-600">
                {item.type === "event" ? (
                  <Calendar size={18} />
                ) : (
                  <Megaphone size={18} />
                )}
                <span className="font-semibold">
                  {item.type === "event" ? "Event" : "Announcement"}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Notices;
