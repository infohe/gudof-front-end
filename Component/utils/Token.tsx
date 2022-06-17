import React from "react";
import Link from "next/link";
const Token = (props) => {
  const url = props.url;

  let name = props.name;

  return (
    <Link href={`${url}`}>
      <div className=" flex  justify-center w-full	 h-40 lg:w-11/12 h-40			my-1	lg:my-3	 bg-cyan-100  shadow-lg shadow-cyan-400/50 text-black	 rounded relative">
        <div className="flex  items-center w-20	h-20 justify-center bg-white rounded-full   absolute mb-16  border-solid border-2 border-blue-900	  ">
          1
        </div>

        <h4 className="self-end m-2	 text-xs text-center">{name}</h4>
      </div>
    </Link>
  );
};

export default Token;
