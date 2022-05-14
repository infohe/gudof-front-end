import React from "react";
import Token from "../utils/Token";

const Category = () => {
  const Categories = [
    { id: 1, name: "Sensors" },
    { id: 2, name: "Circuits" },
    { id: 3, name: "Discrete semicondutors" },
    { id: 4, name: "Optoelectronics" },
    { id: 5, name: "passive components" },
    { id: 6, name: "Circute protection" },
    { id: 7, name: "another" },
    { id: 8, name: "another" },
    { id: 9, name: "another" },
  ];

  return (
    <div className="flex flex-col gap-10 mt-20 p-6" style={{ height: "80vh" }}>
      <h2 className="text-xl		 text-blue-900  font-semibold">
        Search By <span className="text-sky-400 font-semibold">Categories</span>
      </h2>
      <div className="grid grid-cols-3 grid-rows-3 grid-flow-col gap-14 mt-10">
        {Categories.map((Category) => (
          <Token key={Category.id} name={Category.name}></Token>
        ))}
      </div>
    </div>
  );
};

export default Category;
