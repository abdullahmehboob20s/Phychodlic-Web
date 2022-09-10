import React from "react";

function Hero() {
  return (
    <div className="h-screen max-h-[900px] flex items-center">
      <div className="container flex items-center">
        <div className="flex-1">
          <h1 className="text-6xl text-white font-medium capitalize leading-[1.2] mb-12">
            Celebrating the <br /> work and
            <span className="text-green"> healling</span> <br /> of psychodlic
          </h1>

          <button className="gradient-button py-4 px-8 text-sm 2xl:text-base">
            JOIN EARLY ACCESS
          </button>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img src="images/heart.png" alt="" className="w-[60%] 2xl:w-auto" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
