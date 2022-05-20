import React from "react";

export const Backdrop = (props) => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "transparent",
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "3",
      }}
      onClick={props.CancelPopUp}
    ></div>
  );
};
