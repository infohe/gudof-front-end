import React from "react";
import Link from "next/link";
const Token = (props) => {
  return (
    <Link href={`/Category/${props.name}`}>
      <div
        className="flex flex-col items-center justify-center bg-cyan-100  shadow-lg shadow-cyan-500/50 text-black	 rounded relative"
        style={{ height: "4rem", width: "4rem" }}
      >
        <div
          className="flex flex-col items-center justify-center bg-white rounded-full   absolute mb-16  border-solid border-2 border-blue-900	  "
          style={{ height: "3rem", width: "3rem" }}
        >
          1
        </div>

        <h4 className="mt-4 ">Token</h4>
      </div>
    </Link>
  );
};

export default Token;
