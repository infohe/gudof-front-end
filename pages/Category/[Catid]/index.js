import React, { Fragment } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import Tile from "../../../Component/utils/Tile";
import Title from "../../../Component/utils/Title";

const Category = () => {
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

  const router = useRouter();
  // console.log(router.query.Catid);
  return (
    <Fragment>
      <Title></Title>
      <div className="flex flex-col  p-5" style={{ height: "80vh" }}>
        <p className="text-blue-900 text-lg mb-1">
          <Link href="/">Categories </Link> / {router.query.Catid} (1222)
        </p>
        <p className="mb-1">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
          ratione, nihil magni quia, libero porro laborum natus nemo accusamus
          nam a explicabo saepe voluptatum vero debitis culpa eum? Obcaecati,
          quis.
        </p>
        <h2 className="text-xl		 text-blue-900  font-semibold mt-1">
          Search In
          <span className="text-sky-400 font-semibold">
            {router.query.Catid}
          </span>
        </h2>
        <div className="grid grid-cols-2 grid-rows-4 gap-1 grid-flow-col mt-10">
          {Categories.map((Category) => (
            <Tile key={Category.id} name={Category.name}></Tile>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Category;
