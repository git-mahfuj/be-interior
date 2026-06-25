"use client";
import Link from 'next/link';
import React from 'react';
import { Calculator, MoveUpRight } from 'lucide-react';

const Navbtn = () => {
  return (
    <div className="w-full md:h-full flex items-center px-4 md:px-0">
      <Link
        href={'/services/budget-calculator'}
        className="group relative w-full md:w-56 h-14 md:h-full flex items-center justify-center bg-primary hover:bg-[#c35e00] text-white font-semibold overflow-hidden rounded-xl md:rounded-none transition-colors duration-500"
      >
        
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-[200%] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 transition-transform duration-1000 ease-in-out z-0" />

        
        <span className="absolute left-6 md:left-8 top-1/2 -translate-y-1/2 w-2 h-5 border-l-[3px] border-t-[3px] border-b-[3px] border-white/0 group-hover:border-white/60 transition-all duration-500 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 rounded-l-sm z-10" />
        <span className="absolute right-6 md:right-8 top-1/2 -translate-y-1/2 w-2 h-5 border-r-[3px] border-t-[3px] border-b-[3px] border-white/0 group-hover:border-white/60 transition-all duration-500 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 rounded-r-sm z-10" />

        {/* 3. Rolling Text Container */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full overflow-hidden">
          
          {/* Default State: Calculate */}
          <span className="absolute flex items-center gap-2 transition-all duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] group-hover:-translate-y-12 group-hover:opacity-0 group-hover:scale-90">
            <Calculator size={20} strokeWidth={2.5} className="text-white/80" />
            <span className="tracking-widest uppercase text-sm md:text-base">Calculate</span>
          </span>

          {/* Hover State: Get Quote */}
          <span className="absolute flex items-center gap-2 transition-all duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] translate-y-12 opacity-0 scale-90 group-hover:translate-y-0 group-hover:opacity-100 group-hover:scale-100">
            <span className="tracking-widest uppercase text-sm md:text-base">Get Now</span>
            <MoveUpRight size={18} strokeWidth={3} className="text-white" />
          </span>

        </div>

        {/* 4. Bottom Animated Line */}
        <div className="absolute bottom-0 left-0 w-full h-[4px] bg-white/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center z-10" />
      </Link>
    </div>
  );
};

export default Navbtn;