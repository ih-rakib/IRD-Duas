import Leftbar from "@/components/Leftbar";
import Main from "@/components/Main";
import React from "react";

const page = () => {
  return (
    <div className="flex gap-7">
      <Leftbar></Leftbar>
      <Main></Main>
    </div>
  );
};

export default page;
