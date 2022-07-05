import { ListItem } from "@mui/material";
import React, { Fragment, useState } from "react";

// type FilterPop = {
//   children: React.ReactNode; // 👈️ type children
// };

const FilterPop = (props: any) => {
  const innerFilterValues = props.values;
  const currentValue = props.currentValue;
  const head = props.head;
  console.log(head);

  let parentDocCount = 0;
  let buckets = [];
  let bucketCout = 0;
  innerFilterValues.map((item) => {
    if (item.key === currentValue) {
      parentDocCount = item.doc_count;
      buckets = item.values.buckets;
    }
  });

  return (
    <Fragment>
      <div className="flex justify-center	"></div>
      <div className="text-black flex justify-center border-b-2	 border-zinc-300	p-2">
        {head.toUpperCase()}
      </div>
      <ul className="flex flex-wrap items-center	gap-1 	">
        {buckets.map((product, i) => (
          <li className="m-1" key={i}>
            <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-md bg-white text-zinc-600 duration-150 ease-in-out">
              {product.key}
            </button>
          </li>
        ))}{" "}
      </ul>
    </Fragment>
  );
};

export default FilterPop;
