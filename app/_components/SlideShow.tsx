"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      src: "/banner1.jpg",
      title: "10% OFF YOUR FIRST ORDER",
      subtitle: "Reasonable Price",
    },
    {
      src: "/banner2.jpg",
      title: "20% OFF SUMMER SALE",
      subtitle: "Great Deals",
    },
    {
      src: "/banner3.jpg",
      title: "NEW ARRIVALS",
      subtitle: "Explore Now",
    },
  ];

  const subSlides = [
    {
      src: "/banner4.jpg",
      title: "PREFER CUSTOMER 20S",
      subtitle: "Winter Collection",
    },
    {
      src: "/banner5.jpg",
      title: "PREFER CUSTOMER 30S",
      subtitle: "Winter Collection",
    },
  ];

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % slides.length);
  //   }, 20000);
  //   return () => clearInterval(interval);
  // }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full">
      {/* Main */}
      <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden">
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-600 bg-opacity-50 text-white p-2 sm:p-3 md:p-4 z-10 cursor-pointer"
        >
          &lt;
        </button>
        <Image
          src={slides[currentSlide].src}
          alt={slides[currentSlide].title}
          layout="fill"
          objectFit="cover"
          unoptimized={true}
        />
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center text-white">
          <h2 className="text-sm sm:text-xl md:text-2xl font-bold lg:text-2xl">
            {slides[currentSlide].title}
          </h2>
          <h3 className="text-xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-white mt-2">
            {slides[currentSlide].subtitle}
          </h3>
          <button className="mt-3 sm:mt-4 bg-white text-black px-3 sm:px-4 py-1 sm:py-2 rounded cursor-pointer">
            Shop Now
          </button>
        </div>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-600 bg-opacity-50 text-white p-2 sm:p-3 md:p-4 z-10 cursor-pointer"
        >
          &gt;
        </button>
      </div>

      {/* Sub */}
      <div className="flex flex-col md:flex-row justify-between mt-4 gap-4">
        {subSlides.map((slide, index) => (
          <div key={index} className="w-full md:w-1/2 h-32 sm:h-40 md:h-48 relative">
            <Image
              src={slide.src}
              alt={slide.title}
              layout="fill"
              objectFit="cover"
              unoptimized={true}
            />
            <div className="absolute top-1/8 left-1/3 transform -translate-x-1/2 text-white lg:left-1/3 sm:left-1/3 md:left-2/5">
              <h4 className="text-sm sm:text-base md:text-lg">{slide.title}</h4>
              <h5 className="text-base sm:text-lg md:text-lg font-bold py-1 sm:py-2">
                {slide.subtitle}
              </h5>
              <button className="mt-1 sm:mt-2 bg-gray-200 text-black px-2 sm:px-3 py-1 sm:py-2 rounded cursor-pointer">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;