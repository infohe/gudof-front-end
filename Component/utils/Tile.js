import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
const Tile = (props) => {
  const router = useRouter();

  return (
    <Link
      href={{
        pathname: "/Category/[Catid]/products",
        query: { Catid: props.name },
      }}
    >
      <div
        className="flex flex-col items-center justify-center bg-cyan-100  shadow-lg shadow-cyan-500/50 text-black	  "
        style={{ height: "6rem", width: "7rem" }}
      >
        Tile
      </div>
    </Link>
  );
};

export default Tile;
