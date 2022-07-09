import React from "react";
import { useState } from "react";
import LinkList from "../utils/LinkList";
const AllFilters = (props) => {
  const values = props.topFilterValues;
  const [isAny, setIsAny] = useState("Edit");
  const [isReset, setIsReset] = useState("Reset");

  const [isIconOpen, setIsIconOpen] = useState(false);

  const openIcon = () => {
    setIsIconOpen(true);
  };
  const closeIcon = () => {
    setIsIconOpen(false);
  };

  const changeAny = () => {
    setIsAny("Any");
    setIsReset("");
  };
  return (
    <div className=" h-4/5	bottom-0	 left-2/4	-translate-x-1/2   w-11/12  fixed   z-40 overflow-y-scroll">
      <div className="flex flex-col  gap-2 bg-cyan-50	rounded-t-3xl	p-4			inset-x-auto			bottom-0				 shadow-2xl	 text-white p-2  ">
        {/* static item */}
        <div
          className="flex justify-between	 text-black p-2 border-b-2 border-zinc-300"
          onClick={changeAny}
        >
          <div>Filters</div>
          <div>{isReset}</div>
        </div>
        {/* dynamic values */}
        <LinkList item1={"Sort By"} item2={"Any"}></LinkList>
        {values.map((product, i) => (
          <LinkList item1={product} item2={isAny} key={i}></LinkList>
        ))}
      </div>
    </div>
  );
};

export default AllFilters;
