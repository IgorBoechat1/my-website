import React from "react";
import Image from "next/image";
import {Navbar} from "./Navbar";
import './globals.css';


function App() {
  return(
    <>
      
      <Navbar>
        <div className="navbar-logo"></div>igor  </Navbar>
      
      <section id="hero" className="hero">
        
        <div className="hero-background"></div>


        <div className="hero-image"></div>
        <img src='/shapehero.png' className="hero-image" />
        
        <div className="hero-content">
          <h1 className="hero-title">HELLO, <br />I'M IGOR <br /></h1>
          <h2 className="hero-creative">CREATIVE</h2>
          <h2 className="hero-developer">DEVELOPER</h2>
          <h2 className="hero-photographer">PHOTOGRAPHER</h2>
        </div>  
        
      </section>
        

        <section id="graphics" className="graphics">
          <div className="portal"></div>
          <img src='/portal.png' alt="Portal" className="portal" />
    

        <button className="button-dev">/DEV</button>
        <button className="button-creative">CREATIVE</button>


        <div className="w-32 h-32 bg-lime-400 clip-path-inward-diamond animate-blink"></div>
            


      <img src="/portalmini.png" className="portal-mini" />
      <img src="/portalmini.png" className="portal-mini1" />
      </section>
          

          <section id="about" className="aboutme">

              <h1 className="aboutme-title"><div className="portal1"></div>A BIT MORE<br />ABOUT ME<br /></h1>
              <div className="portal1"></div>
              <img src='/portal.png' alt="Portal" className="portal1" />
              <h3 className="aboutme-subtitle">A constantly evolving creative, exploring the combination of visual art and programming. Currently delving into full-stack development.<br />Combining visual acuity and programming, constantly seek to innovate, creating digital solutions that unite aesthetics and technology.</h3>

          </section>

          <section id="more-projects" className="more-projects">
          <div className="portal2"></div>
              <img src='/portalwhite.png' alt="Portal" className="portal2" />
              <h1 className="more-projects-title">find my most recent projects below</h1>
          </section>

    </>
  );
}
export default App;
