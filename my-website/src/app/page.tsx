'use client';

import React from "react";
import HeroSection from "../components/HeroSection";
import MoreProjects from "../components/MoreProjects";
import ProjectsSection from "../components/project-section/ProjectSection";
import ContactSection from "../components/ContactSection";
import "@/app/globals.css"; 
import GraphAbout from "../components/GraphAbout";
import ReelSection from "../components/ReelSection";
import ScrollButton from "../components/ScrollButton"; // Import the ScrollButton component

const HomePage = () => {
  return (
    <>
      <HeroSection id="hero" />
      <GraphAbout id="about" />
      <MoreProjects id="more-projects" />
      <ReelSection id="reel" />
      <ProjectsSection id="projects" />
      <ContactSection id="contact" />
      <ScrollButton
        sections={["hero", "about", "more-projects", "reel", "projects", "contact"]}
      />
    </>
  );
};

export default HomePage;