import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { IoPeopleOutline } from "react-icons/io5";
import { GoLocation } from "react-icons/go";
import { AiOutlineStar } from "react-icons/ai";
import Image from "next/image";

const Eventcard = () => {
  return (
    <div className="relative lg:w-[20rem] md:space-y-6 md:shadow-md cursor-pointer w-full  pb-6 bg-white overflow-hidden min-h-[25rem] shadow-sm rounded-xl space-y-8">
      {/* CARD IMAGE */}
      <div className="relative w-full h-[7rem] flex ">
        <Image
          src="/assets/cardimg.png"
          alt=""
          fill={true}
          className=" object-cover "
        />
      </div>

      <div className="space-y-6">
        {/* DETAILS */}
        <div className="flex flex-col md:space-y-4 space-y-3 px-4 md:pl-6">
          {/* AUTHOR DETAILS */}
          {/* <div className="flex justify-end items-center gap-2">
          <div className="text-right">
            <p className="text-sm font-medium">Ricky Suare</p>
            <p className="text-xs">DevRel @Nextjs. Web Deve...</p>
          </div>
          <div className="w-10 h-10 rounded-lg relative overflow-hidden">
            <Image
              src="/assets/profileImg.png"
              alt=""
              fill={true}
              className=" object-cover "
            />
          </div>
        </div> */}

          {/* CARD DETAILS */}
          {/* CARD HEADER */}
          <div className="space-y-1">
            <h3 className="text-xl font-medium">Nextjs Cohort 2.0</h3>
            <h4 className="uppercase flex gap-2 items-center text-xs font-medium">
              online <div className="dot"></div> tue, mar 6th{" "}
              <div className="dot"></div> 9:00pm
            </h4>
          </div>

          {/* PARAGRAPH AND BOOKING DETAILS */}
          <div className="space-y-2">
            <p className="text-sm lg:text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="text-sm lg:text-xs">
              <p className="flex items-center gap-2">
                <RiMoneyDollarCircleLine className="" />
                <span className="">$13.00</span>
              </p>
              <p className="flex items-center gap-2">
                <IoPeopleOutline className="" />
                <span className="">150 participants</span>
              </p>
              <p className="flex items-center gap-2">
                <GoLocation className="" />
                <span className="">ZOOM</span>
              </p>
            </div>
          </div>
        </div>

        {/* CALL TO ACTION */}
        <div className="flex items-center gap-2 md:mt-8 px-4">
          <button className="btn border-2 border-gray-800 lg:text-sm">
            Book Now
          </button>
          <button className="">
            <AiOutlineStar className="h-8 w-8" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Eventcard;
