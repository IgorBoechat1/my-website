'use client';
import React from 'react';
import ThreeDViewer from './ThreeDViewer';

const AboutSection = () => {

  return (
    <section id="about" className="relative flex flex-col items-center justify-center  bg-transparent h-[75vh] w-full">
    {/* Title */}
    <div className="absolute flex flex-col  items-center w-[80%] z-102 ">
    <h1 className="relative font-light text-[90px] uppercase text-center transform scale-x-[120%] mb-10 scale-y-[120%] z-150 mt-[-100px] leading-tight" style={{ lineHeight: '0.8' }}>
      A BIT MORE<br />ABOUT ME
      
    </h1>
  
    {/* Content */}
      <h3 className="font-[Neue Regrade] text-[12px] text-center uppercase z-50">
        A constantly evolving creative, exploring the combination of visual art and programming. Currently delving into full-stack development.<br />
        Combining visual acuity and programming, constantly seek to innovate, creating digital solutions that unite aesthetics and technology.
      </h3>
      <div className="relative cursor-pointer top-[-220] left-[55] z-90">
        <svg width="40" height="80" xmlns="http://www.w3.org/2000/svg">
          <path
            id="star-clip-transition"
            fill="green"
            d="M20,5 c0,20,-10,30,-20,30 c10,0,20,10,20,30 c0,-20,10,-30,20,-30 c-10,0,-20,-10,-20,-30 z"
          ></path>
        </svg>
      </div>
    
        <div className="absolute flex justify-center items-center w-full h-[60vh] z-0 bg-transparent">
        

<ThreeDViewer modelPath="/scanIgor.glb" />
        
</div>
      </div>
    </section>
  );
};

export default AboutSection;
