'use client';

import React, { useState } from "react";

interface ScrollButtonProps {
  sections: string[]; // Array of section IDs to scroll between
}

const ScrollButton: React.FC<ScrollButtonProps> = ({ sections }) => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const handleScrollDown = () => {
    const nextIndex = (currentSectionIndex + 1) % sections.length; // Loop back to the first section
    const nextSectionId = sections[nextIndex];
    const nextSection = document.getElementById(nextSectionId);

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
      setCurrentSectionIndex(nextIndex);
    }
  };

  const handleScrollUp = () => {
    const prevIndex = (currentSectionIndex - 1 + sections.length) % sections.length; // Loop back to the last section
    const prevSectionId = sections[prevIndex];
    const prevSection = document.getElementById(prevSectionId);

    if (prevSection) {
      prevSection.scrollIntoView({ behavior: "smooth" });
      setCurrentSectionIndex(prevIndex);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 flex flex-col items-center space-y-4 z-50">
      {/* Up Button */}
      {currentSectionIndex > 0 && (
        <button
          onClick={handleScrollUp}
          className="bg-black text-white rounded-full p-4 shadow-lg hover:bg-gray-800 transition-all duration-300"
          aria-label="Scroll to previous section"
        >
          ↑
        </button>
      )}

      {/* Down Button */}
      {currentSectionIndex < sections.length - 1 && (
        <button
          onClick={handleScrollDown}
          className="bg-black text-white rounded-full p-4 shadow-lg hover:bg-gray-800 transition-all duration-300"
          aria-label="Scroll to next section"
        >
          ↓
        </button>
      )}
    </div>
  );
};

export default ScrollButton;