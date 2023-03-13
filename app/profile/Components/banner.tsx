import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaGlobeAfrica,
} from "react-icons/fa";

const Banner = () => {
  return (
    <div className="h-[30rem] lg:h-[20rem] pt-[6rem] space-y-8 lg:space-y-0 lg:pt-[5rem] bg-black text-white px-[5%] w-full lg:space-x-5 lg:flex lg:items-center">
      <div className="relative w-[10rem] h-[10rem] flex overflow-hidden rounded-xl">
        <Image
          src="/assets/profileImg.png"
          alt=""
          fill={true}
          className=" object-cover "
        />
      </div>
      <div className="text-white w-full">
        <h2 className="text-3xl">Ricky Suare</h2>
        <h3 className="text-sm mt-1">Carlifonia, USA.</h3>
        <h4 className="text-lg mt-3 xl:max-w-[75%]">
          DevRel @nextjs, Web Developer, AI Enthusiast and Community Builder
        </h4>
        <div className="flex mt-4 gap-3">
          <Link href="">
            <FaInstagram className="h-6 w-6 cursor-pointer text-brand" />
          </Link>
          <Link href="">
            <FaTwitter className="h-6 w-6 cursor-pointer text-brand" />
          </Link>
          <Link href="">
            <FaGithub className="h-6 w-6 cursor-pointer text-brand" />
          </Link>
          <Link href="">
            <FaGlobeAfrica className="h-6 w-6 cursor-pointer text-brand" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
