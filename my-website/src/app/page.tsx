import React from "react";
import AboutSection from "./AboutSection";
import ProjectsSection from "./project-section/ProjectSection";
import ContactSection from "./ContactSection";
import { Navbar } from "./Navbar";
import "./globals.css";
import HeroSection from "./HeroSection";
import GraphicsSection from "./GraphicSection";
import MenuPage from "./MenuPage";
import MoreProjects from "./MoreProjects";
import ThreeDViewer from "./ThreeDViewer";

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
