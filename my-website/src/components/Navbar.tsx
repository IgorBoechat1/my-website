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
    <section id="navbar" className="navbar">
      <button
        className="navbar-content"
        onClick={handleNavbarClick} // Adiciona o redirecionamento aqui
      >
        igor b.
      </button>
      <div className="navbar-container">
        <div
          ref={burgerRef}
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
};
