import useMediaQuery from "hooks/useMediaQuery";
import React from "react";

function About() {
  const isAbove640px = useMediaQuery("(min-width : 640px)");

  return (
    <div className={isAbove640px ? null : "box-styling"}>
      <div className="container flex items-center justify-center">
        <div
          className={`${
            isAbove640px ? "box-styling" : null
          } max-w-[580px] lg:max-w-[680px] xl:max-w-[846px] w-full mx-auto rounded-2xl py-10 lg:py-14 px-0 sm:px-12 lg:px-20 relative`}
        >
          <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl text-white font-semibold mb-4 lg:mb-6 xl:mb-8 2xl:mb-9">
            About <span className="text-green">psychodlic</span> Work
          </h1>

          <p className="text-xs sm:text-sm lg:text-base xl:text-lg 2xl:text-2xl text-white leading-[1.6] text-center">
            Are the reached both and on fly the up its together with sign
            quietly language people needed here's right congress, by on. Was
            such, we it's who this you've have the to tuned the phase.{" "}
          </p>

          <img
            src="images/about-horn.png"
            className="absolute bottom-[100%] left-1/2 -translate-x-1/2 md:translate-x-0 md:left-[-10%] w-[140px] sm:w-[180px] lg:w-[220px] xl:w-[300px] 2xl:w-[364px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
