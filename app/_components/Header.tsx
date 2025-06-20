import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-[#611f69] text-white py-4 px-6 md:px-15 flex justify-between items-center w-full">
      <nav className="space-x-4">
        <a href="/" className="hover:text-purple-300">
          FAQs
        </a>
        <a href="/" className="hover:text-purple-300">
          Help
        </a>
        <a href="/" className="hover:text-purple-300">
          Support
        </a>
      </nav>
      <nav className="hidden md:flex space-x-4">
        <a href="/" className="hover:text-purple-300">
          <Image
            src="/facebook.png"
            alt="Facebook"
            width={25}
            height={25}
            className="mx-auto"
            unoptimized={true}
          />
        </a>
        <a href="/" className="hover:text-purple-300">
          <Image
            src="/twitter.png"
            alt="Twitter"
            width={25}
            height={25}
            className="mx-auto"
            unoptimized={true}
          />
        </a>
        <a href="/" className="hover:text-purple-300">
          <Image
            src="/linkedin.png"
            alt="LinkedIn"
            width={25}
            height={25}
            className="mx-auto"
            unoptimized={true}
          />
        </a>
        <a href="/" className="hover:text-purple-300">
          <Image
            src="/instagram.png"
            alt="Instagram"
            width={25}
            height={25}
            className="mx-auto"
            unoptimized={true}
          />
        </a>
        <a href="/" className="hover:text-purple-300">
          <Image
            src="/youtube.png"
            alt="YouTube"
            width={25}
            height={25}
            className="mx-auto"
            unoptimized={true}
          />
        </a>
      </nav>
    </div>
  );
}