"use client";
import Image from "next/image";
import React from "react";
import { FaRegStar, FaCrown } from "react-icons/fa";
import { LuGem } from "react-icons/lu";

import officeEssential from "@/logo/HomePage/Gemini_Generated_Image_office3.png";
import officePremium from "@/logo/HomePage/Gemini_Generated_Image_office4.png";
import officeLuxury from "@/logo/HomePage/Gemini_Generated_Image_office5.png";

const OfficePackage = () => {

  const packages = [
    {
      name: "Essential",
      price: "1300 - 1400",
      img: officeEssential,
      icon: <FaRegStar className="text-white text-2xl opacity-90" />,
      headerBg: "from-[#ff6b8b] to-[#ff8e53]", 
      features: [
        "Affordable Pricing",
        "Functional 2D Layout",
        "Convenient 3D Design",
        "Standard Accessories",
        "Durable Materials",
        "Execution",
      ],
    },
    {
      name: "Premium",
      price: "1750 - 1850",
      img: officePremium,
      icon: <LuGem className="text-white text-2xl opacity-90" />,
      headerBg: "from-[#20b2aa] to-[#48d1cc]", 
      features: [
        "Value Driven Pricing",
        "Functional 2D Layout",
        "High-end 3D Design",
        "Wide Range Accessories",
        "High Grade Materials",
        "Laminate Finish",
        "Execution",
      ],
      isFeatured: true, 
    },
    {
      name: "Luxury",
      price: "2400 - 2600",
      img: officeLuxury,
      icon: <FaCrown className="text-white text-2xl opacity-90" />,
      headerBg: "from-[#ff9f43] to-[#ffbe76]", 
      features: [
        "Exclusive Pricing",
        "Functional 2D Layout",
        "Luxury 3D Design",
        "Branded Accessories",
        "Premium Materials",
        "Laminate, Acrylic & Mirror Sheet Finish",
        "Designer Decorative Items",
        "Execution",
      ],
    },
  ];

  return (
    <div className="w-full bg-zinc-50 py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center font-poppins">
      

      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-black tracking-wide text-zinc-800 uppercase font-montagu">
          Our <span className="text-[#365856]">Packages</span>
        </h2>
        <p className="text-zinc-500 mt-2 text-sm sm:text-base font-medium">Tailored solutions for every standard</p>
        <div className="w-24 h-1 bg-[#365856] mx-auto mt-4 rounded-full" />
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-4 items-stretch justify-center w-full max-w-6xl px-2 lg:px-0">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`w-full bg-white rounded-[32px] shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-zinc-100 overflow-hidden transition-all duration-500 flex flex-col group relative
              ${pkg.isFeatured ? "md:-translate-y-6 md:shadow-[0_25px_60px_rgba(54,88,86,0.15)] z-10 border-[#20b2aa]/20" : "hover:-translate-y-2 z-0"}
            `}
          >

            <div className={`relative bg-gradient-to-r ${pkg.headerBg} pt-8 pb-14 px-8 text-white flex justify-between items-center overflow-hidden`}>
  
              <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
              
              <div>
                <h3 className="text-2xl sm:text-3xl font-black tracking-wide font-montagu mb-1">
                  {pkg.name}
                </h3>
                <p className="text-xs font-semibold opacity-90 uppercase tracking-wider">
                  BDT {pkg.price} / sqft
                </p>
              </div>
              
    
              <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-inner">
                {pkg.icon}
              </div>
            </div>


            <div className="px-6 -mt-8 relative z-20">
              <div className="w-full aspect-[16/10] relative rounded-2xl overflow-hidden bg-zinc-100 shadow-md border-2 border-white">
                <Image 
                  src={pkg.img} 
                  alt={`${pkg.name} office interior`}
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority={pkg.isFeatured}
                />
              </div>
            </div>


            <div className="p-8 flex-1 flex flex-col justify-between">
              <ul className="space-y-3.5">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-zinc-600 text-sm font-medium">
                    <span className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-amber-50 border border-amber-300 flex items-center justify-center text-[10px] text-amber-600 font-bold">
                      ✓
                    </span>
                    <span className="leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default OfficePackage;