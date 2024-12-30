'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Star from "../components/Star";

const DefaultSection = () => {
  const stars = [
    {
      path: "M20,16 c0,20,-10,30,-20,30 c10,0,20,10,20,30 c0,-20,10,-30,20,-30 c-10,0,-20,-10,-20,-30 z",
      position: { left: "15", top: "-45" },
      scale: 6,
      strokeWidth: 1,
      color: "lightgreen",
    },
    // Add more stars as needed
  ];

  return (
    <div>
      <Star stars={stars} svgWidth={100} svgHeight={100} />
    </div>
  );
};

const GraphicsSection = () => {
  const router = useRouter();
  const [animationClass, setAnimationClass] = useState("");

  const handleNavigation = (url: string) => {
    if (animationClass === "page-exit") {
      setAnimationClass("");
    }
    setAnimationClass("page-exit");
    setTimeout(() => {
      router.push(url);
    }, 500); // Duration of the animation
  };

  return (
    <section className="graphics relative min-h-[80vh] bg-[#e6e6e6] z-80 px-4 sm:px-8 md:px-16">
      <div className="buttons absolute flex flex-col items-center mt-[65vw] w-full sm:mt-[50vw] md:mt-[30vw]">
        {/* /DEV Button */}
        <button
          className="button-dev bg-white w-[170px] text-black drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] h-[80px] text-3xl font-[100] border-2 border-black transition-all duration-500 hover:bg-black hover:text-white"
          onClick={() => handleNavigation("/dev")}
        >
          /DEV
        </button>
        
        {/* CREATIVE Button */}
        <button
          className="button-creative bg-white w-[200px] text-black h-[80px] rounded-[20px] mt-[10vh] text-4xl font-light border-2 border-black transition-all duration-500 hover:bg-[#C7F24F] hover:text-white sm:mt-[5vh] lg:mt-[10vh]"
          onClick={() => handleNavigation("/creative")}
        >
          CREATIVE
        </button>
      </div>

      <DefaultSection />
    </section>
  );
};

export default GraphicsSection;
