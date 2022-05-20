import React, { Fragment } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
// import Circle from "../../../Component/utils/Circle";
import TeamTabsCard from "../../../Component/Mosaic/TeamTabsCard";

import Title from "../../../Component/utils/Title";

const Category = () => {
  //dummy data
  const Categories = [
    { id: 1, name: "Sensors" },
    { id: 2, name: "Circuits" },
    // { id: 3, name: "Discrete-semicondutors" },
    // { id: 4, name: "Optoelectronics" },
    // { id: 5, name: "passive-components" },
    // { id: 6, name: "Circute-protection" },
    // { id: 7, name: "another" },
    // { id: 8, name: "another" },
    // { id: 9, name: "another" },
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
          Search In &nbsp;
          <span className="text-sky-400 font-semibold">
            {router.query.Catid}
          </span>
        </h2>
        <div className="grid grid-cols-2 grid-rows-4 gap-1 grid-flow-row mt-10">
          {Categories.map((Category) => (
            <TeamTabsCard key={Category.id} name={Category.name}></TeamTabsCard>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Category;
