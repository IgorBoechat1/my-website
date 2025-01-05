'use client';
import React from "react";

const MoreProjects = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-[25vh] bg-[#C7F24F] font-light z-0">
      <h3 className="absolute text-black text-center text-[20px] lowercase font-[Neue Regrade]">
        Find my most recent <br /> projects below
      </h3>
      
      <div className="absolute flex items-center justify-center left-[-20%] top-[-30%] transform z-50 scale-[300%]">
    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
      <path
        id="star-clip"
        fill="white"
        stroke="white"
        strokeWidth="0.5"
        d="M60,16 c0,20,-20,40,-40,40 c20,0,40,20,40,40 c0,-20,20,-40,40,-40 c-20,0,-40,-20,-40,-40 z"
        ></path>
    </svg>
  </div>



      {/* Transition Star */}
      <div className="absolute cursor-pointer bottom-[-45] z-90">
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
