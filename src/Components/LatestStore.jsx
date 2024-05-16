import React, { useState, useEffect } from "react";
import { CategoryBtn, MovieCard } from "./index";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import useFetch from "../Hook/useFetch";

const LatestStore = () => {
  const { data, loading } = useFetch("/users/random/posts");

  const posts = data?.posts || [];

  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="container mx-auto px-6 flex flex-col relative z-20 overflow-hidden">
      <hr className="py-1 container mx-auto" />
      <div className="flex justify-between items-center">
        <CategoryBtn children="LATEST" text="STORIES" />
      </div>

      <div className="flex relative py-5">
        {isLargeScreen ? (
          <div className="flex gap-10 py-3">
            {posts.map((post, index) => (
              <MovieCard
                key={index}
                title={post?.post.title}
                imageUrl={post?.post?.post}
                houseName={post?.production_house_name}
                houseImg={post?.production_house_image}
                className={"w-[300px] h-[300px]"}
              />
            ))}
          </div>
        ) : (
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
                  title={post?.post.title}
                  imageUrl={post?.post?.post}
                  houseName={post?.production_house_name}
                  houseImg={post?.production_house_image}
                  className={"w-[300px] h-[300px]"}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
      <hr className="container mx-auto" />
    </section>
  );
};

export default LatestStore;
