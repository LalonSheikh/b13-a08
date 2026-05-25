"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CategorySection = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop
      className="rounded-xl overflow-hidden"
    >
      <SwiperSlide>
        <div className="h-[500px] container mx-auto  bg-blue-500 flex items-center justify-center text-white text-4xl font-bold">
          Welcome To Book Haven
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-[500px] container mx-auto bg-green-500 flex items-center justify-center text-white text-4xl font-bold">
          Borrow Your Favorite Books
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-[500px] bg-purple-500 flex container mx-auto items-center justify-center text-white text-4xl font-bold">
          Read, Learn & Explore
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default CategorySection;
