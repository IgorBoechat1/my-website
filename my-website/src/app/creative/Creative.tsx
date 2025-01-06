import React from "react";
import ProjectCard from "@/components/project-section/ProjectCard";
import Star from "@/components/Star";

interface Project {
  title: string;
  description: string;
  date: string;
  techStack: string;
  imageUrl: string;
  backgroundStyle: "white" | "transparent";
  star?: React.ReactElement; // Adjusted for better flexibility
  slug: string;
}

const Creative: React.FC = () => {
  const projects: Project[] = [
    {
      title: "FUNDAÇÃO GRAMAXO",
      description:
        "Institutional videos showcasing the architectural work of Álvaro Siza at Fundação Gramaxo, emphasizing its relationship with nature and the surrounding environment.",
      date: "January 2024 - December 2024",
      star: (
        <Star
          stars={[
            {
              path: "M20,5 c0,20,-10,30,-20,30 c10,0,20,10,20,30 c0,-20,10,-30,20,-30 c-10,0,-20,-10,-20,-30 z",
              position: { left: "85px", top: "-65" },
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
        />
      ),
      techStack: "Videography, Production, Architecture",
      imageUrl: "/FG_project.jpg",
      backgroundStyle: "white",
      slug: "fundacao-gramaxo",
    },
  ];

  return (
    <section id="projects" className="w-screen mt-24 mb-22">
      {projects.map((project) => (
        <ProjectCard
          key={project.slug}
          {...project} // Spread properties for cleaner code
        />
      ))}
    </section>
  );
};

export default Creative;
