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
      title: "KINETIC TEXT APP",
      description: "A dynamic 3D text visualization tool that allows users to create animated, audio-reactive text effects. Built with Next.js, Three.js, and GLSL shaders, this project offers real-time customization of text, shaders, and animations with an interactive UI.",
      date: "JANUARY 2025",
      techStack: "Next.js Three.js GLSL TailwindCSS",
      imageUrl: "/kinetic1.png",
      backgroundStyle: "transparent", // Correctly typed
      slug: "kinetic-text-app",
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
      title: "FLIGHT RADAR - AIR TRAFFIC SIMULATOR",
      description: "This project is an interactive air traffic simulator that generates fictitious flights over Europe and displays them on a dynamic map. It uses random coordinates to simulate aircraft movement and allows detailed information about each plane to be viewed.",
      date: "DECEMBER 2024",
      techStack: "React.js Leaflet.js Framer Motion",
      imageUrl: "/flight3.png",
      backgroundStyle: "white", // Correctly typed
      slug: "air-traffic-simulator",
      stars: [
        {
          path: "M20,5 c0,20,-10,30,-20,30 c10,0,20,10,20,30 c0,-20,10,-30,20,-30 c-10,0,-20,-10,-20,-30 z",
          position: { left: "10px", top: "-10px" },
          scale: 1,
          strokeWidth: 0.2,
          color: "black",
        },
      ],
    },
    {
      title: "HECATRAIL - TRAIL SAFETY APP",
      description: "Hecatrail is a mobile app developed in 3 days during the Code for All bootcamp, aiming to improve safety in rural and mountainous areas with real-time alerts for trail visitors.",
      date: "Final Project - Code for All Bootcamp",
      techStack: "React TypeScript TailwindCSS Leaflet",
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
    {
      title: "FOODBALL",
      description: "Game developed during 1 week of Code For All bootcamp. Using Java, Simple GFX",
      date: "OCTOBER 2024",
      techStack: "JAVA WEB DEVELOPMENT",
      imageUrl: "/foodball_project.png",
      backgroundStyle: "white", // Correctly typed
      slug: "foodball",
      stars: [
        {
          path: "M20,5 c0,20,-10,30,-20,30 c10,0,20,10,20,30 c0,-20,10,-30,20,-30 c-10,0,-20,-10,-20,-30 z",
          position: { left: "10px", top: "-10px" },
          scale: 1,
          strokeWidth: 0.2,
          color: "light-green",
        },
      ],
    },

  ];

  return (
    <section id="projects" className="grid grid-cols-1 mt-24 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
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