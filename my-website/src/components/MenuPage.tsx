"use client";
import React from "react";
import { useRouter } from "next/navigation";

interface MenuPageProps {
  isVisible: boolean;
  setIsToggled: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuPage = ({ isVisible, setIsToggled }: MenuPageProps) => {
  const router = useRouter(); // Hook for navigation

  const navigateToSection = (sectionId: string) => {
    router.push(`/#${sectionId}`);
    setIsToggled(false);
  };

  const scrollToAbout = () => {
    navigateToSection("about");
  };

  const scrollToProjects = () => {
    navigateToSection("projects");
  };

  const scrollToContact = () => {
    navigateToSection("contact");
  };

  return (
    <div
      className={`menu-page absolute w-full h-[100vh] top-0 left-0 bg-[#C7F24F] transition-all duration-500 ease-out ${
        isVisible ? "transform translate-y-0 opacity-100" : "transform translate-y-[-100%] opacity-0"
      }`}
    >
      <ul className="navbar-menu-items flex h-full flex-col mt-24 items-end p-8 space-y-12 text-26 md:text-[64px] ">
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