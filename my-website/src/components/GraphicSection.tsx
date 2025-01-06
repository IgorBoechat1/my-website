'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const GraphicsSection = () => {
  const router = useRouter();
  const [isExiting, setIsExiting] = useState(false); // Manage the exit animation

  const handleNavigation = (url: string) => {
    setIsExiting(true); // Trigger the exit animation
    setTimeout(() => {
      router.push(url); // Navigate after the animation
    }, 500); // Duration of the animation
  };

  return (
    <section
      className={`graphics relative overflow-  min-h-[70vh] bg-white z-80 p-0 transition-transform duration-500 ${isExiting ? "translate-x-full" : ""}`}
    >
      {/* Star for Transition */}
      <div className="absolute left-[-20] top-0 w-full h-auto flex justify-center z-80">
        <svg
          width="100"
          height="225"
          xmlns="http://www.w3.org/2000/svg"
          className="scale-[200%] sm:scale-[250%] md:scale-[200%] opacity-100"
        >
          <path
            fill="#C7F24F"
            strokeWidth="0.5"
            d="M60,16 c0,20,-20,40,-40,40 c20,0,40,20,40,40 c0,-20,20,-40,40,-40 c-20,0,-40,-20,-40,-40 z"
          ></path>
        </svg>
      </div>

      {/* Buttons */}
      <div className="buttons relative flex flex-col items-center justify-center min-h-[90vh] w-full">
        {/* /DEV Button */}
        <button
          className="button-dev bg-white w-[180px] mt-14 text-black drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] h-[88px] text-5xl font-[100] border-2 border-black transition-all duration-500 hover:bg-black hover:text-white"
          onClick={() => handleNavigation("/dev")}
        >
          /DEV
        </button>

        {/* CREATIVE Button */}
        <button
          className="button-creative bg-white w-[186px] text-black h-[88px] rounded-[20px] mt-[5vh] text-4xl font-light font-secondary border-2 border-black transition-all duration-500 hover:bg-[#C7F24F] hover:text-5xl hover:font-primary sm:mt-[5vh] lg:mt-[10vh]"
          onClick={() => handleNavigation("/creative")}
        >
          CREATIVE
        </button>
      </div>

      
    </section>
  );
};

export default GraphicsSection;
