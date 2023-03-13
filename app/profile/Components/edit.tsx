import {
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaGlobeAfrica,
} from "react-icons/fa";

const Edit = () => {
  return (
    <div className="my-16 mx-auto lg:max-w-[60rem] px-8">
      <div className="space-y-10 mb-16">
        <div className="">
          <h2 className="text-2xl font-medium">Profile details</h2>
        </div>

        <fieldset className=" space-y-8">
          <div className="grid grid-cols-1 lg:w-[80%] grid-rows-2">
            <label className="text-base text-gray-500">Name</label>
            <input type="text" className="edit-input" name="name" />
          </div>
          <div className="grid grid-cols-1 lg:w-[80%] grid-rows-2">
            <label className="text-base text-gray-500">Location</label>
            <input type="text" className="edit-input" name="location" />
          </div>
          <div className="grid grid-cols-1 lg:w-[80%] grid-rows-2">
            <label className="text-base text-gray-500">Bio</label>
            <textarea maxLength={240} className="edit-input" name="bio" />
          </div>
        </fieldset>
      </div>

      <div className="space-y-10 pt-10">
        <div className="">
          <h2 className="text-2xl font-medium">Social media details</h2>
        </div>

        <fieldset className=" space-y-10 pb-8">
          <div className="flex gap-x-4 items-center lg:w-[80%]">
            <label className="text-base text-gray-500">
              <FaInstagram className="h-6 w-6 cursor-pointer text-brand" />
            </label>
            <input type="text" className="edit-input mt-0" name="instagram" />
          </div>
          <div className="flex gap-x-4 items-center lg:w-[80%]">
            <label className="text-base text-gray-500">
              <FaTwitter className="h-6 w-6 cursor-pointer text-brand" />
            </label>
            <input type="text" className="edit-input mt-0" name="twitter" />
          </div>
          <div className="flex gap-x-4 items-center lg:w-[80%]">
            <label className="text-base text-gray-500">
              <FaGithub className="h-6 w-6 cursor-pointer text-brand" />
            </label>
            <input type="text" className="edit-input mt-0" name="github" />
          </div>
          <div className="flex gap-x-4 items-center lg:w-[80%]">
            <label className="text-base text-gray-500">
              <FaGlobeAfrica className="h-6 w-6 cursor-pointer text-brand" />
            </label>
            <input type="text" className="edit-input mt-0" name="website" />
          </div>
        </fieldset>
      </div>

      <div className="w-full ">
        <button className="btn bg-brand text-white mt-20 px-10 fixed bottom-24 right-10 shadow-lg">
          Save
        </button>
      </div>
    </div>
  );
};

export default Edit;
