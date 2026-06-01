"use client";
import React from "react";
import { Mail, Phone, MessageCircle } from "lucide-react";

export default function ExperienceCenter() {
  return (
    <section className="bg-[#283b33] text-white py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-16 text-left">
          Welcome To Our Experience Center
        </h2>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Contact Information */}
          <div className="space-y-10">
            <ContactInfo 
              icon={<Mail size={24} />} 
              label="Email:" 
              value="hello@beinteriorltd.com" 
            />
            <ContactInfo 
              icon={<Phone size={24} />} 
              label="Call:" 
              value="+88 01768 080101" 
            />
            <ContactInfo 
              icon={<MessageCircle size={24} />} 
              label="WhatsApp:" 
              value="+88 01768 080101" 
            />
          </div>

          {/* Right Side: Office Image */}
          <div className="relative border-4 border-[#3a4f46] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/path-to-your-office-image.jpg" 
              alt="Experience Center" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Fixed Helper Component
interface ContactInfoProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function ContactInfo({ icon, label, value }: ContactInfoProps) {
  return (
    <div className="flex items-center gap-6">
      {/* Icon Wrapper Component */}
      <div className="p-4 bg-[#3a4f46] rounded-lg flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-300 uppercase tracking-wider mb-1">{label}</p>
        <p className="text-lg font-medium tracking-wide">{value}</p>
      </div>
    </div>
  );
}