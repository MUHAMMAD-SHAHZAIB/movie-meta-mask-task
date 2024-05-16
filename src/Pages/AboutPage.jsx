import React from "react";
import {
  Navbar,
  Hero,
  LatestStore,
  RecentProject,
  TopFiveProject,
  Top15Propect,
  UpcomingMovie,
  FQA,
  Partner,
  Footer,
} from "../Components";
import { HeroBg } from "../assets";

const AboutPage = () => {
  return (
    <>
      {/* ----------------header--------------------- */}
      <main
        className="relative overflow-hidden md:100vh lg:h-screen bg-cover bg-fixed"
        style={{
          backgroundImage: `url(${HeroBg})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <header className="h-24 position-relative   sm:h-32 flex items-center  w-full">
          <div className="container mx-auto  px-6 flex items-center justify-between">
            <Navbar />
          </div>
        </header>

        {/* <Hero /> */}
        <div className="container mx-auto px-6 flex items-center flex-col gap-10 md:gap-0 md:flex-row relative py-56">
          <div className="flex justify-content-center  space-y-6 px-4 md:px-12 xl:px-24">
            <div className="flex flex-col text-center items-center md:items-start md:text-start ">
              <div className="text-4xl sm:text-5xl md:text-7xl font-bold text-white max-w-4xl ">
                About Us
              </div>
              <h3 className="text-movie-green font-bold text-lg ">
                HEADQUARTERS
              </h3>
              <h3 className="text-white text-lg">
                1970 Hagers Town-Cascade Maryland 21719, USA
              </h3>
              <p className="text-white mt-8 mb-8">
                MovieMint is the first financing company built on the Blockchain
                and owned by fans. By tokenizing projects into NFTs, it allows
                movie enthusiasts to directly fund and profit from films as
                co-owners. Powered by Web3 technology allowing open
                participation and radical transparency, MovieMint represents
                tomorrow’s entertainment model today. One where creators and
                audiences collectively greenlight inspired ideas without
                restrictive intermediaries.
              </p>
            </div>
          </div>
        </div>
      </main>
      {/* ---------header--------------- */}
    </>
  );
};

export default AboutPage;
