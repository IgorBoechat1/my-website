"use client";

import React from "react";
import ThreeDViewer from "./ThreeDViewer";

const AboutSection: React.FC = () => {

  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center bg-transparent min-h-[95vh] w-full"
    >
   
      {/* Title */}
      <div className="absolute flex flex-col items-center w-[80%] z-102">
        <h1
          className="relative font-light text-[85px] uppercase text-center transform scale-x-[120%] mb-5 scale-y-[120%] z-150 mt-10 leading-tight"
          style={{ lineHeight: "0.8" }}
        >
          A BIT MORE<br />ABOUT ME
        </h1>

      

        {/* Description */}
        <h3 className="font-[Neue Regrade] font-semibold text-xs mb-4 text-justify line-height-4 uppercase mt-12 max-w-[500px] z-10">
          A constantly evolving creative, exploring the combination of visual art and programming. 
          Currently delving into full-stack development.<br />
          Combining visual acuity and programming, constantly seeking to innovate, 
          creating digital solutions that unite aesthetics and technology.
        </h3>

        {/* 3D Viewer */}
        <div className="absolute flex justify-center items-center w-full h-[60vh] mt-36 transform z-0 bg-transparent">
          <ThreeDViewer modelPath="/igorscan.glb"  />
        </div>
      </div>

      
    </section>
  );
};

export default AboutSection;
