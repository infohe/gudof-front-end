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
      // modules={[Pagination]}
      slidesPerView={3}
      pagination={{ clickable: true }}
      className="w-screen"
    >
      <div>
        {Categories.map((Category, i) => (
          <SwiperSlide key={i}>
            <div className="flex 	flex-col	 shadow-lg rounded-sm border border-gray-200 mb-6  p-1 w-32	h-24 ">
              <h2 className="font-medium	">manufactor</h2>
              <p>Lorem ipsum dolor </p>
            </div>
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};

export default Sliders;
