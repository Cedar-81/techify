import Eventcard from "./eventcard";
import Tags from "./tags";

const Events = () => {
  return (
    <div className="my-16 px-[5%]">
      <div className="md:pt-16">
        <h2 className="text-2xl lg:text-3xl font-medium">Events for you.</h2>
        <Tags />
      </div>

      <div className="flex flex-col md:flex-row md:flex-wrap md:space-y-0 md:justify-evenly md:gap-12 space-y-8 mt-12">
        <Eventcard />
        <Eventcard />
        <Eventcard />
        <Eventcard />
      </div>
    </div>
  );
};

export default Events;
