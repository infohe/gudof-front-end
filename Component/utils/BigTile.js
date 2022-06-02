import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
const Tile = (props) => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div className="flex flex-col items-center justify-center h-40	w-40 bg-teal-100  shadow-lg shadow-cyan-500/50 text-black	  ">
      Tile
    </div>
  );
};

export default Tile;
