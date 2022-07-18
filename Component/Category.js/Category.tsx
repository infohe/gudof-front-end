// all imports

import React from "react";
import Token from "../utils/Token";

//function component

const Category = (props) => {
  const items = props?.items || [];
  return (
    <div className="flex flex-col  p-6 h-4/5 lg:mt-10">
      <h2 className="text-xl lg:text-4xl			 text-blue-900  font-semibold lg:font-bold	">
        Search By <span className="text-sky-400 font-semibold">Categories</span>
      </h2>
      <div
        className="grid grid-cols-2 grid-rows-auto grid-flow-row gap-4	 mt-10 lg:grid-cols-5"
        // className="flex flex-col mt-10"
      >
        {items.map((item, i) => (
          <Token key={i} name={item.title} url={item.url}></Token>
        ))}
      </div>
    </div>
  );
};

export default Category;
