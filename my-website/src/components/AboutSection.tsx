'use client';
import React from 'react';
import ThreeDViewer from './ThreeDViewer';

const AboutSection = () => {
  

  

  return (
    <section id="about" className="aboutme">
      <h1 className="aboutme-title">
        A BIT MORE<br />ABOUT ME<br />
      </h1>
      <div className="aboutme-content">
        <h3 className="aboutme-subtitle">
          A constantly evolving creative, exploring the combination of visual art and programming. Currently delving into full-stack development.<br />
          Combining visual acuity and programming, constantly seek to innovate, creating digital solutions that unite aesthetics and technology.
        <div
          className="four-pointed-star-about"
        >
          <svg width="40px" height="70px" xmlns="http://www.w3.org/2000/svg">
            <path id="star-clip-graphic-about" fill="lightgreen" d="M20,16 c0,20,-10,30,-20,30 c10,0,20,10,20,30 c0,-20,10,-30,20,-30 c-10,0,-20,-10,-20,-30 z"></path>
          </svg>
        </div>
        </h3>
        <div className="aboutme-model">
          <ThreeDViewer modelPath="/scanIgor.glb" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
