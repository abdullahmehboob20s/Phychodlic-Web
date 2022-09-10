import React from "react";

function TeamCard({ img, title, desc }) {
  return (
    <div className="bg-light-gray shadow-team-card rounded-2xl p-10 flex flex-col items-center text-center">
      <img src={img} alt="" className="w-[70%] mb-6" />

      <h4 className="text-center text-white text-3xl font-bold mb-6">
        {title}
      </h4>

      <p className="text-center text-base text-white leading-[1.6]">{desc}</p>
    </div>
  );
}

export default TeamCard;
