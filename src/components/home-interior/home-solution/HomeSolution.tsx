"use client";
import React from "react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const HomeSolution = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center mt-16 px-4 bg-ivory/50 py-16">
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-montagu text-secondary tracking-wide">
        One-Stop Solution For <span className="font-bold text-primary">All Home Interior</span>
      </h2>

      <div className="w-full max-w-6xl mt-10 h-80 rounded-lg">
        <Swiper
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 15 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 25 },
          }}
          loop={true}
          className="bg-transparent h-full p-4 rounded-xl"
        >
          {/* ================= Slide 1 ================= */}

          <SwiperSlide className="flex flex-col items-center justify-center text-zinc-800 h-full bg-white rounded-xl shadow-xl hover:shadow-2xl border border-zinc-100 transition-all duration-300 p-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xl mb-3">
              01
            </div>
            <h3 className="font-bold font-montagu text-lg">Consultation</h3>
            <p className="text-xs text-left font-poppins text-zinc-500 mt-2">
              Discussing your dreams and requirements.
            </p>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center justify-center text-zinc-800 h-full bg-white rounded-xl shadow-xl hover:shadow-2xl border border-zinc-100 transition-all duration-300 p-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xl mb-3">
              01
            </div>
            <h3 className="font-bold font-montagu text-lg">Consultation</h3>
            <p className="text-xs text-left font-poppins text-zinc-500 mt-2">
              Discussing your dreams and requirements.
            </p>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center justify-center text-zinc-800 h-full bg-white rounded-xl shadow-xl hover:shadow-2xl border border-zinc-100 transition-all duration-300 p-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xl mb-3">
              01
            </div>
            <h3 className="font-bold font-montagu text-lg">Consultation</h3>
            <p className="text-xs text-left font-poppins text-zinc-500 mt-2">
              Discussing your dreams and requirements.
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSolution;
