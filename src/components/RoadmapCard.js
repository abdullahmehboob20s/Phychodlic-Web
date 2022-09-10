import React from "react";

const Line = ({ direction }) => {
  return (
    <div className="flex-[.5] flex items-center">
      <div className="flex items-center w-full">
        {direction === "left" && (
          <div className="w-full border-2 border-dotted border-green flex-1"></div>
        )}
        <div
          className={`roadmap-dot w-8 h-8 rounded-full ${
            direction === "left" ? "-mr-4" : "-ml-4"
          }`}
        ></div>
        {direction === "right" && (
          <div className="w-full border-2 border-dotted border-green flex-1"></div>
        )}
      </div>
    </div>
  );
};

function RoadmapCard({ direction, heading, title, desc }) {
  return (
    <div className="flex">
      {direction === "right" && <Line direction={direction} />}
      <div
        className={`roadmap-card flex-1 rounded-2xl p-6 ${
          direction === "left" ? "text-right" : "text-left"
        }`}
      >
        <h6 className="text-green text-base uppercase mb-2">{heading}</h6>
        <h2 className="text-2xl text-white font-medium mb-4">{title}</h2>
        <p className="text-white opacity-80 text-base leading-[1.6]">{desc}</p>
      </div>
      {direction === "left" && <Line direction={direction} />}
    </div>
  );
}

export default RoadmapCard;
