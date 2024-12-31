'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";

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
    <section className="graphics overflow-hidden relative min-h-[70vh] bg-white z-80 p-0">
      {/* Star for Transition */}
      <div className="absolute left-0 top-[-60px] w-full h-auto flex justify-center z-10">
        <svg
          width="100"
          height="100"
          xmlns="http://www.w3.org/2000/svg"
          className="scale-[200%] sm:scale-[250%]  md:scale-[300%] opacity-50"
        >
          <path
            fill="#C7F24F"
            strokeWidth="0.5"
            d="M60,16 c0,20,-20,40,-40,40 c20,0,40,20,40,40 c0,-20,20,-40,40,-40 c-20,0,-40,-20,-40,-40 z"
          ></path>
        </svg>
      </div>

      {/* Buttons */}
      <div className="buttons relative flex flex-col items-center justify-center min-h-[70vh] w-full">
        {/* /DEV Button */}
        <button
          className="button-dev bg-white w-[180px] mt-14 text-black drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] h-[88px] text-5xl font-[100] border-2 border-black transition-all duration-500 hover:bg-black hover:text-white"
          onClick={() => handleNavigation("/dev")}
        >
          /DEV
        </button>

        {/* CREATIVE Button */}
        <button
          className="button-creative bg-white w-[186px] text-black h-[88px] rounded-[20px] mt-[5vh] text-4xl font-light font-secondary border-2 border-black transition-all duration-500 hover:bg-[#C7F24F] hover:text-6xl hover:font-primary sm:mt-[5vh] lg:mt-[10vh]"
          onClick={() => handleNavigation("/creative")}
        >
          CREATIVE
        </button>
      </div>

      {/* Bottom Star for Balance */}
      <div className="absolute right-[-40px] bottom-[-45px] transform scale-[100%] z-10">
        <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#E8474D"
            strokeWidth="1"
            d="M60,16 c0,20,-20,40,-40,40 c20,0,40,20,40,40 c0,-20,20,-40,40,-40 c-20,0,-40,-20,-40,-40 z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default GraphicsSection;
