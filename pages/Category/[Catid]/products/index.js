import React from "react";
import Title from "../../../../Component/utils/Title";
import { useRouter } from "next/router";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const products = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col ">
      <Title></Title>
      <p className="text-blue-900 text-base mb-1 p-2">
        <Link href="/">Categories </Link> / {router.query.Catid}/products (1222)
      </p>
      <Swiper
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default products;
