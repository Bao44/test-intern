import Image from "next/image";
import React from "react";

function LogoReview() {
  return (
    <div>
      <div className="relative flex items-center justify-between gap-4">
        <Image
          src={"/banner3.jpg"}
          alt="Product Banner"
          width={1200}
          height={1200}
          className="h-[180px] w-full object-cover"
        />
        <div className="absolute ml-5 text-center right-10 text-white">
          <p>WORLD'S #1 COMPANY FOR</p>
          <p className="font-bold p-4 text-lg sm:text-xl">
            Beauty & Wellness Device Systems
          </p>
          <i>Source: Euromonitor</i>
        </div>
      </div>
      <div className="w-[90%] m-auto mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="w-full p-4 text-center mx-auto flex flex-col items-center">
          <Image
            src={"/xtech789.png"}
            alt="Product 1"
            width={150}
            height={150}
            className="w-25 h-25 object-cover rounded-full"
          />
          <div className="max-w-2/3">
            <p className="text-lg mt-2">ageLOCⓇ LumiSpaⓇ iO</p>
            <p>2023 Best Cleansing Device Award Winner</p>
            <p className="text-gray-600">NewBeauty Awards</p>
          </div>
        </div>
        <div className="w-full p-4 text-center mx-auto flex flex-col items-center">
          <Image
            src={"/ig.png"}
            alt="Product 2"
            width={150}
            height={150}
            className="w-25 h-25 object-cover rounded-full"
          />
          <div className="max-w-2/3">
            <p className="text-lg mt-2">Epoch Baobab Body Butter</p>
            <p>Body Butter Sliver Winner</p>
            <p className="text-gray-600">2023 Beauty Bible Award</p>
          </div>
        </div>
        <div className="w-full p-4 text-center mx-auto flex flex-col items-center">
          <Image
            src={"/slack.png"}
            alt="Product 3"
            width={150}
            height={150}
            className="w-25 h-25 object-cover rounded-full"
          />
          <div className="max-w-2/3">
            <p className="text-lg mt-2">Nu Skin Enterprises</p>
            <p>2022 Best USA Beauty Brand</p>
            <p className="text-gray-600">Global Makeup Awards</p>
          </div>
        </div>
        <div className="w-full p-4 text-center mx-auto flex flex-col items-center">
          <Image
            src={"/google.png"}
            alt="Product 3"
            width={150}
            height={150}
            className="w-25 h-25 object-cover rounded-full"
          />
          <div className="max-w-2/3">
            <p className="text-lg mt-2">EpochⓇ Yin & Yang Mask</p>
            <p>2022 Most Sustainable Packaging : Sliver Winner</p>
            <p className="text-gray-600">Global Green Beauty Awards</p>
          </div>
        </div>
        <div className="w-full p-4 text-center mx-auto flex flex-col items-center">
          <Image
            src={"/github.png"}
            alt="Product 4"
            width={150}
            height={150}
            className="w-25 h-25 object-cover rounded-full"
          />
          <div className="max-w-2/3">
            <p className="text-lg mt-2">ageLOCⓇ Facial Spa</p>
            <p>2021 Readers' Choice Beauty Award Winner</p>
            <p className="text-gray-600">InStyle</p>
          </div>
        </div>
        <div className="w-full p-4 text-center mx-auto flex flex-col items-center">
          <Image
            src={"/linkedin.png"}
            alt="Product 4"
            width={150}
            height={150}
            className="w-25 h-25 object-cover rounded-full"
          />
          <div className="max-w-2/3">
            <p className="text-lg mt-2">NutricentialsⓇ Eye Love Bright Eyes</p>
            <p>2022 Pure Beauty Award Finalist</p>
            <p className="text-gray-600">Pure Beauty Global Awards</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoReview;
