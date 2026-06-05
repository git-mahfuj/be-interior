"use client";
import { whatsAppApi } from "@/axios/axios";
import { useSuspenseQuery } from "@tanstack/react-query";
import React from "react";

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
    return;
  }
};
const JustClick = () => {
  const WhatsAppQuery = useSuspenseQuery<WhatsAppApiType>({
    queryKey: ["wp-number"],
    queryFn: fetchWhatsAppNumber,
  });

  const { result } = WhatsAppQuery.data;
  if (process.env.NODE_ENV === "development") {
    console.log("wp", result);
  }
  const phoneNumber = `88${result.map((i) => i.WhatsAppNumber as string)}`;

  const defaultMessage =
    "Hi BE INTERIOR, I want to consult about my space interior design.";

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(defaultMessage)}`;

  const handleWhatsAppRedirect = () => {
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="mb-20 flex flex-col w-full items-center justify-center mt-16 px-4">
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-montagu text-secondary tracking-wide font-bold">
        Your Dream Interior
      </h2>
      <h2 className="text-xl md:text-2xl lg:text-3xl font-montagu text-secondary tracking-wide font-bold">
        Just One click away
      </h2>
      <button
        onClick={handleWhatsAppRedirect}
        className="w-full md:w-auto md:h-full px-6 py-3 md:px-10 bg-primary text-white font-medium text-lg md:text-2xl tracking-wider hover:bg-[#c35e00] transition-colors rounded-lg md:rounded-none mt-10 cursor-pointer"
      >
        Get started
      </button>
    </div>
  );
};

export default JustClick;
