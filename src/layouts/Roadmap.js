import RoadmapCard from "components/RoadmapCard";
import Title from "components/Title";
import React from "react";

function Roadmap() {
  return (
    <div>
      <div className="container">
        <div className="mb-12 md:mb-16 xl:mb-20">
          <Title>
            Road Map to the <span className="text-green">Moon</span>
          </Title>
        </div>

        <div className="grid grid-cols-2 w-full max-w-[836px] mx-auto relative">
          <div className="space-y-8">
            <RoadmapCard
              direction="left"
              heading="phase-01"
              title="Planning"
              desc="Quality comes first. we took our time to plan out everything and"
            />
            <RoadmapCard
              direction="left"
              heading="phase-03"
              title="Launch"
              desc="Quality comes first. we took our time to plan out everything and"
            />
            <RoadmapCard
              direction="left"
              heading="phase-05"
              title="New bicycle"
              desc="Quality comes first. we took our time to plan out everything and"
            />
          </div>
          <div className="space-y-8 pt-20 lg:pt-100px">
            <RoadmapCard
              direction="right"
              heading="phase-02"
              title="Productions"
              desc="Quality comes first. we took our time to plan out everything and"
            />
            <RoadmapCard
              direction="right"
              heading="phase-04"
              title="Minting"
              desc="Quality comes first. we took our time to plan out everything and"
            />
            <RoadmapCard
              direction="right"
              heading="phase-06"
              title="Metaverse"
              desc="Quality comes first. we took our time to plan out everything and"
            />
          </div>

          <div className="roadmap-line rounded-full absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full"></div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
