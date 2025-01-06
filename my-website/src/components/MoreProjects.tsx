'use client';
import React from "react";

const MoreProjects = () => {
  return (

    <section className="relative flex-row w-full h-[25vh] bg-[#C7F24F]  font-light z-0">
     

  <div className="absolute flex flex-col items-center mt-[15%] w-full z-102">
      <h3 className="absolute  text-black text-center text-[20px]  justify-center lowercase font-[Neue Regrade]">
        Find my most recent <br /> projects below
      </h3>
      </div>



      {/* Transition Star */}
      <div className="absolute cursor-pointer right-[35%] top-[-2%] transform -translate-x-1/2 -translate-y-1/2 justify-center   z-90">
        <svg width="60" height="60" xmlns="http://www.w3.org/2000/svg">
          <path
            id="star-clip-transition"
            fill="white"
            d="M20,5 c0,20,-10,30,-20,30 c10,0,20,10,20,30 c0,-20,10,-30,20,-30 c-10,0,-20,-10,-20,-30 z"
          ></path>
        </svg>
      </div>
    </section>
 
    
  );
};

export default MoreProjects;
