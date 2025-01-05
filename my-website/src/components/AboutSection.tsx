"use client";

import React, { useState } from "react";
import ThreeDViewer from "./ThreeDViewer";

const AboutSection: React.FC = () => {
  const [renderMode, setRenderMode] = useState<"particles" | "original">("original");

  const toggleRenderMode = () => {
    setRenderMode((prevMode) => (prevMode === "original" ? "particles" : "original"));
  };

  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center bg-transparent h-[75vh] w-full"
    >
      {/* Title */}
      <div className="absolute flex flex-col items-center w-[80%] z-102">
        <h1
          className="relative font-light text-[90px] uppercase text-center transform scale-x-[120%] mb-5 scale-y-[120%] z-150 mt-10 leading-tight"
          style={{ lineHeight: "0.8" }}
        >
          A BIT MORE<br />ABOUT ME
        </h1>

        {/* Star Button */}
        <div
          className="cursor-pointer absolute top-[35%] left-[67%] transform -translate-x-1/2 -translate-y-1/2 z-90"
          onClick={toggleRenderMode}
        >
          <svg width="40" height="80" xmlns="http://www.w3.org/2000/svg">
            <path
              id="star-clip-transition"
              fill="#C7F24F"
              d="M20,5 c0,20,-10,30,-20,30 c10,0,20,10,20,30 c0,-20,10,-30,20,-30 c-10,0,-20,-10,-20,-30 z"
            ></path>
          </svg>
        </div>

        {/* Description */}
        <h3 className="font-[Neue Regrade] font-semibold text-[13px] mb-8 text-justify line-height-4 uppercase mt-12 max-w-[500px] z-50">
          A constantly evolving creative, exploring the combination of visual art and programming. 
          Currently delving into full-stack development.<br />
          Combining visual acuity and programming, constantly seeking to innovate, 
          creating digital solutions that unite aesthetics and technology.
        </h3>

        {/* 3D Viewer */}
        <div className="absolute flex justify-center items-center w-full h-[60vh] mt-36 transform z-0 bg-transparent">
          <ThreeDViewer modelPath="/scanIgor.glb"  />
        </div>
      </div>

      {/* Bottom Star for Balance */}
      <div className="absolute center right-0 bottom-[-45] transform scale-[100%] z-10">
        <svg width="60" height="100" xmlns="http://www.w3.org/2000/svg">
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

export default AboutSection;
