import React from "react";

function About() {
  return (
    <div>
      <div className="container flex items-center justify-center">
        <div className="box-styling max-w-[846px] w-full mx-auto rounded-2xl py-14 px-20 relative">
          <h1 className="text-center text-5xl text-white font-semibold mb-9">
            About <span className="text-green">psychodlic</span> Work
          </h1>

          <p className="text-xl 2xl:text-2xl text-white leading-[1.6] text-center">
            Are the reached both and on fly the up its together with sign
            quietly language people needed here's right congress, by on. Was
            such, we it's who this you've have the to tuned the phase.{" "}
          </p>

          <img
            src="images/about-horn.png"
            className="absolute bottom-[100%] left-[-10%] w-[300px] 2xl:w-[364px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
