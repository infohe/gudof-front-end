import React from "react";
import Link from "next/link";
// import Circle from "../../../Component/utils/Circle";
import TeamTabsCard from "../Component/Mosaic/TeamTabsCard";

const CategoryPage = () => {
  return (
    <div>
      {" "}
      <div className="flex flex-col  p-5 h-4/5	">
        <p className="text-blue-900 text-lg mb-1">
          <Link href="/">Categories</Link>/{data.category.title} (1222)
        </p>
        <p className="mb-1 text-sm">{data.category.desc}</p>
        <h2 className="text-xl		 text-blue-900  font-semibold mt-1">
          Search In &nbsp;
          <span className="text-sky-400 font-semibold">
            {data.category.url}
          </span>
        </h2>
        <div className="grid grid-cols-2 grid-rows-4 gap-1 grid-flow-row mt-10">
          {Categories.map((Category, i) => (
            <TeamTabsCard
              key={i}
              title={Category.title}
              url={Category.url}
              Categories={Categories}
            ></TeamTabsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
