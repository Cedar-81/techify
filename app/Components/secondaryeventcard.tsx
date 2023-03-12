import Image from "next/image";
import { RiNotification2Line } from "react-icons/ri";

const Secondaryeventscard = () => {
  return (
    <div className="relative h-[18rem] w-[22rem] rounded-xl overflow-hidden ">
      <div className="absolute h-full w-full">
        <Image
          src="/assets/cardimg2.png"
          alt=""
          fill={true}
          className=" object-cover "
        />
      </div>

      <div className="inset-0 h-full w-full absolute bg-black/60"></div>

      <div className="relative flex flex-col justify-between h-full w-full p-4">
        <div className="flex justify-between text-white">
          <button className="btn backdrop-blur-lg">150 participants</button>
          <button className=" rounded-full p-2 backdrop-blur-lg">
            <RiNotification2Line className="icon" />
          </button>
        </div>

        <div className=" backdrop-blur-lg text-white w-full h-24 flex flex-col justify-between py-[0.7rem] px-2 rounded-xl">
          <p className="text-xl">Nextjs Cohort 2.0</p>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <div className="w-7 h-7 rounded-full relative overflow-hidden">
                <Image
                  src="/assets/profileImg.png"
                  alt=""
                  fill={true}
                  className=" object-cover "
                />
              </div>
              <p className="text-sm">Ricky Suare</p>
            </div>
            <p className="text-sm">8pm, Tue Mar 6th, 2023.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secondaryeventscard;
