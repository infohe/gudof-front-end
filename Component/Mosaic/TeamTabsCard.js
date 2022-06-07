import React from "react";
import { Link } from "@mui/material";

function TeamTabsCard(props) {
  return (
    <Link href={`${props.url}`}>
      <div>
        <div className=" flex flex-col justify-around	 h-52		bg-white p-2 shadow-lg rounded-sm border border-gray-200 lg:w-72 xl:w-80">
          <div className="text-sm text-gray-800 font-semibold mb-3">Title</div>
          <ul className="space-y-2 sm:flex sm:space-y-0 sm:space-x-2 lg:space-y-2 lg:space-x-0 lg:flex-col mb-4">
            <li>
              <button className="w-full h-full text-left py-3 px-4 rounded bg-white border border-gray-200 hover:border-gray-300 shadow-sm duration-150 ease-in-out">
                <div className="flex flex-wrap items-center justify-between mb-0.5">
                  <span className="font-medium text-green-600">
                    {" "}
                    {props.title}
                  </span>
                </div>
              </button>
            </li>
          </ul>
          <div className="mb-4 text-center btn w-full bg-indigo-500 rounded hover:bg-indigo-600 text-white px-4 py-1">
            Details
          </div>
        </div>
      </div>
    </Link>
  );
}

export default TeamTabsCard;
