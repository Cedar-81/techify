import Link from "next/link";
import Eventcard from "./eventcard";
import Tags from "./tags";

const Events = () => {
  return (
    <div className="my-16 px-[5%]">
      <div className="md:pt-16">
        <h2 className="text-2xl lg:text-3xl font-medium">Events for you.</h2>
        <Tags />
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 justify-evenly justify-items-center gap-y-8 lg:gap-y-16 xl:gap-y-10 grid-cols-1 mt-12">
        <Link href="event-detail/123">
          <Eventcard />
        </Link>
        <Link href="event-detail/123">
          <Eventcard />
        </Link>
        <Link href="event-detail/123">
          <Eventcard />
        </Link>
        <Link href="event-detail/123">
          <Eventcard />
        </Link>
      </div>
    </div>
  );
};

export default Events;
