"use client";
import { officeInteriorPageClientReviewApi } from "@/axios/axios";
import SwiperButtons from "@/components/home/Home-section/SwiperButtons";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface OfficeClientReviewType {
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

const fetchOfficeInteriorPageClientReview = async () => {
  try {
    const res = await officeInteriorPageClientReviewApi();
    if (res.status !== 200) {
      throw new Error("Error While Feching Data");
    }
    return res.data;
  } catch (error: any) {
    if (process.env.NODE_ENV === "development") {
      console.error("OfficeInteriorClientReviewFetchError", error.message);
    }
    throw error;
  }
};

const OfficeReview = () => {
  const { data, isLoading, isError } = useQuery<OfficeClientReviewType>({
    queryKey: ["office-client"],
    queryFn: fetchOfficeInteriorPageClientReview,
  });

  const result = data?.result || [];

  if (process.env.NODE_ENV === "development") {
    console.log("office-clients", result);
  }

  return (
    <div className="flex flex-col w-full items-center justify-center px-4 p-10 bg-ivory">
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-montagu text-secondary/80 tracking-wide font-bold ">
        Check Some Review
      </h2>
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-montagu text-primary tracking-wide font-bold ">
        of our customers
      </h2>
      <div className="w-20 h-1 bg-primary mt-4 rounded-full mb-14" />


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
                <SwiperSlide key={data._id} className="pt-16 pb-8 px-4 h-auto">
                  <div className="relative bg-white rounded-[2rem] p-8 sm:px-12 sm:pb-12 text-center shadow-sm hover:shadow-md transition-shadow duration-300 max-w-lg mx-auto h-full flex flex-col">
                    {/* Top Centered Floating Avatar */}
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full border-[4px] border-white overflow-hidden bg-gray-200 shadow-sm shrink-0">
                      <Image
                        src={data.clientimage}
                        alt={data.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Name and Designation */}
                    <div className="mt-8 shrink-0">
                      <h3 className="text-2xl text-[#4A3F35] font-serif tracking-wide">
                        {data.name}
                      </h3>
                      {data.designation && (
                        <p className="text-[#8C7A6B] text-sm mt-1 uppercase tracking-widest font-medium">
                          {data.designation}
                        </p>
                      )}
                    </div>

                    <p className="mt-5 text-[#5C544D] text-lg leading-relaxed font-light flex-grow">
                      "{data.review}"
                    </p>

                    <div className="mt-auto pt-6 flex justify-center gap-1.5 text-primary shrink-0">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                    </div>
                  </div>
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

export default OfficeReview;
