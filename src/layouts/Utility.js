import UtilityCard from "components/UtilityCard";
import React from "react";

function Utility() {
  return (
    <div>
      <div className="container">
        <div className="mb-20">
          <h1 className="text-center text-5xl text-white font-semibold mb-8">
            The <span className="text-green">Utility</span>
          </h1>

          <p className="text-lg 2xl:text-2xl text-center text-white max-w-[30em] mx-auto leading-[1.5] font-light">
            Orthographic impasse. Commas, achieves physics of design of anyone
            in rewritten eyes would and kind goals as was state and stash of is
            how gets negatives,{" "}
          </p>
        </div>

        <div className="flex items-stretch">
          <UtilityCard
            img="images/eye-1.png"
            desc=" Line fur very history; Time. Little. Follow expected win in star were
        name on is trust,"
          />
          <UtilityCard
            img="images/eye-2.png"
            desc="Belt have subjective and each headboard won't to thousands let up intrigued ridden a the tones. "
          />
          <UtilityCard
            img="images/eye-1.png"
            desc="Line fur very history; Time. Little. Follow expected win in star were name on is trust, "
          />
          <UtilityCard
            img="images/eye-2.png"
            desc="Line fur very history; Time. Little. Follow expected win in star were name on is trust, rely this that of too, "
          />
        </div>
      </div>
    </div>
  );
}

export default Utility;
