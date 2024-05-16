import React from "react";
import { PartnerBg, Circle1, Circle2, Circle3, Circle4 } from "../assets";
const Partner = () => {
  return (
    <div
      className="bg-grey1 bg-Ctabackground  bg-no-repeat bg-center bg-cover   z-10"
      style={{
        backgroundImage: `url(${PartnerBg})`,
      }}
    >
      <div className=" flex flex-col  justify-center items-center py-24">
        <div className="flex w-full justify-evenly py-6 ">
          <img src={Circle1} className="w-6 h-6" alt="circle" />
          <img src={Circle2} className="w-8 h-8" alt="circle" />
        </div>
        <div className=" items-center px-10  flex flex-col space-y-6">
          <h1 className="font-semibold text-7xl text-white">
            <span className="text-movieText">Become</span> a Partner
          </h1>
          <div className="text-white/60 text-xl">
            Invest and manage all your NFTs at one place.
          </div>
          <div className="bg-movieText w-fit px-6 py-2 rounded-3xl text-black font-bold flex items-center gap-2">
            <button className="">Get started</button>{" "}
          </div>
        </div>
        <div className="flex  w-full justify-evenly py-6">
          <img src={Circle3} className="w-10 h-10" alt="circle" />
          <img src={Circle4} className="w-6 h-6" alt="circless" />
        </div>
      </div>
    </div>
  );
};

export default Partner;
