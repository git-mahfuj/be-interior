"use client";
import { HomePageClientReviewApi } from "@/axios/axios";
import { useSuspenseQuery } from "@tanstack/react-query";
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
    return;
  }
};

const HappyCustomers = () => {
  const HappyClientQuery = useSuspenseQuery<ClientReviewType>({
    queryKey: ["happy clients"],
    queryFn: fetchHappyClientReview,
  });
  const { result } = HappyClientQuery.data;
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
          <Swiper
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 15 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 25 },
              1280: { slidesPerView: 3, spaceBetween: 30 },
            }}
            className="bg-transparent h-full p-4 rounded-xl"
          >
            {result.length > 0 ? (
              result.map((data) => (
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
              ))
            ) : (
              <SwiperSlide className="flex flex-col items-center justify-center text-zinc-800 h-full bg-white rounded-xl p-6">
                <h3 className="font-bold text-lg">No reviews available</h3>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HappyCustomers;
