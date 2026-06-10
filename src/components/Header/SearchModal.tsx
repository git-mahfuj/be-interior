"use client";
import { allInteriorApi, allModalInteriorApi } from "@/axios/axios";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React, { useState } from "react";

interface SearchModalProps {
  searchModal: boolean;
  setSearchModal: (value: boolean) => void;
}

interface AllInteriorProjectstype {
  ms: number;
  query: string;
  result: {
    _id: string;
    name: string;
    slug: string;
    _type: string;
    coverImage: string;
    galleryImages: string[];
    size: string;
    location: string;
  }[];
  syncTags: string[];
}

const fetchAllInteriorItems = async () => {
  try {
    const res = await allModalInteriorApi();
    if (res.status !== 200) {
      throw new Error("Error");
    }
    return res.data;
  } catch (error: any) {
    if (process.env.NODE_ENV === "development") {
      console.log("Error");
    }
    return;
  }
};

export default function SearchModal({
  searchModal,
  setSearchModal,
}: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const { data, isLoading, isError, error } = useQuery<AllInteriorProjectstype>(
    {
      queryKey: ["all-interior"],
      queryFn: fetchAllInteriorItems,
      staleTime: 1000 * 60 * 5,
    },
  );

  console.log(data?.result);

  const result = data?.result || [];
  const filteredResults = result.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      item._type.toLowerCase().includes(searchQuery.toLowerCase()) &&
      item.slug.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  if (!searchModal) return null;

  if (isLoading) {
    <div>Loading....</div>;
  }
  if (isError) {
    <div>Error : {error.message}</div>;
  }

  return (
    <>
      <div
        onClick={() => setSearchModal(false)}
        className="fixed inset-0 bg-black/60 z-50 transition-opacity duration-300 ease-out"
      />

      <div className="fixed top-24 left-1/2 translate-y-10 -translate-x-1/2 w-[90%] max-w-4xl bg-white border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden transition-all duration-300 scale-100 origin-top animate-in fade-in zoom-in-95 ">
        <div className="p-4 border-b border-white/10 flex items-center gap-3 bg-black/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-black shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>

          <form onSubmit={(e) => e.preventDefault()} className="w-full">
            <input
              type="text"
              autoFocus
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-black placeholder:text-black/40 outline-none text-lg py-1"
              placeholder="Type to search projects..."
            />
          </form>

          <button
            onClick={() => setSearchModal(false)}
            className="text-black hover:text-white transition-colors p-1 rounded-lg hover:bg-primary cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="max-h-87.5 overflow-y-auto p-2 space-y-1 custom-scrollbar">
          {searchQuery === "" ? (
            <div className="text-center py-10 text-black/60 text-sm">
              Search by project name, space size, or style...
            </div>
          ) : filteredResults.length > 0 ? (
            filteredResults.map((item) => (
              <Link
                key={item._id}
                href={`/interior-projects/${item.slug}?type=${item._type}`}
              >
                <div
                  onClick={() => {
                    setSearchModal(false);
                  }}
                  className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/10 flex items-center justify-between transition-all duration-500 cursor-pointer group"
                >
                  <div className="space-y-0.5">
                    <p className="text-black font-medium group-hover:text-primary transition-colors">
                      {item.name}
                    </p>
                    <span className="text-xs text-black/40 bg-white/5 px-2 py-0.5 rounded-full capitalize">
                      {item._type}
                    </span>
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white/30 group-hover:text-white transform group-hover:translate-x-1 transition-all"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            ))
          ) : (
            <div className="text-center py-10 text-red-500 text-sm">
              No projects found for "{searchQuery}"
            </div>
          )}
        </div>
      </div>
    </>
  );
}
