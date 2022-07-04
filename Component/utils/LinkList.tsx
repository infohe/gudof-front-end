import React from "react";

const LinkList = (props) => {
  return (
    <div className="flex justify-between	 text-black p-2 border-b-2 border-zinc-300">
      <div>{props.item1}</div>
      <div>{props.item2}</div>
    </div>
  );
};

export default LinkList;
