"use client";
import React from "react";
import { Mail, Phone, MessageCircle, Loader2, AlertCircle } from "lucide-react";
import { contactItemApi } from "@/axios/axios";
import { useQuery } from "@tanstack/react-query";
import logo from "@/logo/HomePage/Gemini_Generated_Image_home1.png"
import Image from "next/image";

interface ContactItemsType {
  ms: number;
  query: string;
  result: {
    WhatsAppNumber: string;
    footercontactemail: string;
    footercontactnumber1: string;
  }[];
  syncTags: string[];
}

const fetchContactItems = async () => {
  try {
    const res = await contactItemApi();
    if (res.status !== 200) {
      throw new Error(`Error while Fetching`);
    }

    return res.data;
  } catch (error: any) {
    if (process.env.NODE_ENV === "development") {
      console.error(`Contact Item fetch error`, error.message);
    }
    throw error;
  }
};

export default function ExperienceCenter() {

  const { data, isLoading, isError, error, refetch } = useQuery<ContactItemsType>({
    queryKey: ["contact-item"],
    queryFn: fetchContactItems,
  });

  if (isLoading) {
    return (
      <section className="bg-[#283b33] text-white py-16 px-6 lg:px-20 min-h-[400px] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-10 h-10 animate-spin text-gray-300" />
          <p className="text-sm text-gray-300 font-medium tracking-wide">Loading experience center details...</p>
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="bg-[#283b33] text-white py-16 px-6 lg:px-20 min-h-[400px] flex items-center justify-center">
        <div className="flex flex-col items-center max-w-md text-center p-6 bg-[#3a4f46]/30 border border-[#3a4f46] rounded-2xl shadow-xl">
          <AlertCircle className="w-12 h-12 text-rose-400 mb-3" />
          <h3 className="text-lg font-semibold mb-1">Failed to load contact information</h3>
          <p className="text-sm text-gray-300 mb-4">{error instanceof Error ? error.message : "Something went wrong"}</p>
          <button 
            onClick={() => refetch()} 
            className="px-5 py-2 bg-[#3a4f46] hover:bg-[#4a6358] text-xs font-semibold rounded-full transition-all duration-200"
          >
            Try Again
          </button>
        </div>
      </section>
    );
  }

  const contact = data?.result?.[0];

  return (
    <section className="bg-[#283b33] text-white py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-16 text-left">
          Welcome To Our Experience Center
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-10">
            {contact ? (
              <>
                <ContactInfo
                  icon={<Mail size={24} />}
                  label="Email:"
                  value={contact.footercontactemail}
                />
                <ContactInfo
                  icon={<Phone size={24} />}
                  label="Call:"
                  value={contact.footercontactnumber1}
                />
                <ContactInfo
                  icon={<MessageCircle size={24} />}
                  label="WhatsApp:"
                  value={contact.WhatsAppNumber}
                />
              </>
            ) : (
              <p className="text-gray-400 italic">No contact details found.</p>
            )}
          </div>

          <div className="relative border-4 border-[#3a4f46] rounded-2xl overflow-hidden shadow-2xl aspect-video lg:aspect-auto lg:h-[350px]">
            <Image
              src={logo}
              alt="Experience Center"
              fill
              quality={100}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

interface ContactInfoProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function ContactInfo({ icon, label, value }: ContactInfoProps) {
  return (
    <div className="flex items-center gap-6">
      <div className="p-4 bg-secondary/20 rounded-lg flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-300 uppercase tracking-wider mb-1">{label}</p>
        <p className="text-lg font-medium tracking-wide">{value || "N/A"}</p>
      </div>
    </div>
  );
}