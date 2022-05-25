import React from "react";

const Tile = (props) => {
  return (
    <div>
      <div
        className="bg-teal-50		 mt-3 rounded p-3 my-1 flex flex-col gap-1 "
        style={{
          height: "15vh",
          maxWidth: "100%",
          width: "22rem",
        }}
      >
        {props.text}
        <div style={{ alignSelf: "flex-end" }}>
          <button
            className="bg-blue-900 py-1 px-3 rounded text-white mt-3	"
            onClick={props.SetPopUp}
          >
            Advanced Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tile;
