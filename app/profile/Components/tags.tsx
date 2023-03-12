const Tags = () => {
  return (
    <div className="my-16 px-[5%]">
      <h3 className="text-2xl lg:text-3xl font-medium md:pt-16">Topics:</h3>
      <div className="flex overflow-x-auto gap-4 mt-8">
        <button className="tag-btn">Nextjs</button>
        <button className="tag-btn">Reactjs</button>
        <button className="tag-btn">Tech Conference</button>
        <button className="tag-btn">System Design</button>
        <button className="tag-btn">Nextjs Conference</button>
        <button className="tag-btn bg-black text-white border-0">
          view all
        </button>
        <button className="tag-btn text-white bg-brand border-0">
          explore
        </button>
      </div>
    </div>
  );
};

export default Tags;
