import React, { useState, useEffect } from "react";
import { MovieCard, CategoryBtn, Dropdown } from "./index";
import { Swiper, SwiperSlide } from "swiper/react";
import useFetch from "../Hook/useFetch";

const Top15Propect = () => {
  const { data, loading } = useFetch(`/nfts/gettopfifteen`);

  const posts = data?.movies || [];

  const Genre = ["All", "Action", "Animated", "Fiction", "Horror", "Love"];
  const Category = ["All", "Action", "Fiction", "Love", "Some", "Yes"];
  const Location = ["All", "Pakistan", "Pk", "Some", "Us"];

  return (
    <section className="container mx-auto px-6 flex flex-col relative z-20   overflow-hidden">
      <div className="flex flex-col lg:flex-row  gap-20 lg:gap-0 justify-between items-start lg:items-center mt-6">
        <CategoryBtn children={"TOP 15"} text={"STORIES"} />
        <div className="flex   gap-5">
          <Dropdown items={Genre} buttonLabel="Genre" />
          <Dropdown items={Category} buttonLabel="Category" />
          <Dropdown items={Location} buttonLabel="Location" />
        </div>
      </div>

      <div className="  flex relative py-5 mt-10">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          breakpoints={{
            480: {
              slidesPerView: 2,
            },
            678: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
          pagination={{
            clickable: true,
          }}
        >
          {posts.map((post, index) => (
            <SwiperSlide key={index}>
              <MovieCard
                title={post?.metadata?.movie_name}
                imageUrl={post?.metadata?.banner}
                genres={post?.metadata?.genres}
                className={"w-[400px] h-[200px]"}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Top15Propect;
