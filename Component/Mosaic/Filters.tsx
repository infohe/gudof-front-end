import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

const Filters = (props) => {
  console.log(props.values);
  const values = props.values;
  const parentFunction = (current) => {
    props.setPopUp();
    if (typeof window !== "undefined") {
      localStorage.setItem("currentValue", current);
    }
  };

  return (
    <Swiper
      // modules={[Pagination]} k[]
      // modules={[Navigation]}
      slidesPerView={3}
      spaceBetween={60}
      pagination={{ clickable: true }}
      // navigation
    >
      <div className="my-px flex	">
        <ul className="flex  items-center	gap-1 	">
          {/* <li className="m-1">
            <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-md bg-indigo-500 text-white duration-150 ease-in-out">
              View All
            </button>
          </li> */}
          {values.map((filter, i) => (
            <SwiperSlide key={i}>
              <li
                className="m-1"
                key={i}
                onClick={() => {
                  parentFunction(filter);
                }}
              >
                <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-md bg-white  duration-150 ease-in-out w-32		">
                  {filter}
                </button>
              </li>
            </SwiperSlide>
          ))}
        </ul>
      </div>
    </Swiper>
  );
};

export default Filters;
