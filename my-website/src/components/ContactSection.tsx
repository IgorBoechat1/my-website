"use client";

import React from "react";

const ContactSection = () => {
  const handleClick = () => {
    window.open("https://www.linkedin.com/in/igor-boechat-dev");
  };

  const handleClick1 = () => {
    window.open("https://www.github.com/igorboechat1");
  };

  const handleClick2 = () => {
    window.open("https://www.github.com/igorboechat1");
  };

  return (
    <section id="contact" className="flex  items-center justify-center relative h-screen bg-green-300">
      {/* Title */}
      <h1 className="absolute top-16 text-6xl sm:text-7xl md:text-8xl font-light text-white text-center uppercase w-full">
        CONTACT ME
      </h1>
      {/* Subtitle */}
      <h2 className="absolute top-56 text-lg sm:text-xl md:text-2xl font-light text-white text-center uppercase w-full">
        AVAILABLE FOR WORK
      </h2>

      {/* Star */}
      <div className="absolute top-32 left-1/2 transform -translate-x-1/2 scale-150">
        <svg width="40" height="80" xmlns="http://www.w3.org/2000/svg">
          <path
            id="star-clip-contact"
            fill="white"
            d="M20,5 c0,20,-10,30,-20,30 c10,0,20,10,20,30 c0,-20,10,-30,20,-30 c-10,0,-20,-10,-20,-30 z"
          ></path>
        </svg>
      </div>

      <div className="relative flex flex-col items-center justify-center mt-24">

      {/* Buttons */}
      <button
        className="absolute top-1/2 transform -translate-y-1/2  text-large sm:text-2xl md:text-3xl font-light text-white hover:text-black-300 bg-transparent border-2 border-transparent px-4 py-2"
        onClick={handleClick}
      >
        LINKEDIN
      </button>
      <button
        className="absolute top-3/5 transform -translate-y-1/2 text-large sm:text-2xl md:text-3xl font-light text-white hover:text-black-300 bg-transparent border-2 border-transparent px-4 py-2"
        onClick={handleClick1}
      >
        GITHUB
      </button>

      <button className="absolute bottom-2/4  transform -translate-y-1/2 text-large sm:text-2xl md:text-3xl font-light text-white hover:text-black-300 bg-transparent border-2 border-transparent px-4 py-2" 
      onClick={handleClick2}
      >
        CV</button> 
        </div>
    </section>
  );
};

export default ContactSection;
