import React from "react";
import { Fragment } from "react";

const FilterPopList = (props: any) => {
  const innerFilterValues = props?.values;
  const currentValue = props?.currentValue;
  const head = props?.head;

  let parentDocCount = 0;
  let buckets = [];
  let bucketCout = 0;
  innerFilterValues.map((item) => {
    if (item.key === currentValue) {
      parentDocCount = item?.doc_count;
      buckets = item?.values?.buckets;
    }
  });

  //select clicked filters from ui in a n array
  let selectedFilters = [];
  const itemClicked = (currentValue) => {
    selectedFilters.push(currentValue);
  };
  return (
    <Fragment>
      <div className="flex justify-center	"></div>
      <div className="text-black flex justify-center border-b-2	 border-zinc-300	p-2 ">
        {head.toUpperCase()}
      </div>
      <ul className="flex flex-wrap items-center	gap-1 p-1	">
        {buckets.map((product, i) => (
          <li
            className="m-1 relative p"
            key={i}
            onClick={() => {
              itemClicked(product.key);
            }}
          >
            <button className="inline-flex items-center justify-center text-sm font-medium  rounded-full px-3 py-1 border border-transparent shadow-md bg-red hover:bg-indigo-600 hover:text-white text-zinc-600 duration-150 ease-in-out z-50">
              {product.key}
            </button>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default FilterPopList;
