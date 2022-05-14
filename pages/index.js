import { Fragment } from "react";
import Category from "../Component/Category.js/Category";
import Search from "../Component/Searchform/Search";

export default function Home() {
  return (
    <Fragment>
      <div
        className="flex  flex-col items-center justify-center gap-2 w-full   	"
        style={{ height: "90vh" }}
      >
        <h1 className="text-3xl text-blue-900 font-bold				">
          Gud<span className="text-sky-400 font-bold">of</span>
        </h1>
        {/* Search form */}
        <Search></Search>
      </div>
      <Category></Category>
    </Fragment>
  );
}
