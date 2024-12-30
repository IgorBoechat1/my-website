import React from "react";

interface StarProps {
  stars: {
    path: string;
    position: { left: string; top: string };
    scale: number;
    strokeWidth: number;
    backgroundColor?: string;
    color: string;
  }[];
  svgWidth: number;
  svgHeight: number;
}

const Star: React.FC<StarProps> = ({ stars, svgWidth, svgHeight }) => {
  return (
    <svg
      width={svgWidth}
      height={svgHeight}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
    >
      {stars.map((star, index) => (
        <path
          key={index}
          d={star.path}
          fill={star.color}
          strokeWidth={star.strokeWidth}
          transform={`translate(${star.position.left}, ${star.position.top}) scale(${star.scale})`}
        />
      ))}
    </svg>
  );
};

export default Star;
