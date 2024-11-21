import Image from "next/image";
import React from "react";

const Leftbar = () => {
  return (
    <div className="w-[90px] flex flex-col items-center justify-center bg-white p-4 rounded-lg h-full">
      {/* logo */}
      <div>
        <Image
          src="/assets/prayer1.png"
          alt="Prayer Icon 1"
          width={73}
          height={73}
        />
      </div>

      {/* menu icons */}
      <div className="mt-16">
        <div className="flex flex-col gap-4">
          <Image
            src="/assets/home.png"
            alt="Home Icon"
            width={38}
            height={38}
          />
          <Image src="/assets/app.png" alt="app Icon" width={38} height={38} />
          <Image
            src="/assets/light.png"
            alt="light Icon"
            width={38}
            height={38}
          />

          <Image
            src="/assets/save.png"
            alt="save Icon"
            width={38}
            height={38}
          />
          <Image
            src="/assets/plus.png"
            alt="plus Icon"
            width={38}
            height={38}
          />
          <Image
            src="/assets/text.png"
            alt="text Icon"
            width={38}
            height={38}
          />
          <Image
            src="/assets/book.png"
            alt="book Icon"
            width={38}
            height={38}
          />
        </div>
      </div>

      {/* pray button */}
      <div className="mt-16">
        <Image
          src="/assets/prayer2.png"
          alt="Prayer Icon 2"
          width={73}
          height={73}
        />
      </div>
    </div>
  );
};

export default Leftbar;
