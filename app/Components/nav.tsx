import Image from "next/image";
import Link from "next/link";
import { IoIosAdd } from "react-icons/io";

const Nav = () => {
  return (
    <nav className="flex fixed z-30 text-lg h-[4rem] 2xl:max-w-6xl bg-black justify-between px-[5%] items-center ring-2 ring-brand/20 shadow-md text-white w-full ">
      {/* CREATE NAVBAR */}
      <img className="h-10" src="./assets/techifylogolight.svg" />
      <ul className="hidden md:flex w-[40%] items-center justify-between">
        <Link href="/">
          <li className="">Events</li>
        </Link>
        <Link href="/event-tickets">
          <li className="">Tickets</li>
        </Link>
        <Link href="/bookmarked-events">
          <li className="">Favorites</li>
        </Link>
      </ul>
      <div className="flex items-center gap-4">
        <Link href="/profile">
          <div className="w-10 h-10 rounded-lg relative overflow-hidden">
            <Image
              src="/assets/profileImg.png"
              alt=""
              fill={true}
              className=" object-cover "
            />
          </div>
        </Link>
        <button className="btn hidden md:block bg-brand ">Create</button>
        <button className="px-1 h-10 md:hidden rounded-lg">
          <IoIosAdd className="h-8 w-8 text-brand" />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
