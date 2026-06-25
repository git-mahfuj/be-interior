import Image from "next/image";
import React from "react";
import whatweOne from "@/logo/HomePage/home-interior.jpg";
import whatwetwo from "@/logo/HomePage/office-interior.jpg";
import Link from "next/link";
import { BriefcaseBusiness, Home } from "lucide-react";

const Whatwedo = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center mt-16 px-4 py-10">
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-montagu text-secondary tracking-wide text-center">
        Comprehensive <span className="font-bold">Interior Solutions</span>
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8 w-full max-w-4xl px-2">
        {/* Card 1 */}
        <Link href={"/services/home-interior"} className="w-full sm:w-80 block">
          <div className="w-full h-96 relative rounded-xl border border-white/10 shadow-lg overflow-hidden group p-1 bg-white/5">
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <Image
                src={whatweOne}
                alt="Home Interior"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
            </div>

            <button className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] h-14 bg-primary text-white font-medium tracking-wider rounded-xl transition-all duration-500 shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:shadow-2xl hover:-translate-y-1 text-base md:text-lg cursor-pointer flex items-center justify-center group overflow-hidden z-10">
              <span className="absolute inset-0 w-0 bg-primary transition-all duration-500 ease-out group-hover:w-full z-0"></span>

              <span className="absolute z-10 left-1/2 top-1/2 -translate-y-1/2 -translate-x-12 opacity-0 scale-50 transition-all duration-500 ease-in-out group-hover:-translate-x-1/2 group-hover:opacity-100 group-hover:scale-110">
                <Home size={24} strokeWidth={2.5} />
              </span>

              <p className="relative z-10 transition-all duration-500 ease-in-out group-hover:translate-x-12 group-hover:opacity-0">
                Home Interior
              </p>
            </button>
          </div>
        </Link>

        {/* Card 2 */}
        <Link
          href={"/services/office-interior"}
          className="w-full sm:w-80 block"
        >
          <div className="w-full h-96 relative rounded-xl border border-white/10 shadow-lg overflow-hidden group p-1 bg-white/5">
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <Image
                src={whatwetwo}
                alt="Office Interior"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>

            <button className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] h-14 bg-primary text-white font-medium tracking-wider rounded-xl transition-all duration-500 shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:shadow-2xl hover:-translate-y-1 text-base md:text-lg cursor-pointer flex items-center justify-center group overflow-hidden z-10">
              <span className="absolute inset-0 w-0 bg-primary transition-all duration-500 ease-out group-hover:w-full z-0"></span>

              <span className="absolute z-10 left-1/2 top-1/2 -translate-y-1/2 -translate-x-12 opacity-0 scale-50 transition-all duration-500 ease-in-out group-hover:-translate-x-1/2 group-hover:opacity-100 group-hover:scale-110">
                <BriefcaseBusiness size={24} strokeWidth={2.5} />
              </span>

              <p className="relative z-10 transition-all duration-500 ease-in-out group-hover:translate-x-12 group-hover:opacity-0">
                Office Interior
              </p>
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Whatwedo;
