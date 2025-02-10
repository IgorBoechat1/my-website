import React, { useEffect, useState } from "react";
import Image from "next/image";

const HeroSection = () => {
  const [showFirstScreen, setShowFirstScreen] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstScreen((prev) => !prev);
    }, 3000); // Change screen every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-[70vh] flex items-center justify-center p-0">
      <section
        id="hero"
        className="relative min-h-screen mt-16 flex flex-col items-center justify-center bg-fixed bg-center bg-cover"
      >
        {/* ShapeHero Image */}
        <div className="absolute inset-0 z-10 flex items-center justify-center scale-100 sm:scale-120 md:scale-100 lg:scale-100">
          <Image
            id="shape-hero"
            src="/shapeHero.png"
            alt="Hero Shape"
            className="object-contain"
            width={1200}
            height={1200}
          />
        </div>

        {/* First Screen */}
        <div
          className={`relative z-20 flex mt-12 flex-col items-center justify-center text-[#ededed] min-h-[60vh] ${
            showFirstScreen ? "block" : "hidden"
          }`}
          style={{ lineHeight: "0.8" }}
        >
          <h1 className="text-igor sm:text-5xl md:text-6xl lg:text-dev justify-center font-primary min-w-full text-center opacity-90 leading-tight" style={{ lineHeight: "0.9" }}>
            HELLO,
          </h1>
          <h1 className="text-igor sm:text-5xl md:text-6xl lg:text-dev justify-center font-primary min-w-full text-center opacity-90 leading-tight" style={{ lineHeight: "0.9" }}>
            I&apos;M IGOR
          </h1>
        </div>

        {/* Second Screen */}
        <div
          className={`relative z-20 flex sm:mt-4 lg:mt-12 flex-col items-center justify-center text-[#ededed] min-h-screen ${
            showFirstScreen ? "hidden" : "block"
          }`}
          style={{ lineHeight: "0.8" }}
        >
          <h1 className="text-creative sm:text-5xl md:text-6xl lg:text-[20vw] justify-center font-primary min-w-full text-center opacity-90 leading-tight" style={{ lineHeight: "0.9" }}>
            CREATIVE
          </h1>
          <h1 className="text-digital sm:text-5xl md:text-6xl lg:text-[20vw] justify-center font-primary min-w-full text-center opacity-90 leading-tight" style={{ lineHeight: "0.9" }}>
            DIGITAL
          </h1>
          <h1 className="text-dev sm:text-5xl md:text-6xl lg:text-[20vw] justify-center font-primary min-w-full text-center opacity-90 leading-tight" style={{ lineHeight: "0.9" }}>
            DEVELOPER
          </h1>
        </div>
      </section>
    </section>
  );
};

export default HeroSection;