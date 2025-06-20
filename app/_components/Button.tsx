import React from "react";

function Button({ text }: { text: string }) {
  return (
    <button className="my-10 sm:mt-10 md:mt-20 bg-[#611f69] px-4 sm:px-8 md:px-20 py-2 sm:py-3 md:py-4 rounded-lg sm:rounded-xl md:rounded-2xl cursor-pointer hover:bg-[#621f69ee] transition duration-300 mx-auto block w-full sm:w-auto">
      <p className="text-white text-base sm:text-lg md:text-2xl font-bold text-center">
        {text}
      </p>
    </button>
  );
}

export default Button;