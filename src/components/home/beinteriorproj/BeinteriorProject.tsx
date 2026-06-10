"use client";
import { homeProjectApi } from "@/axios/axios";
import { useQuery } from "@tanstack/react-query"; // 🎯 useSuspenseQuery পরিবর্তন করে useQuery আনা হলো
import { error } from "console";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface HomeProject {
  ms: number;
  query: string;
  result: {
    _id: string;
    name: string;
    _type: string;
    slug: string;
    coverImage: string;
    galleryImage: string[];
    size: string;
    location: string;
  }[];
  syncTags: string[];
}

const homeInteriorProjects = async () => {
  try {
    const res = await homeProjectApi();

    if (res.status !== 200) {
      throw new Error("Error while Getting Data");
    }

    return res.data;
  } catch (error: any) {
    if (process.env.NODE_ENV === "development") {
      console.error("Home Interior Projects Fetch Error", error.message);
    }
    throw error;
  }
};

const BeinteriorProject = () => {
  const { data, isLoading, isError } = useQuery<HomeProject>({
    queryKey: ["home-interior"],
    queryFn: homeInteriorProjects,
    staleTime: 1000 * 60 * 10,
  });

  const result = data?.result || [];

  if (process.env.NODE_ENV === "development") {
    console.log("home-interior-projects", result);
  }

  return (
    <div className="flex flex-col w-full items-center justify-center mt-16 px-4 p-10 bg-ivory pb-22 lg:pb-26">
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-montagu text-secondary tracking-wide font-bold">
        Be interior{" "}
        <span className="font-medium text-primary">
          Home Interior <span className="text-secondary">Projects</span>
        </span>
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8 w-full max-w-7xl">
        <div className="w-full max-w-8xl mt-10 h-100 rounded-lg">
          {isLoading ? (
            <div className="w-full max-w-7xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.75 md:gap-[20px] lg:gap-7.5  h-100 w-full">
                <div className="relative flex flex-col items-center justify-center h-full min-h-[350px] bg-zinc-200/80 rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
                  <div className="w-9 h-9 border-4 border-zinc-300/50 border-t-primary rounded-full animate-spin"></div>
                </div>

                <div className="relative flex flex-col items-center justify-center h-full min-h-[350px] bg-zinc-200/80 rounded-xl border border-zinc-200 shadow-sm overflow-hidden hidden md:flex">
                  <div className="w-9 h-9 border-4 border-zinc-300/50 border-t-primary rounded-full animate-spin"></div>
                </div>

                <div className="relative flex flex-col items-center justify-center h-full min-h-[350px] bg-zinc-200/80 rounded-xl border border-zinc-200 shadow-sm overflow-hidden hidden lg:flex">
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
              }}
              className="bg-transparent h-full p-4 rounded-xl"
            >
              {result.map((data) => (
                <SwiperSlide
                  key={data._id}
                  className="relative flex flex-col items-center justify-center h-full bg-white rounded-xl shadow-xl hover:shadow-2xl border border-zinc-100 transition-all duration-300 overflow-hidden"
                >
                  <Link
                    href={`/interior-projects/${data.slug}?type=${data._type}`}
                    className="w-full h-full block relative"
                  >
                    <Image
                      src={data.coverImage}
                      alt={data.name}
                      fill
                      priority
                      quality={100}
                      className="object-cover object-center"
                    />
                    <h3 className="font-bold font-montagu text-lg absolute z-10 bottom-3 w-full text-white text-center bg-black/40 py-2">
                      {data.name}
                    </h3>
                  </Link>
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

export default BeinteriorProject;
