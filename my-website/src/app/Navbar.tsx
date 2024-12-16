"use client"; // Ensures this component is rendered on the client side

import React, { useState, useRef, useEffect } from "react";
import MenuPage from "./MenuPage";
import "./globals.css";
import ProjectsSection from "./project-section/ProjectSection";


export const Navbar: React.FC = () => {

  const [isToggled, setIsToggled] = useState(false);
  const burgerRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    console.log("click");
    setIsToggled((prevState) => !prevState);
  };

  useEffect(() => {

    const handleClickOutside = (event: MouseEvent) => {

      if (burgerRef.current &&
        !burgerRef.current.contains(event.target as Node) &&
        !document.querySelector(".menu-page")?.contains(event.target as Node)) {
        setIsToggled(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);



  return (

    <section id="navbar" className="navbar">
      <div className="navbar-content">igor b.</div>
      <div className="navbar-container">
        <div ref={burgerRef}
          className={`burger ${isToggled ? "toggled" : ""}`}
          onClick={handleClick}
          aria-expanded={isToggled}
          role="button"
          tabIndex={0}
        >
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </div>
        {isToggled && <MenuPage isVisible={isToggled} setIsToggled={setIsToggled} />}

      </div>
    </section>
  );


}
