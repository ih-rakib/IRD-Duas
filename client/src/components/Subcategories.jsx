"use client";
import React from "react";

const Subcategories = ({ subcategories }) => {
  return (
    <div className="relative mt-3 space-y-2">
      <div className="flex flex-col items-start space-y-4">
        <div className="relative pl-8">
          <div className="absolute left-[35px] top-0 bottom-0 transform translate-x-0 border-l-2 border-dotted border-[#1FA45B]"></div>
          {subcategories.map((subcat, idx) => (
            <div key={idx} className="flex items-center space-x-4 relative">
              <span className="w-2 h-2 bg-[#1FA45B] rounded-full"></span>
              <span>{subcat.subcat_name_en}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subcategories;
