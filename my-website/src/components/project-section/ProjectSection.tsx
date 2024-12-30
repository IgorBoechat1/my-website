import React from "react";
import ProjectCard from "./ProjectCard";
import Star from "../../components/Star"; // Import the Star component

interface Project {
  title: string;
  description: string;
  date: string;
  techStack: string;
  imageUrl: string;
  backgroundStyle: "white" | "transparent";
  star?: React.ReactElement | React.ReactElement[];
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: "FUNDACAO GRAMAXO",
      description:
        "INSTITUTIONAL VIDEOS FOR THE FUNDAÇÃO GRAMAXO, HIGHLIGHTING ÁLVARO SIZA’S ARCHITECTURE AND ITS CONNECTION WITH NATURE.",
      date: "JANUARY DECEMBER 2024",
      star: [
        <Star
          key="gramaxo-star-1"
          stars={[
            {
              path: "M20,5 c0,20,-10,30,-20,30 c10,0,20,10,20,30 c0,-20,10,-30,20,-30 c-10,0,-20,-10,-20,-30 z",
              position: { left: "85px", top: "-65px" },
              scale: 0.2,
              strokeWidth: 1,
              color: "black",
            },
          ]}
          svgWidth={50}
          svgHeight={80}
        />
      ],
      techStack: "VIDEOGRAPHY PRODUCTION",
      imageUrl: "/FG_project.jpg",
      backgroundStyle: "white",
    },
    {
      title: "FOODBALL",
      description:
        "SIMPLE GAME DEVELOPED DURING SOME BOOTCAMP DAYS. INSPIRED BY HEAD SOCCER GAME, WE HAVE IMPLEMENTED PHYSICS TO THE BALL.",
      date: "OCTOBER 2024",
      techStack: "JAVA GITHUB",
      imageUrl: "/foodball_project.png",
      backgroundStyle: "transparent",
      star: [
        <Star
          key="foodball-star-1"
          stars={[
            {
              path: "M20,5 c0,20,-10,30,-20,30 c10,0,20,10,20,30 c0,-20,10,-30,20,-30 c-10,0,-20,-10,-20,-30 z",
              position: { left: "25px", top: "-63px" },
              scale: 0.2,
              strokeWidth: 1,
              color: "transparent",
            },
          ]}
          svgWidth={50}
          svgHeight={80}
        />
      ],
    },
  ];

  return (
    <section id="projects" className="w-screen mb-22">
      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          description={project.description}
          date={project.date}
          techStack={project.techStack}
          imageUrl={project.imageUrl}
          backgroundStyle={project.backgroundStyle}
          star={project.star}
        />
      ))}
    </section>
  );
};

export default ProjectsSection;
