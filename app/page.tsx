"use client";
import ShowCategories from "./_components/ShowCategories";
import Search from "./_components/Search";
import Navbar from "./_components/Navbar";
import Slideshow from "./_components/SlideShow";
import Button from "./_components/Button";
import ProductSection from "./_components/ProductSelection";
import LogoReview from "./_components/LogoReview";
import Content from "./_components/Content";
import ProductSection2 from "./_components/ProductSelection2";
import { useState } from "react";

export default function Home() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <div className="p-4 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="">
          <ShowCategories />
        </div>
        <div className="col-span-3">
          <Search onAddToCart={handleAddToCart} cartCount={cartCount} />
          <Navbar />
          <Slideshow />
        </div>
      </div>
      <Button text="Most Popular Products" />
      <ProductSection onAddToCart={handleAddToCart} />
      <Button text="Award And Recognition" />
      <LogoReview />
      <Button text="The Nu Skin Way" />
      <Content />
      <Button text="Nu Skin In The News" />
      <ProductSection2 />
    </div>
  );
}
