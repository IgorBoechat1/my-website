import React from "react";

const GraphicsSection = () => {
  return (
    <section id="graphics" className="graphics">
      <button className="button-dev">/DEV</button>
      <button className="button-creative">CREATIVE</button>
     


      <div className="four-pointed-star-graphic">
        <svg width="40px" height="70px" xmlns="http://www.w3.org/2000/svg">
          <path id="star-clip-graphic" fill="lightgreen" d="M20,16 c0,20,-10,30,-20,30 c10,0,20,10,20,30 c0,-20,10,-30,20,-30 c-10,0,-20,-10,-20,-30 z"></path>
        </svg>
      </div>
     
     
    </section>
  );
};

export default GraphicsSection;
