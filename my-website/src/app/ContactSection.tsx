"use client";

import React from "react";

const ContactSection = () => {

const handleClick = () => {
  window.open("https://www.linkedin.com/in/igor-boechat-dev");
}


const handleClick1 = () => {
  window.open("https://www.github.com/igorboechat1");
}

/* const handleClick2 = () => {
  const link = document.createElement('a');


  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
 */
  return (
    <section id="contact" className="contacts">
      <h1 className="contacts-title">CONTACT ME</h1>
      <h2 className="contacts-subtitle">AVAILABLE FOR WORK</h2>
      
      <div className="four-pointed-star-contact">
    <svg width="40" height="80" xmlns="http://www.w3.org/2000/svg">
          <path id="star-clip-contact" fill="white"  d="M20,5 c0,20,-10,30,-20,30 c10,0,20,10,20,30 c0,-20,10,-30,20,-30 c-10,0,-20,-10,-20,-30 z"></path>
        </svg>
      </div>

      <button className="button-linkedin"onClick={handleClick}>LINKEDIN</button>
      <button className="button-github"onClick={handleClick1}>GITHUB</button>
      {/* <button className="button-cv" onClick={handleClick2}>CV</button> */}
    </section>
  );
};

export default ContactSection;
