'use client'
import React from 'react'
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const HappyCustomers = () => {
  return (
   <div className="flex flex-col w-full items-center justify-center mt-16 px-4 p-10 bg-ivory">
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-montagu text-primary tracking-wide font-bold ">
        Our Customers
      </h2>

      <div className="flex flex-col  md:flex-row items-center justify-center gap-8 mt-8 w-full max-w-7xl">
       <div className="w-full max-w-8xl mt-10 h-100 rounded-lg">
        <Swiper

          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 15 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 25 },
            1280: { slidesPerView: 3, spaceBetween: 30 },
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
          <SwiperSlide className="flex flex-col items-center justify-center text-zinc-800 h-full bg-white rounded-xl shadow-xl hover:shadow-2xl border border-zinc-100 transition-all duration-300 p-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xl mb-3">01</div>
            <h3 className="font-bold font-montagu text-lg">Consultation</h3>
            <p className="text-xs text-left font-poppins text-zinc-500 mt-2">Discussing your dreams and requirements.</p>
          </SwiperSlide>

          {/* ================= Slide 2 ================= */}
          <SwiperSlide className="flex flex-col items-center justify-center text-zinc-800 h-full bg-white rounded-xl shadow-xl hover:shadow-2xl border border-zinc-100 transition-all duration-300 p-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xl mb-3">02</div>
            <h3 className="font-bold font-montagu text-lg">Concept Design</h3>
            <p className="text-xs text-left font-poppins text-zinc-500 mt-2">Creating initial 2D layouts & space planning.</p>
          </SwiperSlide>

          {/* ================= Slide 3 ================= */}
          <SwiperSlide className="flex flex-col items-center justify-center text-zinc-800 h-full bg-white rounded-xl shadow-xl hover:shadow-2xl border border-zinc-100 transition-all duration-300 p-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xl mb-3">03</div>
            <h3 className="font-bold font-montagu text-lg">3D Visualization</h3>
            <p className="text-xs text-left font-poppins text-zinc-500 mt-2">Realistic 3D renders of your future interior.</p>
          </SwiperSlide>

          {/* ================= Slide 4 ================= */}
          <SwiperSlide className="flex flex-col items-center justify-center text-zinc-800 h-full bg-white rounded-xl shadow-xl hover:shadow-2xl border border-zinc-100 transition-all duration-300 p-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xl mb-3">04</div>
            <h3 className="font-bold font-montagu text-lg">Execution</h3>
            <p className="text-xs text-left font-poppins text-zinc-500 mt-2">Bringing the approved design to real life.</p>
          </SwiperSlide>

          {/* ================= Slide 5 ================= */}
          <SwiperSlide className="flex flex-col items-center justify-center text-zinc-800 h-full bg-white rounded-xl shadow-xl hover:shadow-2xl border border-zinc-100 transition-all duration-300 p-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xl mb-3">05</div>
            <h3 className="font-bold font-montagu text-lg">Handover</h3>
            <p className="text-xs text-left font-poppins text-zinc-500 mt-2">Final walkthrough and delivering your dream space.</p>
          </SwiperSlide>
        </Swiper>
      </div>
      </div>
      
    </div>
  )
}

export default HappyCustomers