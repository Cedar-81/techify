"use client";
import * as RTabs from "@radix-ui/react-tabs";
import { MdOutlineEventNote } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import Tags from "./tags";
import Events from "./events";
import Edit from "./edit";

const Tabs = () => {
  return (
    <RTabs.Root className="max-w-full" defaultValue="tab1">
      <RTabs.List
        className="TabsList w-full grid grid-cols-2 bg-black text-white sticky top-[4rem] z-20"
        aria-label="Profile tabs"
      >
        <RTabs.Trigger
          className="py-4 data-[state=active]:text-brand transition-all data-[state=active]:bg-black/90 data-[state=active]:border-b-4 data-[state=active]:border-b-brand"
          value="tab1"
        >
          <MdOutlineEventNote className="icon mx-auto" />
        </RTabs.Trigger>
        <RTabs.Trigger
          className="py-4 data-[state=active]:text-brand transition-all data-[state=active]:bg-black/90 data-[state=active]:border-b-4 data-[state=active]:border-b-brand"
          value="tab2"
        >
          <FiEdit className="icon mx-auto" />
        </RTabs.Trigger>
      </RTabs.List>

      <RTabs.Content className="" value="tab1">
        <Tags />
        <Events />
      </RTabs.Content>

      <RTabs.Content className="" value="tab2">
        <Edit />
      </RTabs.Content>
    </RTabs.Root>
  );
};

export default Tabs;
