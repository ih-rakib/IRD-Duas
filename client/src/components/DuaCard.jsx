import Image from "next/image";
import React from "react";

const DuaCard = ({ selectedCategory }) => {
  console.log(selectedCategory);

  // Ensure there's a selected category and that subcategories and duas exist
  const subcat_name_en = selectedCategory?.subcategories[0]?.subcat_name_en;
  const translation_en =
    selectedCategory?.subcategories[0]?.duas[0]?.translation_en;

  return (
    <div className="bg-white rounded-lg p-2 flex flex-col gap-3">
      <div className="flex gap-3 items-center">
        <Image src="/assets/dua.png" alt="dua icon" width={35} height={35} />
        <span className="text-[#1FA45B] text-sm">{subcat_name_en}</span>
      </div>
      <p className="">{translation_en}</p>
    </div>
  );
};

export default DuaCard;
