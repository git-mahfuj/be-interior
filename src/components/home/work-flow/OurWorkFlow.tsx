"use client";
import React from "react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const OurWorkFlow = () => {
  const workflowSteps = [
    {
      id: "01",
      title: "Consultation",
      desc: "Discussing your dreams and requirements.",
    },
    {
      id: "02",
      title: "Concept Design",
      desc: "Creating initial 2D layouts & space planning.",
    },
    {
      id: "03",
      title: "3D Visualization",
      desc: "Realistic 3D renders of your future interior.",
    },
    {
      id: "04",
      title: "Execution",
      desc: "Bringing the approved design to real life.",
    },
    {
      id: "05",
      title: "Handover",
      desc: "Final walkthrough and delivering your dream space.",
    },
  ];
  return (
    <div className="flex flex-col w-full items-center justify-center mt-16 px-4 bg-ivory py-16">
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-montagu text-secondary tracking-wide">
        From Concept <span className="font-bold text-primary">to Creation</span>
      </h2>

      <div className="w-full max-w-6xl mt-10 h-80 rounded-lg">
        <Swiper
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 15 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 25 },
            1280: { slidesPerView: 4, spaceBetween: 30 },
          }}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="bg-transparent h-full p-4 rounded-xl"
        >
          {/* ================= Slide 1 ================= */}
          {workflowSteps.map((step, index) => (
            <SwiperSlide key={index} className="h-auto py-4">
              <div className="group relative w-full h-full bg-white rounded-3xl p-8 border border-zinc-100 hover:border-primary/20 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[260px] cursor-pointer">
                {/* Background Watermark Number */}
                <div className="absolute -top-8 -right-4 text-[150px] font-black text-zinc-50 group-hover:text-primary/[0.04] transition-colors duration-700 pointer-events-none select-none font-montagu leading-none">
                  {step.id}
                </div>

                {/* Top Section: Small Circle & Connecting Line */}
                <div className="relative z-10 flex items-center justify-between w-full">
                  <div className="w-12 h-12 rounded-full border-2 border-zinc-100 group-hover:border-primary/30 flex items-center justify-center transition-colors duration-500 bg-white shadow-sm">
                    <span className="text-sm font-bold text-zinc-400 group-hover:text-primary transition-colors duration-500">
                      {step.id}
                    </span>
                  </div>

                  {/* Right Arrow/Dash indicating flow */}
                  <div className="h-[2px] w-12 bg-zinc-100 group-hover:bg-primary/20 transition-colors duration-500 rounded-full relative overflow-hidden">
                    <div className="absolute top-0 left-0 h-full bg-primary w-0 group-hover:w-full transition-all duration-700 delay-100"></div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="relative z-10 mt-12">
                  <h3 className="font-bold font-montagu text-xl md:text-2xl text-zinc-800 group-hover:-translate-y-1 transition-transform duration-500">
                    {step.title}
                  </h3>
                  <p className="text-sm text-zinc-500 font-poppins mt-3 leading-relaxed group-hover:-translate-y-1 transition-transform duration-500 delay-75">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom Hover Progress Line */}
                <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-primary group-hover:w-full transition-all duration-700 ease-out" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OurWorkFlow;
