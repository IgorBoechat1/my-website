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
      <Star stars={stars} svgWidth={500} svgHeight={500} />
    </div>
  );
};





const GraphicsSection = () => {  const router = useRouter();
  const [animationClass, setAnimationClass] = useState(""); // Corrected state

  const handleNavigation = (url: string) => {
    if (animationClass === "page-exit") {
      setAnimationClass(""); // Reset animation class
    }
    setAnimationClass("page-exit"); // Update the animation state
    setTimeout(() => {
      router.push(url);
    }, 500); // Duration of the animation
  };

  return (
    <section className="graphics">
      <div className="buttons">
        <button className="button-dev" onClick={() => handleNavigation("/dev")}>
          /DEV
        </button>
        <button className="button-creative" onClick={() => handleNavigation("/creative")}>
          CREATIVE
        </button>
      </div>
      <DefaultSection />
    </section>
  );
};

export default GraphicsSection;
