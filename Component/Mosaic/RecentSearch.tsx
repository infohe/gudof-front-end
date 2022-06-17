import React from "react";
import Link from "next/link";

const RecentSearch = (props) => {
  return (
    <div className="	lg:w-11/12			">
      {/* Recent searches */}
      <div className="m-3 last:mb-0 max-w-7xl">
        <div className="text-xs font-semibold text-gray-400 uppercase px-2 mb-2">
          Recent searches
        </div>
        <ul className="text-sm">
          <li>
            <div className="flex items-center p-2 text-gray-800 hover:text-white hover:bg-indigo-500 rounded group">
              <svg
                className="w-4 h-4 fill-current text-gray-400 group-hover:text-white group-hover:text-opacity-50 flex-shrink-0 mr-3"
                viewBox="0 0 16 16"
              >
                <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
              </svg>
              <span>Form Builder - 23 hours on-demand video</span>
            </div>
          </li>
          <li>
            <div className="flex items-center p-2 text-gray-800 hover:text-white hover:bg-indigo-500 rounded group">
              <svg
                className="w-4 h-4 fill-current text-gray-400 group-hover:text-white group-hover:text-opacity-50 flex-shrink-0 mr-3"
                viewBox="0 0 16 16"
              >
                <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
              </svg>
              <span>Access Mosaic on mobile and TV</span>
            </div>
          </li>
          <li>
            <div className="flex items-center p-2 text-gray-800 hover:text-white hover:bg-indigo-500 rounded group">
              <svg
                className="w-4 h-4 fill-current text-gray-400 group-hover:text-white group-hover:text-opacity-50 flex-shrink-0 mr-3"
                viewBox="0 0 16 16"
              >
                <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
              </svg>
              <span>Product Update - Q4 2021</span>
            </div>
          </li>
          <li>
            <div className="flex items-center p-2 text-gray-800 hover:text-white hover:bg-indigo-500 rounded group">
              <svg
                className="w-4 h-4 fill-current text-gray-400 group-hover:text-white group-hover:text-opacity-50 flex-shrink-0 mr-3"
                viewBox="0 0 16 16"
              >
                <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
              </svg>
              <span>Master Digital Marketing Strategy course</span>
            </div>
          </li>
          <li>
            <div className="flex items-center p-2 text-gray-800 hover:text-white hover:bg-indigo-500 rounded group">
              <svg
                className="w-4 h-4 fill-current text-gray-400 group-hover:text-white group-hover:text-opacity-50 flex-shrink-0 mr-3"
                viewBox="0 0 16 16"
              >
                <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
              </svg>
              <span>Dedicated forms for products</span>
            </div>
          </li>
          <li>
            <div className="flex items-center p-2 text-gray-800 hover:text-white hover:bg-indigo-500 rounded group">
              <svg
                className="w-4 h-4 fill-current text-gray-400 group-hover:text-white group-hover:text-opacity-50 flex-shrink-0 mr-3"
                viewBox="0 0 16 16"
              >
                <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
              </svg>
              <span>Product Update - Q4 2021</span>
            </div>
          </li>
        </ul>
      </div>
      {/* Recent pages */}
      <div className="mb-3 last:mb-0 max-w-7xl">
        <div className="text-xs font-semibold text-gray-400 uppercase px-2 mb-2">
          Recent pages
        </div>
        <ul className="text-sm">
          <li>
            <div className="flex items-center p-2 text-gray-800 hover:text-white hover:bg-indigo-500 rounded group">
              <svg
                className="w-4 h-4 fill-current text-gray-400 group-hover:text-white group-hover:text-opacity-50 flex-shrink-0 mr-3"
                viewBox="0 0 16 16"
              >
                <path d="M14 0H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h8l5-5V1c0-.6-.4-1-1-1zM3 2h10v8H9v4H3V2z" />
              </svg>
              <span>
                <span className="font-medium text-gray-800 group-hover:text-white">
                  Messages
                </span>{" "}
                - Conversation / … / Mike Mills
              </span>
            </div>
          </li>
          <li>
            <div className="flex items-center p-2 text-gray-800 hover:text-white hover:bg-indigo-500 rounded group">
              <svg
                className="w-4 h-4 fill-current text-gray-400 group-hover:text-white group-hover:text-opacity-50 flex-shrink-0 mr-3"
                viewBox="0 0 16 16"
              >
                <path d="M14 0H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h8l5-5V1c0-.6-.4-1-1-1zM3 2h10v8H9v4H3V2z" />
              </svg>
              <span>
                <span className="font-medium text-gray-800 group-hover:text-white">
                  Messages
                </span>{" "}
                - Conversation / … / Eva Patrick
              </span>
            </div>
          </li>
        </ul>
      </div>
      <div
        className="text-center bg-blue-900 py-1 text-white	"
        onClick={props.CancelRecent}
      >
        Clear
      </div>
    </div>
  );
};

export default RecentSearch;
