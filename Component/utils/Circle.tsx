import React, { Fragment } from "react";

const Circle = () => {
  return (
    <Fragment>
      <div className="flex flex-col items-center justify-center">
        <div
          className="flex flex-col items-center justify-center bg-sky-400 text-white rounded-full"
          style={{ height: "7rem", width: "7rem" }}
        >
          Circle
        </div>
        <h4 className="text-black">Name</h4>
      </div>
    </Fragment>
  );
};

export default Circle;
