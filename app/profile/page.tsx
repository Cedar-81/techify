import { Fragment } from "react";
import Tags from "./Components/tags";
import Banner from "./Components/banner";
import Events from "./Components/events";

const Profile = () => {
  return (
    <Fragment>
      <Banner />
      <Tags />
      <Events />
    </Fragment>
  );
};

export default Profile;
