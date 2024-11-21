"use client";
import React, { useState } from "react";
import Categories from "./Categories";
import Home from "./Home";

const Content = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex w-full gap-7">
      <div className="w-[30%]">
        <Categories onCategorySelect={handleCategorySelect} />
      </div>
      <div className="w-[70%]">
        <Home selectedCategory={selectedCategory} />
      </div>
    </div>
  );
};

export default Content;
