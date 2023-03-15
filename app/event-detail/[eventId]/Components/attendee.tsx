"use client";
import * as Avatar from "@radix-ui/react-avatar";

const Attendee = () => {
  return (
    <div className="space-y-2 flex flex-col items-center">
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

      <h3 className="text-sm lg:text-lg font-medium text-gray-800">
        Ricky Suare
      </h3>
    </div>
  );
};

export default Attendee;
