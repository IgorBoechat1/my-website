import React from "react";
import ProjectCard from "@/components/project-section/ProjectCard";

const DevSection: React.FC = () => {
  const projects = [
    {
      title: "FOODBALL",
      description: "Game developed during 1 week of Code For All bootcamp. Using Java, Simple GFX",
      date: "OCTOBER 2024",
      techStack: "JAVA WEB DEVELOPMENT",
      imageUrl: "/foodball_project.png",
      backgroundStyle: "transparent" as const, // Using 'as const' here
      slug: "foodball", // Slug for routing
    },
    // Add more projects...
  ];

  return (
    <section id="projects" className="w-screen mt-26 mb-22">
      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          description={project.description}
          date={project.date}
          techStack={project.techStack}
          imageUrl={project.imageUrl}
          backgroundStyle={project.backgroundStyle}
          slug={project.slug}
          
        />
      ))}
    </section>
  );
};

export default DevSection;
