import React, { useEffect, useRef, useState } from "react";
import { Megaphone, Calendar } from "lucide-react";

const NoticesTicker = () => {
  const tickerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [eventsRes, announcementsRes] = await Promise.all([
          fetch("/data/events.json"),
          fetch("/data/announcements.json"),
        ]);

        const events = await eventsRes.json();
        const announcements = await announcementsRes.json();

        // Normalize announcements so they always have title + description
        const formattedEvents = events.map((e) => ({ ...e, type: "event" }));
        const formattedAnnouncements = announcements.map((a) => ({
          id: a.id,
          title: a.title || "Announcement",
          description: a.description || a.message,
          type: "announcement",
        }));

        // Duplicate list for seamless loop
        const combined = [...formattedEvents, ...formattedAnnouncements];
        setNotices([...combined, ...combined]);
      } catch (err) {
        console.error("Error loading notices:", err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const ticker = tickerRef.current;
    let animation;

    if (ticker && !isPaused) {
      const scroll = () => {
        ticker.scrollLeft += 1;
        if (ticker.scrollLeft >= ticker.scrollWidth / 2) {
          ticker.scrollLeft = 0; // Reset for infinite loop
        }
        animation = requestAnimationFrame(scroll);
      };
      animation = requestAnimationFrame(scroll);
    }

    return () => cancelAnimationFrame(animation);
  }, [isPaused, notices]);

  if (notices.length === 0) return null;

  return (
    <div
      className="relative w-full bg-orange-600 text-white py-3 overflow-hidden shadow-lg cursor-pointer"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        ref={tickerRef}
        className="flex whitespace-nowrap overflow-x-hidden scroll-smooth"
      >
        {notices.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-6 border-r border-white/30 min-w-max"
          >
            {item.type === "event" ? (
              <Calendar size={18} />
            ) : (
              <Megaphone size={18} />
            )}
            <span className="font-semibold">{item.title}:</span>
            <span>{item.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticesTicker;
