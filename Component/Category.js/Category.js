import React from "react";
import Token from "../utils/Token";

const Category = (props) => {
  const Categories = props.Categories;
  return (
    <div className="flex flex-col  p-6" style={{ height: "80vh" }}>
      <h2 className="text-xl		 text-blue-900  font-semibold">
        Search By <span className="text-sky-400 font-semibold">Categories</span>
      </h2>
      <div
        className="grid grid-cols-2 grid-rows-auto grid-flow-row  mt-10"
        style={{ gap: "1rem" }}
      >
        {Categories.map((Category) => (
          <Token
            key={Category.id}
            name={Category.name}
            Categories={Categories}
          ></Token>
        ))}
      </div>
    </div>
  );
};

export default Category;
