import React from "react";
import ProjectCard from "@/components/project-section/ProjectCard";
import Star, { StarType } from "@/components/Star";

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
      title: "Fashion Film - Hotel Tipografia do Conto",
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
      techStack: "Creative Direction, Cinematography, Editing",
      imageUrl: "/carrie.png",
      backgroundStyle: "transparent",
      slug: "carrie",
    }
  ];

  return (
    <section id="projects" className="w-screen mt-24 mb-22">
      {/* Video before the project cards */}
      <div className="video-container">
        <video
          className="intro-video"
          src="/SHOWREEL2024.mov" // Add the path to your video file here
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </div>

      {/* Mapping through projects and rendering ProjectCard components */}
      {projects.map((project) => (
        <ProjectCard
          key={project.slug}
          {...project} // Spread properties for cleaner code
        
          star={<Star stars={project.stars || []} svgWidth={30} svgHeight={30} />}
        />
      ))}
    </section>
  );
};

export default Creative;
