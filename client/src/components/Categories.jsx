"use client";
import React, { useState } from "react";
import Image from "next/image";
import { categories } from "../data/data";
import Subcategories from "./Subcategories";

const Categories = ({ onCategorySelect }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleCategoryClick = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
    onCategorySelect(category); // Pass selected category to parent
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredCategories = categories.filter((category) =>
    category.cat_name_en.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white overflow-hidden rounded-t-lg space-y-5">
      <h3 className="text-center py-3 w-full bg-[#1FA45B] text-white">
        Categories
      </h3>

      <div className="p-3 mx-3 flex items-center border border-gray-300 rounded-lg">
        <Image
          src="/assets/searchIcon.png"
          alt="search icon"
          width={20}
          height={20}
          className="mr-2"
        />
        <input
          type="text"
          placeholder="Search By Categories"
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full border-none outline-none"
        />
      </div>

      <div className="p-3 space-y-4">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category) => (
            <div key={category.id}>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => handleCategoryClick(category)}
              >
                <div className="flex gap-3">
                  <Image
                    src="/assets/human2.png"
                    alt="category icon"
                    width={60}
                    height={60}
                  />
                  <div className="flex flex-col justify-center">
                    <h3 className="text-[#1FA45B] text-md">
                      {category.cat_name_en}
                    </h3>
                    <span className="text-sm text-gray-500">
                      Subcategory: {category.no_of_subcat}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <strong>{category.no_of_dua}</strong>
                  <span> duas</span>
                </div>
              </div>

              {selectedCategory === category && (
                <Subcategories subcategories={category.subcategories} />
              )}
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500">No categories found</div>
        )}
      </div>
    </div>
  );
};

export default Categories;
