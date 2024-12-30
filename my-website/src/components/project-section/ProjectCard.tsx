import React from "react";
import Image from "next/image";
import { StarProps } from "../../components/Star"; // Import the StarProps type if used

interface ProjectCardProps {
  title: string;
  description: string;
  date: string;
  techStack: string;
  imageUrl: string;
  backgroundStyle: "white" | "transparent";
  star?: React.ReactElement<StarProps> | React.ReactElement<StarProps>[]; // Accepts multiple or a single Star element
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  date,
  techStack,
  imageUrl,
  backgroundStyle,
  star,
}) => {
  const textColor = backgroundStyle === "white" ? "text-black" : "text-white";
  const starOutlineColor = backgroundStyle === "white" ? "border-[var(--starOutline)]" : "border-[var(--starOutline)]";

  return (
    <article
      className={`relative project-card ${backgroundStyle === "white" ? "bg-white" : "bg-transparent"}`}
    >
      {/* Image Container */}
      <div className="project-card__image-container w-full overflow-hidden">
        <div className="w-full h-64 sm:h-80 md:h-[400px] lg:h-[500px]">
          <Image
            src={imageUrl}
            alt={`Preview of the project titled ${title}`}
            className="object-cover w-full h-full transition-transform duration-500 transform hover:scale-110"
            width={600}
            height={400}
          />
        </div>
      </div>

      {/* Content Area */}
      <section className="relative">
        <div className="project-card__info flex items-center">
          {/* Date */}
          <h3 className={`absolute left-24 text-xs md:text-base lg:text-lg ${textColor}`}>
            {date}
          </h3>

          {/* Dynamic Star(s) */}
          <div className="ml-10 scale-[40%]">
          {star && Array.isArray(star) ? (
            <>
              {star.map((starElement, index) => (
                <React.Fragment key={index}>{starElement}</React.Fragment>
              ))}
            </>
          ) : (
            star
          )}
          </div>
        </div>

        {/* Title */}
        <div className="absolute mt-[-25]">
          <h1 className={`project-card__title ${textColor} font-medium ml-12 mt-1 text-6xl sm:text-3xl md:text-4xl lg:text-5xl`}>
            {title}
          </h1>
        </div>
      </section>

      <section className="flex relative flex-col items-start p-12">
        {/* Tech Stack */}
        <div className="star-container__tech mt-5">
          <h3 className={`text-xs project-card__tech-stack ${textColor}`}>{techStack}</h3>
        </div>

        {/* Description */}
        {description && <h3 className={`mt-6 text-xs project-card__description ${textColor}`}>{description}</h3>}

        {/* Button */}
        <button
          type="button"
          className={`font-medium mt-4 text-xs border-1  project-card__button ${textColor}`}
          aria-label={`More information about ${title}`}
        >
          MORE INFO
        </button>
      </section>
    </article>
  );
};

export default ProjectCard;
