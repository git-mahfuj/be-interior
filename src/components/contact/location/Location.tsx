"use client";
import React from "react";
import { MapPin, Loader2, AlertCircle } from "lucide-react";
import { contactLocationApi } from "@/axios/axios";
import { useQuery } from "@tanstack/react-query"; // 👈 useQuery ইমপোর্ট করা হলো

interface ContactLocationType {
  ms: number;
  query: string;
  result: {
    footerlocation: string;
  }[];
  syncTags: string[];
}

const fetchContactItems = async () => {
  try {
    const res = await contactLocationApi();
    if (res.status !== 200) {
      throw new Error(`Error while Fetching`);
    }

    return res.data;
  } catch (error: any) {
    if (process.env.NODE_ENV === "development") {
      console.error(`Contact Location fetch error`, error.message);
    }
    throw error;
  }
};

const LocationSection = () => {

  const { data, isLoading, isError, error, refetch } = useQuery<ContactLocationType>({
    queryKey: ["contact-location"],
    queryFn: fetchContactItems,
  });


  if (isLoading) {
    return (
      <section className="w-full flex flex-col md:flex-row h-auto md:h-96 bg-[#8a9d85]/10 animate-pulse">
        <div className="w-full md:w-1/3 bg-[#8a9d85] p-8 md:p-16 flex items-center justify-center">
          <div className="flex flex-col items-center gap-2 text-white">
            <Loader2 className="w-8 h-8 animate-spin" />
            <p className="text-xs opacity-80 tracking-wide">Loading Address...</p>
          </div>
        </div>
        <div className="w-full md:w-2/3 h-64 md:h-full bg-zinc-100 flex items-center justify-center text-zinc-400 font-medium text-sm">
          Loading Live Map...
        </div>
      </section>
    );
  }


  if (isError) {
    return (
      <section className="w-full flex flex-col md:flex-row h-auto md:h-96 border border-rose-100 rounded-xl overflow-hidden">
        <div className="w-full md:w-1/3 bg-rose-50 p-8 md:p-16 flex flex-col items-center justify-center text-center text-rose-800 gap-2">
          <AlertCircle className="w-8 h-8 text-rose-500" />
          <p className="font-semibold text-sm">Failed to load location</p>
        </div>
        <div className="w-full md:w-2/3 h-64 md:h-full bg-zinc-50 flex flex-col items-center justify-center p-6 text-center gap-3">
          <p className="text-xs text-zinc-500 max-w-xs leading-relaxed">
            {error instanceof Error ? error.message : "Something went wrong"}
          </p>
          <button
            onClick={() => refetch()}
            className="px-5 py-2 bg-[#8a9d85] hover:bg-[#768a71] text-white text-xs font-semibold rounded-full shadow-md transition-all duration-200 active:scale-95"
          >
            Try Again
          </button>
        </div>
      </section>
    );
  }


  const contact = data?.result?.[0];

  return (
    <section className="w-full flex flex-col md:flex-row h-auto md:h-96">
      {/* Left Side: Address Details */}
      <div className="w-full md:w-1/3 bg-[#8a9d85] p-8 md:p-16 flex items-center">
        <div className="flex gap-6 items-center">
          {/* Icon Box */}
          <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
            <MapPin className="w-8 h-8 text-white" />
          </div>
          
          {/* Address Text */}
          <div className="text-white border-l-2 border-white/30 pl-6">
            <h3 className="font-semibold text-lg tracking-wide uppercase mb-1">
              Location:
            </h3>
            <p className="text-lg font-medium leading-relaxed max-w-50">
              {contact?.footerlocation || "Address not specified"}
            </p>
          </div>
        </div>
      </div>

      {/* Right Side: Map Embed */}
      <div className="w-full md:w-2/3 h-64 md:h-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.09886367355!2d90.4079!3d23.8340!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sVolumetric%20Designers!5e0!3m2!1sen!2sbd!4v1612345678901!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Volumetric Designers Location"
        />
      </div>
    </section>
  );
};

export default LocationSection;