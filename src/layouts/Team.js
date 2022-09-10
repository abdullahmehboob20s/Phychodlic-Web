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
          <TeamCard
            title="Psychonauts T"
            img="images/team-img-1.png"
            desc="Parents' the scarfs, according been typically at big these posts, that was can if your not, next the a an packed."
          />
          <TeamCard
            title="Psychonauts T"
            img="images/team-img-2.png"
            desc="Parents' the scarfs, according been typically at big these posts, that was can if your not, next the a an packed."
          />
          <TeamCard
            title="Psychonauts T"
            img="images/team-img-3.png"
            desc="Parents' the scarfs, according been typically at big these posts, that was can if your not, next the a an packed."
          />
        </div>
      </div>
    </div>
  );
}

export default Team;
