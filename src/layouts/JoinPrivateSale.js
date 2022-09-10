import React from "react";

function JoinPrivateSale() {
  return (
    <div>
      <div className="container">
        <div className="join-private-sales max-w-[800px] w-full rounded-2xl mx-auto py-16 px-9 flex flex-col items-center text-center">
          <h1 className="text-center text-5xl text-white font-medium mb-10 capitalize">
            Join the private <span className="text-green">Sale</span>
          </h1>

          <button className="gradient-button py-4 px-8 text-base">
            CONNECT WALLET
          </button>
        </div>
      </div>
    </div>
  );
}

export default JoinPrivateSale;
