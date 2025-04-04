import React, { useState } from 'react'; // Import useState
import GraphicSection from './GraphicSection';
import AboutSection from './AboutSection';

interface GraphAboutSectionProps {
  id?: string;
}

const GraphAbout: React.FC<GraphAboutSectionProps> = ({ id }) => {
   useState(true); // Proper useState implementation

  return (
    <div
      id={id} // Use the id prop here
      className="relative graph-about-container flex flex-col lg:flex-row justify-between"
    >
      <div className="graphic-section flex-1 w-full lg:w-1/2 order-1 lg:order-2">
        <GraphicSection />
      </div>
      <div className="about-section flex-1 w-full lg:w-1/2 order-2 lg:order-1">
        <AboutSection />
      </div>
      <div className="absolute flex items-center bottom-[47.5%] left-[-65px] md:bottom-[-56px] md:left-[-65px] transform z-20 scale-[200%]">
        <svg width="115" height="115" xmlns="http://www.w3.org/2000/svg">
          <path
            id="star-clip"
            fill="#E8474D"
            stroke="transparent"
            strokeWidth="0.5"
            d="M60,16 c0,20,-20,40,-40,40 c20,0,40,20,40,40 c0,-20,20,-40,40,-40 c-20,0,-40,-20,-40,-40 z"
          ></path>
        </svg>
      </div>
      {/* Bottom Star for Balance */}
      <div className="absolute top-[-4%] right-[50%] scale-[350%] md:top-[10%] md:right-[47.3%] md:scale-[100%] z-20">
        <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#C7F24F"
            strokeWidth="1"
            d="M60,16 c0,20,-20,40,-40,40 c20,0,40,20,40,40 c0,-20,20,-40,40,-40 c-20,0,-40,-20,-40,-40 z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default GraphAbout;