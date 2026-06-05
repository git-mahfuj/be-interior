"use client";
import { homeProjectApi } from "@/axios/axios";
import { useSuspenseQuery } from "@tanstack/react-query";
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
    slug: string;
    coverImage: string;
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
    return;
  }
};

const BeinteriorProject = () => {
  const homeInteriorQuery = useSuspenseQuery<HomeProject>({
    queryKey: ["home-interior"],
    queryFn: homeInteriorProjects,
  });

  const { result } = homeInteriorQuery.data;
  if (process.env.NODE_ENV === "development") {
    console.log("home-interior-projects", result);
  }

  return (
    <div className="flex flex-col w-full items-center justify-center mt-16 px-4 p-10 bg-ivory">
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-montagu text-secondary tracking-wide font-bold">
        Be interior{" "}
        <span className="font-medium text-primary">
          Home Interior <span className="text-secondary">Projects</span>
        </span>
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
            {result.length > 0 ? (
              <div>
                {result.map((data) => (
                  <SwiperSlide
                    key={data._id}
                    className="relative flex flex-col items-center justify-center h-full bg-white rounded-xl shadow-xl hover:shadow-2xl border border-zinc-100 transition-all duration-300 overflow-hidden"
                  >
                    <Link
                      href={`/projects/${data.slug}`}
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
              </div>
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

export default BeinteriorProject;
