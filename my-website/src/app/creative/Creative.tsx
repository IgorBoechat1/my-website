import React from "react";
import ProjectCard from "@/components/project-section/ProjectCard";
import Star, { StarType } from "@/components/Star";
import VimeoVideo from "@/components/VimeoVideo"; // Import the VimeoVideo component

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

const Creative: React.FC = () => {
  const projects: Project[] = [
    {
      title: "FUNDAÇÃO GRAMAXO",
      description:
        "Institutional videos showcasing the architectural work of Álvaro Siza at Fundação Gramaxo, emphasizing its relationship with nature and the surrounding environment.",
      date: "January 2024 - December 2024",
      stars: [
        {
          path: "M20,5 c0,20,-10,30,-20,30 c10,0,20,10,20,30 c0,-20,10,-30,20,-30 c-10,0,-20,-10,-20,-30 z",
          position: { left: "10px", top: "-10px" },
          scale: 1,
          strokeWidth: 0.2,
          color: "black",
        },
      ],
      techStack: "Videography, Production, Architecture",
      imageUrl: "/FG_project.jpg",
      backgroundStyle: "white",
      slug: "fundacao-gramaxo",
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
      title: "CARRIE - TITLE SCENE",
      description: "Academic project recreating the unsettling atmosphere of the iconic blood scene from 'Carrie' using viscous liquids and mannequin to convey discomfort.",
      date: "2022",
      stars: [
        {
          path: "M20,5 c0,20,-10,30,-20,30 c10,0,20,10,20,30 c0,-20,10,-30,20,-30 c-10,0,-20,-10,-20,-30 z",
          position: { left: "10px", top: "-10px" },
          scale: 1,
          strokeWidth: 0.2,
          color: "green",
        },
      ],
      techStack: "CINEMATOGRAPHY Direction",
      imageUrl: "/carrie.png",
      backgroundStyle: "white",
      slug: "carrie",
    }
  ];

  return (
    <section id="projects" className="w-screen mt-24 mb-22">
      {/* Vimeo Video before the project cards */}
      <div className="video-container w-full h-full">
        <VimeoVideo videoId='1055350902' /> {/* Replace with your Vimeo video ID */}
      </div>

      {/* Grid container for project cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            {...project} // Spread properties for cleaner code
            star={<Star stars={project.stars || []} svgWidth={30} svgHeight={30} />}
          />
        ))}
      </div>
    </section>
  );
};

export default Creative;