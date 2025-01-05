'use client';

import React, { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { MDXProvider } from "@mdx-js/react";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import "@/app/globals.css";

// Project type definition
interface Project {
  title: string;
  description: string;
  date: string;
  techStack: string;
  imageUrl: string;
  backgroundStyle: "white" | "transparent";
  readme: string; // MDX content as a string
}

const projectData: Record<string, Project> = {
  "fundacao-gramaxo": {
    title: "FUNDACAO GRAMAXO",
    description:
      "Institutional videos showcasing the architectural work of Álvaro Siza at Fundação Gramaxo, emphasizing its relationship with nature and the surrounding environment.",
    date: "January 2024 - December 2024",
    techStack: "Videography Production Architecture",
    imageUrl: "/FG_project.jpg",
    backgroundStyle: "white",
    // Example MDX content as a string
    readme: `
## I worked as a photographer and videographer for Fundação Gramaxo from January to December 2024. During this period, I developed various photography and video projects across different aspects such as events, conferences, live shows, press, social media, and other streams.


### **Equipment and Tools**

- Camera: FujiFilm XS10
- Lenses: 50mm f/2.0 and 15-45mm
- Video Editing Software: DaVinci Resolve
- Audio Recording and Post-Production**: Utilized for recording and enhancing audio quality.

### **Responsibilities**

- Capturing high-quality photos and videos for various events and purposes.
- Planning and disseminating new content ideas during brainstorming sessions.
- Script writing and directing video productions.
- Handling post-production tasks to ensure polished final products.

### About

## Fundação Gramaxo is a renowned organization based in Maia, Portugal. The foundation has a rich history and is dedicated to promoting cultural, educational, and social initiatives within the community. Fundação Gramaxo organizes various events, conferences, and live shows, serving as a hub for creativity and innovation.

### **Projects and Contributions**

- Events

## Documented numerous events, capturing key moments and highlights.

- Conferences

## Produced high-quality videos for conferences, ensuring clear and engaging content.

- Live Shows

## Created dynamic videos for live shows, capturing the energy and essence of the performances.

- Press and Social Media

## Developed visual content for press releases and social media campaigns, enhancing the foundation's online presence.

- Brainstorming and Content Planning

## Played a crucial role in generating and executing new ideas, contributing to the foundation's creative process.

- Script Writing and Directing

## Led the script writing and directing efforts for various video productions, ensuring a cohesive and professional final product.
`
  },

  "foodball": {
    title: "Foodball",
    description:
    "Brief project description goes here. It can be a bit longer to showcase a sample of the project's description text.",
    date: "October 2024",
    techStack: "Java SFX Github",
    imageUrl: "/foodball_project.jpg",
    backgroundStyle: "white",
    // Example MDX content as a string
    readme: `
    # Foodballs: The Tastiest Soccer Showdown Ever! 🍔⚽🍕

Get ready for the ultimate food fight... on the soccer field! Foodballs is the hilarious, fast-paced 1v1 soccer game where a mighty burger and a saucy pizza face off in a battle of goals, glory, and grease!

## Overview

The rules are simple: Make. A. Goal. But don’t be fooled — this isn’t your ordinary soccer match! With Burger controlled by the AWD keys and Pizza taking charge with the arrow keys, it’s all about quick reflexes and faster fingers. Can you outplay your opponent and claim the crown of Foodball champion?

Play now and settle the age-old debate: Who’s the real MVP — Burger or Pizza?

## How to Play

- **Burger Controls**: Move using AWD keys
- **Pizza Controls**: Move using the Left, Up, and Right arrow keys
- The objective is simple: Score a goal by getting the ball into your opponent’s net!

Good luck, and may the tastiest player win! 🍔⚽🍕

## Development

Foodballs was developed in Java, using simple graphics to bring the food characters to life and ensure a fun and engaging experience.

## Installation and Running the Game

1. **Clone the Repository**:
   `
    
  },
  // Add other project entries here...
};

interface ProjectPageProps {
  params: { slug: string };
}

const ProjectPage = ({ params }: ProjectPageProps) => {
  const [project, setProject] = useState<Project | null>(null);
  const [mdxSource, setMdxSource] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const projectSlug = params.slug;

      if (projectSlug && projectData[projectSlug]) {
        const currentProject = projectData[projectSlug];
        setProject(currentProject);

        // Serialize the MDX content before passing it to MDXRemote
        const serializedMdx = await serialize(currentProject.readme);
        setMdxSource(serializedMdx);
      } else {
        notFound();
      }
    };

    fetchData();
  }, [params.slug]); // Trigger whenever params.slug changes

  if (!project || !mdxSource) {
    return <div>Loading...</div>;
  }

  const { title, description, date, techStack, imageUrl, backgroundStyle } = project;
  const isWhiteBackground = backgroundStyle === "white";
  const textColor = isWhiteBackground ? "text-black" : "text-white";

  // Custom components for MDX rendering
  const components = {
    h1: ({ children }: any) => (
      <h1 className="text-2xl sm:text-3xl font-primary mb-6 text-gray-900">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-xl sm:text-2xl font-secondary mb-12  text-gray-900 mt-4">{children}</h2>
    ),
    ul: ({ children }: any) => <ul className=" font-secondary mb-12 pl-5 mt-2">{children}</ul>,
    li: ({ children }: any) => <li className=" text-secondary mb-12 ">{children}</li>,
    p: ({ children }: any) => <p className="text-sm sm:text-base mb-12  font-secondary mt-2">{children}</p>,
  };

  return (
    <article className={`relative ${isWhiteBackground ? "bg-white" : "bg-transparent"} overflow-hidden`}>
      {/* Image Section */}
      <section className="w-full overflow-hidden">
        <div className="w-full h-64 sm:h-80 md:h-[400px] lg:h-[500px]">
          <Image
            src={imageUrl}
            alt={`Preview of the project titled ${title}`}
            className="object-cover w-full h-full transition-transform duration-500 transform hover:scale-110"
            width={600}
            height={400}
          />
        </div>
      </section>

      {/* Project Details Section */}
      <section className="relative p-6 mb-20 uppercase gap-12">
        <h3 className={`text-3xl sm:text-xl md:text-5xl lg:text-6xl font-light ${textColor} font-primary`}>
          {title}
        </h3>
        <h3 className={`text-xs mb-2 sm:text-sm ${textColor} font-secondary`}>{date}</h3>

        <div className="mt-3 flex flex-wrap gap-2">
          {techStack.split(",").map((tech, index) => (
            <span key={index} className={`text-xs sm:text-sm ${textColor} ml-2 inline-block px-2 py-1`}>
              {tech.trim()}
            </span>
          ))}
        </div>

        <div className="mt-5">
          <h3 className={`text-xs md:text-xl uppercase mb-12 ${textColor} font-secondary`}>
            {description}
          </h3>
        </div>

        {/* MDX Content */}
        <div className="mt-8 max-w-full overflow-hidden">
          <h1 className="sm:text-xl font-secondary text-gray-900">README:</h1>

          {/* MDX Rendering */}
          <MDXProvider components={components}>
            <div className="markdown-content max-w-full gap-12 text-gray-900 overflow-scroll font font-secondary">
              <MDXRemote {...mdxSource} />
            </div>
          </MDXProvider>
        </div>
      </section>
    </article>
  );
};

export default ProjectPage;
