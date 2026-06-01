import Image from "next/image";
import React from "react";
import whatweOne from "@/logo/HomePage/home-interior.jpg";
import whatwetwo from "@/logo/HomePage/office-interior.jpg";
import Link from "next/link";

const Whatwedo = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center mt-16 px-4 py-10">
      {/* Heading with text-center for mobile screens */}
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-montagu text-secondary tracking-wide text-center">
        Comprehensive <span className="font-bold">Interior Solutions</span>
      </h2>

      {/* Main Grid/Flex Container */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8 w-full max-w-4xl px-2">
        
        {/* Card 1 */}
        <Link href={"/services/home-interior"} className="w-full sm:w-80 block">
          <div className="w-full h-96 relative rounded-xl border border-white/10 shadow-lg overflow-hidden group p-1 bg-white/5">
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <Image
                src={whatweOne}
                alt="Home Interior"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>

            <button className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] py-3 bg-primary text-white font-medium tracking-wider rounded-lg hover:bg-secondary transition-colors shadow-md text-base md:text-lg cursor-pointer">
              Home Interior
            </button>
          </div>
        </Link>

        {/* Card 2 */}
        <Link href={"/services/office-interior"} className="w-full sm:w-80 block">
          <div className="w-full h-96 relative rounded-xl border border-white/10 shadow-lg overflow-hidden group p-1 bg-white/5">
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <Image
                src={whatwetwo}
                alt="Office Interior"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>

            <button className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] py-3 bg-primary text-white font-medium tracking-wider rounded-lg hover:bg-secondary transition-colors shadow-md text-base md:text-lg cursor-pointer">
              Office Interior
            </button>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default Whatwedo;