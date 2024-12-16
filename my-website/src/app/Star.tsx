import React from "react";

interface StarProps {
  paths: string[]; // Array of SVG paths
  scale?: number[]; // Scale of the star
  gap?: string; // Space between stars
  positions?: { left: string; top: string }[]; // Optional positions for each path
  className?: string; // Class name for styling individual stars
  strokeWidth?: number | string | (number | string)[]; // Stroke width for each path
  color?: string; // Custom stroke color for paths
  svgWidth?: number; // Width of each SVG element
  svgHeight?: number; // Height of each SVG element
}

const Star: React.FC<StarProps> = ({
  paths = [],
  scale = [],
  gap = "0px",
  positions = [],
  className = "",
  strokeWidth = 1,
  color = "yellowgreen",
  svgWidth = 40, // Default SVG width
  svgHeight = 80, // Default SVG height
}) => {
  const strokeWidths = Array.isArray(strokeWidth)
    ? strokeWidth
    : Array(paths.length).fill(strokeWidth); // Ensure strokeWidth is an array

  return (
    <div
      className={`star-container ${className}`}
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap,
        position: "relative",
      }}
    >
      {paths.map((path, index) => {
        const currentStrokeWidth = strokeWidths[index] || strokeWidths[0];
        const position = positions[index] || { left: "0px", top: "0px" };
        const currentScale = scale[index] || 1;

        return (
          <div
            key={index}
            style={{
              position: "absolute",
              transform: `scale(${scale})`,
              left: position.left,
              top: position.top,
            }}
          >
            <svg
              width={svgWidth}
              height={svgHeight}
              scale={scale}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d={path}
                fill="transparent"
                stroke={color}
                
                strokeWidth={currentStrokeWidth}
              />
            </svg>
          </div>
        );
      })}
    </div>
  );
};

export default Star;
