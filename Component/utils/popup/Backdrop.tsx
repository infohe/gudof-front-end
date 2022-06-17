import React from "react";

export const Backdrop = (props) => {
  return (
    <div
      className=" h-screen w-screen bg-transparent opacity-50 	fixed	 top-0	left-0	z-10	"
      onClick={props.CancelPopUp}
    ></div>
  );
};
