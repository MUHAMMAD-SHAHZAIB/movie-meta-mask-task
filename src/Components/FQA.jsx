import React from "react";
import { Arrow, QuestionMark, QA } from "../assets";

const FQA = () => {
  return (
    <div className="xl:container xl:mx-auto">
      <div className=" pt-12 pb-12 flex flex-col space-y-8 px-4 md:px-12 xl:px-24">
        <h1 className="font-bold text-3xl text-white text-center md:text-start">
          <span className="text-movie-green">Frequently</span> Asked Questions
        </h1>
        <div className="flex flex-col item md:flex-row gap-12 w-full">
          <div className="md:w-1/3 items-center flex justify-center md:items-start md:justify-start">
            <img src={QA} alt="questions" />
          </div>
          <div className="md:w-2/3">
            <div className="text-white">
              <div className="pb-4">
                <div className="flex justify-between items-center border border-gray-600 rounded-md text-lg">
                  <div className="flex items-center gap-2 p-3">
                    <img src={QuestionMark} />
                    <div className="flex">
                      Will movies be preLaunched in the market
                    </div>
                  </div>
                  <div className="bg-movieText cursor-pointer rounded-md p-4">
                    <img src={Arrow} alt="" />
                  </div>
                </div>
              </div>
              <div className="pb-4">
                <div className="flex justify-between items-center border border-gray-600 rounded-md text-lg">
                  <div className="flex items-center gap-2 p-3">
                    <img src={QuestionMark} />
                    <div className="flex">
                      Will movies be preLaunched in the market
                    </div>
                  </div>

                  <div className="bg-movieText cursor-pointer rounded-md p-4">
                    <img src={Arrow} alt="" />
                  </div>
                </div>
              </div>
              <div className="pb-4">
                <div className="flex justify-between items-center border border-gray-600 rounded-md text-lg">
                  <div className="flex items-center gap-2 p-3">
                    <img src={QuestionMark} />
                    <div className="flex">
                      Will movies be preLaunched in the market
                    </div>
                  </div>
                  <div className="bg-movieText cursor-pointer rounded-md p-4">
                    <img src={Arrow} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FQA;
