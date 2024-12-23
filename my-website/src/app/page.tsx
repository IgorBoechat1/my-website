'use client';

import React from "react";
import HeroSection from "../components/HeroSection";
import GraphicsSection from "../components/GraphicSection";
import AboutSection from "../components/AboutSection";
import MoreProjects from "../components/MoreProjects";
import ProjectsSection from "../components/project-section/ProjectSection";
import ContactSection from "../components/ContactSection";
import "./globals.css";
import App from "next/app";
import AppRoutes from "@/app/Routes";

const HomePage = () => {
  return (
    <>
      <AppRoutes />
      <HeroSection />
      <GraphicsSection />
      <AboutSection />
      <MoreProjects />
      <ProjectsSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
