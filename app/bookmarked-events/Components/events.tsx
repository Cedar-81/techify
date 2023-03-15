import Secondaryeventscard from "@/app/Components/secondaryeventcard";
import Link from "next/link";

const Events = () => {
  return (
    <div className="my-16 px-[5%]">
      <h2 className="text-2xl lg:text-3xl font-medium md:pt-16">
        Bookmarked events.
      </h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 justify-evenly justify-items-center gap-y-8 lg:gap-y-16 xl:gap-y-10 grid-cols-1 mt-12">
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

export default Events;
