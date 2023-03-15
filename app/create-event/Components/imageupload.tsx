import { useEffect, useRef, useState } from "react";
import { BsCloudUploadFill } from "react-icons/bs";

const Imageupload = () => {
  const [imgUrl, setImgUrl] = useState("");
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (imgUrl.length > 0 && ref.current)
      ref.current.style.backgroundImage = `url(${imgUrl})`;
  }, [imgUrl]);

  return (
    <div className="pt-[5rem] px-[5%]">
      <div
        ref={ref}
        className="h-[20rem] bg-cover bg-no-repeat w-full max-w-[40rem] mx-auto bg-black/70 rounded-lg overflow-hidden"
      >
        <input
          type="file"
          accept="image/*"
          name="post-image"
          id="image"
          className="hidden"
          onChange={(e) =>
            e.target.files &&
            e.target.files.length > 0 &&
            setImgUrl(`${URL.createObjectURL(e.target.files[0])}`)
          }
        />
        <label
          htmlFor="image"
          className="cursor-pointer text-gray-300 h-full w-full flex flex-col space-y-2 bg-black/70 items-center justify-center"
        >
          <BsCloudUploadFill className="h-10 w-10 " />
          <p className="text-lg">Upload event image</p>
        </label>
      </div>
    </div>
  );
};

export default Imageupload;
