import React, { Fragment } from "react";

const FirstFolder = (props) => {
  return (
    <Fragment>
      <div className="flex  justify-between bg-transparent text-blue-900 p-1 ">
        <h2> {props.Details}</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1}
          onClick={props.cancelPopUp}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </div>
      <div>{props.children}</div>
    </Fragment>
  );
};

export default FirstFolder;
