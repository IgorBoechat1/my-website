import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="min-h-90vh  flex items-center justify-center p-1">
      <section
        id="hero"
        className="relative flex flex-col items-center justify-center min-h-screen bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/background.png')" }}
      >
        {/* ShapeHero Image */}
        <div className="absolute inset-0 z-10 flex items-center justify-center scale-100 sm:scale-110 md:scale-125 lg:scale-150">
          <Image
            src="/shapehero.png"
            alt="Hero Shape"
            className=""
            width={1200}
            height={1200}
          />
        </div>

        {/* Text Content */}
        <div className="relative z-20 flex flex-col items-center justify-center text-[#ededed] mb-10 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40" style={{ lineHeight: '0.8' }}>
          <h1 className="text-igor sm:text-igor md:text-igor lg:text-igor xl:text-igor font-primary text-right opacity-90 leading-tight" style={{ lineHeight: '0.9' }}>
            HELLO,<br /> I&#39;M IGOR
          </h1>
          <h1 className="text-digital sm:text-digtal md:text-digital lg:text-digital text-digital font-primary opacity-90 text-right">
            DIGITAL
          </h1>
          <h1 className="text-creative sm:text-creative md:text-creative lg:text-creative text-creative font-primary opacity-90 text-right">
            CREATIVE
          </h1>
          <h1 className="text-dev sm:text-dev md:text-dev lg:text-dev text-dev font-primary opacity-90 text-right">
            DEVELOPER
          </h1>
        </div>
      </section>
    </section>
  );
};

export default HeroSection;
