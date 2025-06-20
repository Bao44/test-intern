import Image from "next/image";
import React from "react";

function Content() {
  return (
    <div>
      {/* Improving */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 border-gray-200 border-1">
        <div className="py-6 px-10 sm:py-12">
          <p className="text-2xl sm:text-3xl">Nu Skin,</p>
          <p className="text-1xl sm:text-2xl">Improving Lives Everyday</p>
        </div>
        <div className="py-6 px-10 sm:py-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <h3 className="text-2xl sm:text-3xl">25+</h3>
            <p>Years of Giving</p>
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl">20+</h3>
            <u>Current Social Projects</u>
          </div>
          <div className="w-[85%]">
            <h3 className="text-2xl sm:text-3xl">850M+</h3>
            <u>Meals Donated through Nourish the Children</u>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10">
        <Image
          src={"/banner4.jpg"}
          alt="Product Banner"
          width={1200}
          height={1200}
          className="h-[340px] w-full lg:h-[480px] object-cover"
        />
        <div className="bg-gray-100 p-16">
          <p className="text-3xl sm:text-4xl">Being a Force for Good</p>
          <p className="py-4">
            Some call it corporate social responsibility. We call it our
            purpose. Together we're engaged in initiatives worldwide-nourishing
            thousands of hungry children, funding pediatric health and wellness
            services, or striving for a more sustainable future. And sometimes,
            we're simply taking meaningful steps to improve our local
            communities. Whatever we do,we believe changing the world begins
            with a single action.
          </p>
          <b>Explore our projects</b>
        </div>
      </div>

      {/* Content 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10">
        <Image
          src={"/banner2.jpg"}
          alt="Product Banner"
          width={1200}
          height={1200}
          className="h-[340px] w-full lg:h-[480px] object-cover order-first lg:order-last"
        />
        <div className="bg-gray-100 p-16 order-last lg:order-first">
          <p className="text-3xl sm:text-4xl">Nature + Science</p>
          <p className="py-4">
            Capturing the best in nature to bring you the best results is our
            personal mission. We combine powerful ingredients with innovative
            science and technology. The result? World-class products that
            deliver real benefits. And even though we've spent more than 30
            years researching aging at the genetic level, Mother Nature
            continually inspires us to push the boundaries of inquiry and
            innovation. We bottle what's best and bring it right to your door.
          </p>
          <b>Discover more</b>
        </div>
      </div>
    </div>
  );
}

export default Content;
