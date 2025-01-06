'use client'; // This ensures this component is treated as a client-side component.

import React, { useState, useEffect } from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation"; // Correct import for App Router

// Define the Project data structure
type Project = {
  title: string;
  description: string;
  date: string;
  techStack: string;
  imageUrl: string;
  backgroundStyle: "transparent" | "white";
  readme: string;
  slug: string;
};

// Mock project data
const projectData: Record<string, Project> = {
  foodball: {
    title: "FOODBALL",
    description: "Game developed during 1 week of Code For All bootcamp. Using Java, Simple GFX",
    date: "OCTOBER 2024",
    techStack: "JAVA WEB DEVELOPMENT",
    imageUrl: "/foodball_project.png",
    backgroundStyle: "transparent",
    readme: "README content here...",
    slug: "foodball",
  },
  // Add more projects as necessary
};

// Dynamic Page Component
const ProjectPage = () => {
  const router = useRouter();
  const params = useParams();
  const { slug } = params; // Access slug using router.params (for App Router)

  // State for the project data
  const [project, setProject] = useState<Project | null>(null);
  const [mdxSource, setMdxSource] = useState<MDXRemoteSerializeResult | null>(null); // Correctly typed

  // Fetch the project data and serialize MDX content when the component mounts
  useEffect(() => {
    const fetchProjectData = async () => {
      if (!slug) return; // Prevent errors if slug is undefined initially

      const fetchedProject = projectData[slug as string];
      if (!fetchedProject) {
        // Handle 404 if project not found
        router.push('/404');
        return;
      }
      setProject(fetchedProject);
      const mdxSerialized = await serialize(fetchedProject.readme);
      setMdxSource(mdxSerialized);
    };

    fetchProjectData();
  }, [slug, router]); // Dependency array ensures it runs when `slug` changes

  if (!project || !mdxSource) {
    return <div>Loading...</div>; // Placeholder loading state
  }

  const { title, description, date, techStack, imageUrl, backgroundStyle } = project;
  const isWhiteBackground = backgroundStyle === "white";
  const textColor = isWhiteBackground ? "text-black" : "text-white";

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
          {techStack.split(",").map((tech: string, index: number) => (
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
          <div className="markdown-content max-w-full gap-12 text-gray-900 overflow-scroll font font-secondary">
            <MDXRemote {...mdxSource} />
          </div>
        </div>
      </section>
    </article>
  );
};

export default ProjectPage;
