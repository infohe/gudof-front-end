import React from "react";
import Title from "../../Component/utils/Title";
import Link from "next/link";
import Sliders from "../../Component/utils/Sliders";
import BigTile from "../../Component/utils/BigTile";

const products = () => {
  //dummy data
  const Categories = [
    { id: 1, name: "product1" },
    { id: 2, name: "product2" },
    { id: 3, name: "product3" },
    { id: 4, name: "product14" },
    { id: 5, name: "product5" },
    { id: 6, name: "product6" },
    { id: 7, name: "product7" },
    { id: 8, name: "product9" },
    { id: 9, name: "product8" },
  ];

  return (
    <div className="flex flex-col ">
      <Title></Title>
      <p className="text-blue-900 text-base my-2 px-4">
        <Link href="/">Categories </Link> / sub-category/products (1222)
      </p>
      <h2 className="text-xl		 text-blue-900  font-semibold my-5 mx-3 px-4">
        New <span className="text-sky-400 font-semibold">products</span>
      </h2>
      <Sliders></Sliders>
      <h2 className="text-xl		 text-blue-900  font-semibold my-5 mx-3 px-4">
        Result for
        <span className="text-sky-400 font-semibold">name</span>
      </h2>
      <div className="grid grid-cols-1 grid-rows-6 gap-1 grid-flow-col mt-6 p-5">
        {Categories.map((Category) => (
          <BigTile key={Category.id} name={Category.name}></BigTile>
        ))}
      </div>
    </div>
  );
};

export default products;
