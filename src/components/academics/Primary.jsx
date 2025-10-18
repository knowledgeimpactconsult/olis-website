import React from "react";
import ImageGallery from "../common/ImageGallery";

const primaryImages = [
  {
    src: "/images/primary1.jpg",
    alt: "Class Participation",
    caption: "Class Participation",
  },
  {
    src: "/images/primary2.jpg",
    alt: "Science Projects",
    caption: "Science Projects",
  },
  { src: "/images/primary3.jpg", alt: "Group Work", caption: "Group Work" },
  {
    src: "/images/primary4.jpg",
    alt: "Creative Arts",
    caption: "Creative Arts",
  },
  { src: "/images/primary5.jpg", alt: "Library Time", caption: "Library Time" },
  {
    src: "/images/primary6.jpg",
    alt: "Outdoor Games",
    caption: "Outdoor Games",
  },
];

export default function Primary() {
  return (
    <ImageGallery
      images={primaryImages}
      title="Primary"
      seeMoreLink="/gallery/primary"
    />
  );
}
