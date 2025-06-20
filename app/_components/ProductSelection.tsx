"use client";
import Image from "next/image";
import React, { useRef } from "react";

interface ProductSectionProps {
  onAddToCart: () => void;
}

function ProductSection({ onAddToCart }: ProductSectionProps) {
  const products = [
    {
      src: "/banner4.jpg",
      name: "Pure Pineapple",
      price: "$14.00",
      originalPrice: "$35.00",
    },
    {
      src: "/banner3.jpg",
      name: "Pure Pineapple",
      price: "$14.00",
      originalPrice: "$35.00",
    },
    {
      src: "/banner1.jpg",
      name: "Pure Pineapple",
      price: "$14.00",
      originalPrice: "$35.00",
    },
    {
      src: "/banner2.jpg",
      name: "Pure Pineapple",
      price: "$14.00",
      originalPrice: "$35.00",
    },
    {
      src: "/banner5.jpg",
      name: "Pure Pineapple",
      price: "$14.00",
      originalPrice: "$35.00",
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="w-full bg-gray-100 p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row">
        {/* 1 */}
        <div className="w-full lg:w-1/4 p-4 mb-4 lg:mb-0 lg:mr-4 relative overflow-hidden">
          <Image
            src="/banner1.jpg"
            alt="Promotional Banner"
            width={450}
            height={500}
            className="w-full h-full object-cover"
            unoptimized={true}
          />
          <div className="absolute top-5 sm:top-10 left-2/5 transform -translate-x-1/2 text-white">
            <p className="text-xl sm:text-4xl md:text-4xl lg:text-2xl xl:text-4xl w-3/4">
              Find out what everyone's talking about
            </p>
            <p className="text-sm sm:text-sm mt-2">Browse our best</p>
          </div>
        </div>

        {/* 2 */}
        <div className="w-full lg:w-3/4 p-4 bg-white shadow-md">
          <div className="flex justify-start space-x-3 sm:space-x-6 mb-6">
            <button className="text-gray-500 hover:text-gray-700 font-bold pb-2 border-t-4 border-transparent hover:border-yellow-500 cursor-pointer">
              DESCRIPTION
            </button>
            <button className="text-gray-500 hover:text-gray-700 font-bold pb-2 border-t-4 border-transparent hover:border-yellow-500 cursor-pointer">
              SPECIFICATIONS
            </button>
          </div>
          <div>
            <p className="text-gray-600 text-sm sm:text-base mb-4 text-end">
              View All
            </p>
            <div className="relative">
              <button
                onClick={() => scroll("left")}
                className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-gray-200 p-1.5 sm:p-2 rounded-sm hover:bg-gray-300 z-10 cursor-pointer"
              >
                &lt;
              </button>
              <div
                ref={scrollRef}
                className="flex overflow-x-auto space-x-3 sm:space-x-4 scrollbar-hide"
                style={{ scrollBehavior: "smooth" }}
              >
                {products.map((product, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-[180px] sm:w-[200px] md:w-[350px] text-center"
                  >
                    <div className="relative">
                      <Image
                        src={product.src}
                        alt={product.name}
                        width={180}
                        height={250}
                        className="w-full h-[250px] sm:h-[250px] md:h-[250px] object-cover mx-auto"
                        unoptimized={true}
                      />
                      <span className="absolute top-2 left-0 bg-green-500 text-white text-xs px-2 py-1">
                        SALE
                      </span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-semibold mt-2">
                      {product.name}
                    </h4>
                    <p className="text-yellow-500 font-bold text-sm sm:text-base mt-1">
                      {product.price}{" "}
                      <span className="line-through text-gray-400">
                        {product.originalPrice}
                      </span>
                    </p>
                    <button
                      onClick={onAddToCart}
                      className="mt-2 mb-4 bg-[#611f69] text-white w-full py-1.5 sm:py-2 text-sm sm:text-base hover:bg-[#621f69ee] cursor-pointer"
                    >
                      Add to cart
                    </button>
                  </div>
                ))}
              </div>
              <button
                onClick={() => scroll("right")}
                className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-gray-200 p-1.5 sm:p-2 rounded-sm hover:bg-gray-300 z-10 cursor-pointer"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* 3 */}
      <div className="mt-2"></div>
      <div className=" bg-orange-50 p-6 sm:p-8 lg:p-10 ">
        <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-6">
          <div className="w-full sm:w-1/2 relative">
            <div className="absolute right-0 top-[-20px] bg-[#611f69] text-xs px-2 py-1 w-15 h-15 rounded-full sm:w-15 sm:h-15 lg:w-18 lg:h-18 lg:top-[-30px]">
              <span className=" text-white text-center flex flex-col justify-center items-center mt-3 sm:mt-3 lg:mt-5">
                Sale Off <span className="font-bold">$29.99</span>
              </span>
            </div>
            <Image
              src="/banner2.jpg"
              alt="Featured Product"
              width={200}
              height={300}
              className="w-full h-full object-cover"
              unoptimized={true}
            />
          </div>
          <div className="w-full sm:w-2/5 sm:text-left">
            <h4 className="text-xl sm:text-base lg:text-xl font-semibold mt-2 text-red-600">
              AGELOCⓇ LUMISPAⓇ IO
            </h4>
            <p className="text-2xl sm:text-xl lg:text-3xl mt-1 font-bold">
              ageLOCⓇ LumiSpaⓇ iO
            </p>
            <div className="flex justify-start sm:justify-start mt-2">
              <span className="text-xs sm:text-sm lg:text-base py-1">
                Elevate your skincare routine
              </span>
            </div>
            <button className="mt-2 bg-[#611f69] text-white px-4 py-2 sm:px-6 sm:py-3 w-full sm:w-auto text-center hover:bg-[#621f69ee] transition duration-300 cursor-pointer">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductSection;