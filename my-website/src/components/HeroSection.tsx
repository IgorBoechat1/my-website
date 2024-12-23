import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-background"></div>
      <Image
        src="/shapehero.png"
        alt="Hero Shape"
        className="hero-image"
        width={800}
        height={600}
        priority
      />
      <div className="hero-content">
        <h1 className="hero-title">HELLO,<br /> I&#39;M IGOR</h1>
        <h2 className="hero-creative">DIGITAL</h2>
        <h2 className="hero-developer">CREATIVE</h2>
        <h2 className="hero-photographer">DEVELOPER</h2>
      </div>
    </section>
  );
};

export default HeroSection;
