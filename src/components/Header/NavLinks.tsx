"use client";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import SearchModal from "./SearchModal";
import { useRouter } from "next/navigation";

const NavLinks = () => {
  const [serviceModalOpen, setServiceModalOpen] = useState(false);
  const [moreModalOpen, setMoreModalOpen] = useState(false);
  const [searchModal, setSearchModal] = useState(false);

  const closeAllModals = () => {
    setServiceModalOpen(false);
    setMoreModalOpen(false);
  };

  const router = useRouter();

  const handleHomeLink = () => {
    router.push("/");
  };

  
  const navItemClass =
    "relative flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer group transition-all duration-300 hover:bg-white/5";

  
  const dropdownLinkClass =
    "relative overflow-hidden group flex items-center w-full py-3 px-4 rounded-xl transition-all duration-300 hover:bg-primary/10";

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 font-medium text-white/80 text-base w-full">
      {/* Home Link */}
      <div onClick={handleHomeLink} className={navItemClass}>
        <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"></span>
        <span className="group-hover:text-white transition-colors duration-300 tracking-wide">
          Home
        </span>
      </div>

      {/* Blogs Link */}
      <Link href="/blogs" className={navItemClass}>
        <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"></span>
        <span className="group-hover:text-white transition-colors duration-300 tracking-wide">
          Blogs
        </span>
      </Link>

      {/* 1. Our Services Container */}
      <div
        className="relative"
        onMouseEnter={() => {
          if (window.innerWidth >= 768) setServiceModalOpen(true);
        }}
        onMouseLeave={() => {
          if (window.innerWidth >= 768) setServiceModalOpen(false);
        }}
        onClick={() => {
          if (window.innerWidth < 768) setServiceModalOpen(!serviceModalOpen);
        }}
      >
        <div
          className={`${navItemClass} select-none ${serviceModalOpen ? "bg-white/5 text-white" : ""}`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full bg-primary transition-all duration-300 ${serviceModalOpen ? "opacity-100 scale-100" : "opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"}`}
          ></span>
          <p className="flex items-center gap-1.5 tracking-wide group-hover:text-white transition-colors duration-300">
            Our Services
            <ChevronDown
              size={16}
              className={`transition-transform duration-500 ease-out ${serviceModalOpen ? "rotate-180 text-primary" : "text-white/50 group-hover:text-primary"}`}
            />
          </p>
        </div>

        
        {serviceModalOpen && (
          <div className="md:absolute top-full left-0 w-full md:w-60 md:pt-4 z-50">
            <div className="flex flex-col bg-[#0a0a0a]/95 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.4)] p-2 animate-in fade-in zoom-in-95 duration-200">
              <Link
                href="/services/home-interior"
                onClick={closeAllModals}
                className={dropdownLinkClass}
              >
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-primary transition-all duration-300 group-hover:h-3/4 rounded-r-full"></span>
                <span className="transform translate-x-1 group-hover:translate-x-3 transition-transform duration-300 text-white/70 group-hover:text-primary font-medium text-sm md:text-base">
                  Home Interior
                </span>
              </Link>

              <Link
                href="/services/office-interior"
                onClick={closeAllModals}
                className={dropdownLinkClass}
              >
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-primary transition-all duration-300 group-hover:h-3/4 rounded-r-full"></span>
                <span className="transform translate-x-1 group-hover:translate-x-3 transition-transform duration-300 text-white/70 group-hover:text-primary font-medium text-sm md:text-base">
                  Office Interior
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* 2. More Container */}
      <div
        className="relative"
        onMouseEnter={() => {
          if (window.innerWidth >= 768) setMoreModalOpen(true);
        }}
        onMouseLeave={() => {
          if (window.innerWidth >= 768) setMoreModalOpen(false);
        }}
        onClick={() => {
          if (window.innerWidth < 768) setMoreModalOpen(!moreModalOpen);
        }}
      >
        <div
          className={`${navItemClass} select-none ${moreModalOpen ? "bg-white/5 text-white" : ""}`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full bg-primary transition-all duration-300 ${moreModalOpen ? "opacity-100 scale-100" : "opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"}`}
          ></span>
          <p className="flex items-center gap-1.5 tracking-wide group-hover:text-white transition-colors duration-300">
            More
            <ChevronDown
              size={16}
              className={`transition-transform duration-500 ease-out ${moreModalOpen ? "rotate-180 text-primary" : "text-white/50 group-hover:text-primary"}`}
            />
          </p>
        </div>

       
        {moreModalOpen && (
          <div className="md:absolute top-full left-0 w-full md:w-64 md:pt-4 z-50">
            <div className="flex flex-col bg-[#0a0a0a]/95 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.4)] p-2 animate-in fade-in zoom-in-95 duration-200">
              {[
                { label: "About Us", href: "/about" },
                { label: "Contact Us", href: "/contact" },
                { label: "Hire an Architect", href: "/hire-architect" },
                { label: "Terms and Condition", href: "/terms" },
                { label: "Cancelation & Refund", href: "/refund-policy" },
                { label: "Privacy Policy", href: "/privacy-policy" },
              ].map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={closeAllModals}
                  className={dropdownLinkClass}
                >
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-primary transition-all duration-300 group-hover:h-3/4 rounded-r-full"></span>
                  <span className="transform translate-x-1 group-hover:translate-x-3 transition-transform duration-300 text-white/70 group-hover:text-primary font-medium text-sm md:text-base">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      
      <form
        action=""
        className="flex items-center w-full md:w-auto mt-4 md:mt-0 md:ml-6 relative group"
      >
        <input
          onClick={() => setSearchModal(true)}
          type="text"
          disabled={searchModal}
          className="bg-transparent border-b-2 border-white/20 hover:border-white/50 text-white px-2 py-2 outline-none text-sm w-full md:w-48 placeholder:text-white/40 focus:border-primary transition-colors duration-300 cursor-pointer"
          placeholder="Search projects..."
        />
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full"></span>
      </form>

      {/* Search Modal */}
      {searchModal && (
        <div className="absolute bottom-0 transition-all duration-300 w-290 flex justify-center z-60">
          <SearchModal
            searchModal={searchModal}
            setSearchModal={setSearchModal}
          />
        </div>
      )}
    </div>
  );
};

export default NavLinks;
