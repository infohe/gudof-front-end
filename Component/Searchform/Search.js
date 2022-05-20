import React, { useRef } from "react";

const Search = () => {
  const trigger = useRef(null);
  const searchContent = useRef(null);
  const searchInput = useRef(null);
  return (
    <form style={{ width: "90%" }}>
      <div className="relative">
        <label htmlFor="modal-search" className="sr-only">
          Search
        </label>
        <input
          id="modal-search"
          className="w-full border-0 focus:outline-transparent rounded-full placeholder-gray-400 shadow-lg shadow-blue-300/30  appearance-none py-1.5 pl-10 pr-4 "
          style={{
            color: "#1e3a8a ",
            border: "1px solid #1e3a8a",
          }}
          type="search"
          placeholder="Search by keywords, techspecs"
          ref={searchInput}
        />
        <button
          className="absolute inset-0 right-auto group"
          type="submit"
          aria-label="Search"
        >
          <svg
            className="w-4 h-4 flex-shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-4 mr-2"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
            <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default Search;
