import React from "react";

const MovieCard = ({
  movie,
  title,
  imageUrl,
  className,
  houseName,
  houseImg,
  genres,
}) => {
  const url = "https://staging.api.moviemint.net";

  return (
    <div className="w-full">
      <div className="group relative cursor-pointer ">
        <img
          src={url + imageUrl}
          alt="recent movies"
          className={`rounded-lg border object-cover ${className} transition-all transform group-hover:scale-105`}
        />

        <div className="absolute inset-0 bg-black/50 rounded-lg group-hover:scale-105" />

        {houseImg && (
          <div className="absolute top-2 left-3 flex gap-1 items-center">
            <img
              src={url + houseImg}
              alt="recent movies"
              className={`rounded-full border object-cover w-[40px] h-[40px]`}
            />
            <p className="font-semibold text-white text-sm mt-1 ml-1 group-hover:text-movie-green rounded-md transition-all">
              {houseName}
            </p>
          </div>
        )}

        <div className="flex gap-10 absolute bottom-3 left-2">
          <p className="font-semibold text-white text-sm ">{title}</p>
          <p className="font-semibold text-white text-sm ">{genres}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
