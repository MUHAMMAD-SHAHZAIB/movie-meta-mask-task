import React from "react";
import { CategoryBtn, Dropdown, UpComingMovieCard } from "./index";
import useFetch from "../Hook/useFetch";

const UpcomingMovie = () => {
  const { data, loading } = useFetch(`/primary/findallPmarketplace`);

  const posts = data?.marketplace_data || [];

  const Genre = ["All", "Action", "Animated", "Fiction", "Horror", "Love"];
  const Category = ["All", "Action", "Fiction", "Love", "Some", "Yes"];
  const Location = ["All", "Pakistan", "Pk", "Some", "Us"];
  return (
    <>
      <div className="container px-6 mx-auto">
        <div className="flex flex-col lg:flex-row  gap-20 lg:gap-0 justify-between items-start lg:items-center mt-6">
          <CategoryBtn children={"UPCOMING"} text={"STORIES"} />
          <div className="flex   gap-5">
            <Dropdown items={Genre} buttonLabel="Genre" />
            <Dropdown items={Category} buttonLabel="Category" />
            <Dropdown items={Location} buttonLabel="Location" />
          </div>
        </div>

        <div className="mt-10  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-8">
          {posts.map((post, index) => (
            <div key={index}>
              <UpComingMovieCard
                title={post?.movie_info?.metadata?.movie_name}
                imageUrl={post?.movie_info?.metadata?.banner}
                houseImg={post?.production_house_info?.image}
                houseName={post?.production_house_info?.name}
                price={post?.price}
                className={"w-[400px] h-[200px]"}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UpcomingMovie;
