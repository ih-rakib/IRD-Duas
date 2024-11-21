import React from "react";
import Topbar from "./Topbar";
import Rightbar from "./Rightbar";
import Content from "./Content";

const Main = () => {
  return (
    <div className="w-full">
      <Topbar />

      <div className="flex w-full gap-7 mt-7">
        <div className="w-[80%]">
          <Content />
        </div>
        <div className="w-[20%]">
          <Rightbar />
        </div>
      </div>
    </div>
  );
};

export default Main;
