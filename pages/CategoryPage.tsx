// all imports

import React from "react";
import Link from "next/link";
// import Circle from "../../../Component/utils/Circle";
import TeamTabsCard from "../Component/Mosaic/TeamTabsCard";
import Wrapper from "../Component/utils/Wrapper";
import Pagination from "../Component/utils/pagination";


//page function

const CategoryPage = (props) => {
  const categories = props.categories;
  const count: number = categories.length;
  const output = props.output;
  const pageType: string = props.pageType;

  // const ParentData = props.ParentData;

  return (
    <div>
      <div className="flex flex-col  p-5 h-4/5	">
        <p className="text-blue-900 text-sm mb-1">
          <Link href="/">categories</Link>
          {props.pageUrl} ({count})
        </p>
        <p className="mb-1 text-sm">{props.categoryDesc}</p>
        <h2 className="text-xl		 text-blue-900  font-semibold mt-1">
          Search In &nbsp;
          <span className="text-sky-400 font-semibold">
            {props.categoryTitle}
          </span>
        </h2>

        {/* list subCategories */}


        <div className="grid grid-cols-2 grid-rows-4 gap-1 grid-flow-row mt-10">
          {categories.map((category, i) => (
            <TeamTabsCard
              key={i}
              title={category.title}
              url={category.url}
              categories={categories}
            ></TeamTabsCard>
          ))}
        </div>

        {/* pagination if more products */}


        <div>
          {output.length > 0 ? (
            <Wrapper items={output} pageType={pageType}></Wrapper>
          ) : (
            ""
          )}
          <Pagination></Pagination>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
