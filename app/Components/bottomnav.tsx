import { FaBolt } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import { MdOutlineFavorite } from "react-icons/md";
import { HiTicket } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";

const Bottomnav = () => {
  return (
    <div className="fixed md:hidden z-20 shadow-xl bottom-0 w-[100vw] bg-white px-4 rounded-t-xl border-2 border-brand">
      <ul className="flex relative justify-between w-full text-xs py-3">
        <li className="flex flex-col items-center ">
          <FaBolt className="icon" />
          <span className="">Events</span>
        </li>
        <li className="flex flex-col items-center ">
          <BiSearch className="icon" />
          <span className="">Search</span>
        </li>
        <li className="flex flex-col items-center relative">
          <div className="absolute bg-white p-6 border-2 border-brand bottom-3 rounded-full">
            <MdAdd className="icon text-brand" />
          </div>
          <span className="">Add</span>
        </li>
        <li className="flex flex-col items-center ">
          <HiTicket className="icon" />
          <span className="">Tickets</span>
        </li>
        <li className="flex flex-col items-center ">
          <MdOutlineFavorite className="icon" />
          <span className="">Favourites</span>
        </li>
      </ul>
    </div>
  );
};

export default Bottomnav;
