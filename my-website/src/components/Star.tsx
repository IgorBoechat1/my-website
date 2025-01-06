import React from "react";

// Define the StarType interface
export interface StarType {
  path: string; // SVG path definition
  position: { left: string, top: string }; // Numeric position for easier manipulation
  scale: number; // Scale factor
  strokeWidth: number; // Stroke width of the path
  color: string; // Fill color
}

// Define the props for the Star component
interface StarProps {
  stars: StarType[]; // Array of stars to render
  svgWidth: number; // Width of the SVG canvas
  svgHeight: number; // Height of the SVG canvas
}

const Star: React.FC<StarProps> = ({ stars, svgWidth, svgHeight }) => {
  return (
    <svg
      width={svgWidth}
      height={svgHeight}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`-50 -50 ${svgWidth + 100} ${svgHeight + 100}`} // Add padding
      >
      {stars.map((star, index) => (
        <g
          key={index}
          transform={`translate(${star.position.left}, ${star.position.top}) scale(${star.scale})`}
        >
          <path
            d={star.path}
            fill={star.color}
            stroke="black" // Optional: Add stroke for visibility
            strokeWidth={star.strokeWidth}
          />
        </g>
      ))}
    </svg>
  );
};

export default Star;
