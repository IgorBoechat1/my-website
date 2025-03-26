'use client';

import React from "react";
import { useState } from "react";

interface ReelSectionProps {
    id?: string;
  }


const ReelSection: React.FC<ReelSectionProps> = ({ id }) => {
    useState(true);
  return (
    <section id={id} className="reel-section w-full flex">
      {/* Video 1 */}
      <div className="mt-8 video-container w-1/2 relative overflow-hidden">
        <div
          style={{
            padding: "56.25% 0 0 0",
            position: "relative",
          }}
        >
          <iframe
            src="https://player.vimeo.com/video/1069542966?h=7c06a4308f&badge=0&autopause=0&player_id=0&app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              filter: "grayscale(100%)",
              transition: "filter 0.5s ease",
            }}
            title="PICO SUSÁRON - Puebla de Lillo, Picos da Europa"
            onMouseEnter={(e) => (e.currentTarget.style.filter = "grayscale(0%)")}
            onMouseLeave={(e) => (e.currentTarget.style.filter = "grayscale(100%)")}
          ></iframe>
        </div>
      </div>

      {/* Video 2 */}
      <div className="mt-8 video-container w-1/2 relative overflow-hidden">
        <div
          style={{
            padding: "56.25% 0 0 0",
            position: "relative",
          }}
        >
          <iframe
            src="https://player.vimeo.com/video/1069544999?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              filter: "grayscale(100%)",
              transition: "filter 0.5s ease",
            }}
            title="PICO SUSÁRON - Puebla de Lillo, Picos da Europa"
            onMouseEnter={(e) => (e.currentTarget.style.filter = "grayscale(0%)")}
            onMouseLeave={(e) => (e.currentTarget.style.filter = "grayscale(100%)")}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ReelSection;


