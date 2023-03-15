import Secondaryeventscard from "@/app/Components/secondaryeventcard";
import Link from "next/link";
import React from "react";

const Related = () => {
  return (
    <div className="mt-16 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">Related events</h1>
        <button className="btn text-brand font-bold">see more</button>
      </div>

      <div className="flex justify-between overflow-y-auto xl:overflow-y-hidden xl:flex-wrap xl:gap-0 xl:gap-y-4 gap-x-8">
        <Link href="event-detail/123">
          <Secondaryeventscard />
        </Link>
        <Link href="event-detail/123">
          <Secondaryeventscard />
        </Link>
        <Link href="event-detail/123">
          <Secondaryeventscard />
        </Link>
        <Link href="event-detail/123">
          <Secondaryeventscard />
        </Link>
      </div>
    </div>
  );
};

export default Related;
