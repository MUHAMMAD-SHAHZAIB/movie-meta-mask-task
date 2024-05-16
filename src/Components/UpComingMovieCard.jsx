import React from "react";

const UpComingMovieCard = ({ imageUrl, title, houseImg, houseName, price }) => {
  const stringValue = price.toString();
  const formattedValue =
    stringValue.slice(0, 2) + "." + stringValue.slice(2, 3);

  const url = "https://staging.api.moviemint.net";
  return (
    <div className="text-white border border-white rounded-lg bg-grey1 space-y-2 p-2 cursor-pointer">
      <div
        className="max-w-sm h-56 sm:max-h-80 bg-cover bg-center bg-no-repeat rounded-[8px]"
        style={{
          backgroundImage: `url(${url + imageUrl})`,
        }}
      />
      <div className="text-sm sm:text-base font-bold hover:underline hover:text-movie-green px-1 mt-2 line-clamp-1 hover:line-clamp-none">
        {title}
      </div>
      <div className="flex flex-row items-center space-x-2 hover:text-movie-green cursor-pointer px-1">
        <img
          src={url + houseImg}
          className="h-8 w-8 rounded-full"
          alt="productionName"
        />
        <div className="text-xs">{houseName}</div>
      </div>
      <div className="flex flex-row justify-between px-1 pb-1">
        <div className="flex items-center">
          <div>$</div>
          <div className="text-xs md:text-sm">{formattedValue}</div>
        </div>
        <button className="bg-movieText text-black rounded-full px-4 py-1 font-medium text-xs md:text-sm">
          See Details
        </button>
      </div>
    </div>
  );
};

export default UpComingMovieCard;
