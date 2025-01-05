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
  slug: string;
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: "FUNDAÇÃO GRAMAXO",
      description:
  
        "Institutional videos showcasing the architectural work of Álvaro Siza at Fundação Gramaxo, emphasizing its relationship with nature and the surrounding environment.",
      date: "JANUARY 2024 - DECEMBER 2024",
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
      techStack: "VIDEOGRAPHY, PRODUCTION, ARCHITECTURE",
      imageUrl: "/FG_project.jpg", // Ensure you have the correct image path
      backgroundStyle: "white",
      slug: "fundacao-gramaxo",
    },
    {
      title: "FOODBALL",
      description: "Game developed during 1 week of Code For All bootcamp. Using Java, Simple GFX",
      date: "FEBRUARY 2024",
      starCount: 2, // Defining how many stars
      star: [
        <Star
          key="foodbal-star"
          stars={[
            {
              path: "M20,5 c0,20,-10,30,-20,30 c10,0,20,10,20,30 c0,-20,10,-30,20,-30 c-10,0,-20,-10,-20,-30 z",
              position: { left: "40px", top: "-30px" },
              scale: 0.2,
   
              strokeWidth: 1,
              color: "transparent",
            },
          ]}
          svgWidth={80}
          svgHeight={100}
        />,
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
      techStack: "JAVA WEB DEVELOPMENT",
      imageUrl: "/foodball_project.png", // Adjust the image URL as needed
      backgroundStyle: "transparent",
      slug: "foodbal",
    },
    {
      title: "HECATRAIL",
      description:
        "A web application developed in 3 days to create alerts and reports on the trail side. Created during the Code for All bootcamp 'MakeITReal' event, where our team was the winner.",
      date: "DECEMBER 2024",
      starCount: 2, // Defining how many stars, we can keep it simple for now
      star: [
        <Star
          key="hecatrail-star"
          stars={[
            {
              path: "M20,5 c0,20,-10,30,-20,30 c10,0,20,10,20,30 c0,-20,10,-30,20,-30 c-10,0,-20,-10,-20,-30 z",
              position: { left: "40px", top: "-30px" },
              scale: 0.2,
              strokeWidth: 1,
              color: "white", // Choosing purple as a color
            },
          ]}
          svgWidth={80}
          svgHeight={100}
        />,
         <Star
          key="hecatrail-star"
          stars={[
            {
              path: "M20,5 c0,20,-10,30,-20,30 c10,0,20,10,20,30 c0,-20,10,-30,20,-30 c-10,0,-20,-10,-20,-30 z",
              position: { left: "40px", top: "-30px" },
              scale: 0.2,
              strokeWidth: 1,
              color: "white", // Choosing purple as a color
            },
          ]}
          svgWidth={80}
          svgHeight={100}
        />,
      ],
      techStack: "TYPESCRIPT REACT NEXT.JS",
      imageUrl: "/hecatrail.png", // Update with actual image URL
      backgroundStyle: "white",
      slug: "hecatrail",
    },


    {
      title: "MURATTO",
      description:
        "A captivating release video for Muratto's 2024 wall design collection. Muratto, a renowned Portuguese brand in natural surface design, is celebrated for its dynamic and innovative cork wall coverings. This project encompassed scripting, filming, and editing to highlight their latest offerings.",
      date: "JANUARY 2024",
      starCount: 2,
      
      star: [
        <Star
          key="muratto-star-1"
          stars={[
            {
              path: "M20,5 c0,20,-10,30,-20,30 c10,0,20,10,20,30 c0,-20,10,-30,20,-30 c-10,0,-20,-10,-20,-30 z",
              position: { left: "40px", top: "-30px" },
              scale: 0.2,
              strokeWidth: 1,
              color: "gold",
            },
          ]}
          svgWidth={80}
          svgHeight={100}
        />,
        <Star
          key="muratto-star-2"
          stars={[
            {
              path: "M20,5 c0,20,-10,30,-20,30 c10,0,20,10,20,30 c0,-20,10,-30,20,-30 c-10,0,-20,-10,-20,-30 z",
              position: { left: "40px", top: "-30px" },
              scale: 0.2,
              strokeWidth: 1,
              color: "gold",
            },
          ]}
          svgWidth={80}
          svgHeight={100}
        />,
      ],
      techStack: "SCRIPTING FILMING EDITING",
      imageUrl: "/muratto.png",
      backgroundStyle: "transparent",
      slug: "muratto",
    }
    
    
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
          slug={project.slug}
        />
      ))}
    </section>
  );
};

export default ProjectsSection;
