"use client";
import { HomePageClientReviewApi } from "@/axios/axios";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface ClientReviewType {
  ms: number;
  query: string;
  result: {
    _id: string;
    name: string;
    review: string;
    designation: string;
    clientimage: string;
  }[];
  syncTags: string[];
}

const fetchHappyClientReview = async () => {
  try {
    const res = await HomePageClientReviewApi();
    if (res.status !== 200) {
      throw new Error("Error While Feching Data");
    }
    return res.data;
  } catch (error: any) {
    if (process.env.NODE_ENV === "development") {
      console.error("Happy Customers Review Fetch Error", error.message);
    }
    throw error;
  }
};

const HappyCustomers = () => {
  const { data, isLoading, isError } = useQuery<ClientReviewType>({
    queryKey: ["happy clients"],
    queryFn: fetchHappyClientReview,
    staleTime: 1000 * 60 * 10,
  });
  const result = data?.result || [];
  if (process.env.NODE_ENV === "development") {
    console.log("client review", result);
  }
  return (
    <div className="flex flex-col w-full items-center justify-center mt-16 px-4 p-10 bg-ivory">
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-montagu text-primary tracking-wide font-bold ">
        Trusted by Visionaries
      </h2>

      <div className="flex flex-col  md:flex-row items-center justify-center gap-8 mt-8 w-full max-w-7xl">
        <div className="w-full max-w-8xl mt-10 h-110 rounded-lg">
          {isLoading ? (
            <div className="w-full max-w-7xl ">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.75 md:gap-5 lg:gap-7.5 h-100 w-full">
                <div className="relative flex flex-col items-center justify-center h-full min-h-87.5 bg-zinc-200/80 rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
                  <div className="w-9 h-9 border-4 border-zinc-300/50 border-t-primary rounded-full animate-spin"></div>
                </div>

                <div className="relative flex-col items-center justify-center h-full min-h-87.5 bg-zinc-200/80 rounded-xl border border-zinc-200 shadow-sm overflow-hidden hidden md:flex">
                  <div className="w-9 h-9 border-4 border-zinc-300/50 border-t-primary rounded-full animate-spin"></div>
                </div>

                <div className="relative flex-col items-center justify-center h-full min-h-87.5 bg-zinc-200/80 rounded-xl border border-zinc-200 shadow-sm overflow-hidden hidden lg:flex">
                  <div className="w-9 h-9 border-4 border-zinc-300/50 border-t-primary rounded-full animate-spin"></div>
                </div>
              </div>
            </div>
          ) : isError ? (
            <div className="flex flex-col items-center justify-center text-rose-500 h-100 w-full bg-white rounded-xl p-6 border border-rose-100 shadow-md">
              <h3 className="font-bold text-lg text-center">
                Failed to load projects. Please try again!
              </h3>
            </div>
          ) : result && result.length > 0 ? (
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
                pauseOnMouseEnter: true,
              }}
              className="bg-transparent h-full p-4 rounded-xl"
            >
              {result.map((data) => (
                <SwiperSlide
                  key={data._id}
                  className="relative flex flex-col items-center justify-center h-full bg-secondary rounded-xl shadow-xl hover:shadow-2xl border border-zinc-100 transition-all duration-300 p-6 gap-4"
                >
                  <div className="relative w-24 h-24 overflow-hidden rounded-full border-4 border-white/20 flex items-center justify-center">
                    <Image
                      src={data.clientimage}
                      alt={data.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="text-center mt-8">
                    <h3 className="text-white font-bold text-xl">
                      {data.name}
                    </h3>
                    <p className="text-primary-light text-sm italic font-medium">
                      {data.designation}
                    </p>
                  </div>

                  <p className="text-zinc-200 text-center text-sm font-poppins leading-relaxed italic">
                    "{data.review}"
                  </p>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="w-full max-w-7xl mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.75 md:gap-[20px] lg:gap-7.5 mt-10 h-100 w-full">
                <div className=" flex flex-col items-center justify-center h-full min-h-[350px] bg-zinc-200/80 rounded-xl border text-primary font-medium text-xl border-zinc-200 shadow-sm overflow-hidden">
                  Oops ! Project Will be Uploaded
                </div>

                <div className="hidden md:flex flex-col items-center justify-center h-full min-h-[350px] bg-zinc-200/80 rounded-xl border text-primary font-medium text-xl border-zinc-200 shadow-sm overflow-hidden">
                  Oops ! Project Will be Uploaded
                </div>

                <div className="hidden lg:flex flex-col items-center justify-center h-full min-h-[350px] bg-zinc-200/80 rounded-xl border text-primary font-medium text-xl border-zinc-200 shadow-sm overflow-hidden">
                  Oops ! Project Will be Uploaded
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HappyCustomers;
