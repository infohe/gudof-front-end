import React from "react";

const Pagination = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-center sm:justify-between p-4">
        <div className="bg-blue-900 py-1 px-4 rounded text-white">
          Load more
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
