"use client";
import { whatsAppApi } from "@/axios/axios";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Loader2 } from "lucide-react"; // লোডারের জন্য একটি আইকন ব্যবহার করতে পারেন

interface WhatsAppApiType {
  ms: number;
  query: string;
  result: {
    _id: string;
    WhatsAppNumber: string;
  }[];
  syncTags: string[];
}

const fetchWhatsAppNumber = async () => {
  try {
    const res = await whatsAppApi();
    if (res.status !== 200) throw new Error("Error fetching");
    return res.data;
  } catch (error: any) {
    if (process.env.NODE_ENV === "development") {
      console.error("WhatsApp Fetch Error:", error.message);
    }
    throw error;
  }
};

const ArchitectInterior = () => {
  const { data, isLoading, isError } = useQuery<WhatsAppApiType>({
    queryKey: ["wp-number"],
    queryFn: fetchWhatsAppNumber,
  });

  // ✅ ১. ক্র্যাশ হওয়া থেকে বাঁচাতে সেফ অপশনাল চেইনিং
  const phoneNumber = data?.result?.[0]?.WhatsAppNumber || "01818383239";

  if (process.env.NODE_ENV === "development") {
    console.log(phoneNumber);
  }

  const defaultMessage =
    "Hi BE INTERIOR, I want to consult about my space interior design.";

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(defaultMessage)}`;

  const handleWhatsAppRedirect = () => {
    
    if (isLoading || isError) return;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="w-full flex flex-col lg:flex-row justify-center items-center my-10 px-4 sm:px-8 md:px-16 gap-8 lg:gap-16 max-w-7xl mx-auto">
      {/* Text & Call-to-Action Card */}
      <div className="w-full sm:w-[85%] md:w-[75%] lg:w-[45%] min-h-[280px] flex flex-col items-center justify-center p-6 md:p-8 rounded-xl shadow-2xl border border-gray-100 bg-white">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-poppins text-center text-gray-800 leading-snug font-normal">
          Your dream home is just a{" "}
          <span className="font-bold block sm:inline">click away</span>
        </h2>

        <button
          type="button" 
          onClick={handleWhatsAppRedirect}
          disabled={isLoading} 
          className="font-poppins flex items-center justify-center gap-2 mt-6 border w-fit mx-auto py-3 px-6 sm:py-4 sm:px-8 rounded-full bg-primary text-white font-medium hover:bg-opacity-90 transition-all duration-300 shadow-md text-sm sm:text-base cursor-pointer disabled:opacity-80 disabled:cursor-not-allowed"
        >
          
          {isError ? (
            <span>Contact on WhatsApp</span>
          ) : isLoading ? (
            <span className="flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              Connecting...
            </span>
          ) : (
            <span>Chat on WhatsApp</span>
          )}
        </button>
      </div>

      {/* Illustration Placeholder Card */}
      <div className="w-full sm:w-[85%] md:w-[75%] lg:w-[55%] h-64 sm:h-72 lg:h-80 bg-gray-300 rounded-lg flex items-center justify-center text-gray-500 font-medium text-sm sm:text-base p-4">
        Illustration Placeholder
      </div>
    </section>
  );
};

export default ArchitectInterior;