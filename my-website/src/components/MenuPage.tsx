"use client"
import React, { use, useState } from "react";

interface MenuPageProps {
  isVisible: boolean;
  setIsToggled: React.Dispatch<React.SetStateAction<boolean>>;
}


const MenuPage = ({ isVisible, setIsToggled }: MenuPageProps) => {
  
  const scrollToAbout = (event: React.MouseEvent) => {
  const aboutElement = document.getElementById("about");
  
  if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: "smooth" });
      setIsToggled(false);
    }
  };

  const scrollToProjects = (event: React.MouseEvent) => {
    const projectsElement = document.getElementById("projects");
    if (projectsElement) {
      projectsElement.scrollIntoView({ behavior: "smooth" });
      setIsToggled(false);
    }

  };

  const scrollToContact = (event: React.MouseEvent) => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
      setIsToggled(false);
    }


  };
  
  
  return (
    <div className={`menu-page ${isVisible ? "visible" : ""}`}>
          <ul className="navbar-menu-items">
            <button className="navbar-menu-item" onClick={scrollToAbout}>ABOUT 
            </button>
           
            <button className="navbar-menu-item" onClick={scrollToProjects}>PROJECTS</button>
            <button className="navbar-menu-item" onClick={scrollToContact}>CONTACT</button>
          </ul>
    </div>
  );
};


export default MenuPage;

