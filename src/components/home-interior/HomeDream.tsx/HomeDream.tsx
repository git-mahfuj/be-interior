"use client";
import Navbtn from "@/components/Header/Navbtn";
import React from "react";

const HomeDream = () => {

  const phoneNumber = "8801570264255"; 
  

  const defaultMessage = "Hi BE INTERIOR, I want to consult about my space interior design.";


  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(defaultMessage)}`;

  const handleWhatsAppRedirect = () => {
    window.open(whatsappUrl, "_blank"); 
  };

  return (
    <div className="flex flex-col w-full items-center justify-center  px-4 py-12 bg-ivory/50  max-w-full h-full mx-auto">
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-montagu text-secondary tracking-wide font-black text-center leading-tight">
        Your Dream Home Is Just a 
        <span className="block text-primary mt-2 md:mt-3">Click Away</span>
      </h2>
      
      <button 
        onClick={handleWhatsAppRedirect}
        className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-extrabold text-lg md:text-xl tracking-wider hover:bg-[#c35e00] hover:scale-105 active:scale-95 transition-all duration-300 rounded-xl mt-8 cursor-pointer shadow-lg shadow-primary/20"
      >
        Message Us Now
      </button>
    </div>
  );
};

export default HomeDream;