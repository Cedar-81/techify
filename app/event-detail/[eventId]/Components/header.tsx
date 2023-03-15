"use client";
import Image from "next/image";
import * as Avatar from "@radix-ui/react-avatar";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { IoPeopleOutline } from "react-icons/io5";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

const Header = () => {
  return (
    <div className=" space-y-10">
      <div className="relative w-full aspect-[4/2] rounded-lg flex overflow-hidden">
        <Image
          src="/assets/cardimg.png"
          alt=""
          fill={true}
          className=" object-cover "
        />
      </div>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Nextjs Cohort 2.0</h1>

        <div className="flex gap-3 items-center">
          <Avatar.Root className="">
            <Avatar.Image
              src="/assets/profileImg.png"
              alt=""
              className=" h-[3.4rem] border-2 border-brand aspect-1 rounded-full"
            />
            <Avatar.Fallback
              className="text-lg font-medium rounded-full bg-brand text-white h-12 border-2 border-brand flex items-center justify-center aspect-[1]"
              delayMs={600}
            >
              RS
            </Avatar.Fallback>
          </Avatar.Root>

          <h3 className="text-base text-gray-600">
            Your Host:{" "}
            <span className="block text-lg font-medium text-gray-800">
              Ricky Suare
            </span>
          </h3>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex gap-4 items-center">
          <AiOutlineClockCircle className="text-xl text-brand" />
          <p className="">Thursday 8th May, 2023. 9:00PM</p>
        </div>
        <div className="flex gap-4 items-center">
          <GoLocation className="text-xl text-brand" />
          <p className="">Ikorodu, Lagos.</p>
        </div>
        <div className="flex gap-4 items-center">
          <IoPeopleOutline className="text-xl text-brand" />
          <p className="">150 participants</p>
        </div>
        <div className="flex gap-4 items-center">
          <RiMoneyDollarCircleLine className="text-xl text-brand" />
          <p className="">$130</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
