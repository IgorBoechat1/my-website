import React from "react";
import AboutSection from "./AboutSection";
import ProjectsSection from "./project-section/ProjectSection";
import ContactSection from "./ContactSection";
import { Navbar } from "./Navbar";
import "./globals.css";
import HeroSection from "./HeroSection";
import GraphicsSection from "./graphics/graphic";

import MoreProjects from "./MoreProjects";



function App() {
  



  return (
    <>
      <Navbar />
      <HeroSection />
      <GraphicsSection />
      <AboutSection />
      <MoreProjects />
      
      <ProjectsSection />

      <ContactSection />
    </>
  );
}

export default App;
