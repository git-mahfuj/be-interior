"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

import SwiperButtons from "./SwiperButtons";
import slideOne from "@/logo/HomePage/Gemini_Generated_Image_home1.png";
import slideTwo from "@/logo/HomePage/Gemini_Generated_Image_home2.png";
import slideThree from "@/logo/HomePage/Gemini_Generated_Image_home3.png";
import Link from "next/link";

export default function SliderComponent() {
  return (
    <div className="w-full h-screen mx-auto relative overflow-hidden">
      <Swiper
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="bg-zinc-100 h-full"
      >
        {/* ================= Slide 1 ================= */}
        <SwiperSlide className="flex items-center justify-center text-white h-full relative overflow-hidden">
          <Image
            src={slideOne}
            alt="Minimalistic Interior"
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover object-center z-0"
          />
          <div className="absolute inset-0 bg-black/30 z-10" />

          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center md:items-start text-center md:text-left px-6 sm:px-12 md:pl-20 lg:pl-32 xl:pl-40 pt-16 md:pt-24">
            <div className="max-w-2xl flex flex-col items-center md:items-start">
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-wide leading-tight font-montagu text-white">
                Make Your Interior Minimalistic & Modern
              </h1>
              <p className="text-xs sm:text-sm md:text-base font-normal max-w-md mt-4 text-zinc-200 font-poppins">
                Turn your room with panto into a lot more minimalist and modern
                with ease and speed
              </p>
              <Link href={"/services/office-interior"}>
                <button className="w-full sm:w-auto mt-6 px-6 py-3 md:px-10 bg-primary text-white font-medium text-base md:text-lg tracking-wider hover:bg-zinc-900 transition-colors rounded-lg md:rounded-md cursor-pointer">
                  Consult Now
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* ================= Slide 2 ================= */}
        <SwiperSlide className="flex items-center justify-center text-white h-full relative overflow-hidden">
          <Image
            src={slideTwo}
            alt="Customized Interior"
            fill
            quality={100}
            sizes="100vw"
            className="object-cover object-center z-0"
          />
          <div className="absolute inset-0 bg-black/30 z-10" />

          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center md:items-start text-center md:text-left px-6 sm:px-12 md:pl-20 lg:pl-32 xl:pl-40 pt-16 md:pt-24">
            <div className="max-w-2xl flex flex-col items-center md:items-start">
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black tracking-tight leading-none text-primary font-montagu">
                100%
              </h1>
              <h1 className="text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-wide leading-tight font-montagu text-white mt-1">
                Customized Interior
              </h1>
              <p className="text-xs sm:text-sm md:text-base font-normal max-w-md mt-4 text-zinc-200 font-poppins capitalize tracking-wide">
                Kitchen, Bedroom, Living & Dining
              </p>
              <button className="w-full sm:w-auto mt-6 px-6 py-3 md:px-10 bg-primary text-white font-medium text-base md:text-lg tracking-wider hover:bg-zinc-900 transition-colors rounded-lg md:rounded-md cursor-pointer">
                Price Starting at 9lac
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* ================= Slide 3 ================= */}
        <SwiperSlide className="flex items-center justify-center text-white h-full relative overflow-hidden">
          <Image
            src={slideThree}
            alt="Office Interior"
            fill
            quality={100}
            sizes="100vw"
            className="object-cover object-center z-0"
          />
          <div className="absolute inset-0 bg-black/30 z-10" />

          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center md:items-start text-center md:text-left px-6 sm:px-12 md:pl-20 lg:pl-32 xl:pl-40 pt-16 md:pt-24">
            <div className="max-w-2xl flex flex-col items-center md:items-start">
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-wide leading-tight font-montagu text-white">
                Premium Office Interior
              </h1>
              <p className="text-xs sm:text-sm md:text-base font-normal max-w-md mt-4 text-zinc-200 font-poppins">
                That your employees will love to work in
              </p>
              <button className="w-full sm:w-auto mt-6 px-6 py-3 md:px-10 bg-primary text-white font-medium text-base md:text-lg tracking-wider hover:bg-zinc-900 transition-colors rounded-lg md:rounded-md cursor-pointer">
                Calculate Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
