import React, { useState } from "react";
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

interface ProjectsSectionProps {
  id?: string; // Accept only the id prop
}



const ProjectsSection: React.FC<ProjectsSectionProps> = ({ id }) => {
  useState(true);
  const projects: Project[] = [
    {
      title: "KINETIC TEXT APP",
      description: "A dynamic 3D text visualization tool that allows users to create animated, audio-reactive text effects. Built with Next.js, Three.js, and GLSL shaders, this project offers real-time customization of text, shaders, and animations with an interactive UI.",
      date: "JANUARY 2025",
      stars: [
        {
          path: "M20,5 c0,20,-10,30,-20,30 c10,0,20,10,20,30 c0,-20,10,-30,20,-30 c-10,0,-20,-10,-20,-30 z",
          position: { left: "10px", top: "-10px" },
          scale: 1,
          strokeWidth: 0.2,
          color: "black",
        },
      ],
      techStack: "Next.js Three.js GLSL TailwindCSS",
      imageUrl: "/kinetic1.png",
      backgroundStyle: "white",
      slug: "kinetic-text-app",
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
      title: "TYPETRENDS - FASHION FILM",
      description: "A graduation project showcasing garments produced by ESAD Fashion students in Porto, Portugal, integrating creativity, technique, and visual aesthetics.",
      date: "May 2023",
      stars: [
        {
          path: "M20,5 c0,20,-10,30,-20,30 c10,0,20,10,20,30 c0,-20,10,-30,20,-30 c-10,0,-20,-10,-20,-30 z",
          position: { left: "10px", top: "-10px" },
          scale: 1,
          strokeWidth: 0.2,
          color: "white",
        },
      ],
      techStack: "Video Production Cinematography",
      imageUrl: "/fashionfilm.png",
      backgroundStyle: "transparent",
      slug: "fashion-film-hotel-tipografia-do-conto",
    },
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
          color: "white",
        },
      ],
      techStack: "VIDEOGRAPHY PRODUCTION ARCHITECTURE",
      imageUrl: "/FG_project.jpg",
      backgroundStyle: "transparent",
      slug: "fundacao-gramaxo",
    },
    {
      title: "CARRIE - TITLE SCENE",
      description: "Academic project recreating the unsettling atmosphere of the iconic blood scene from 'Carrie' using viscous liquids and mannequin to convey discomfort.",
      date: "2022",
      stars: [
        {
          path: "M20,5 c0,20,-10,30,-20,30 c10,0,20,10,20,30 c0,-20,10,-30,20,-30 c-10,0,-20,-10,-20,-30 z",
          position: { left: "10px", top: "-10px" },
          scale: 1,
          strokeWidth: 0.2,
          color: "black",
        },
      ],
      techStack: "Direction Cinematography Editing",
      imageUrl: "/carrie.png",
      backgroundStyle: "white",
      slug: "carrie",
    },
    {
      title: "CARLOFORTE",
      description:
        "This video explores the Isola de San Pietro, showcasing the local culture, traditions of Sardegna and the beauty of the provincy of Carloforte through static frames.",
      date: "2023",
      stars: [
        {
          path: "M20,5 c0,20,-10,30,-20,30 c10,0,20,10,20,30 c0,-20,10,-30,20,-30 c-10,0,-20,-10,-20,-30 z",
          position: { left: "10px", top: "-10px" },
          scale: 1,
          strokeWidth: 0.2,
          color: "green",
        },
      ],
      techStack: "Cinematography Post-Production",
      imageUrl: "/carloforte.png",
      backgroundStyle: "transparent",
      slug: "sardegna-video-carloforte",
    },
    {
      title: "CULTURAL VIDEO - PICO SUSARON",
      description:
        "This video explores the beautiful and culturally rich landscape of Puebla de Lillo, located in the heart of the Picos de Europa, Spain. It captures the timeless connection between the people and nature in this extraordinary region.",
      date: "2023",
      stars: [
        {
          path: "M20,5 c0,20,-10,30,-20,30 c10,0,20,10,20,30 c0,-20,10,-30,20,-30 c-10,0,-20,-10,-20,-30 z",
          position: { left: "10px", top: "-10px" },
          scale: 1,
          strokeWidth: 0.2,
          color: "black",
        },
      ],
      techStack: "Cinematography Post-Production",
      imageUrl: "/pico.jpg",
      backgroundStyle: "white",
      slug: "cultural-video-pico-susaron",
    },
  ];

  return (
    <section
      id={id}
      className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-2 md:px-12 lg:px-16 py-10 "
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