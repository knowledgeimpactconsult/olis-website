import React from "react";
import Hero from "../components/Hero";
import CoreValues from "../components/CoreValues";
import Academics from "../components/academics/AcademicsContainer";
import StudentLifePreview from "../components/StudentLifePreview";
import ClubsPreview from "../components/clubsPreview";
import Achievements from "../components/achievements";
import Navbar from "../components/Navbar";
import AnnouncementsBanner from "../components/AnnouncementsBanner";

export default function Home() {
  return (
    <>
      {/* Navbar should be outside main */}
      <Navbar /> 

      <main id="top" className="w-full min-h-screen">
        <Hero />
        <CoreValues />
        <Achievements />
        <Academics />
        <StudentLifePreview />
        <ClubsPreview />
      </main>
    </>
  );
}
