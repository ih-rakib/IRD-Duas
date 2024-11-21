import React from "react";
import DuaCard from "./DuaCard";

const Home = ({ selectedCategory }) => {
  console.log();
  const subcat_name_en = selectedCategory?.subcategories[0]?.subcat_name_en;

  return (
    <div className="flex flex-col gap-7">
      <div className="bg-white rounded-lg">
        <div className="flex p-2 gap-1 items-center">
          <p className="text-[#1FA45B] text-md">Section:</p>{" "}
          <span className="text-sm"> {subcat_name_en}</span>
        </div>
      </div>
      <DuaCard selectedCategory={selectedCategory}></DuaCard>
    </div>
  );
};

export default Home;
