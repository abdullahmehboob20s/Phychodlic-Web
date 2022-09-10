import TeamCard from "components/TeamCard";
import React from "react";

function Team() {
  return (
    <div>
      <div className="container">
        <h1 className="text-center text-5xl text-white font-semibold mb-16">
          The Psychonauts <span className="text-green">Team</span>
        </h1>
        <div className="grid grid-cols-3 gap-10">
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </div>
      </div>
    </div>
  );
}

export default Team;
