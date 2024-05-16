import React from "react";
import { HeroRightSide } from "../Components/index.js";

const Hero = () => {
  return (
    <>
      <div className="container mx-auto px-6 flex items-center flex-col gap-10 md:gap-0 md:flex-row relative py-12">
        <div className="flex flex-1 flex-col  text-center items-center lg:items-start lg:text-start mr-0 lg:mr-12 gap-4 ">
          <div className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white max-w-4xl ">
            Welcome To The Revolution
          </div>
          <p className="text-white text-lg">
            Changing the game for
            <span className="text-movie-green">film Production</span>
            and
            <span className="text-movie-green">Ownership</span>
          </p>
          <p className="text-white leading-5 text-base text-justify lg:text-left px-4 sm:px-0">
            MovieMint liberates Filmmakers and fans through decentralized
            funding.
            <br />
            Our Blockchain platform seamlessly connects Independent Creators and
            Passionate Supporters. Filmmakers tokenize projects into NFT "movie
            shares" that fans can buy and tradel. This raises production funds
            while retaining full ownership and creative control while fans.
          </p>
        </div>
        <div className="md:max-w-md">
          <p className="text-center font-bold text-movie-green text-sm mb-px">
            NFT CAPITAL RAISED
          </p>
          <div className="flex justify-center">
            <p className="text-black bg-slate-200 font-semibold text-base px-3 rounded-sm mb-2">
              US $114.74012
            </p>
          </div>
          <HeroRightSide />
        </div>
      </div>
    </>
  );
};

export default Hero;
