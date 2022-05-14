import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";

const Sliders = () => {
  //dummy data
  const Categories = [
    { id: 1, name: "Sensors" },
    { id: 2, name: "Circuits" },
    { id: 3, name: "Discrete-semicondutors" },
    { id: 4, name: "Optoelectronics" },
    { id: 5, name: "passive-components" },
    { id: 6, name: "Circute-protection" },
    { id: 7, name: "another" },
    { id: 8, name: "another" },
    { id: 9, name: "another" },
  ];

  return (
    <Swiper
      modules={[Pagination]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      className="w-screen"
    >
      <div>
        {Categories.map((Category, i) => (
          <SwiperSlide
            key={i}
            className="flex items:center justify:center bg-blue-200 mb-2"
            style={{ width: "10rem", height: "12rem" }}
          >
            <div
              className=" flex items:center justify:center bg-cyan-100 text-black"
              style={{ width: "10rem" }}
            >
              Image
            </div>
            <div className="flex  flex-col ">
              <h3>This is new product</h3>
              <p>these are some specification of our new product</p>
            </div>
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};

export default Sliders;
