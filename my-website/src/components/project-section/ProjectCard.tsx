import React from "react";
import Image from "next/image";

interface StarProps {
  color: string; // Define the expected prop type for color
}

interface ProjectCardProps {
  title: string;
  description: string;
  date: string;
  techStack: string;
  imageUrl: string;
  backgroundStyle: "white" | "transparent";
  star?: React.ReactElement<StarProps> | React.ReactElement<StarProps>[]; // Specify the type for React element with props
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
  // Conditional text color and border color based on background style
  const textColor = backgroundStyle === "white" ? "text-black" : "text-white";
  const starOutlineColor = backgroundStyle === "white" ? "border-black" : "border-white";

  return (
    <article
      className={` relative project-card ${backgroundStyle === "white" ? "white-background" : "transparent-background"} relative`}
    >
      {/* Image Container */}
      <div className="project-card__image-container w-full relative overflow-hidden">
        <div className="relative w-full h-64 sm:h-80 md:h-[400px] lg:h-[500px]">
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
      <div className="project-card__info relative p-6">
        {/* Date */}
        <h3 className={`absolute mt-[-30] left-16 text-sm md:text-base lg:text-lg ${textColor}`}>
          {date}
        </h3>

  <div className="absolute flex items-center justify-center top-[-40] right-[300] scale-[35%]">
        <svg width="80" height="80" xmlns="http://www.w3.org/2000/svg">
          <path
            id="star-clip-more"
            fill="transparent"
            stroke="#000000"
            strokeWidth="0.5"
            d="M20,16 c0,20,-10,30,-20,30 c10,0,20,10,20,30 c0,-20,10,-30,20,-30 c-10,0,-20,-10,-20,-30 z"
          ></path>
        </svg>
      </div>

        {/* Title */}
        <div className="absolute mt-4 top-0 ">
          <h1 className={`project-card__title ${textColor} font-medium mt-16 text-2xl sm:text-3xl md:text-4xl lg:text-5xl`}>
            {title}
          </h1>
        </div>

        {/* Tech Stack */}
        <div className="star-container__tech mt-16">
          <h3 className={`project-card__tech-stack ${textColor}`}>{techStack}</h3>
        </div>

        {/* Description */}
        {description && <h3 className={`project-card__description ${textColor}`}>{description}</h3>}

        {/* Button */}
        <button type="button" className={`border-2 border-black project-card__button ${textColor}`} aria-label={`More information about ${title}`}>
          MORE INFO
        </button>
      </div>
    </article>
  );
};

export default ProjectCard;
