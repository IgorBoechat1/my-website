"use client"; // Ensures this component is rendered on the client side

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import MenuPage from "./MenuPage";

export const Navbar: React.FC = () => {
  const [isToggled, setIsToggled] = useState(false);
  const burgerRef = useRef<HTMLDivElement>(null);
  const router = useRouter(); // Hook for navigation

  const handleClick = () => {
    setIsToggled((prevState) => !prevState);
  };

  const handleNavbarClick = () => {
    router.push("/"); // Redirects to the homepage
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        burgerRef.current &&
        !burgerRef.current.contains(event.target as Node) &&
        !document.querySelector(".menu-page")?.contains(event.target as Node)
      ) {
        setIsToggled(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section id="navbar" className="navbar fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black bg-opacity-50">
      <button
        className="navbar-content fixed top-0 left-0 text-white font-light mt-8 ml-12"
        onClick={handleNavbarClick}
      >
        igor b.
      </button>

      {/* Container for navbar items */}
      <div className="navbar-container flex flex-col justify-between items-end w-full h-24 px-4 sm:px-8 md:px-16">
        {/* Burger icon aligned to the right */}
        <div
          ref={burgerRef}
          className={`burger absolute flex flex-col mt-10 items-center justify-between w-16 h-6 transition-all duration-500 ease-in-out z-50 ${isToggled ? "transform" : " scale-[110%]"}`}
          onClick={handleClick}
          aria-expanded={isToggled}
          role="button"
          tabIndex={0}
        >
          <div
            className={`burger-line w-9 h-0.5 transition-transform duration-300 ease-in-out ${isToggled ? "bg-black transform rotate-45 translate-y-2" : "bg-white"}`}
          ></div>
          <div
            className={`burger-line w-9 h-0.5 transition-opacity duration-500 ease-in-out ${isToggled ? "opacity-0" : "bg-white"}`}
          ></div>
          <div
            className={`burger-line w-9 h-0.5 transition-transform duration-300 ease-in-out ${isToggled ? "bg-black transform -rotate-45 -translate-y-2" : "bg-white"}`}
          ></div>
        </div>

        {/* MenuPage Component - Conditional rendering */}
        {isToggled && <MenuPage isVisible={isToggled} setIsToggled={setIsToggled} />}
      </div>
    </section>
  );
};

export default Navbar;