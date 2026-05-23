"use client";
import React from "react";
import { FiArrowUpRight, FiCornerDownRight } from "react-icons/fi";

const OfficeProjects = () => {
  
  const projects = [
    {
      id: 1,
      title: "Bettex Bangladesh",
      location: "Dhaka",
      gridClass: "md:col-span-1 md:row-span-1 min-h-[280px] lg:min-h-[320px]",
    },
    {
      id: 2,
      title: "Next Venture HQ",
      location: "Banani",
      gridClass: "md:col-span-1 md:row-span-1 min-h-[280px] lg:min-h-[320px]",
    },
    {
      id: 3,
      title: "One Little Web",
      location: "Uttara",
      gridClass: "md:col-span-1 md:row-span-2 min-h-[400px] md:min-h-full", // ডানদিকের লম্বা কার্ডটি
    },
    {
      id: 4,
      title: "Jayed Corp",
      location: "Gulshan",
      gridClass: "md:col-span-2 md:row-span-1 min-h-[260px] lg:min-h-[300px]", // নিচের বড় চওড়া কার্ডটি
    },
  ];

  return (
    <div className="w-full bg-[#fafafa] py-24 px-4 sm:px-6 lg:px-8 font-poppins">
      <div className="max-w-6xl mx-auto">
        

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-[#365856] font-bold text-sm tracking-widest uppercase mb-2">
              <FiCornerDownRight /> Featured Works
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-zinc-800 tracking-wide font-montagu uppercase">
              Our <span className="text-[#365856]">Projects</span>
            </h2>
          </div>
          <p className="text-zinc-500 text-sm max-w-xs font-medium leading-relaxed">
            A glimpse of modern workspaces designed and executed perfectly to boost corporate culture.
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group relative bg-zinc-100 rounded-[28px] border border-zinc-200/60 overflow-hidden flex flex-col justify-end p-6 sm:p-8 transition-all duration-500 ease-out hover:shadow-[0_20px_50px_rgba(54,88,86,0.12)] hover:border-[#365856]/30 cursor-pointer ${project.gridClass}`}
            >
              

              <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 via-zinc-100 to-zinc-200/80 group-hover:scale-105 transition-transform duration-700 ease-out flex items-center justify-center">

                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
                

                <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-zinc-400/80 bg-white/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-zinc-200/40 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                  Image Placeholder
                </span>
              </div>


              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/30 to-transparent opacity-80 group-hover:from-zinc-950/90 transition-all duration-500 z-10" />


              <div className="relative z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out w-full flex items-end justify-between">
                <div>
                  <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase opacity-90 block mb-1">
                    {project.location} • Corporate Office
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-wide font-poppins">
                    {project.title}
                  </h3>
                </div>


                <div className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#365856] group-hover:rotate-45 transition-all duration-500 shadow-lg shrink-0 ml-4">
                  <FiArrowUpRight className="text-lg" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default OfficeProjects;