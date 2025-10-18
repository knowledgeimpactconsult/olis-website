import React from "react";
import ImageGallery from "../common/ImageGallery";

const earlyYearsImages = [
  { src: "/images/early1.jpg", alt: "Creative Play", caption: "Creative Play" },
  { src: "/images/early2.jpg", alt: "Reading Time", caption: "Reading Time" },
  { src: "/images/early3.jpg", alt: "Outdoor Fun", caption: "Outdoor Fun" },
  { src: "/images/early4.jpg", alt: "Art & Crafts", caption: "Art & Crafts" },
  {
    src: "/images/early5.jpg",
    alt: "Group Learning",
    caption: "Group Learning",
  },
  { src: "/images/early6.jpg", alt: "Music Session", caption: "Music Session" },
];

export default function EarlyYears() {
  return (
    <ImageGallery
      images={earlyYearsImages}
      title="Early Years"
      seeMoreLink="/gallery/early-years"
    />
  );
}
