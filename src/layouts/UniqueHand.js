import React from "react";

function UniqueHand() {
  return (
    <div className="pb-200px">
      <div className="container">
        <h1 className="text-5xl text-center text-white font-semibold mb-28">
          Unique Hand <span className="text-green">Design</span>
        </h1>

        <div className="flex items-start space-x-8">
          <div className="flex-1 flex items-center justify-center">
            <img
              src="images/cycle.png"
              className="w-[90%] 2xl:w-[470px]"
              alt=""
            />
          </div>
          <div className="flex-1 bg-light-green-gradient rounded-2xl py-10 px-8">
            <h2 className="text-3xl font-semibold text-white mb-8">
              Unique Hand <span className="text-green">Design</span>
            </h2>

            <p className="text-xl text-white leading-[1.5] mb-8">
              The sense he my their we time. To of, that day and her in armour
              any and avoid our move that logging accompany his parameters been
              news I essential when what holding.
            </p>
            <p className="text-xl text-white leading-[1.5] mb-8">
              The sense he my their we time. To of, that day and her in armour
              any and avoid our.
            </p>

            <button className="gradient-button py-3 px-6 text-base">
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UniqueHand;
