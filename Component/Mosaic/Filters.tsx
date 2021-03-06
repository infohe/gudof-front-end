import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

const Filters = (props) => {
  console.log(props.values);
  const [active, setActive] = useState("bg-white");

  const values = props.values;
  const parentFunction = (current) => {
    setActive("bg-indigo-500");
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
        <ul className="flex  items-center	gap-2	">
          {/* <li className="m-1">
            <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-md bg-indigo-500 text-white duration-150 ease-in-out">
              View All
            </button>
          </li> */}
          {values.map((filter, i) => (
            <SwiperSlide key={i}>
              <li
                className="p-1"
                key={i}
                onClick={() => {
                  parentFunction(filter);
                }}
              >
                <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-md bg-white hover:bg-indigo-600 hover:text-white  duration-150 ease-in-out w-32		">
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
