"use client";
import React from "react";
import Image from "next/image";
import { interiorTeamApi } from "@/axios/axios";
import { useSuspenseQuery } from "@tanstack/react-query";

interface InteriorteamType {
  ms: number;
  query: string;
  result: {
    _id: string;
    name: string;
    designation: string;
    memberImage: string;
  }[];
  syncTags: string[];
}

const fetchInteriorTeam = async () => {
  try {
    const res = await interiorTeamApi();
    if (res.status !== 200) {
      throw new Error(`Error while Feching`);
    }

    return res.data;
  } catch (error: any) {
    if (process.env.NODE_ENV === "development") {
      console.error(`Interior team fetch error`, error.message);
    }
    throw error;
  }
};

const OurTeam = () => {
  const { data } = useSuspenseQuery<InteriorteamType>({
    queryKey: ["interior-team"],
    queryFn: fetchInteriorTeam,
  });
  if (process.env.NODE_ENV === "development") {
    console.log("interior-team", data);
  }
  const teamMembers = data?.result || [];
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-[#1b332a] uppercase tracking-wide font-montagu">
            The Minds Behind the Design
          </h2>
          <p className="mt-4 text-zinc-500 max-w-2xl mx-auto font-poppins">
            Meet the talented architects and designers who turn your vision into
            reality with precision, passion, and creativity.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group flex flex-col items-center p-6 bg-[#fafafa] rounded-2xl hover:bg-[#1b332a] transition-all duration-300 border border-zinc-100 hover:border-transparent hover:shadow-xl"
            >
              {/* Photo Placeholder */}
              <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden bg-zinc-200 border-4 border-white group-hover:border-[#365856]">
                <Image src={member.memberImage} alt="" fill className="object-cover"/>
              </div>

              <h3 className="text-lg font-bold text-[#1b332a] group-hover:text-white transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-sm text-center text-zinc-500 group-hover:text-emerald-200 transition-colors duration-300 font-medium mt-1">
                {member.designation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
