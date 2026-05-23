"use client";
import React from "react";
import { HiOutlineLightBulb } from "react-icons/hi";
import { BiBuildingHouse } from "react-icons/bi";
import { MdOutlineCamera } from "react-icons/md";

const OfficeService = () => {

  const services = [
    {
      title: "New Office Design",
      desc: "Modern, functional office designs tailored for productivity and style.",
      icon: <HiOutlineLightBulb className="text-5xl text-secondary" />,
      gradient: "from-[#f0f7f4] to-[#e2ede8]",
    },
    {
      title: "Build A Project",
      desc: "We construct inspiring office spaces with the provided designs.",
      icon: <BiBuildingHouse className="text-5xl text-secondary" />,
      gradient: "from-[#fbf7f0] to-[#f2eae1]",
    },
    {
      title: "Renovation",
      desc: "Revitalize your office with fresh designs and space optimization.",
      icon: <MdOutlineCamera className="text-5xl text-secondary" />,
      gradient: "from-[#f5f5f7] to-[#e6e6eb]",
    },
  ];

  return (
    <div className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 font-poppins">
      <div className="max-w-6xl mx-auto">
        

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-zinc-800 tracking-wide font-montagu uppercase">
            Service <span className="text-secondary">We Offer</span>
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4 rounded-full" />
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-full bg-white rounded-3xl border border-zinc-100 p-6 sm:p-8 flex flex-col items-center text-center shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(54,88,86,0.08)] hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer group"
            >

              <div className={`w-full aspect-4/3 rounded-2xl bg-linear-to-br ${service.gradient} flex items-center justify-center mb-8 relative overflow-hidden`}>
                

                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-white/40 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
                <div className="absolute -left-6 -top-6 w-20 h-20 bg-white/30 rounded-full blur-lg" />
                

                <div className="p-4 bg-white rounded-2xl shadow-sm border border-zinc-100/50 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  {service.icon}
                </div>
              </div>

              <h3 className="text-xl font-extrabold text-zinc-800 tracking-wide mb-3 font-poppins">
                {service.title}
              </h3>
              
              <p className="text-zinc-500 text-sm sm:text-base font-medium leading-relaxed max-w-65 mx-auto">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default OfficeService;