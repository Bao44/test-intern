"use client";
import Image from "next/image";
import React, { useState } from "react";

function ShowCategories() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const categories = [
    "Dresses",
    "Shirts",
    "Jeans",
    "Swimwear",
    "Sleepwear",
    "Sportswear",
    "Jumpsuits",
    "Blazers",
    "Jackets",
    "Shoes",
  ];

  return (
    <div className="relative w-full md:mt-15 lg:mt-15">
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-1 bg-[#611f69] text-white w-full px-8 py-4 rounded-none hover:bg-[#621f69ee] focus:outline-none cursor-pointer"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <div className="flex justify-between items-center w-full">
          <span className=" sm:inline">Categories</span>
          <Image
            src="/arrow-down.png"
            alt="arrow down"
            width={16}
            height={16}
            unoptimized={true}
            className=" sm:inline"
          />
        </div>
      </button>
      {isOpen && (
        <div
          className="absolute z-100 bg-white border border-gray-200 shadow-lg w-full min-w-[150px] mt-0 left-0"
          role="menu"
          aria-label="Category Options"
        >
          {categories.map((category, index) => (
            <a
              key={category}
              href={`#${category.toLowerCase()}`}
              className={`block p-3 pl-7 hover:bg-gray-100 ${
                index < categories.length - 1 ? "border-b border-gray-200" : ""
              }`}
              role="menuitem"
              onClick={() => setIsOpen(false)}
            >
              {category}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default ShowCategories;
