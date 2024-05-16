import React, { useState, useEffect } from "react";

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

const HomePage = () => {
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
        <div className=" flex relative   items-center overflow-hidden">
          <Hero />
        </div>
      </main>
      {/* ---------header--------------- */}
      <LatestStore />
      <RecentProject />
      <TopFiveProject />
      <Top15Propect />
      <UpcomingMovie />
      <FQA />
      <Partner />
      <Footer />
    </>
  );
};

export default HomePage;
