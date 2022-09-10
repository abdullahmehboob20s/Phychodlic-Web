import React from "react";

function UniqueHand() {
  return (
    <div className="pb-200px">
      <div className="container">
        <h1 className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-center text-white font-semibold mb-10 md:mb-16 lg:mb-20 xl:mb-28">
          Unique Hand <span className="text-green">Design</span>
        </h1>

        <div className="flex flex-col md:flex-row items-start md:space-x-8 space-y-8 md:space-y-0">
          <div className="md:flex-[.8] lg:flex-1 flex items-center justify-center w-full">
            <img
              src="images/cycle.png"
              className="w-full md:w-[90%] 2xl:w-[470px] max-w-[10rem] sm:max-w-[16rem] md:max-w-none"
              alt=""
            />
          </div>
          <div className="flex-1 text-center md:text-left max-w-[26rem] md:max-w-none mx-auto md:mx-0 bg-light-green-gradient rounded-2xl py-8 lg:py-10 px-8">
            <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-white mb-4 lg:mb-6 xl:mb-8">
              Unique Hand <span className="text-green">Design</span>
            </h2>

            <p className="text-xs lg:text-base xl:text-xl text-white leading-[1.5] mb-4 lg:mb-6 xl:mb-8">
              The sense he my their we time. To of, that day and her in armour
              any and avoid our move that logging accompany his parameters been
              news I essential when what holding.
            </p>
            <p className="text-xs lg:text-base xl:text-xl text-white leading-[1.5] mb-6 xl:mb-8">
              The sense he my their we time. To of, that day and her in armour
              any and avoid our.
            </p>

            <button className="gradient-button py-2 xl:py-3 px-6 text-10px lg:text-xs xl:text-base">
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UniqueHand;
