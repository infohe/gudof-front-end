import React from "react";
// import { useQuery } from "@apollo/client";

const Pagination = (props) => {
  return (
    <div>
      <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-center sm:justify-between p-2">
        <div className="flex items-center gap-2 sm:flex-row sm:items-center sm:justify-between p-4">
          <div className="bg-blue-900 py-1 px-4 rounded text-white">
            Previous
          </div>
          <div
            className="bg-blue-900 py-1 px-4 rounded text-white"
            onClick={props.paginateProduct}
          >
            Load more
          </div>
        </div>
        <div className="text-sm text-gray-500 text-center sm:text-left">
          Showing <span className="font-medium text-gray-600">1</span> to{" "}
          <span className="font-medium text-gray-600">10</span> of{" "}
          <span className="font-medium text-gray-600">467</span> results
        </div>
      </div>
      ;
    </div>
  );
};

export default Pagination;
