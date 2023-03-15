import Attendee from "./attendee";

const Attendees = () => {
  return (
    <div className="mt-16 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">Attendees</h1>
        <button className="btn text-brand font-bold">see all</button>
      </div>

      <div className="flex justify-between">
        <Attendee />
        <Attendee />
        <Attendee />
        <Attendee />
      </div>
    </div>
  );
};

export default Attendees;
