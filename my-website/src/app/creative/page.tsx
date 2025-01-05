'use client';

import React, { useState, useEffect } from "react";
import Creative from "@/app/creative/Creative";

const CreativePage = () => {
  const [isEntering, setIsEntering] = useState(false);

  useEffect(() => {
    // Trigger the slide-in animation once the page has loaded
    setIsEntering(true);
  }, []);

  return (
    <div className={isEntering ? "animate-slide-left" : ""}>
      <Creative />
    </div>
  );
};

export default CreativePage;
