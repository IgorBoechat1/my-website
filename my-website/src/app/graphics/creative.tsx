'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";

const CreativeSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {

    setAnimate(true);
  }, []);

  return (
    <div className={`creative-section ${animate ? "slide-in" : ""}`}>
    <h2>Creative Section</h2>
    <p>Welcome to the Creative section!</p>
    <button onClick={() => window.history.back()}>Back to Graphics</button>
  </div>
  );
};

export default CreativeSection;
