import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Sliders = (props) => {
  console.log(props.productDetails);
  let Items = {};
  let entries = [];
  if (props.productDetails) {
    const { measurementType, application, industry, housing } =
      props.productDetails;
    Items = { measurementType, application, industry, housing };
    entries = Object.entries(Items);

    console.log(entries);
  }

  return (
    <Swiper
      // modules={[Pagination]}
      slidesPerView={2}
      pagination={{ clickable: true }}
      className="w-screen z-40"
    >
      <div>
        {entries.map((entry, i) => (
          <SwiperSlide key={i} className="w-2/4 ">
            <div className="flex 	flex-col items-center	justify-center	 shadow-lg rounded-sm border border-gray-200 mb-6  p-1 	h-24 w-full 	">
              <h2 className="font-medium	"> {entry[0]}</h2>
              <p className="text-center	">{entry[1]}</p>
            </div>
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};

export default Sliders;
