import React from "react";
import RecentSearch from "../Mosaic/RecentSearch";
import Search from "../Searchform/Search";

const Model = () => {
  return (
    <div
      className="flex flex-col items-center gap-2 bg-white h-screen	w-screen"
      style={{ borderRadius: "20px 20px 0 0", padding: "1rem" }}
    >
      <Search></Search>
      <RecentSearch></RecentSearch>
    </div>
  );
};

export default Model;
