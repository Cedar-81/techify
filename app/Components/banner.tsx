import Search from "./search";

function Banner() {
  return (
    <header className="bg-black pt-28 pb-6 text-white px-[5%]">
      <div className="mx-auto w-full text-center space-y-2">
        <h1 className="text-3xl lg:text-4xl sm:w-[85%] mx-auto font-medium">
          Find and book tech events in a giffy.
        </h1>
        <p className=" leading-5 text-base sm:w-[75%] mx-auto text-gray-200 lg:text-lg">
          Perfect spot to find the right tech community via events.
        </p>
      </div>
      <div className="mx-auto w-max mt-4 mb-10">
        <button className="btn text-lg font-medium bg-gray-300/25">
          For You
        </button>
        <button className="btn text-lg">Explore</button>
      </div>
      <Search />
    </header>
  );
}

export default Banner;
