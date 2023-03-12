import Image from "next/image";
import { IoIosAdd } from "react-icons/io";

const Nav = () => {
  return (
    <nav className="flex fixed z-20 text-lg h-[4rem] bg-black justify-between px-[5%] items-center ring-2 ring-brand/20 shadow-md text-white w-full ">
      {/* CREATE NAVBAR */}
      <img className="h-10" src="./assets/techifylogolight.svg" />
      <ul className="hidden md:flex w-[30%] items-center justify-between">
        <li className="">Events</li>
        <li className="">Tickets</li>
        <li className="">Favorites</li>
      </ul>
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-lg relative overflow-hidden">
          <Image
            src="/assets/profileImg.png"
            alt=""
            fill={true}
            className=" object-cover "
          />
        </div>
        <button className="btn hidden md:block bg-brand ">Create</button>
        <button className="px-1 h-10 md:hidden rounded-lg">
          <IoIosAdd className="h-8 w-8 text-brand" />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
