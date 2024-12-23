import React from "react";
import Image from "next/image"; // Import Image from next/image

interface StarProps {
  color: string; // Define the expected prop type for color
  // Add other props that Star needs if necessary
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
  const starColor = backgroundStyle === "white" ? "black" : "white";

  return (
    <article
      className={`project-card ${backgroundStyle === "white" ? "white-background" : "transparent-background"}`}
    >
      <div className="project-card__image-container">
        <Image
          src={imageUrl}
          alt={`Preview of the project titled ${title}`}
          className="project-card__image"
          width={600}
          height={400}
          layout="intrinsic"
        />
      </div>

      <div className="project-card__info">
        <time className="project-card__date">{date}</time>
        <div className="star-container__date">
          {/* Assuming star is a single element */}
          {Array.isArray(star)
            ? star.map((singleStar, index) => (
                <React.Fragment key={index}>
                  {React.cloneElement(singleStar, { color: starColor })}
                </React.Fragment>
              ))
            : React.isValidElement(star)
            ? React.cloneElement(star, { color: starColor })
            : null}
        </div>
        <h2 className="project-card__title">{title}</h2>

        <div className="star-container__tech">
          <p className="project-card__tech-stack">{techStack}</p>
        </div>

        {description && <p className="project-card__description">{description}</p>}

        <button type="button" className="project-card__button" aria-label={`More information about ${title}`}>
          MORE INFO
        </button>
      </div>
    </article>
  );
};

export default ProjectCard;
