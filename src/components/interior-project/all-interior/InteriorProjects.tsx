"use client";
import { allInteriorApi } from "@/axios/axios";
import { useSuspenseQuery } from "@tanstack/react-query";
import Link from "next/link";
import Image from "next/image";
import React from "react";

interface AllInteriorProjectstype {
  ms: number;
  query: string;
  result: {
    _id: string;
    name: string;
    _type : string
    slug: string;
    coverImage: string;
    galleryImages: string[];
    size : string,
    location : string
  }[];
  syncTags: string[];
}

const fetchAllInteriorItem = async () => {
  try {
    const res = await allInteriorApi();

    if (res.status !== 200) {
      throw new Error("error while Feching");
    }

    return res.data;
  } catch (error: any) {
    if (process.env.NODE_ENV === "development") {
      console.error(`All Interior Item Fetch Error`, error.message);
    }
    throw error;
  }
};

const InteriorProjects = () => {
  const { data } = useSuspenseQuery<AllInteriorProjectstype>({
    queryKey: ["interior-projects"],
    queryFn: fetchAllInteriorItem,
  });

  const interiorProjects = data?.result || [];
  if(process.env.NODE_ENV === 'development') {
    console.log("All-Interior-Item" , interiorProjects)
  }
  const interiorItems = interiorProjects.map((i) => i._type)
  console.log(interiorItems)
  return (
    <div className="mb-20 flex flex-col w-full items-center justify-center mt-28 px-4">
      <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {interiorProjects.map((project, index) => (
              <div
                key={index}
                className="flex items-start gap-4 group transition-all duration-300"
              >
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 shrink-0 overflow-hidden bg-neutral-100 rounded-sm">
                  {project.coverImage !== "/" && (
                    <Image
                      src={project.coverImage}
                      alt={project.name}
                      fill
                      quality={100}
                      sizes="(max-w-768px) 112px, 128px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}

                  {project.coverImage === "/" && (
                    <div className="w-full h-full bg-neutral-200 flex items-center justify-center text-xs text-neutral-400">
                      No Image
                    </div>
                  )}
                </div>

                <div className="flex flex-col justify-between h-28 sm:h-32 py-1 font-sans">
                  <div>
                    <h3 className="text-base sm:text-lg font-normal text-[#23352e] leading-snug tracking-wide line-clamp-2">
                      {project.name}
                    </h3>
                  </div>

                  <div>
                    <Link
                      href={`/interior-projects/${project.slug}?type=${project._type}`}
                      className="inline-block text-xs sm:text-sm text-black hover:text-primary transition-colors duration-200 font-medium underline underline-offset-4"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default InteriorProjects;
