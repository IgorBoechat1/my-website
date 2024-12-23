import React from "react";
import Star from "../Star";

interface ProjectCardProps {
  title: string;
  description: string;
  date: string;
  techStack: string;
  imageUrl: string;
  backgroundStyle: "white" | "transparent";
  star?: React.ReactElement | React.ReactElement[]; // Only allow React elements
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
        <img
          src={imageUrl}
          alt={`Preview of the project titled ${title}`}
          className="project-card__image"
        />
      </div>

      <div className="project-card__info">
        <time className="project-card__date">{date}</time>
        <div className="star-container__date">
          <Star 
          paths={["M20,5 c0,20,-10,30,-20,30 c10,0,20,10,20,30 c0,-20,10,-30,20,-30 c-10,0,-20,-10,-20,-30 z"]}
          positions={[{ left: "-145px", top: "-50px" }]}
          scale={[0.3]}
          strokeWidth={[1]}
          color="black"
          svgWidth={50}
          svgHeight={80}
          />
        </div>
        <h2 className="project-card__title">{title}</h2>
        
        <div className="star-container__tech">
          <p className="project-card__tech-stack">{techStack}</p>
          {Array.isArray(star) ? (
            star.map((singleStar, index) => (
              <React.Fragment key={index}>{singleStar}</React.Fragment>
            ))
          ) : React.isValidElement(star) ? (
            React.cloneElement(star, { color: starColor })
          ) : null}
        </div>

        {description && (
          <p className="project-card__description">{description}</p>
        )}

        <button type="button" className="project-card__button" aria-label={`More information about ${title}`}>
          MORE INFO
        </button>
      </div>
    </article>
  );
};

export default ProjectCard;
