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
    <div
      className={`menu-page absolute w-full h-[30vh] top-0 left-0 bg-[#C7F24F] transition-all duration-500 ease-out ${
        isVisible ? "transform translate-y-0 opacity-100 mt-24" : "transform translate-y-[-100%] opacity-0"
      }`}
    >
      <ul className="navbar-menu-items flex h-full flex-col items-end p-8 space-y-12 text-26 ">
        <button className="navbar-menu-item text-black hover:text-gray-600" onClick={scrollToAbout}>
          ABOUT
        </button>
        <button className="navbar-menu-item text-black hover:text-gray-600" onClick={scrollToProjects}>
          PROJECTS
        </button>
        <button className="navbar-menu-item text-black hover:text-gray-600" onClick={scrollToContact}>
          CONTACT
        </button>
      </ul>
    </div>
  );
};

export default MenuPage;
