import { BsArrowRight } from "react-icons/bs";

const Tags = () => {
  return (
    <div>
      <h3 className="flex gap-2 text-lg mt-3">Related Tags:</h3>
      <div className="flex overflow-x-auto gap-4 mt-2">
        <button className="tag-btn">Nextjs</button>
        <button className="tag-btn">Reactjs</button>
        <button className="tag-btn">Tech Conference</button>
        <button className="tag-btn">System Design</button>
        <button className="tag-btn">Nextjs Conference</button>
      </div>
    </div>
  );
};

export default Tags;
