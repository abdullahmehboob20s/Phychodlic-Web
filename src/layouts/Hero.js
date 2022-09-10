import React from "react";

function Hero() {
  return (
    <div className="h-auto lg:h-screen max-h-[900px] flex pt-100px lg:pt-0 lg:items-center">
      <div className="container flex flex-col lg:flex-row text-center lg:text-left lg:items-center space-y-10 lg:space-y-0">
        <div className="flex-1">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl text-white font-medium capitalize  mb-8 lg:mb-12 max-w-[12em] lg:max-w-none mx-auto lg:mx-0"
            style={{ lineHeight: 1.2 }}
          >
            Celebrating the <br className="hidden lg:block" /> work and
            <span className="text-green"> healling</span>{" "}
            <br className="hidden lg:block" /> of psychodlic
          </h1>

          <button className="gradient-button py-2 lg:py-3 2xl:py-4 px-6 lg:px-8 text-10px sm:text-xs xl:text-sm 2xl:text-base">
            JOIN EARLY ACCESS
          </button>
        </div>
        <div className="lg:flex-1 flex items-center justify-center">
          <img
            src="images/heart.png"
            alt=""
            className="max-w-[14rem] md:max-w-[18rem] lg:max-w-none w-full lg:w-1/2 2xl:w-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
