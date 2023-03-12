import { TfiBolt } from "react-icons/tfi";
import { MdAdd } from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { BsTicket } from "react-icons/bs";

const Bottomnav = () => {
  return (
    <div className="fixed md:hidden h-[4.5rem] border-b-0 z-20 shadow-xl bottom-0 w-[100vw] bg-white px-4 rounded-t-xl border-2 border-brand">
      <ul className="flex relative justify-between w-full text-xs py-3">
        <li className="flex space-y-1 flex-col items-center ">
          <TfiBolt className="icon" />
          <span className="font-medium">Events</span>
        </li>
        <li className="flex space-y-1 flex-col items-center ">
          <BiSearch className="icon" />
          <span className="font-medium">Search</span>
        </li>
        <li className="flex space-y-1 flex-col items-center relative">
          <div className="absolute bg-white p-6 border-2 border-brand bottom-3 rounded-full">
            <MdAdd className="icon text-brand" />
          </div>
          <span className="font-medium">Add</span>
        </li>
        <li className="flex space-y-1 flex-col items-center ">
          <BsTicket className="icon" />
          <span className="font-medium">Tickets</span>
        </li>
        <li className="flex space-y-1 flex-col items-center ">
          <MdOutlineFavoriteBorder className="icon" />
          <span className="font-medium">Favourites</span>
        </li>
      </ul>
    </div>
  );
};

export default Bottomnav;
