"use client";
import * as Form from "@radix-ui/react-form";
import Description from "./Components/description";
import Imageupload from "./Components/imageupload";

const Createevent = () => {
  return (
    <div className="">
      <Form.Root>
        <Imageupload />
        <Description />
      </Form.Root>
    </div>
  );
};

export default Createevent;
