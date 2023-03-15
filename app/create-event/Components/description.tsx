"use client";
import Filter from "@/app/Components/filter";
import * as Form from "@radix-ui/react-form";

const Description = () => {
  return (
    <Form.Root className="pt-10 px-[5%] space-y-6 lg:space-y-16">
      <Form.Field name="event-title" className="max-w-[40rem] mx-auto">
        <Form.Label className="text-lg font-medium text-gray-500">
          Event title
        </Form.Label>
        <Form.Control asChild>
          <input className="edit-input" type="text" required />
        </Form.Control>
      </Form.Field>

      <Form.Field name="event-description" className="max-w-[40rem] mx-auto">
        <Form.Label className="text-lg font-medium text-gray-500">
          Event description
        </Form.Label>
        <Form.Control asChild>
          <textarea className="edit-input" required />
        </Form.Control>
      </Form.Field>

      <Form.Submit asChild className="w-full ">
        <div className="w-full ">
          <button className="floating-btn">Publish</button>
        </div>
      </Form.Submit>
    </Form.Root>
  );
};

export default Description;
