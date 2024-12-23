"use client";
import React from "react";

interface MenuPageProps {
  isVisible: boolean;
  setIsToggled: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuPage = ({ isVisible, setIsToggled }: MenuPageProps) => {

  const scrollToAbout = () => {
    const aboutElement = document.getElementById("about");
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: "smooth" });
      setIsToggled(false);
    }
  };

  const scrollToProjects = () => {
    const projectsElement = document.getElementById("projects");
    if (projectsElement) {
      projectsElement.scrollIntoView({ behavior: "smooth" });
      setIsToggled(false);
    }
  };

  const scrollToContact = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
      setIsToggled(false);
    }
  };

  return (
    <div className={`menu-page ${isVisible ? "visible" : ""}`}>
      <ul className="navbar-menu-items">
        <button className="navbar-menu-item" onClick={scrollToAbout}>ABOUT</button>
        <button className="navbar-menu-item" onClick={scrollToProjects}>PROJECTS</button>
        <button className="navbar-menu-item" onClick={scrollToContact}>CONTACT</button>
      </ul>
    </div>
  );
};

export default MenuPage;
