import React from "react";
import Image from "next/image";

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
  star?: React.ReactElement<{ stars: StarType[] }>[];
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  date,
  techStack,
  imageUrl,
  backgroundStyle,
  star,
}) => {
  const isWhiteBackground = backgroundStyle === "white";
  const textColor = isWhiteBackground ? "text-black" : "text-white";
  const starColor = isWhiteBackground ? "black" : "white";

  return (
    <article
      className={`relative ${isWhiteBackground ? "bg-white" : "bg-transparent"} rounded-lg overflow-hidden shadow-lg`}
    >
      {/* Image Container */}
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

      {/* Content Area with Left Alignment */}
      <section className="relative p-6 mb-20">
        {/* Flexbox for Date and Star Alignment */}
        <div className="flex items-center mb-[-40] ml-[-20] ">
          {/* First Star on the Left of Date */}
          {star && star[0] && (
            <div className="scale-[30%]">
              {React.cloneElement(star[0], {
                stars: star[0].props.stars.map((s: StarType) => ({
                  ...s,
                  color: starColor,
                })),
              })}
            </div>
          )}

          {/* Date */}
          <h3 className={`text-xs mb-[5] ml-[-20]  sm:text-base ${textColor}`}>{date}</h3>
        </div>

        {/* Title */}
        <div className="mt-2">
          <h1 className={`text-5xl sm:text-3xl md:text-4xl lg:text-5xl font-light ${textColor}`}>
            {title}
          </h1>
        </div>

        {/* Tech Stack */}
        <div className="mt-2 flex items-center mb-10 space-x-2">
          {techStack.split(" ").map((word, index) => (
            <React.Fragment key={index}>
              <h3 className={`text-xs sm:text-sm ${textColor}`}>{word}</h3>
              
              {/* Add Star between words */}
              {index < techStack.split(" ").length - 1 && star && star[1] && (
                <div className="scale-[30%]">
                  {React.cloneElement(star[1], {
                    stars: star[1].props.stars.map((s: StarType) => ({
                      ...s,
                      color: starColor,
                    })),
                  })}
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Description */}
        {description && (
          <div className="mt-4">
            <h3 className={`text-sm sm:text-base ${textColor}`}>{description}</h3>
          </div>
        )}

        {/* Button */}
        <button
          type="button"
          className={`mt-8 py-2 px-6 bg-transparent border-2 border-current text-sm ${textColor} hover:bg-current hover:text-white transition-all duration-300`}
          aria-label={`More information about ${title}`}
        >
          MORE INFO
        </button>
      </section>
    </article>
  );
};

export default ProjectCard;
