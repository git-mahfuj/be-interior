"use client";
import React from "react";
import Image from "next/image";

const teamMembers = [
  { name: "John Doe", role: "Lead Architect", photo: "/team/member1.jpg" },
  { name: "Jane Smith", role: "Interior Designer", photo: "/team/member2.jpg" },
  { name: "Michael Ray", role: "Project Manager", photo: "/team/member3.jpg" },
  { name: "Sarah Khan", role: "Design Consultant", photo: "/team/member4.jpg" },
];

const OurTeam = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-[#1b332a] uppercase tracking-wide font-montagu">
            The Minds Behind the Design
          </h2>
          <p className="mt-4 text-zinc-500 max-w-2xl mx-auto font-poppins">
            Meet the talented architects and designers who turn your vision into reality with precision, passion, and creativity.
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

                <div className="w-full h-full bg-zinc-300 flex items-center justify-center text-zinc-500 font-bold">
                  {member.name.charAt(0)}
                </div>
              </div>

              <h3 className="text-lg font-bold text-[#1b332a] group-hover:text-white transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-sm text-zinc-500 group-hover:text-emerald-200 transition-colors duration-300 font-medium mt-1">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;