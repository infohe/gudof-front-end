import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SliderBrands = (props) => {
  const manufactor = props.Manufactors;
  return (
    <Fragment>
      <div className="relative z-40">
        <Swiper
          // modules={[Pagination]}
          slidesPerView={2}
          pagination={{ clickable: true }}
          className="w-screen "
        >
          <div>
            {manufactor.map((entry, i) => (
              <SwiperSlide key={i} className="w-2/4 ">
                <div className="flex 	flex-col items-center	justify-center	 shadow-lg rounded-sm border border-gray-200   p-1 	h-24 w-full 	">
                  <h2 className="font-medium	"> {entry}</h2>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </Fragment>
  );
};

export default SliderBrands;
