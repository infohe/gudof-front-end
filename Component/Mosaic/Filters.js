import React from "react";

const Filters = (props) => {
  return (
    <div>
      {/* Filters */}
      <div className="my-2">
        <ul className="flex flex-wrap -m-2">
          <li className="m-1">
            <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-md bg-indigo-500 text-white duration-150 ease-in-out">
              View All
            </button>
          </li>
          {/* {Values.map((filter, i) => (
            <li className="m-1" key={i}>
              <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-md bg-indigo-500 text-white duration-150 ease-in-out">
                {filter}
              </button>
            </li>
          ))} */}
          <li className="m-1">
            <button
              className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-gray-200 hover:border-gray-300 shadow-m bg-white text-gray-500 duration-150 ease-in-out "
              // onClick={props.SetPopUp}
            >
              Add new Filters
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filters;
