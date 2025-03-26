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
          className="relative font-light  text-[85px] sm-text-[65px] uppercase text-center transform  mb-5  z-150 mt-10 leading-tight"
          style={{ lineHeight: "0.8" }}
        >
          A BIT MORE<br />ABOUT ME
        </h1>

      

        {/* Description */}
        <h3 className="font-[Neue Regrade] font-semibold text-xs mb-4 text-justify line-height-4 uppercase mt-8 max-w-[450px] z-10">
        Dynamic Junior Front-End Engineer with bachelor degree in Digital Arts and a focus on programming. Skilled in building responsive, user-friendly interfaces and developing innovative solutions. 
        Experienced in content creation and delivering engaging digital experiences. Passionate about combining design principles with technical expertise to create seamless and efficient applications.
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
