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
    projectType === "office-projects" ? ["office-interior"] : ["home-interior"];
  const queryFn =
    projectType === "office-projects" ? fetchOfficeProjects : fetchHomeProjects;

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

              <p className="text-sm text-zinc-400">
                Funded Next, Office Interior
              </p>
              <p className="text-xs text-zinc-500">
                Provided by Be Interior Design Team
              </p>
            </div>
            
            <div className="space-y-4 text-left text-sm text-[#23352e]/80 p-4  h-auto">
              <p className="font-semibold text-lg text-[#23352e]">
                About This Project
              </p>
              <div className="space-y-1.5">
                <div className="h-3 w-full font-medium  text-lg">
                  Size : {project?.size || ""}
                </div>
                <div className="h-3 w-4/5 mt-4 font-medium text-lg">
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

      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-serif font-semibold text-[#23352e] pb-1 border-b-2 border-[#23352e] inline-block mb-10">
            Project Images
          </h2>
 

        </div>
      </section>
    </main>
  );
}
