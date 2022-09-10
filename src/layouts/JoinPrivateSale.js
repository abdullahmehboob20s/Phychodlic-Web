import Title from "components/Title";
import useMediaQuery from "hooks/useMediaQuery";
import React from "react";

function JoinPrivateSale() {
  const isAbove640px = useMediaQuery("(min-width : 640px)");

  return (
    <div className={isAbove640px ? null : "join-private-sales"}>
      <div className="container">
        <div
          className={`${
            isAbove640px ? "join-private-sales" : null
          } max-w-[500px] xl:max-w-[800px] w-full rounded-2xl mx-auto py-12 xl:py-16 sm:px-6 md:px-9 flex flex-col items-center text-center`}
        >
          <div className="mb-8 xl:mb-10">
            <Title>
              Join the private <span className="text-green">Sale</span>
            </Title>
          </div>

          <button className="gradient-button py-3 xl:py-4 px-6 xl:px-8 text-xs xl:text-base">
            CONNECT WALLET
          </button>
        </div>
      </div>
    </div>
  );
}

export default JoinPrivateSale;
