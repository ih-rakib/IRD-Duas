import Image from "next/image";
import React from "react";

const Rightbar = () => {
  return (
    <div className="bg-white p-3 rounded-lg">
      <h3 className="text-center font-semibold text-lg mt-3 mb-7">Settings</h3>

      <div className="flex gap-3 items-center bg-gray-100 p-2 text-gray-400 cursor-pointer mb-5 rounded-md">
        <Image
          src="/assets/language.png"
          alt=""
          width={35}
          height={35}
          className="bg-gray-200 rounded-full p-2"
        />
        <span>Language Settings</span>
      </div>
      <div className="flex gap-3 items-center bg-gray-100 p-2 text-gray-400 cursor-pointer mb-5 rounded-md">
        <Image
          src="/assets/general.png"
          alt=""
          width={35}
          height={35}
          className="bg-gray-200 rounded-full p-2"
        />
        <span>General Settings</span>
      </div>
      <div className="flex gap-3 items-center bg-gray-100 p-2 text-gray-400 cursor-pointer mb-5 rounded-md">
        <Image
          src="/assets/font.png"
          alt=""
          width={35}
          height={35}
          className="bg-gray-200 rounded-full p-2"
        />
        <span>Font Settings</span>
      </div>
      <div className="flex gap-3 items-center bg-gray-100 p-2 text-gray-400 cursor-pointer mb-5 rounded-md">
        <Image
          src="/assets/general.png"
          alt=""
          width={35}
          height={35}
          className="bg-gray-200 rounded-full p-2"
        />
        <span>Appearance Settings</span>
      </div>
      <div className="flex justify-between items-center my-7">
        <p>Night Mode</p>
        <Image src="/assets/toggle.png" alt="" width={35} height={25} />
      </div>
    </div>
  );
};

export default Rightbar;
