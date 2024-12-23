import React from "react";

const HeroSection = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-background"></div>
      <img src="/shapehero.png" className="hero-image" alt="Hero Shape" />
      <div className="hero-content">
        <h1 className="hero-title">HELLO,<br /> I'M IGOR</h1>
        <h2 className="hero-creative">DIGITAL</h2>
        <h2 className="hero-developer">CREATIVE</h2>
        <h2 className="hero-photographer">DEVELOPER</h2>
      </div>
    </section>
  );
};

export default HeroSection;
