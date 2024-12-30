import React from "react";
import ProjectCard from "@/components/project-section/ProjectCard";
import Star from "@/components/Star";

interface StarType {
  path: string;
  position: { left: string; top: string };
  scale: number;
  strokeWidth: number;
  color: string;
}

interface Project {
  title: string;
  description: string;
  date: string;
  techStack: string;
  imageUrl: string;
  backgroundStyle: "white" | "transparent";
  star?: React.ReactElement<{ stars: StarType[] }>[];
}

const DevSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: "FUNDACAO GRAMAXO",
      description:
        "INSTITUTIONAL VIDEOS FOR THE FUNDAÇÃO GRAMAXO, HIGHLIGHTING ÁLVARO SIZA’S ARCHITECTURE AND ITS CONNECTION WITH NATURE.",
      date: "JANUARY DECEMBER 2024",
      star: [
        <Star
          key="gramaxo-star"
          stars={[
            {
              path: "M20,5 c0,20,-10,30,-20,30 c10,0,20,10,20,30 c0,-20,10,-30,20,-30 c-10,0,-20,-10,-20,-30 z",
              position: { left: "85px", top: "-65px" },
              scale: 0.2,
              strokeWidth: 1,
              color: "red",
            },
            {
              path: "M20,5 c0,20,-10,30,-20,30 c10,0,20,10,20,30 c0,-20,10,-30,20,-30 c-10,0,-20,-10,-20,-30 z",
              position: { left: "50px", top: "-45px" },
              scale: 0.2,
              strokeWidth: 1,
              color: "blue",
            },
          ]}
          svgWidth={80}
          svgHeight={100}
        />,
      ],
      techStack: "VIDEOGRAPHY PRODUCTION",
      imageUrl: "/FG_project.jpg",
      backgroundStyle: "white",
    },
    // Additional projects
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

export default DevSection;
