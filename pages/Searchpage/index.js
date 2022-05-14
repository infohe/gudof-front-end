import React from "react";
import Category from "../../Component/Category.js/Category";
import Model from "../../Component/Model/Model";

const Searchpage = () => {
  return (
    <div
      className="flex flex-col items-center bg-blue-900 text-sky-50"
      style={{ height: "80vh", padding: "1rem" }}
    >
      <h1
        className="text-3xl text-sky-50 font-bold"
        style={{ padding: "1rem" }}
      >
        Gud<span className="text-sky-400 font-bold ">of</span>
      </h1>
      <Model></Model>
      <Category></Category>
    </div>
  );
};

export default Searchpage;
