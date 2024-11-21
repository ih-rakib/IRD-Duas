import Image from "next/image";
import React from "react";

const Topbar = () => {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex justify-between items-center w-[78%]">
        <h3 className="text-lg font-bold">Duas Page</h3>
        <div className="relative w-[250px]">
          <input
            type="text"
            placeholder="Search by Dua Name"
            className="p-3 w-full rounded-md outline-none text-sm pr-12"
          />
          <Image
            src="/assets/search.png"
            alt="search"
            width={42}
            height={42}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 cursor-pointer"
          />
        </div>
      </div>
      <Image
        src="/assets/human.png"
        alt="human"
        width={60}
        height={60}
        className="cursor-pointer"
      />
    </div>
  );
};

export default Topbar;
