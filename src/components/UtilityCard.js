import React from "react";

function UtilityCard({ img, desc }) {
  return (
    <div className="flex-1 relative py-10 pt-5 px-14 flex flex-col items-center">
      <img
        src="images/utility-card-bg.png"
        className="absolute top-0 left-0 w-full h-full -z-10"
        alt=""
      />
      <img src={img} className="w-28 2xl:w-32 mb-4" alt="" />
      <p className="text-white leading-[1.6] text-sm 2xl:text-lg">{desc}</p>
    </div>
  );
}

export default UtilityCard;
