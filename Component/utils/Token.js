import React from "react";
import Link from "next/link";
const Token = (props) => {
  const url = props.url;

  let name = props.name;

  return (
    <Link href={`${url}`}>
      <div
        className="flex  justify-center  bg-cyan-100  shadow-lg shadow-cyan-500/50 text-black	 rounded relative"
        style={{ height: "8rem", width: "11rem" }}
      >
        <div
          className="flex  items-center justify-center bg-white rounded-full   absolute mb-16  border-solid border-2 border-blue-900	  "
          style={{ height: "5rem", width: "5rem" }}
        >
          1
        </div>

        <h4 className="self-end m-2	">{name}</h4>
      </div>
    </Link>
  );
};

export default Token;
