import React from "react";
import ProjectCard from "@/components/project-section/ProjectCard";
import Star from "@/components/Star";

// Define the type for the individual star objects
type StarType = {
  path: string;
  position: {
    left: string;
    top: string;
  };
  scale: number;
  strokeWidth: number;
  color: string;
};

// Define the type for the project object
type Project = {
  title: string;
  description: string;
  date: string;
  techStack: string;
  imageUrl: string;
  backgroundStyle: "transparent" | "white"; // Explicitly define the type for backgroundStyle
  slug: string;
  stars: StarType[]; // Use the StarType array for the stars field
};

const DevSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: "FOODBALL",
      description: "Game developed during 1 week of Code For All bootcamp. Using Java, Simple GFX",
      date: "OCTOBER 2024",
      techStack: "JAVA WEB DEVELOPMENT",
      imageUrl: "/foodball_project.png",
      backgroundStyle: "transparent", // Correctly typed
      slug: "foodball",
      stars: [
        {
          path: "M20,5 c0,20,-10,30,-20,30 c10,0,20,10,20,30 c0,-20,10,-30,20,-30 c-10,0,-20,-10,-20,-30 z",
          position: { left: "10px", top: "-10px" },
          scale: 1,
          strokeWidth: 0.2,
          color: "white",
        },
      ],
    },
    {
      title: "Hecatrail - Safety and Interaction in Mountain Trails",
      description: "Hecatrail is a mobile app developed in 3 days during the Code for All bootcamp, aiming to improve safety in rural and mountainous areas with real-time alerts for trail visitors.",
      date: "Final Project - Code for All Bootcamp",
      techStack: "React, TypeScript, Tailwind CSS, Leaflet",
      imageUrl: "/hecatrail.png",
      backgroundStyle: "transparent", // Correctly typed
      slug: "hecatrail",
      stars: [
        {
          path: "M20,5 c0,20,-10,30,-20,30 c10,0,20,10,20,30 c0,-20,10,-30,20,-30 c-10,0,-20,-10,-20,-30 z",
          position: { left: "10px", top: "-10px" },
          scale: 1,
          strokeWidth: 1,
          color: "white",
        },
      ],
    },
  ];

  return (
    <section id="projects" className="w-screen mt-24 mb-22">
      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          description={project.description}
          date={project.date}
          techStack={project.techStack}
          imageUrl={project.imageUrl}
          backgroundStyle={project.backgroundStyle} // Correctly typed
          slug={project.slug}
          star={<Star stars={project.stars || []} svgWidth={30} svgHeight={30} />}
        />
      ))}
    </section>
  );
};

export default DevSection;
