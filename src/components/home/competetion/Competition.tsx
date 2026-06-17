"use client";
import React from "react";
import { Check, X } from "lucide-react";

export default function Competiton() {
  const factors = [
    {
      title: "Price",
      points: ["Competitive & transparent pricing", "No hidden cost"],
    },
    {
      title: "Convenience",
      points: ["One stop service", "No complicating process"],
    },
    {
      title: "Design",
      points: ["Innovative & tailored design"],
    },
    {
      title: "Project Time line",
      points: ["Delivery in 45 days, guaranteed"],
    },
    {
      title: "Communication",
      points: [
        "Dedicated architect for client support",
        "Weekly project update report",
      ],
    },
    {
      title: "Quality",
      points: [
        "Branded materials & top-notch finishing",
        "146 Steps quality check",
      ],
    },
    {
      title: "Warranty",
      points: ["2 Year warranty"],
    },
    {
      title: "Space Optimization",
      points: [
        "Maximize space utilization",
        "Functionally, aesthetically pleasing environment",
      ],
    },
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-16 lg:px-24 font-sans max-w-7xl mx-auto">
      <div className="flex flex-col w-full items-center justify-center px-4 mb-10">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-montagu text-secondary tracking-wide font-bold">
          Our Competetion
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side Column - Unique Layout */}
        <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
          <div className="space-y-2">
            <span className="text-xs font-bold tracking-widest text-secondary uppercase block">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-[#23352e] leading-tight">
              How We Are <span className="font-bold">Standing Out</span> <br />
              From The Competition
            </h2>
          </div>

          <p className="text-gray-500 text-sm max-w-sm mx-auto lg:mx-0 leading-relaxed">
            We redefine premium interior experiences with strict quality
            benchmarks and complete transparency at every stage.
          </p>

          <div className="pt-2 flex justify-center lg:justify-start">
            <a href={`tel:01829-686850`} className="px-8 py-3.5 bg-primary hover:bg-secondary text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
              Talk To Our Designers
            </a>
          </div>
        </div>

        {/* Right Side Column - Unique Premium Table */}
        <div className="lg:col-span-7 w-full border border-gray-100 shadow-md rounded-xl overflow-hidden bg-white">
          {/* Table Head */}
          <div className="grid grid-cols-12 bg-gray-50/70 border-b border-gray-100 items-stretch font-medium text-sm text-[#23352e]">
            <div className="col-span-6 p-5 font-bold text-base text-gray-700 self-center">
              Factors
            </div>
            <div className="col-span-3 p-4 bg-secondary text-white flex flex-col items-center justify-center text-center text-[11px] font-bold tracking-wider uppercase leading-snug">
              <span>Be Interior</span>
              <span className="opacity-90 font-normal normal-case">
                Experience
              </span>
            </div>
            <div className="col-span-3 p-4 bg-gray-50 text-gray-400 flex flex-col items-center justify-center text-center text-[11px] font-semibold tracking-wider uppercase leading-snug border-l border-gray-100">
              <span>Typical</span>
              <span className="opacity-80 font-normal normal-case">
                Experience
              </span>
            </div>
          </div>

          {/* Table Body Rows */}
          <div className="divide-y divide-gray-100/70">
            {factors.map((factor, index) => (
              <div
                key={index}
                className="grid grid-cols-12 items-stretch hover:bg-[#fcfdfe] transition-colors duration-200"
              >
                {/* Info Text Area */}
                <div className="col-span-6 p-5 space-y-1.5 flex flex-col justify-center">
                  <h4 className="font-bold text-gray-800 text-sm md:text-base tracking-wide">
                    {factor.title}
                  </h4>
                  <ul className="space-y-1">
                    {factor.points.map((pt, pIdx) => (
                      <li
                        key={pIdx}
                        className="text-xs text-gray-500/90 flex items-start before:content-[''] before:w-1.5 before:h-1.5 before:bg-[#8ba086]/60 before:rounded-sm before:mr-2 before:mt-1.5 shrink-0"
                      >
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Volumetric Status Column (Premium Light Green Tone) */}
                <div className="col-span-3 bg-[#cbd3c8]/50 flex items-center justify-center p-4">
                  <div className="bg-[#23352e] text-white p-1 rounded-full shadow-sm">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                </div>

                {/* Typical Status Column (Clean Soft Light Tone) */}
                <div className="col-span-3 bg-[#eef2ed]/40 flex items-center justify-center p-4 border-l border-gray-100/50">
                  <div className="bg-white text-red-500 border border-red-100 p-1 rounded-full shadow-sm">
                    <X className="w-4 h-4 stroke-[3]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
