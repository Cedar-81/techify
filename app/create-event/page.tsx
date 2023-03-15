import * as Form from "@radix-ui/react-form";
import Filter from "../Components/filter";
import Description from "./Components/description";
import Imageupload from "./Components/imageupload";

const Createevent = () => {
  return (
    <div className="">
      <Imageupload />
      <Description />
      <div className="lg:text-gray-800 mb-24">
        <Filter />
      </div>
    </div>
  );
};

export default Createevent;
