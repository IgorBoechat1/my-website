'use client'; // This ensures this component is treated as a client-side component.

import React, { useState, useEffect } from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { serialize } from "next-mdx-remote/serialize";
import VimeoVideo from "@/components/VimeoVideo"; // Correct import for VimeoVideo component
import Image from "next/image";
import { useRouter, useParams } from "next/navigation"; // Correct import for App Router
import { Project, projectData } from "@/app/projects/[slug]/projectData"; // Correct import for project data
// Define responsive breakpoints for the Carousel
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1    
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

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

  const { title, description, date, techStack, imageUrl, backgroundStyle, videoUrl } = project;
  const isWhiteBackground = backgroundStyle === "white";
  const textColor = isWhiteBackground ? "text-black" : "text-white";

  return (
    <article className={`relative flex flex-col lg:flex-row  p-8 ${isWhiteBackground ? "bg-white" : "bg-transparent"} overflow-hidden mt-24  w-full`}>
      {/* Image Section */}
      <section className="w-full lg:w-[70vw] overflow-hidden">
        {/* Carousel for small screens */}
        <div className="block lg:hidden">
          <Carousel responsive={responsive} className="w-full">
            {imageUrl.map((url: string, index: number) => (
              <div key={index} className="w-full h-[30vh] lg:h-[70vh]">
                <Image
                  src={url}
                  alt={`Preview of the project titled ${title}`}
                  className="object-cover lg:object-contain w-full h-full transition-transform duration-500 transform hover:scale-110"
                  width={1920}
                  height={1080}
                />
              </div>
            ))}
          </Carousel>
        </div>

        {/* Stacked images for large screens */}
        <div className="hidden lg:block">
          {imageUrl.map((url: string, index: number) => (
            <div key={index} className="w-full h-full mb-4">
              <Image
                src={url}
                alt={`Preview of the project titled ${title}`}
                className="object-cover lg:object-contain w-full h-full transition-transform duration-500 transform hover:scale-110"
                width={1920}
                height={1080}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Project Details Section */}
      <section className="relative flex flex-col p-6 mb-12 max-w-screen lg:w-[70vw]  uppercase gap-12 filter bg-black bg-opacity-50">
         <h3 className={`text-4xl lg:text-7xl flex text-center justify-center font-light ${textColor} font-primary`}>
          {title}
        </h3>
          <div className="flex flex-col  ">

       
        <h3 className={`text-[15px] mb-2 lg:text-[25px] flex justify-center ${textColor} font-secondary`}>{date}</h3>
          {techStack.split(",").map((tech: string, index: number) => (
            <span key={index} className={`text-[15px] lg:text-[20px] flex justify-center ${textColor} ml-2 inline-block font-extrabold font-secondary px-2 py-1`}>
              {tech.trim()}
            </span>
          ))}
       

      
          <h3 className={`text-[12px] lg:text-[16px] flex justify-center text-center uppercase mb-12 ${textColor} font-secondary`}>
            {description}
          </h3>
        </div>


      {/* Container for video and README */}
<div className="mt-0 ">
  {/* Vimeo Video */}
  {videoUrl && (
    <div className="mt-5 flex justify-center w-full">
      <div className="w-full max-w-screen-lg">
        <VimeoVideo videoId={videoUrl.toString()} />
      </div>
    </div>
  )}
          <h1 className="sm:text-[42px] flex justify-center font-primary text-white">README</h1>
          <div className={`markdown-content text-[14px] md:text-[18px] max-w-full gap-12 text-gray-100 overflow-scroll ${textColor}`}>
            <MDXRemote {...mdxSource} components={{
              p: ({ children }) => <p className="font-secondary">{children}</p>,
              h1: ({ children }) => <h1 className="font-secondary">{children}</h1>,
              h2: ({ children }) => <h2 className="font-secondary">{children}</h2>,
              h3: ({ children }) => <h3 className="font-secondary">{children}</h3>,
              // Add other HTML tags you want to style
            }} />
          </div>

          {/* MDX Rendering */}
        </div>
        {/* MDX Content */}
      </section>
    </article>
  );
};

export default ProjectPage;