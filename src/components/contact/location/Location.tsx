"use client";
import React from "react";
import { MapPin } from "lucide-react";

const LocationSection = () => {
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
              House: 5, Road: 21/A, Nikunja-2, Dhaka
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