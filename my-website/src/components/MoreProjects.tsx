'use client';
import React from "react";

const MoreProjects = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-[25vh] bg-[#6bdc46] font-light z-0">
      <h3 className="absolute text-black text-center text-[20px] lowercase font-[Neue Regrade]">
        Find my most recent <br /> projects below
      </h3>
      
      {/* Four-pointed star (icon) */}
      <div className="absolute flex items-center justify-center w-[80px] left-[-5] h-[80px] right-[0px] top-[190px] transform scale-150">
        <svg width="90" height="90" xmlns="http://www.w3.org/2000/svg">
          <path
            id="star-clip-more"
            fill="transparent"
            stroke="#000000"
            strokeWidth="0.5"
            d="M20,16 c0,20,-10,30,-20,30 c10,0,20,10,20,30 c0,-20,10,-30,20,-30 c-10,0,-20,-10,-20,-30 z"
          ></path>
        </svg>
      </div>

      {/* Transition Star */}
      <div className="relative cursor-pointer top-[-110]">
        <svg width="40" height="80" xmlns="http://www.w3.org/2000/svg">
          <path
            id="star-clip-transition"
            fill="white"
            d="M20,5 c0,20,-10,30,-20,30 c10,0,20,10,20,30 c0,-20,10,-30,20,-30 c-10,0,-20,-10,-20,-30 z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default MoreProjects;
