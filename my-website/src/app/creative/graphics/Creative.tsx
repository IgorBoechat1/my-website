'use client';

import React, { useEffect, useState } from "react";

const CreativeSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div
      className={`creative-section ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} transition-all duration-500 ease-in-out`}
    >
      <h2>Creative Section</h2>
      <p>Welcome to the Creative section!</p>
      <button onClick={() => window.history.back()}>Back to Graphics</button>
    </div>
  );
};

export default CreativeSection;
