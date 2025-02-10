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
    <header className="min-h-[80vh] flex items-center justify-center p-0">
      <main
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

        {/* Combined Screen for Mobile */}
        <section
          className="relative z-20 flex flex-col mt-[-20%] items-center justify-center text-[#ededed] min-h-screen lg:hidden"
          style={{ lineHeight: "0.8" }}
        >
          <h1 className="text-igor sm:text-5xl md:text-6xl lg:text-dev justify-center font-primary min-w-full text-center opacity-90 leading-tight" style={{ lineHeight: "0.9" }}>
            HELLO, I&apos;M IGOR
          </h1>
          <h1 className="text-creative sm:text-creative md:text-6xl lg:text-[25vw] justify-center font-primary min-w-full text-center opacity-90 leading-tight" style={{ lineHeight: "0.9" }}>
            CREATIVE
          </h1>
          <h1 className="text-digital sm:text-dev md:text-6xl lg:text-[25vw] justify-center font-primary min-w-full text-center opacity-90 leading-tight" style={{ lineHeight: "0.9" }}>
            DIGITAL
          </h1>
          <h1 className="text-dev sm:text-dev md:text-6xl lg:text-[20vw] justify-center font-primary min-w-full text-center opacity-90 leading-tight" style={{ lineHeight: "0.9" }}>
            DEVELOPER
          </h1>
        </section>

       {/* First Screen for Desktop */}
<section
  className={`absolute mt-[2vh] inset-0 z-20 flex flex-start items-center justify-center text-[#ededed] min-h-screen hidden lg:flex transition-opacity duration-1000 ${
    showFirstScreen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
  }`}
  style={{ lineHeight: "0.8" }}
>
  <div className="flex flex-col flex-start text-right">
    <h1 className="text-xl sm:text-xl md:text-6xl lg:text-[24vw] font-primary opacity-90 whitespace-nowrap">
      HELLO,
    </h1>
    <h1 className="text-xl sm:text-xl md:text-6xl lg:text-[24vw] font-primary opacity-90 whitespace-nowrap">
      I&apos;M IGOR
    </h1>
  </div>
</section>


        {/* Second Screen for Desktop */}
        <section
          className={`absolute mt-2 inset-0 z-20 flex-col items-center justify-center text-[#ededed] min-h-screen hidden lg:flex transition-opacity duration-1000 ${showFirstScreen ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
            }`}
          style={{ lineHeight: "0.8" }}
        >
          <h1 className="text-creative sm:text-creative  md:text-6xl lg:text-[17vw] justify-center font-primary min-w-full text-right opacity-90 leading-tight" style={{ lineHeight: "0.9" }}>
            CREATIVE
          </h1>
          <h1 className="text-digital sm:text-dev md:text-6xl lg:text-[17vw] justify-center font-primary min-w-full text-left opacity-90 leading-tight" style={{ lineHeight: "0.9" }}>
            DIGITAL
          </h1>
          <h1 className="text-dev sm:text-dev md:text-6xl lg:text-[17vw] justify-center font-primary min-w-full text-center opacity-90 leading-tight" style={{ lineHeight: "0.9" }}>
            DEVELOPER
          </h1>
        </section>

      </main>
    </header>
  );
};

export default HeroSection;