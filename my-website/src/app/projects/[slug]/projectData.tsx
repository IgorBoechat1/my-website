'use client'; // This ensures this component is treated as a client-side component.

import 'react-multi-carousel/lib/styles.css';

export interface Project {
  title: string;
  description: string;
  date: string;
  techStack: string;
  imageUrl: string[];
  backgroundStyle: string;
  readme: string;
  slug: string;
  videoUrl?: number;
}

// Mock project data
export const projectData: Record<string, Project> = {
  foodball: {
    title: "FOODBALL",
    description: "Game developed during 1 week of Code For All bootcamp. Using Java, Simple GFX",
    date: "OCTOBER 2024",
    techStack: "JAVA WEB DEVELOPMENT",
    imageUrl: ["/foodball_project.png", "/food2.png", "/food3.png", "/food4.png", "/food5.png"],
    backgroundStyle: "transparent",
    readme: `
# FOODBALL

Game developed during 1 week of Code For All bootcamp. Using Java, Simple GFX.

## Description

This project was developed as part of a one-week bootcamp at Code For All. The game is built using Java and Simple GFX.

## Features

- **Gameplay:** Engaging and interactive gameplay mechanics.
- **Graphics:** Simple yet effective graphics using Simple GFX.
- **Development Time:** Completed within one week.

## Technologies Used

- **Java**
- **Simple GFX**

## Outcome

This project demonstrates the ability to quickly develop a functional game within a limited timeframe, showcasing skills in Java programming and game development.
`,
    slug: "foodball",
  },

  "fashion-film-hotel-tipografia-do-conto": {
    title: "Fashion Film - Hotel Tipografia do Conto",
    description: "A graduation project showcasing garments produced by ESAD Fashion students in Porto, Portugal, integrating creativity, technique, and visual aesthetics.",
    date: "May 2023",
    techStack: "Video Production Cinematography",
    imageUrl: ["/fashion2.png", "/fashion3.png", "/fashion4.png", "/fashion5.png", "/fashion1.JPG"],
    videoUrl: 1045418067,
    backgroundStyle: "transparent",
    readme: `
# Fashion Film - Hotel Tipografia do Conto

This fashion film was created as a graduation project for the Escola Superior de Artes e Design (ESAD) in partnership with the Fashion program. The goal was to showcase the garments produced by the students that year, integrating creativity, technique, and visual aesthetics into a high-quality video.

The chosen location was the iconic Hotel Tipografia do Conto, in Porto, Portugal, whose unique architecture and design provided the perfect setting to highlight the fashion creations.

## Personal Contributions

In this project, I took on the following responsibilities:
- **Direction:** Conceiving the visual narrative and guiding the creative process.
- **Cinematography:** Operating the camera and defining compositions.
- **Lighting:** Planning and executing the lighting to create atmosphere and emphasize the details of the garments.
- **Post-Production:** Video editing, including color grading and final adjustments.

## Equipment Used

- **Camera:** Sony a6300
- **Lens:** 50mm

This fashion film is a synthesis of my technical and artistic knowledge, showcasing my ability to merge fashion, cinema, and visual storytelling to create an immersive and captivating experience.
`,
    slug: "fashion-film-hotel-tipografia-do-conto",
  },

  hecatrail: {
    title: "Hecatrail - Safety and Interaction in Mountain Trails",
    description: "Hecatrail is a mobile app developed in 3 days during the Code for All bootcamp, aiming to improve safety in rural and mountainous areas with real-time alerts for trail visitors.",
    date: "DECEMBER 2024",
    techStack: "React TypeScript TailwindCSS Leaflet IPMA",
    imageUrl: ["/hecatrail.png", "/map.png", "/radialmenu.png"],
    videoUrl: 1045662798,
    backgroundStyle: "transparent",
    readme: `
# Hecatrail - Safety and Interaction in Mountain Trails

Hecatrail was developed as part of the final project for the Code for All “MakeITReal” bootcamp, with the goal of creating an application that would have a positive social impact within just three days. Inspired by one of Portugal’s significant challenges — safety in rural and mountainous areas — we created a solution that combines trails and rural tourism with technology. Our application won 1st place at the event.

## Features

Hecatrail is an application that allows:
- Real-time alerts and reports during trail visits.
- Animal sightings.
- Fires.
- Closed trails.
- Simplified communication in emergencies, allowing users to directly call emergency services with one click.

## Technologies Used

- **Frontend:** React, TypeScript, Tailwind CSS
- **Maps and Geolocation:** Leaflet
- **Database:** Utilization of additional frameworks to create an efficient and responsive online database

## Project Differentiators

- **Interactivity:** Real-time reporting and alert system.
- **Usability:** Intuitive and responsive interface for all users.
- **Social Impact:** Promotes safety and environmental preservation, facilitating quick actions in critical situations like fires and emergencies.

## Main Objective

To make mountains safer and more accessible for everyone by integrating technology and collective awareness, bridging the gap between those who live in the mountains and those who visit them. Hecatrail is an example of how programming can be used to solve real-world problems and create solutions that benefit both society and the environment.
`,
    slug: "hecatrail",
  },

  "fundacao-gramaxo": {
    title: "Fundação Gramaxo",
    description: "Institutional videos showcasing the architectural work of Álvaro Siza at Fundação Gramaxo, emphasizing its relationship with nature and the surrounding environment.",
    date: "January 2024 - December 2024",
    techStack: "Videography Production Architecture",
    imageUrl: ["/FG_project.jpg", "/fg1.jpg", "/fg2.jpg", "/fg3.jpg"],
    videoUrl: 1045674323,
    backgroundStyle: "transparent",
    readme: `
# Work Experience

I worked as a photographer and videographer for Fundação Gramaxo from January to December 2024. During this period, I developed various photography and video projects across different aspects such as events, conferences, live shows, press, social media, and other streams.

## Equipment and Tools

- **Camera:** FujiFilm XS10
  - **Lenses:** 50mm f/2.0 and 15-45mm
- **Video Editing Software:** DaVinci Resolve
- **Audio Recording and Post-Production:** Utilized for recording and enhancing audio quality.

## Responsibilities

- Capturing high-quality photos and videos for various events and purposes.
- Planning and disseminating new content ideas during brainstorming sessions.
- Script writing and directing video productions.
- Handling post-production tasks to ensure polished final products.

## About Fundação Gramaxo

Fundação Gramaxo is a renowned organization based in Maia, Portugal. The foundation has a rich history and is dedicated to promoting cultural, educational, and social initiatives within the community. Fundação Gramaxo organizes various events, conferences, and live shows, serving as a hub for creativity and innovation.

## Projects and Contributions

- **Events:** Documented numerous events, capturing key moments and highlights.
- **Conferences:** Produced high-quality videos for conferences, ensuring clear and engaging content.
- **Live Shows:** Created dynamic videos for live shows, capturing the energy and essence of the performances.
- **Press and Social Media:** Developed visual content for press releases and social media campaigns, enhancing the foundation's online presence.
- **Brainstorming and Content Planning:** Played a crucial role in generating and executing new ideas, contributing to the foundation's creative process.
- **Script Writing and Directing:** Led the script writing and directing efforts for various video productions, ensuring a cohesive and professional final product.
`,
    slug: "fundacao-gramaxo",
  },

  carrie: {
    title: "Title Scene - Carrie",
    description: "Academic project recreating the unsettling atmosphere of the iconic scene from 'Carrie' with viscous liquids and mannequin to emphasize discomfort and strangeness.",
    date: "2022",
    techStack: "Creative Direction Cinematography Editing",
    imageUrl: ["/carrie.png", "/carrie1.png", "/carrie2.png", "/carrie3.png", "/carrie4.png"],
    videoUrl: 1045670173,
    backgroundStyle: "transparent",
    readme: `
# Title Scene - Carrie

This academic project aimed to create a Title Scene for the film "Carrie", focusing on recreating the disturbing and unsettling atmosphere of the iconic scene where the protagonist's dress is stained with blood.

## Techniques Used

To achieve this, we used mixed techniques with viscous liquids and a mannequin, exploring textures and smooth movements to convey feelings of strangeness and discomfort. The art direction was carefully planned, with close-ups and framing that captured the visual impact of the scene. Additionally, an in-depth typography study was conducted to recreate the aesthetic of the film’s period, ensuring visual and narrative fidelity.

## Personal Contributions

- **Creative Direction:** Concept and development of the overall project aesthetic.
- **Cinematography:** Camera operation, capturing close-ups and smooth movements to highlight the details of the scene.
- **Editing and Post-Production:** Visual treatment, addition of effects, and integration of typography to compose the final Title Scene.

## Equipment Used

- **Camera:** Sony a6300
- **Lens:** 50mm

## Outcome

This project explored the combination of visual and narrative techniques to convey specific emotions, demonstrating the ability to translate symbolic elements of the film into an impactful visual language. The use of physical materials and directorial choices emphasized the discomforting sensation characteristic of "Carrie".
`,
    slug: "carrie",
  },

  muratto: {
    title: "Muratto - Sustainable Interior Design",
    description: "A captivating release video for Muratto's 2024 wall design collection. Muratto, a renowned Portuguese brand in natural surface design, is celebrated for its dynamic and innovative cork wall coverings. This project encompassed scripting, filming, and editing to highlight their latest offerings.",
    date: "DECEMBER 2023",
    techStack: "DIRECTING FILMING EDITING",
    imageUrl: ["/muratto.png", "/cork2.png", "/cork1.png", "/cork3.png"],
    videoUrl: 1045417578,
    backgroundStyle: "transparent",
    readme: `
## Overview
- This document outlines the details of a creative collaboration with Muratto, a Portuguese brand recognized for its innovative and sustainable cork-based design solutions. The project involved producing three videos to showcase two of their iconic collections: XL Panels and the Corkbark Collection.

## About Muratto
Muratto is a prestigious name in the realm of cork wall coverings, celebrated for transforming natural cork into exceptional design pieces. With a strong emphasis on sustainability and aesthetics, the brand redefines interior design with versatile, eco-friendly solutions. The XL Panels and Corkbark Collection epitomize their dedication to combining nature and innovation, offering sophisticated yet sustainable decor options.

## Project Details
Conceptualization & Direction:
This project was conceptualized and directed by [Your Name], driving the creative vision and overall execution. Working with two talented partners, I led the development of the project’s narrative, ensuring that the final output resonated with Muratto's identity and brand values.

## Focus Collections:

- XL Panels: Featuring their modern, large-format designs that bring bold style and versatility to interior spaces.
- Corkbark Collection: Highlighting the raw, organic elegance of cork, emphasizing its natural textures and unique aesthetic appeal.
`,
    slug: "muratto",
  },

  "air-traffic-simulator": {
    title: "Flight Radar - Air Traffic",
    description: "This project is an interactive air traffic simulator that generates fictitious flights over Europe and displays them on a dynamic map. It uses random coordinates to simulate aircraft movement and allows detailed information about each plane to be viewed.",
    date: "DECEMBER 2024",
    techStack: "React.js, Next.js, Tailwind CSS, Leaflet.js, React-Leaflet, Framer Motion",
    imageUrl: [ "/flight2.png", "/flight3.png", "/flight.png"  ],
    backgroundStyle: "transparent",
    readme: `
# Flight Radar - Air Traffic Simulator

This project is an interactive air traffic simulator that generates fictitious flights over Europe and displays them on a dynamic map. It uses random coordinates to simulate aircraft movement and allows detailed information about each plane to be viewed.

## Main Features:

- **Dynamic Map:** Displays aircraft locations.
- **Random Flight Generation:** Generates random flights over Europe.
- **Interactive Icons:** Airplane icons with random rotation.
- **Pop-up Details:** Displays aircraft details (model, callsign, origin, ICAO24).
- **Sidebar List:** List of aircraft with highlight for selection.
- **Auto-scroll:** Automatically scrolls to the selected aircraft.
- **Toggle Data:** Toggle between simulated and real data (future).

## Technologies Used

- **Frontend:** React.js, Next.js, Tailwind CSS
- **Maps and Geolocation:** Leaflet.js, React-Leaflet
- **Animations:** Framer Motion

## How It Works

The system generates fictitious aircraft with random coordinates within Europe. Each plane has a specific model, ICAO24 code, and dynamically generated callsign. The planes are displayed on the interactive map with icons that rotate randomly. Clicking on a plane displays a pop-up with its details. The sidebar allows selecting and viewing the aircraft on the map.

## Next Steps

- **Integration with Real Data:** Integrate with real air traffic data.
- **Dynamic Updates:** Dynamic update of aircraft positions.
- **Flight Statistics:** Display statistics about the flights.
- **Expansion:** Expand to other regions beyond Europe.
`,
    slug: "air-traffic-simulator",
  },

  "kinetic-text-app": {
    title: "Kinetic Text App",
    description: "A dynamic 3D text visualization tool that allows users to create animated, audio-reactive text effects. Built with Next.js, Three.js, and GLSL shaders, this project offers real-time customization of text, shaders, and animations with an interactive UI.",
    date: "JANUARY 2025",
    techStack: "Next.js, Three.js, GLSL, TailwindCSS",
    imageUrl: ["/kinetic1.png", "/kinetic2.png", "/kinetic3.png", "/kinetic4.png", "/kinetic5.png", "/kinetic6.png"],
    backgroundStyle: "transparent",
    readme: `
# Kinetic Text App

Kinetic Text App is a dynamic 3D text visualization tool that allows users to create animated, audio-reactive text effects. Built with Next.js, Three.js, and GLSL shaders, this project offers real-time customization of text, shaders, and animations with an interactive UI.

## Features

- **Dynamic 3D Text Rendering:** Render user-inputted text as a 3D object in WebGL. Apply different fonts and textures to customize appearance. Utilize @react-three/fiber for optimized rendering.
- **Customizable Shader Effects:** Apply GLSL-based visual effects such as Mirror, Glass distortion, Wave motion, Line fragmentation, Randomized displacement. Fine-tune animation parameters with UI sliders.
- **Audio-Reactive Animations:** Capture microphone input via the Web Audio API. Generate real-time visual effects based on sound intensity. Modify text scale, position, and distortion with frequency data.
- **Interactive User Interface:** Dropdown menus for font and texture selection. Sliders for animation control (speed, intensity, rotation, etc.). Dark-themed UI built with TailwindCSS & Material-UI.
- **Interactive 3D Controls:** OrbitControls for easy navigation and zooming. Smooth animation updates with useFrame().

## Tech Stack

- **Frontend:** Next.js (React)
- **3D Graphics:** Three.js, @react-three/fiber
- **UI Components:** Material-UI, TailwindCSS
- **Shaders & Effects:** GLSL, Custom Fragment Shaders
- **Audio Processing:** Web Audio API
- **State Management:** React Hooks (useState, useEffect, useRef)

## How It Works

The system allows users to input text and customize its appearance and behavior using various controls. The text is rendered as a 3D object in WebGL, with customizable shaders and audio-reactive animations. Users can interact with the 3D scene using OrbitControls and adjust animation parameters in real-time.

## Next Steps

- **Enhance Shader Effects:** Add more customizable shader effects.
- **Improve Audio Processing:** Enhance the audio-reactive animations with more detailed frequency analysis.
- **Expand UI Features:** Add more controls for fine-tuning text and animation properties.
- **Optimize Performance:** Improve rendering performance for complex scenes.
`,
    slug: "kinetic-text-app",
  },

};

export default projectData;