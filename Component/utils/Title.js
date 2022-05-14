import React from "react";
import Search from "../Searchform/Search";
const header = () => {
  return (
    <div
      className="flex  items-center bg-blue-900 text-sky-50"
      style={{ height: "10vh", padding: ".8rem" }}
    >
      <Search></Search>

      <h1
        className="text-3xl text-sky-50 font-bold"
        style={{ padding: ".5rem" }}
      >
        Gud<span className="text-sky-400 font-bold ">of</span>
      </h1>
    </div>
  );
};

export default header;
