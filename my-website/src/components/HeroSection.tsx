import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center p-1">
      <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/background.png')" }}
      >
        {/* ShapeHero Image */}
        <div className="absolute inset-0 z-10 flex items-center justify-center scale-100 sm:scale-100 md:scale-100 lg:scale-100">
          <Image
            id="shape-hero"
            src="/shapeHero.png"
            alt="Hero Shape"
            className="object-contain"
            width={1200}
            height={1200}
          />
        </div>

        {/* Text Content */}
        <div className="relative z-20 flex flex-col items-center justify-center text-[#ededed] mt-40 mb-40 sm:px-8 md:px-16 lg:px-32 xl:px-40" style={{ lineHeight: '0.8' }}>
          <h1 className="text-igor sm:text-igor md:text-large lg:text-res justify-center font-primary min-w-full text-center opacity-90 leading-tight" style={{ lineHeight: '0.9' }}>
            HELLO,<br /> I&#39;M IGOR
          </h1>
          <h1 className="sm:text-digtal md:text-res lg:text-res text-digital font-primary opacity-90 text-right">
            DIGITAL
          </h1>
          <h1 className="sm:text-creative md:text-large lg:text-res text-creative font-primary opacity-90 text-right">
            CREATIVE
          </h1>
          <h1 className="sm:text-dev md:text-large lg:text-res text-dev font-primary opacity-90 text-right">
            DEVELOPER
          </h1>
        </div>
      </section>
    </section>
  );
};

export default HeroSection;
