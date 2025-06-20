"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ShowCategories from "../_components/ShowCategories";
import Search from "../_components/Search";
import Navbar from "../_components/Navbar";
import { SearchController } from "../_controllers/SearchController";
import { Textarea } from "@heroui/input";

function DetailPage() {
  const [cartCount, setCartCount] = useState(0);
  const [searchController] = useState(() => new SearchController());
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const [displayData, setDisplayData] = useState<string>("");

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  useEffect(() => {
    if (searchQuery) {
      const result = searchController.handleSearch(searchQuery);
      console.log("result:", result);
      setDisplayData(result.data?.query || "Không có dữ liệu");
    } else {
      setDisplayData("Vui lòng nhập dữ liệu để xem kết quả xử lý MVC");
    }
  }, [searchQuery, searchController]);

  return (
    <div className="p-4 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="">
          <ShowCategories />
        </div>
        <div className="col-span-3">
          <Search onAddToCart={handleAddToCart} cartCount={cartCount} />
          <Navbar />
        </div>
      </div>
      <div className="mt-4 border-gray-300 border-1 rounded-xl">
        <Textarea
          isReadOnly
          className="max-w-full p-4"
          value={displayData}
          label="Detail"
          labelPlacement="outside"
          variant="bordered"
        />
      </div>
    </div>
  );
}

export default DetailPage;
