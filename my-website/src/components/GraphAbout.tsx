import React from 'react';
import GraphicSection from './GraphicSection';
import AboutSection from './AboutSection';

const GraphAbout: React.FC = () => {
    return (
        <div className="relative graph-about-container flex flex-col lg:flex-row justify-between"
    >
            
            <div className="graphic-section flex-1 w-full lg:w-1/2 order-1 lg:order-2">
                <GraphicSection />
            </div>
            <div className="about-section flex-1 w-full lg:w-1/2 order-2 lg:order-1">
                <AboutSection />
            </div>
            <div className="absolute flex items-center bottom-[48.5%] left-[-65px] lg:bottom-[-56px] lg:left-[-65px] transform z-20 scale-[200%]">
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
            <div className="absolute  top-[-70px] right-[50%] md:top-[-3%] md:right-[42%] lg:top-[15%] lg:right-[47.5%] transform scale-[300%] lg:scale-[100%] z-20">
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