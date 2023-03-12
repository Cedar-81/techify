import Image from "next/image";

const Banner = () => {
  return (
    <div className="h-[30rem] lg:h-[20rem] pt-[6rem] space-y-8 lg:pt-[5rem] bg-black text-white px-[5%] w-full lg:space-x-5 lg:flex items-center">
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
        <h3 className="text-sm mt-2">Carlifonia, USA.</h3>
        <h4 className="text-lg mt-4 xl:max-w-[75%]">
          DevRel @nextjs, Web Developer, AI Enthusiast and Community Builder
        </h4>
      </div>
    </div>
  );
};

export default Banner;
