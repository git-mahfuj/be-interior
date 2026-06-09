"use client";
import React from "react";
import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";
import { homeProjectApi, officeProjectApi } from "@/axios/axios";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";

interface ProjectResultType {
  _id: string;
  name: string;
  slug: string;
  coverImage: string;
  galleryImages: string[];
  size: string;
  location: string;
  videoUrl?: string;
  description?: string;
}

interface AllInteriorProjectstype {
  ms: number;
  query: string;
  result: ProjectResultType[];
  syncTags: string[];
}

const projectImagesData = [
  // col 1
  { id: 1, title: "Vertical Block 1", imageUrl: "", isVerticalBlock: true }, // Large vertical block placeholder
  {
    id: 2,
    title: "Landscape Image 1",
    imageUrl:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80",
    isVerticalBlock: false,
  },
  { id: 3, title: "Missing Image 1", imageUrl: "", isVerticalBlock: false }, // Small horizontal placeholder
  {
    id: 4,
    title: "Landscape Image 2",
    imageUrl:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80",
    isVerticalBlock: false,
  },
  { id: 5, title: "Missing Image 2", imageUrl: "", isVerticalBlock: false },

  // col 2
  {
    id: 6,
    title: "Landscape Image 3",
    imageUrl:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80",
    isVerticalBlock: false,
  },
  { id: 7, title: "Vertical Block 2", imageUrl: "", isVerticalBlock: true },
  {
    id: 8,
    title: "Landscape Image 4",
    imageUrl:
      "https://images.unsplash.com/photo-1617806118233-18e1db207f62?q=80",
    isVerticalBlock: false,
  },
  {
    id: 9,
    title: "Landscape Image 5",
    imageUrl:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80",
    isVerticalBlock: false,
  },
  { id: 10, title: "Missing Image 3", imageUrl: "", isVerticalBlock: false },

  // col 3 (খুবই আঁকাবাঁকা লেআউট)
  null, // Fallback placeholder (ডাটা একেবারেই নেই)
  {
    id: 12,
    title: "Landscape Image 6",
    imageUrl:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80",
    isVerticalBlock: false,
  },
  null,
  {
    id: 14,
    title: "Landscape Image 7",
    imageUrl:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80",
    isVerticalBlock: false,
  },
  { id: 15, title: "Missing Image 4", imageUrl: "", isVerticalBlock: false },
];

const fetchHomeProjects = async () => {
  const res = await homeProjectApi();
  if (res.status !== 200) throw new Error("Error fetching home projects");
  return res.data;
};

const fetchOfficeProjects = async () => {
  const res = await officeProjectApi();
  if (res.status !== 200) throw new Error("Error fetching office projects");
  return res.data;
};

export default function ProjectDetailsPage() {
  const { slug } = useParams();
  const searchparams = useSearchParams();
  const projectType = searchparams.get("type");

  const queryKey =
    projectType === "office" ? ["office-interior"] : ["home-interior"];
  const queryFn =
    projectType === "office" ? fetchOfficeProjects : fetchHomeProjects;

  const { data: project , isLoading , isError , error } = useQuery<
    AllInteriorProjectstype,
    Error,
    ProjectResultType | undefined
  >({
    queryKey: queryKey,
    queryFn: queryFn,
    select: (data) => data.result?.find((item) => item.slug === slug),
    staleTime : 1000 * 60 * 5
  });

  if (process.env.NODE_ENV === "development") {
    console.log("Single Project Data:", project);
  }
  
  if(isLoading) {
    return <div>Loading....</div>
  }

  if(isError) {
    return <div>{error.message}</div>
  }

  return (
    <main className="min-h-screen bg-[#F0F4EC] font-sans">
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <h1 className="text-3xl font-serif font-semibold capitalize text-[#23352e]">
            {slug}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="md:col-span-2 aspect-video bg-zinc-900 rounded-md flex flex-col items-center justify-center p-6 space-y-4">
              <button className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white/10 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
              <p className="text-sm text-zinc-400">
                Funded Next, Office Interior
              </p>
              <p className="text-xs text-zinc-500">
                Provided by Be Interior Design Team
              </p>
            </div>
            {/* ডামি About Text বক্স */}
            <div className="space-y-4 text-left text-sm text-[#23352e]/80 p-4 bg-white/50 rounded-md h-auto">
              <p className="font-semibold text-lg text-[#23352e]">
                About This Project
              </p>
              <div className="space-y-1.5">
                <div className="h-3 w-full bg-zinc-200 rounded text-lg">
                  Size : {project?.size || ""}
                </div>
                <div className="h-3 w-4/5 bg-zinc-200 rounded text-lg">
                Location : {project?.location || ""}</div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center py-4">
            <button className="bg-[#23352e] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#1a2924] transition">
              Talk to Our Designers
            </button>
            <button className="border-2 border-[#23352e] text-[#23352e] px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#23352e]/5 transition">
              Call Now
            </button>
          </div>
        </div>
      </section>

      {/* ৩. মেইন সেকশন: প্রজেক্ট ইমেজ গ্রিড (API mapping সহ) */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-serif font-semibold text-[#23352e] pb-1 border-b-2 border-[#23352e] inline-block mb-10">
            Project Images
          </h2>

          <div className="grid grid-cols-3 gap-x-2 gap-y-2">
            {projectImagesData.map((projectItem, index) => (
              <React.Fragment key={index}>
                {projectItem ? (
                  <>
                    {/* ডাইনামিক ইমেজ রেন্ডার করা হচ্ছে */}
                    {projectItem.imageUrl && projectItem.imageUrl !== "" ? (
                      <div
                        className={`relative ${projectItem.isVerticalBlock ? "aspect-[3/4]" : "aspect-video"} bg-zinc-100 rounded-sm overflow-hidden group border border-zinc-200`}
                      >
                        <Image
                          src={"/"}
                          alt={projectItem.title || "Project image"}
                          fill
                          sizes="(max-w-768px) 33vw, 25vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                            />
                          </svg>
                        </div>
                      </div>
                    ) : (
                      <>
                       
                        {projectItem.isVerticalBlock ? (
                          
                          <div className="aspect-[3/4] bg-zinc-100 flex flex-col items-center justify-center p-4 border border-zinc-200 rounded-sm">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-12 w-12 text-zinc-300 mb-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            <span className="text-sm text-zinc-400 font-medium text-center">
                              Vertical Placeholder
                            </span>
                            <span className="text-xs text-zinc-300">
                              Awaiting Upload
                            </span>
                          </div>
                        ) : (
                       
                          <div className="aspect-video bg-zinc-100 flex flex-col items-center justify-center p-2 border border-zinc-200 rounded-sm">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-8 w-8 text-zinc-300 mb-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            <span className="text-xs text-zinc-400">
                              No Image
                            </span>
                          </div>
                        )}
                      </>
                    )}
                  </>
                ) : (
                
                  <div className="aspect-video bg-zinc-200/60 flex items-center justify-center p-2 rounded-sm border border-zinc-200">
                    <span className="text-xs text-zinc-500 font-medium">
                      Data Missing
                    </span>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
