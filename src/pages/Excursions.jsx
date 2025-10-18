// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Card, CardContent } from "@/components/ui/card";

// const excursions = [
//   {
//     name: "Kakum National Park",
//     img: "/images/excursions/kakum.jpg",
//     desc: "Famous for its canopy walkway and tropical rainforest.",
//   },
//   {
//     name: "Kwame Nkrumah Mausoleum",
//     img: "/images/excursions/nkrumah.jpg",
//     desc: "Memorial park dedicated to Ghana’s first President.",
//   },
//   {
//     name: "Wli Waterfalls",
//     img: "/images/excursions/wli.jpg",
//     desc: "The highest waterfall in West Africa located in the Volta Region.",
//   },
//   {
//     name: "Mount Afadja",
//     img: "/images/excursions/afadja.jpg",
//     desc: "The highest mountain in Ghana offering adventurous hiking trails.",
//   },
//   {
//     name: "Aburi Botanical Gardens",
//     img: "/images/excursions/aburi.jpg",
//     desc: "Historic gardens with exotic plants, trees, and serene landscapes.",
//   },
//   {
//     name: "Shai Hills",
//     img: "/images/excursions/shai.jpg",
//     desc: "Game reserve home to baboons, antelopes, caves, and unique rock formations.",
//   },
// ];

// export default function Excursions() {
//   const [selected, setSelected] = useState(null);

//   return (
//     <div className="w-full">
//       {/* Hero Banner */}
//       <div className="relative h-[300px] md:h-[400px] w-full">
//         <img
//           src="/images/excursions/hero.jpg"
//           alt="Excursions Hero"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
//           <h1 className="text-white text-3xl md:text-5xl font-bold">
//             Our Excursions
//           </h1>
//           {/* intro  */}
//           <p className="mt-4 text-white text-base md:text-xl max-w-2xl">
//             Our excursions give OLIS students real-world experiences that
//             inspire leadership, curiosity, and a deeper connection with Ghana’s
//             heritage.
//           </p>
//         </div>
//       </div>

//       {/* Excursion Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
//         {excursions.map((item, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ scale: 1.03 }}
//             className="cursor-pointer"
//             onClick={() => setSelected(item)}
//           >
//             <Card className="overflow-hidden shadow-lg rounded-2xl">
//               <img
//                 src={item.img}
//                 alt={item.name}
//                 className="w-full h-56 object-cover"
//               />
//               <CardContent className="p-4">
//                 <h2 className="text-lg font-semibold">{item.name}</h2>
//                 <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
//               </CardContent>
//             </Card>
//           </motion.div>
//         ))}
//       </div>

//       {/* Modal */}
//       {selected && (
//         <div
//           className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
//           onClick={() => setSelected(null)}
//         >
//           <motion.div
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             className="bg-white rounded-xl shadow-xl max-w-3xl w-full p-4 relative"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               className="absolute top-3 right-3 text-gray-700 text-xl"
//               onClick={() => setSelected(null)}
//             >
//               ✕
//             </button>
//             <img
//               src={selected.img}
//               alt={selected.name}
//               className="w-full h-[400px] object-cover rounded-lg"
//             />
//             <div className="mt-4">
//               <h2 className="text-2xl font-bold">{selected.name}</h2>
//               <p className="mt-2 text-gray-600">{selected.desc}</p>
//             </div>
//           </motion.div>
//         </div>
//       )}
//     </div>
//   );
// }

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const excursions = [
  {
    name: "Kakum National Park",
    img: "/images/excursions/kakum.jpg",
    desc: "Famous for its canopy walkway and tropical rainforest.",
  },
  {
    name: "Kwame Nkrumah Mausoleum",
    img: "/images/excursions/nkrumah.jpg",
    desc: "Memorial park dedicated to Ghana’s first President.",
  },
  {
    name: "Wli Waterfalls",
    img: "/images/excursions/wli.jpg",
    desc: "The highest waterfall in West Africa located in the Volta Region.",
  },
  {
    name: "Mount Afadja",
    img: "/images/excursions/afadjato.jpg",
    desc: "The highest mountain in Ghana offering adventurous hiking trails.",
  },
  {
    name: "Aburi Botanical Gardens",
    img: "/images/excursions/aburi.jpg",
    desc: "Historic gardens with exotic plants, trees, and serene landscapes.",
  },
  {
    name: "Shai Hills",
    img: "/images/excursions/shai.jpg",
    desc: "Game reserve home to baboons, antelopes, caves, and unique rock formations.",
  },
];

export default function Excursions() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="w-full pt-10">
      {" "}
      {/* Ensure page starts below a fixed navbar (adjust pt-20 if your navbar has different height) */}
      {/* HERO BANNER */}
      <div className="relative h-[60vh] md:h-[400px] w-full">
        <img
          src="/images/excursions/excursions.jpg"
          alt="Excursions Hero"
          className="w-full h-full object-cover"
        />

        {/* Dark overlay - does NOT block clicks (pointer-events-none) so dropdowns remain usable */}
        <div className="absolute inset-0 bg-black/50 pointer-events-none" />

        {/* Heading + intro - sits above overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
          <h1 className="text-white text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
            Our Excursions
          </h1>
          <p className="mt-4 text-white text-base md:text-xl max-w-2xl">
            Our excursions give OLIS students real-world experiences that
            inspire leadership, curiosity, and a deeper connection with Ghana’s
            heritage.
          </p>
        </div>
      </div>
      {/* EXCURSION CARDS */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {excursions.map((item, index) => (
          <motion.div
            key={item.name}
            whileHover={{ scale: 1.03 }}
            className="cursor-pointer"
            onClick={() => setSelected(item)}
          >
            <Card className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-56 object-cover"
              />

              <CardContent className="p-4">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      {/* MODAL (DETAIL) */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-xl shadow-xl max-w-3xl w-full p-4 relative mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label="Close"
              className="absolute top-3 right-3 text-gray-700 text-xl"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>

            <img
              src={selected.img}
              alt={selected.name}
              className="w-full h-[360px] object-cover rounded-lg"
            />

            <div className="mt-4">
              <h2 className="text-2xl font-bold">{selected.name}</h2>
              <p className="mt-2 text-gray-600">{selected.desc}</p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
