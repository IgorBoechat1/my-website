import React from "react";
import ProjectCard from "./ProjectCard";
import Star from "../Star";

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
  starCount: number; // New property to define how many stars
  star?: React.ReactElement<{ stars: StarType[] }>[];
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: "FUNDACAO GRAMAXO",
      description:
        "Institutional videos showcasing the architectural work of Álvaro Siza at Fundação Gramaxo, emphasizing its relationship with nature and the surrounding environment.",
      date: "January 2024 - December 2024",
      starCount: 2, // Defining how many stars
      star: [
       
        <Star
          key="gramaxo-star-2"
          stars={[
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
      techStack: "Videography, Production, Architecture",
      imageUrl: "/FG_project.jpg", // Ensure you have the correct image path
      backgroundStyle: "white",
    },
    {
      title: "FOODBAL",
      description:
        "Brief project description goes here. It can be a bit longer to showcase a sample of the project's description text.",
      date: "February 2024",
      starCount: 1, // Defining how many stars
      star: [
        <Star
          key="foodbal-star"
          stars={[
            {
              path: "M20,5 c0,20,-10,30,-20,30 c10,0,20,10,20,30 c0,-20,10,-30,20,-30 c-10,0,-20,-10,-20,-30 z",
              position: { left: "40px", top: "-30px" },
              scale: 0.2,
              strokeWidth: 1,
              color: "green",
            },
          ]}
          svgWidth={80}
          svgHeight={100}
        />,
      ],
      techStack: "Web Development",
      imageUrl: "/foodball_project.png", // Adjust the image URL as needed
      backgroundStyle: "transparent",
    },
    // Add more projects here...
  ];

  return (
    <section id="projects" className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-12 lg:px-16 py-10">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
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
