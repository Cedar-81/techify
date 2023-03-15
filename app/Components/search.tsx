"use client";

import { Fragment } from "react";
import { BiSearch } from "react-icons/bi";
import Filter from "./filter";

function Search() {
  return (
    <Fragment>
      <div className="flex w-full  md:w-[40rem] mx-auto bg-white rounded-full ring-1 ring-brand/25">
        <BiSearch className="h-8 w-8 text-gray-500 ml-3 my-auto" />
        <input
          className="w-full bg-transparent h-12 text-lg pl-4 py-2 text-gray-800 border-0 focus:outline-0 focus:ring-0"
          placeholder="Search"
        />
      </div>
      <div className="text-white">
        <Filter />
      </div>
    </Fragment>
  );
}

export default Search;
