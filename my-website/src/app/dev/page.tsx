'use client';

import React, { useState, useEffect } from "react";
import DevSection from "./Dev";

const DevPage = () => {
  const [isEntering, setIsEntering] = useState(false);

  useEffect(() => {
    // Trigger the slide-in animation once the page has loaded
    setIsEntering(true);
  }, []);

  return (
    <div className={isEntering ? "animate-slide-right" : ""}>
      <DevSection />
    </div>
  );
};

export default DevPage;
