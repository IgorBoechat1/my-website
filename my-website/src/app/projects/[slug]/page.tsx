'use client'; // This ensures that the component is treated as a client-side component

import React, { useState, useEffect } from "react";
import "@/app/globals.css";
import ProjectPage from "@/components/project-page/ProjectPage";

const ProjectsPage = () => {
  const [isEntering, setIsEntering] = useState(false);

  useEffect(() => {
    // Trigger the slide-in animation once the page has loaded
    setIsEntering(true);
  }, []);

  return (
    <div className={isEntering ? "animate-slide-right" : ""}>
      <ProjectPage />
    </div>
  );
};

export default ProjectsPage;