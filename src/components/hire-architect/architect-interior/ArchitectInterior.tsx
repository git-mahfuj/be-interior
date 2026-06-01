"use client"
import React from "react";

const ArchitectInterior = () => {
  const phoneNumber = "8801570264255";
  const defaultMessage =
    "Hi BE INTERIOR, I want to consult about my space interior design.";

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(defaultMessage)}`;

  const handleWhatsAppRedirect = () => {
    window.open(whatsappUrl, "_blank");
  };
  return (
    <section className="w-full flex flex-col lg:flex-row justify-center items-center my-10 px-4 sm:px-8 md:px-16 gap-8 lg:gap-16 max-w-7xl mx-auto">
      {/* Text & Call-to-Action Card */}
      <div className="w-full sm:w-[85%] md:w-[75%] lg:w-[45%] min-h-[280px] flex flex-col items-center justify-center p-6 md:p-8 rounded-xl shadow-2xl border border-gray-100 bg-white">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-poppins text-center text-gray-800 leading-snug font-normal">
          Your dream home is just a{" "}
          <span className="font-bold block sm:inline">click away</span>
        </h2>

        <button
          type="submit"
          onClick={handleWhatsAppRedirect}
          className="font-poppins text-center mt-6 inline-block border w-fit mx-auto py-3 px-6 sm:py-4 sm:px-8 rounded-full bg-primary text-white font-medium hover:bg-opacity-90 transition-all duration-300 shadow-md text-sm sm:text-base cursor-pointer"
        >
          01818383239
        </button>
      </div>

      {/* Illustration Placeholder Card */}
      <div className="w-full sm:w-[85%] md:w-[75%] lg:w-[55%] h-64 sm:h-72 lg:h-80 bg-gray-300 rounded-lg flex items-center justify-center text-gray-500 font-medium text-sm sm:text-base p-4">
        Illustration Placeholder
      </div>
    </section>
  );
};

export default ArchitectInterior;
