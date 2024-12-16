'use client';
import React from "react";
import { useState } from "react";

const MoreProjects = () => {
  const [showParticles, setShowParticles] = useState(true);

  const toggleState = () => {
    setShowParticles((prev) => !prev);
  };

  return (
    <div className="more-projects">
      <h2 className="more-projects-title">
        Find my most recent <br /> projects below
      </h2>
      <div className="four-pointed-star-more">
        <svg width="90" height="90" xmlns="http://www.w3.org/2000/svg">
          <path
            id="star-clip-more"
            fill="transparent"
            strokeWidth="0.5px"
            d="M20,16 c0,20,-10,30,-20,30 c10,0,20,10,20,30 c0,-20,10,-30,20,-30 c-10,0,-20,-10,-20,-30 z"
          ></path>
        </svg>
      </div>
      <div className="four-pointed-star-transition" onClick={toggleState} style={{ cursor: "pointer" }}>
        <svg width="40" height="80" xmlns="http://www.w3.org/2000/svg">
          <path
            id="star-clip-transition"
            fill="white"
            d="M20,5 c0,20,-10,30,-20,30 c10,0,20,10,20,30 c0,-20,10,-30,20,-30 c-10,0,-20,-10,-20,-30 z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default MoreProjects;