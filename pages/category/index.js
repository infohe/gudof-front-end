import * as React from "react";
import { uniqBy } from "lodash";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import BbPromise from "bluebird";

import { useRouter } from "next/router";
import Link from "next/link";
// import Circle from "../../../Component/utils/Circle";
import TeamTabsCard from "../../Component/Mosaic/TeamTabsCard";

import Title from "../../Component/utils/Title";

///////////////////////////////

const Category = (props) => {
  console.log(props);
  const router = useRouter();
  const Category = router.query.category;
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
    <React.Fragment>
      <Title></Title>
      <div className="flex flex-col  p-5 h-4/5	">
        <p className="text-blue-900 text-lg mb-1">
          <Link href="/">Categories</Link>/{Category} (1222)
        </p>
        <p className="mb-1">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
          ratione, nihil magni quia, libero porro laborum natus nemo accusamus
          nam a explicabo saepe voluptatum vero debitis culpa eum? Obcaecati,
          quis.
        </p>
        <h2 className="text-xl		 text-blue-900  font-semibold mt-1">
          Search In &nbsp;
          <span className="text-sky-400 font-semibold">{Category}</span>
        </h2>
        <div className="grid grid-cols-2 grid-rows-4 gap-1 grid-flow-row mt-10">
          {Categories.map((Category, i) => (
            <TeamTabsCard
              key={i}
              name={Category.name}
              Categories={Categories}
            ></TeamTabsCard>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Category;
