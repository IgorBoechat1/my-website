import React from "react";
import ProjectCard from "./ProjectCard";
import Star, { StarType } from "../Star";

interface Project {
  title: string;
  description: string;
  date: string;
  techStack: string;
  imageUrl: string;
  backgroundStyle: "white" | "transparent";
  stars?: StarType[]; // Use StarType array instead of React elements
  slug: string;
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: "FUNDAÇÃO GRAMAXO",
      description:
        "Institutional videos showcasing the architectural work of Álvaro Siza at Fundação Gramaxo, emphasizing its relationship with nature and the surrounding environment.",
      date: "JANUARY 2024 - DECEMBER 2024",
      stars: [
        {
          path: "M20,5 c0,20,-10,30,-20,30 c10,0,20,10,20,30 c0,-20,10,-30,20,-30 c-10,0,-20,-10,-20,-30 z",
          position: { left: "10px", top: "-10px" },
          scale: 1,
          strokeWidth: 0.2,
          color: "black",
        },
      ],
      techStack: "VIDEOGRAPHY PRODUCTION ARCHITECTURE",
      imageUrl: "/FG_project.jpg",
      backgroundStyle: "white",
      slug: "fundacao-gramaxo",
      
    },
    {
      title: "FOODBALL",
      description:
        "Game developed during 1 week of Code For All bootcamp. Using Java, Simple GFX.",
      date: "FEBRUARY 2024",
      stars: [
        {
          path: "M20,5 c0,20,-10,30,-20,30 c10,0,20,10,20,30 c0,-20,10,-30,20,-30 c-10,0,-20,-10,-20,-30 z",
          position: { left: "10px", top: "-20px" },
          scale: 1,
          strokeWidth: 0.2,
          color: "lightgreen",
        },
      ],
      techStack: "JAVA WEB DEVELOPMENT",
      imageUrl: "/foodball_project.png",
      backgroundStyle: "transparent",
      slug: "foodball",
    },
    {
      title: "HECATRAIL",
      description:
        "A web application developed in 3 days to create alerts and reports on the trail side. Created during the Code for All bootcamp 'MakeITReal' event, where our team was the winner.",
      date: "DECEMBER 2024",
      stars: [
        {
          path: "M20,5 c0,20,-10,30,-20,30 c10,0,20,10,20,30 c0,-20,10,-30,20,-30 c-10,0,-20,-10,-20,-30 z",
          position: { left: "10px", top: "-10px" },
          scale: 1,
          strokeWidth: 1,
          color: "white",
        },
      ],
      techStack: "TYPESCRIPT REACT NEXT.JS",
      imageUrl: "/hecatrail.png",
      backgroundStyle: "white",
      slug: "hecatrail",
    },
    {
      title: "MURATTO",
      description:
        "A captivating release video for Muratto's 2024 wall design collection. Muratto, a renowned Portuguese brand in natural surface design, is celebrated for its dynamic and innovative cork wall coverings. This project encompassed scripting, filming, and editing to highlight their latest offerings.",
      date: "JANUARY 2024",
      stars: [
        {
          path: "M20,5 c0,20,-10,30,-20,30 c10,0,20,10,20,30 c0,-20,10,-30,20,-30 c-10,0,-20,-10,-20,-30 z",
          position: { left: "10px", top: "-20px" },
          scale: 1,
          strokeWidth: 1,
          color: "white",
        },
      ],
      techStack: "SCRIPTING FILMING EDITING",
      imageUrl: "/muratto.png",
      backgroundStyle: "transparent",
      slug: "muratto",
    },

    {
      title: "Fashion Film - Hotel Tipografia do Conto",
      description: "A graduation project showcasing garments produced by ESAD Fashion students in Porto, Portugal, integrating creativity, technique, and visual aesthetics.",
      date: "May 2023",
      stars: [
        {
          path: "M20,5 c0,20,-10,30,-20,30 c10,0,20,10,20,30 c0,-20,10,-30,20,-30 c-10,0,-20,-10,-20,-30 z",
          position: { left: "10px", top: "-10px" },
          scale: 1,
          strokeWidth: 0.2,
          color: "black",
        },
      ],
      techStack: "Video Production Cinematography",
      imageUrl: "/fashionfilm.png",
      backgroundStyle: "white",
      slug: "fashion-film-hotel-tipografia-do-conto",
    },

    {
      title: "Title Scene - Carrie",
      description: "Academic project recreating the unsettling atmosphere of the iconic blood scene from 'Carrie' using viscous liquids and mannequin to convey discomfort.",
      date: "Academic Period",
      stars: [
        {
          path: "M20,5 c0,20,-10,30,-20,30 c10,0,20,10,20,30 c0,-20,10,-30,20,-30 c-10,0,-20,-10,-20,-30 z",
          position: { left: "10px", top: "-10px" },
          scale: 1,
          strokeWidth: 0.2,
          color: "white",
        },
      ],
      techStack: "Creative Direction Cinematography Editing",
      imageUrl: "/carrie.png",
      backgroundStyle: "transparent",
      slug: "title-scene-carrie",
    }
  ];

  return (
    <section
      id="projects"
      className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-12 lg:px-16 py-10 "
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          date={project.date}
          techStack={project.techStack}
          imageUrl={project.imageUrl}
          backgroundStyle={project.backgroundStyle}
          slug={project.slug}
          star={<Star stars={project.stars || []} svgWidth={30} svgHeight={30} />}
        />
      ))}
    </section>
  );
};

export default ProjectsSection;
