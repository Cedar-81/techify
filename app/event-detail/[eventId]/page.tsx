import React from "react";
import Attendees from "./Components/attendees";
import Details from "./Components/details";
import Header from "./Components/header";
import Related from "./Components/related";

const Eventdetails = () => {
  return (
    <div className="pt-[5rem] px-[5%]">
      <div className="w-full max-w-[45rem] mb-16 mx-auto">
        <Header />
        <Details />
        <Attendees />
        <Related />
      </div>
    </div>
  );
};

export default Eventdetails;
