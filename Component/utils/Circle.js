import React, { Fragment } from "react";

const Circle = () => {
  return (
    <Fragment>
      <div className="flex flex-col items-center justify-center">
        <div
          className="flex flex-col items-center justify-center bg-blue-900 text-white rounded-full"
          style={{ height: "5rem", width: "5rem" }}
        >
          Circle
        </div>
        <h4 className="text-black">Name</h4>
      </div>
    </Fragment>
  );
};

export default Circle;
