import React from "react";
import { MovieCard, CategoryBtn } from "./index";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useFetch from "../Hook/useFetch";

const RecentProject = () => {
  const { data, loading } = useFetch(`/primary/recentlistedmovies?limit=5`);

  const posts = data && data.movieData ? data.movieData : [];

  console.log(posts);

  return (
    <section className="container mx-auto px-6 flex flex-col relative z-20   overflow-hidden">
      <div className="flex flex-col lg:flex-row  gap-20 lg:gap-0 justify-between items-start lg:items-center mt-6">
        <CategoryBtn children={"RECENT"} text={"STORIES"} />
      </div>

      <div className=" flex relative py-5 mt-10">
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
          {posts.map((item, index) => (
            <SwiperSlide key={index}>
              <MovieCard
                title={item.metadata.movie_name}
                imageUrl={item.metadata.banner}
                genres={item.metadata.genres}
                className={"w-[400px] h-[200px]"}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default RecentProject;
