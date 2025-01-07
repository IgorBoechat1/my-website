// app/page.tsx
'use client';

import React from "react";
import HeroSection from "../components/HeroSection";
import MoreProjects from "../components/MoreProjects";
import ProjectsSection from "../components/project-section/ProjectSection";
import ContactSection from "../components/ContactSection";
import "@/app/globals.css"; 
import GraphAbout from "../components/GraphAbout";
const HomePage = () => {
  return (
    <>
      <HeroSection />
      <GraphAbout />
      <MoreProjects />
      <ProjectsSection />
      <ContactSection />
    </>
  );
};

export default HomePage;