import React from "react";
import { useState } from "react";

interface MoreProjectsProps {
  id?: string;
}

const MoreProjects: React.FC<MoreProjectsProps> = ({ id }) => {
  useState(true);
  return (
    <section id={id} className="relative flex-row w-full h-[20vh] bg-[#C7F24F] font-light z-0">
      <div className="absolute flex flex-col items-center justify-center w-full h-full z-102">
        <h3 className="text-black text-center text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] lowercase font-[Neue Regrade]">
          Find my most recent{" "}
          <span className="inline sm:hidden">
            <br />
          </span>
           projects below
        </h3>
      </div>

      {/* Transition Star */}
      <div className="absolute cursor-pointer sm:right-[40%] md:right-[45%] lg:right-[] top-[-2%] transform -translate-x-1/2 -translate-y-1/2 justify-center z-90">
        <svg width="60" height="60" xmlns="http://www.w3.org/2000/svg">
          <path
            id="star-clip-transition"
            fill="white"
            d="M20,5 c0,20,-10,30,-20,30 c10,0,20,10,20,30 c0,-20,10,-30,20,-30 c-10,0,-20,-10,-20,-30 z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default MoreProjects;