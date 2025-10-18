import React, { useState, useEffect } from "react";

export default function AnnouncementsBanner() {
  const [announcements, setAnnouncements] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("/data/announcements.json")
      .then((res) => res.json())
      .then((data) => setAnnouncements(data))
      .catch((err) => console.error("Error loading announcements:", err));
  }, []);

  useEffect(() => {
    if (announcements.length > 0) {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % announcements.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [announcements]);

  if (announcements.length === 0) return null;

  return (
    <div className="bg-orange-600 text-white py-2 text-center text-sm md:text-base">
      <p className="animate-pulse">{announcements[index].message}</p>
    </div>
  );
}

// import React, { useState, useEffect } from "react";

// export default function AnnouncementsBanner() {
//   const [announcements, setAnnouncements] = useState([]);
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     fetch("/data/announcements.json")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("✅ Announcements loaded:", data);
//         setAnnouncements(data);
//       })
//       .catch((err) => console.error("❌ Error loading announcements:", err));
//   }, []);

//   useEffect(() => {
//     if (announcements.length > 0) {
//       const interval = setInterval(() => {
//         setIndex((prev) => (prev + 1) % announcements.length);
//       }, 4000);
//       return () => clearInterval(interval);
//     }
//   }, [announcements]);

//   // Nothing loaded yet
//   if (announcements.length === 0) {
//     return (
//       <div className="bg-orange-600 text-white py-2 text-center text-sm md:text-base">
//         <p>📢 Loading announcements...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-orange-600 text-white py-2 text-center text-sm md:text-base">
//       <p className="animate-pulse">
//         {announcements[index]?.message || "No announcement available"}
//       </p>
//     </div>
//   );
// }
