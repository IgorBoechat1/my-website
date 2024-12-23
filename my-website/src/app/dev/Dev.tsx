// src/app/pages/dev/Dev.tsx
'use client';

import React from "react";
import ProjectCard from "../../components/project-section/ProjectCard";
import Star from "../../components/Star";

const DevSection = () => {
  return (
    <section className="dev">
      <ProjectCard
        title="FUNDACAO GRAMAXO"
        description="saddz<fzvsfdvs"
        date="JANUARY DECEMBER 2024"
        techStack="VIDEOGRAPHY PRODUCTION"
        imageUrl="./FG_project.jpg"
        backgroundStyle="white"
        star={<Star
          paths={["M20,5 c0,20,-10,30,-20,30 c10,0,20,10,20,30 c0,-20,10,-30,20,-30 c-10,0,-20,-10,-20,-30 z"]}
          positions={[{ left: "85px", top: "-65px" }]}
          scale={[0.2]}
          strokeWidth={[1]}
          color="black"
          svgWidth={50}
          svgHeight={80}
        />}
      />
    </section>
  );
};

export default DevSection;
