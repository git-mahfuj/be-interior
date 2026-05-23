import Image from "next/image";
import React from "react";
import whatweOne from "@/logo/HomePage/home-interior.jpg";
import whatwetwo from "@/logo/HomePage/office-interior.jpg";

const Whatwedo = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center mt-16 px-4">
      {/* 👑 হেডিং সেকশন */}
      <h2 className="text-2xl md:text-3xl font-montagu text-secondary tracking-wide">
        What Interiors <span className="font-bold">We Do</span>
      </h2>


      <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8 w-full max-w-4xl">
        

        <div className="w-full sm:w-80 h-96 relative rounded-xl border border-white/10 shadow-lg overflow-hidden group p-1 bg-white/5">

          <div className="relative w-full h-full rounded-lg overflow-hidden">
            <Image
              src={whatweOne}
              alt="Home Interior"
              fill
              sizes="(max-w-768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
          </div>

          <button className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] py-3 bg-primary text-white font-medium tracking-wider rounded-lg hover:bg-secondary transition-colors shadow-md text-base md:text-lg cursor-pointer">
            Home Interior
          </button>
        </div>


        <div className="w-full sm:w-80 h-96 relative rounded-xl border border-white/10 shadow-lg overflow-hidden group p-1 bg-white/5">
 
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            <Image
              src={whatwetwo}
              alt="Office Interior"
              fill
              sizes="(max-w-768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
          </div>
          

          <button className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] py-3 bg-primary text-white font-medium tracking-wider rounded-lg hover:bg-secondary transition-colors shadow-md text-base md:text-lg cursor-pointer">
            Office Interior
          </button>
        </div>

      </div>
    </div>
  );
};

export default Whatwedo;