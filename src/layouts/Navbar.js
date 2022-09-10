import React from "react";

function Navbar() {
  return (
    <div className="h-28 flex items-center fixed top-0 left-0 w-full">
      <div className="container flex items-center justify-between">
        <img src="images/logo.png" className="w-28" alt="" />

        <div className="flex items-center space-x-10">
          <a href="#" className="text-base font-medium text-white">
            RoadMap
          </a>
          <a href="#" className="text-base font-medium text-white">
            The Utility
          </a>
          <a href="#" className="text-base font-medium text-white">
            The team
          </a>

          <button className="text-base text-white font-semibold uppercase py-3 px-5 bg-green-to-blue rounded-full">
            CONNECT WALLET
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
