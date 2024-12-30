"use client"; // Ensures this component is rendered on the client side

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import MenuPage from "./MenuPage";

export const Navbar: React.FC = () => {
  const [isToggled, setIsToggled] = useState(false);
  const burgerRef = useRef<HTMLDivElement>(null);
  const router = useRouter(); // Hook para navegação

  const handleClick = () => {
    console.log("click");
    setIsToggled((prevState) => !prevState);
  };

  const handleNavbarClick = () => {
    router.push("/"); // Redireciona para a página inicial
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
        className="navbar-content fixed top-0 left-0 text-white text-xl font-bold mt-8 ml-8"
        onClick={handleNavbarClick}
      >
        igor b.
      </button>
      <div className="navbar-container flex justify-center items-center w-full h-24">
        <div
          ref={burgerRef}
          className={`burger flex flex-col items-end justify-between w-9 h-5 transition-transform duration-300 z-50 ${isToggled ? "transform rotate-45" : ""}`}
          onClick={handleClick}
          aria-expanded={isToggled}
          role="button"
          tabIndex={0}
        >
          <div className="burger-line w-6 h-0.5 bg-white mb-1 transition-transform duration-1000 ease-in-out"></div>
          <div className="burger-line w-6 h-0.5 bg-white mb-1 transition-opacity duration-500 ease-in-out"></div>
          <div className="burger-line w-6 h-0.5 bg-white transition-transform duration-1000 ease-in-out"></div>
        </div>
        {isToggled && <MenuPage isVisible={isToggled} setIsToggled={setIsToggled} />}
      </div>
    </section>
  );
};
