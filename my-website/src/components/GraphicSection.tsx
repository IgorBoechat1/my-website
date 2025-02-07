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
      className={`graphics relative overflow-  min-h-[70vh] bg-white z-80  transition-transform duration-500 ${isExiting ? "translate-x-full" : ""}`}
    >
      

      {/* Buttons */}
      <div className="buttons relative flex flex-col items-center gap-24 justify-center min-h-[90vh] w-full">
        {/* /DEV Button */}
        <button
          className="button-dev bg-white w-[150px] mt-14 text-black drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] h-[68px] text-5xl font-[100] border-2 border-black transition-all duration-500 hover:bg-black hover:text-white scale-[150%] lg:scale-[200%]"
          onClick={() => handleNavigation("/dev")}
        >
          /DEV
        </button>

        {/* CREATIVE Button */}
        <button
          className="button-creative bg-white w-[168px] text-black h-[68px] rounded-[20px] mt-12 text-3xl font-light font-secondary border-2 border-black transition-all duration-500 hover:bg-[#C7F24F] hover:text-5xl hover:font-primary sm:mt-[5vh] lg:mt-[10vh] scale-[150%] lg:scale-[200%]"
          onClick={() => handleNavigation("/creative")}
        >
          CREATIVE
        </button>
      </div>

      
    </section>
  );
};

export default GraphicsSection;
