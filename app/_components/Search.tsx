"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface SearchProps {
  onAddToCart: () => void;
  cartCount: number;
}

function Search({ onAddToCart, cartCount }: SearchProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleInputChange = (e: any) => {
    const value = e.target.value;
    setSearchQuery(value);
  };

  // tìm kiếm
  const handleSearch = () => {
    if (!searchQuery.trim()) {
      alert("Vui lòng nhập từ khóa tìm kiếm");
      return;
    }

    router.push(`/detail?search=${encodeURIComponent(searchQuery.trim())}`);
  };

  // enter
  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
      <div className="relative w-full sm:w-[600px] md:w-[800px]">
        <input
          type="text"
          placeholder="Search for products"
          value={searchQuery}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          className="w-full rounded-md border border-gray-300 px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#611f69]"
        />
        <button
          onClick={handleSearch}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-transparent p-1 cursor-pointer hover:opacity-75"
        >
          <Image
            src="/search.png"
            alt="search"
            width={20}
            height={20}
            unoptimized={true}
          />
        </button>
      </div>
      <div className="flex items-center justify-end gap-3 mt-2 sm:mt-0">
        <button className="flex items-center gap-1 rounded-md bg-white px-2 py-1 hover:bg-gray-100 cursor-pointer">
          <Image
            src="/heart.png"
            alt="heart"
            width={20}
            height={20}
            unoptimized={true}
          />
          0
        </button>
        <button
          onClick={onAddToCart}
          className="flex items-center gap-1 rounded-md bg-white px-2 py-1 hover:bg-gray-100 cursor-pointer"
        >
          <Image
            src="/grocery-store.png"
            alt="cart"
            width={20}
            height={20}
            unoptimized={true}
          />
          {cartCount}
        </button>
      </div>
    </div>
  );
}

export default Search;
