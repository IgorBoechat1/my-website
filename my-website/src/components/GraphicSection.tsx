'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const DefaultSection = () => {
  return (
    <div>
      <div className="four-pointed-star-graphic">
        <svg width="40px" height="70px" xmlns="http://www.w3.org/2000/svg">
          <path id="star-clip-graphic" fill="lightgreen" d="M20,16 c0,20,-10,30,-20,30 c10,0,20,10,20,30 c0,-20,10,-30,20,-30 c-10,0,-20,-10,-20,-30 z"></path>
        </svg>
      </div>
    </div>
  );
};

const GraphicsSection = () => {
  const router = useRouter();
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
