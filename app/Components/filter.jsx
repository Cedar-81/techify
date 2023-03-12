import { GoLocation } from "react-icons/go";
import { BiCategory } from "react-icons/bi";
import { BsCalendar2Event, BsFilter } from "react-icons/bs";
import { Fragment } from "react";

const Filter = () => {
  return (
    <Fragment>
      <button className="btn md:hidden flex my-4 gap-2 border-2 mx-auto border-gray-300">
        <BsFilter className="h-7 w-7" />
        <span className="text-lg">Filters</span>
      </button>
      <div className="hidden md:w-[40rem] mx-auto px-8 w-full text-white my-4 md:flex justify-between">
        <div className="flex">
          <GoLocation className="h-6 w-6" />
          <div className="ml-1">
            <p className="uppercase text-xs">location</p>
            <p className="capitalize text-sm font-medium">Enugu</p>
          </div>
        </div>
        <div className="flex">
          <BiCategory className="h-7 w-7" />
          <div className="ml-1">
            <p className="uppercase text-xs">event type</p>
            <p className="capitalize text-sm font-medium">In Person</p>
          </div>
        </div>
        <div className="flex">
          <BsCalendar2Event className="h-6 w-6" />
          <div className="ml-2">
            <p className="uppercase text-xs">location</p>
            <p className="capitalize text-sm font-medium">Enugu</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Filter;
