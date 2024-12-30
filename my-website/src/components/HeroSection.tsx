import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="min-h-80vh flex items-center justify-center p-1">
    <section
      id="hero"
      className="relative flex flex-col items-center p-1 justify-center min-h-screen bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      {/* ShapeHero Image */}
      <div className="relative inset-0 z-10 min-h-screenflex items-center justify-center scale-125">
        <Image
          src="/shapehero.png"
          alt="Hero Shape"
          className="object-cover"
          width={1200}
          height={1200}
        />
      </div>

      {/* Text Content */}
      <div className="absolute  z-20 flex flex-col items-center justify-center text-right text-[#ededed] mb-10"  style={{ lineHeight: '0.8' }}>
        <h1 className="text-igor font-primary opacity-90 text-right leading-tight" style={{ lineHeight: '0.9' }}>
          HELLO,<br /> I&#39;M IGOR
        </h1>
        <h1 className="text-digital font-primary opacity-90 text-right">
          DIGITAL
        </h1>
        <h1 className="text-creative font-primary opacity-90 text-right">
          CREATIVE
        </h1>
        <h1 className="text-dev font-primary opacity-90 text-right ">
          DEVELOPER
        </h1>
      </div>
    </section>
    </section>
  );
};

export default HeroSection;
