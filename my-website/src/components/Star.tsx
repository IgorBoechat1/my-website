import React from "react";

interface StarProps {
  paths: string[];
  positions: { left: string; top: string }[];
  scale: number[];
  strokeWidth: number[];
  color: string; // Ensure that color is a valid prop for Star
  svgWidth: number;
  svgHeight: number;
}

const Star: React.FC<StarProps> = ({
  paths,
  positions,
  scale,
  strokeWidth,
  color,
  svgWidth,
  svgHeight,
}) => {
  // Render star with color and other properties
  return (
    <svg width={svgWidth} height={svgHeight} xmlns="http://www.w3.org/2000/svg">
      {paths.map((path, index) => (
        <path
          key={index}
          d={path}
          fill={color} // Apply the color prop here
          strokeWidth={strokeWidth[index]}
          transform={`scale(${scale[index]}) translate(${positions[index].left}, ${positions[index].top})`}
        />
      ))}
    </svg>
  );
};

export default Star;
