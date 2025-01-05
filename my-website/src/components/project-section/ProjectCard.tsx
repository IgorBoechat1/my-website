import React from "react";
import Image from "next/image";
import Link from "next/link";
import "@/app/globals.css";

interface StarType {
  path: string;
  position: { left: string; top: string };
  scale: number;
  strokeWidth: number;
  color: string;
}

interface ProjectProps {
  title: string;
  description: string;
  date: string;
  techStack: string;
  imageUrl: string;
  backgroundStyle: "white" | "transparent";
  slug: string; // Slug for dynamic routing
  starElement?: React.ReactNode; // Dynamic star element
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  date,
  techStack,
  imageUrl,
  backgroundStyle,
  slug,
  starElement,
}) => {
  const isWhiteBackground = backgroundStyle === "white";
  const textColor = isWhiteBackground ? "text-black" : "text-white";

  // Helper to insert stars between words
  const insertStars = (text: string, starElement: React.ReactNode) => {
    const words = text.split(" ");
    return words.flatMap((word, index) => [
      <span key={`word-${index}`} className="inline-block">
        {word}
      </span>,
      index < words.length - 1 && (
        <span key={`star-${index}`} className="mx-1">
          {starElement}
        </span>
      ),
    ]);
  };

  return (
    <article
      className={`relative ${isWhiteBackground ? "bg-white" : "bg-transparent"} rounded-lg overflow-hidden shadow-lg`}
    >
      {/* Image Section */}
      <section className="w-full overflow-hidden">
        <div className="w-full h-64 sm:h-80 md:h-[400px] lg:h-[500px]">
          <Image
            src={imageUrl}
            alt={`Preview of the project titled ${title}`}
            className="object-cover w-full h-full transition-all duration-500 transform grayscale hover:grayscale-0"
            width={600}
            height={400}
          />
        </div>
      </section>

      {/* Project Details Section */}
      <section className="relative p-6 mb-20">
        {/* Date with Star */}
        <div className="flex items-center mb-2">
          <div className="mr-2">{starElement}</div>
          <h3 className={`text-xs sm:text-base ${textColor}`}>{date}</h3>
        </div>

        {/* Title */}
        <h1 className={`text-5xl sm:text-3xl md:text-4xl lg:text-5xl font-light ${textColor}`}>
          {insertStars(title, starElement)}
        </h1>

        {/* Tech Stack */}
        <div className="mt-3 flex font-secondary items-center">
          {techStack.split(" ").map((word, index) => (
            <span key={index} className={`text-xs sm:text-sm ${textColor} ml-2 inline-block`}>
              {word}
            </span>
          ))}
        </div>

        {/* Description */}
        <div className="mt-5">
          <h3 className={`text-sm sm:text-base uppercase ${textColor}`}>
            {insertStars(description, starElement)}
          </h3>
        </div>

        {/* More Info Button */}
        <Link href={`/projects/${slug}`} passHref>
          <button
            className={`mt-8 py-2 px-6 bg-transparent border-2 border-current font-secondary text-sm ${textColor} hover:bg-current hover:text-white transition-all duration-300`}
            aria-label={`More information about ${title}`}
          >
            MORE INFO
          </button>
        </Link>
      </section>
    </article>
  );
};

export default ProjectCard;
