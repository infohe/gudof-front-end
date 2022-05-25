import React from "react";
import Token from "../utils/Token";
// import Single from "../utils/single";

const Category = (props) => {
  const Items = props.Items;
  return (
    <div className="flex flex-col  p-6" style={{ height: "80vh" }}>
      <h2 className="text-xl		 text-blue-900  font-semibold">
        Search By <span className="text-sky-400 font-semibold">Categories</span>
      </h2>
      <div
        className="grid grid-cols-2 grid-rows-auto grid-flow-row  mt-10"
        // className="flex flex-col mt-10"
        style={{ gap: "1rem" }}
      >
        {Items.map((item) => (
          <Token key={item.id} name={item.title} url={item.url}></Token>
        ))}
      </div>
    </div>
  );
};

export default Category;
