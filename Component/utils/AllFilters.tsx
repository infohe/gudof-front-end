import React from "react";
import LinkList from "../utils/LinkList";
const AllFilters = (props) => {
  const values = props.topFilterValues;
  return (
    <div className="flex flex-col  gap-2 bg-cyan-50	rounded-t-3xl	p-4 h-4/5	 left-2/4	-translate-x-1/2			inset-x-auto		z-40	bottom-0		 w-11/12		 shadow-2xl	 text-white p-2 fixed ">
      <LinkList item1={"Filters"} item2={"Reset"}></LinkList>
      <LinkList item1={"Sort By"} item2={"Any"}></LinkList>
      {values.map((product, i) => (
        <LinkList item1={product} item2={"Any"} key={i}></LinkList>
      ))}
      <div>Show more</div>
    </div>
  );
};

export default AllFilters;
