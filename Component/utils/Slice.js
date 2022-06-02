import React from "react";

const Tile = (props) => {
  return (
    <div className="bg-teal-50	shadow-lg shadow-teal-300/20	 mt-3 rounded p-3 my-1 flex flex-col gap-1  max-w-full w-11/12		">
      <p> {props.text}</p>
      <div className="self-end">
        <button
          className="bg-blue-900 py-1 px-3 rounded text-white mt-3 shadow-lg shadow-blue-500/30	"
          onClick={props.SetPopUp}
        >
          Advanced Search
        </button>
      </div>
    </div>
  );
};

export default Tile;
