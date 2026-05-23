import Navbtn from "@/components/Header/Navbtn";
import React from "react";

const Calculator = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center mt-16 px-4">
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-montagu text-secondary tracking-wide font-bold">
        Discover The Price
      </h2>
      <span className="text-xl md:text-2xl lg:text-3xl font-montagu text-secondary tracking-wide">
        Of Your Dream Interior
      </span>
      <button className="w-full md:w-auto md:h-full px-6 py-3 md:px-10 bg-primary text-white font-medium text-lg md:text-2xl tracking-wider hover:bg-[#c35e00] transition-colors rounded-lg md:rounded-none mt-10">
        Calculate Now
      </button>
    </div>
  );
};

export default Calculator;
