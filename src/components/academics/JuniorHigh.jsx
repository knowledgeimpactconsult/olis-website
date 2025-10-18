import React from "react";
import ImageGallery from "../common/ImageGallery";

const juniorHighImages = [
  { src: "/images/academics/ict.jpg", alt: "ICT Lab", caption: "ICT Lab" },
  {
    src: "/images/academics/debate.jpg",
    alt: "Debate Session",
    caption: "Debate Session",
  },
  {
    src: "/images/academics/sports.jpg",
    alt: "Sports Day",
    caption: "Sports Day",
  },
  { src: "/images/academics/m.jpg", alt: "Math Class", caption: "Math Class" },
  {
    src: "/images/academics/science.jpg",
    alt: "Science Experiment",
    caption: "Science Experiment",
  },
  // {
  //   src: "/images/cultural.jpg",
  //   alt: "Cultural Dance",
  //   caption: "Cultural Dance",
  // },
];

export default function JuniorHigh() {
  return (
    <ImageGallery
      images={juniorHighImages}
      title="Junior High"
      seeMoreLink="/gallery/junior-high"
    />
  );
}
