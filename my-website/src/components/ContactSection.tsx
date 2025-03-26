"use client";

import React from "react";
import { useState } from "react";

interface ContactSectionProps {
    id?: string;
  }


const ContactSection: React.FC<ContactSectionProps> = ({ id }) => {
  const [showFirstScreen, setShowFirstScreen] = useState(true);
  const handleClick = () => {
    window.open("https://www.linkedin.com/in/igor-boechat-dev");
  };

  const handleClick1 = () => {
    window.open("https://www.github.com/igorboechat1");
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV_IgorBoechat.pdf';
    link.download = 'CV_IgorBoechat.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id={id} className="flex  items-center justify-center relative h-screen bg-[#C7F24F]">
      {/* Title */}
      <h1 className="absolute top-24 text-6xl sm:text-7xl md:text-8xl font-light text-black text-center uppercase w-full">
        CONTACT ME
      </h1>
      {/* Subtitle */}
      <h3 className="absolute top-48 text-2xl sm:text-xl md:text-2xl font-light text-black text-center uppercase w-full">
        AVAILABLE FOR WORK
      </h3>

      {/* Star */}
      <div className="absolute top-56 left-1/2 transform -translate-x-1/2 scale-125">
        <svg width="40" height="80" xmlns="http://www.w3.org/2000/svg">
          <path
            id="star-clip-contact"
            fill="white"
            d="M20,5 c0,20,-10,30,-20,30 c10,0,20,10,20,30 c0,-20,10,-30,20,-30 c-10,0,-20,-10,-20,-30 z"
          ></path>
        </svg>
      </div>

      <div className="relative flex flex-col items-center justify-center mt-36 scale-[2]">

      {/* Buttons */}
      <button
        className="absolute top-[7vh] transform -translate-y-1/2 mt-5  sm:text-2xl md:text-3xl font-light text-black hover:text-black-300 bg-transparent border-2 border-transparent px-4 py-2"
        onClick={handleClick}
      > 
        LINKEDIN
      </button>
      <button
        className="absolute top-[0] transform -translate-y-1/2 mt-5 sm:text-2xl md:text-3xl font-light text-black hover:text-black-300 bg-transparent border-2 border-transparent px-4 py-2"
        onClick={handleClick1}
      >
        GITHUB
      </button>

      <button className="absolute  transform -translate-y-1/2  sm:text-2xl md:text-3xl font-light text-black hover:text-black-300 bg-transparent border-2 border-transparent px-4 py-2" 
      onClick={handleDownloadCV}
      >
        CV</button> 
        </div>
    </section>
  );
};

export default ContactSection;



