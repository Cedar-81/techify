import { BsArrowRight } from "react-icons/bs";

const Tags = () => {
  return (
    <div>
      <h3 className="flex gap-2 text-lg mt-3">Related Tags:</h3>
      <div className="flex overflow-x-auto gap-4 mt-2">
        <button className="btn border-2 border-gray-800 min-w-max">
          Nextjs
        </button>
        <button className="btn border-2 border-gray-800 min-w-max">
          Reactjs
        </button>
        <button className="btn border-2 border-gray-800 min-w-max">
          Tech Conference
        </button>
        <button className="btn border-2 border-gray-800 min-w-max">
          System Design
        </button>
        <button className="btn border-2 border-gray-800 min-w-max">
          Nextjs Conference
        </button>
      </div>
    </div>
  );
};

export default Tags;
