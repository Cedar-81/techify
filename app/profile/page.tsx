import Tags from "./Components/tags";
import Banner from "./Components/banner";
import Events from "./Components/events";
import Tabs from "./Components/tabs";

const Profile = () => {
  return (
    <div className=" divide-y-2 divide-gray-800 max-w-full">
      <Banner />
      <Tabs />
    </div>
  );
};

export default Profile;
