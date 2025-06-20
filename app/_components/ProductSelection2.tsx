"use client";
import Image from "next/image";
import React, { useRef } from "react";

function ProductSection2() {
  const products = [
    {
      src: "/banner4.jpg",
      name: "New Beauty Products Our Editor's Are Loving This December",
    },
    {
      src: "/banner3.jpg",
      name: "New Beauty Products Our Editor's Are Loving This December",
    },
    {
      src: "/banner1.jpg",
      name: "New Beauty Products Our Editor's Are Loving This December",
    },
    {
      src: "/banner2.jpg",
      name: "New Beauty Products Our Editor's Are Loving This December",
    },
    {
      src: "/banner5.jpg",
      name: "New Beauty Products Our Editor's Are Loving This December",
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
    <div className="mb-20">
      <div className="w-full p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row">
        {/* 1 */}
        <div className="w-full lg:w-3/4 p-4 bg-white">
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
                    className="flex-shrink-0 w-[180px] sm:w-[200px] md:w-[350px] text-center border border-gray-100"
                  >
                    <Image
                      src={product.src}
                      alt={product.name}
                      width={180}
                      height={250}
                      className="w-[80%] h-[250px] sm:h-[250px] md:h-[250px] object-cover mx-auto mt-8"
                      unoptimized={true}
                    />
                    <h4 className="text-xs sm:text-sm my-8 sm:mx-10 md:mx-24">
                      {product.name}
                    </h4>
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

        {/* 2 */}

        <div className="w-full lg:w-1/4 p-4 mb-4 lg:mb-0 lg:mr-4 relative overflow-hidden">
          <Image
            src="/banner1.jpg"
            alt="Promotional Banner"
            width={450}
            height={500}
            className="w-full h-full object-cover"
            unoptimized={true}
          />
          <div className="absolute top-2/5 left-1/2 transform -translate-x-1/2 text-white text-center">
            <p className="text-xl font-bold sm:text-4xl sm:mb-4 md:text-4xl lg:text-2xl xl:text-4xl">
              News
            </p>
            <u className="text-sm sm:text-sm">Nu Skin In The News</u>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductSection2;
