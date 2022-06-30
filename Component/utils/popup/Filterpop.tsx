import React, { Fragment } from "react";
import Filters from "../../Mosaic/Filters";

const FilterPop = () => {
  const filters = [" View All ", "model", "manufacture", "Add new item"];

  return (
    <Fragment>
      <div className="flex justify-center	">
        <svg className="w-6 h-6 fill-blue-500" viewBox="0 0 16 16">
          <path d="M9 15H7a1 1 0 010-2h2a1 1 0 010 2zM11 11H5a1 1 0 010-2h6a1 1 0 010 2zM13 7H3a1 1 0 010-2h10a1 1 0 010 2zM15 3H1a1 1 0 010-2h14a1 1 0 010 2z" />
        </svg>
      </div>
      <div>
        <Filters filters={filters}></Filters>
      </div>
    </Fragment>
  );
};

export default FilterPop;
