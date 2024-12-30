import React from "react";

interface StarProps {
  stars: {
    path: string;
    position: { left: string; top: string };
    scale: number;
    strokeWidth: number;
    color: string;
  }[];
  svgWidth: number;
  svgHeight: number;
  
}

const Star: React.FC<StarProps> = ({ stars, svgWidth, svgHeight }) => {
  if (!stars || !Array.isArray(stars)) {
    console.error("Invalid or missing 'stars' prop");
    return null;
  }

  return (
    <svg width={svgWidth} height={svgHeight} xmlns="http://www.w3.org/2000/svg">
      {stars.map((star, index) => (
        <path
          key={index}
          d={star.path}
          fill={star.color}
          strokeWidth={star.strokeWidth}
          transform={`scale(${star.scale}) translate(${star.position.left}, ${star.position.top})`}
        />
      ))}
    </svg>
  );
};

export default Star;