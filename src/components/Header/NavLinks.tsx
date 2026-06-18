"use client";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import SearchModal from "./SearchModal";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const NavLinks = () => {

  const [serviceModalOpen, setServiceModalOpen] = useState(false);
  const [moreModalOpen, setMoreModalOpen] = useState(false);

  const [searchModal, setSearchModal] = useState(false);

  const closeAllModals = () => {
    setServiceModalOpen(false);
    setMoreModalOpen(false);
  };

  return (
   <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 font-medium text-white text-base md:text-lg w-full">
        <Link
          href="/"
          className="cursor-pointer hover:text-primary transition-colors py-1"
        >
          Home
        </Link>
        <Link
          href="/blogs"
          className="cursor-pointer hover:text-primary transition-colors py-1"
        >
          Blogs
        </Link>

        {/* 1. Our Services Container */}
        <div
          className="relative py-1 md:py-2"
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
          <p className="flex items-center justify-between md:justify-start gap-1 group cursor-pointer select-none">
            Our Services{" "}
            <ChevronDown
              className={`translate-y-0.5 transition-transform duration-300 ${serviceModalOpen ? "rotate-180" : ""}`}
            />
          </p>

          {serviceModalOpen && (
            <div className="md:absolute top-full left-0 w-full md:w-52 mt-2 md:mt-0 flex flex-col bg-zinc-900/90 md:bg-secondary/95 backdrop-blur-md rounded-md z-50 border border-white/10 md:border-none overflow-hidden">
              <Link
                href="/services/home-interior"
                onClick={closeAllModals}
                className="cursor-pointer hover:bg-primary transition-all duration-300 w-full py-3 px-4 text-left rounded-t-md text-sm md:text-base"
              >
                Home Interior
              </Link>
              <Link
                href="/services/office-interior"
                onClick={closeAllModals}
                className="cursor-pointer hover:bg-primary transition-all duration-300 w-full py-3 px-4 text-left rounded-b-md text-sm md:text-base"
              >
                Office Interior
              </Link>
            </div>
          )}
        </div>

        {/* 2. More Container */}
        <div
          className="relative py-1 md:py-2"
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
          <p className="flex items-center justify-between md:justify-start gap-1 group cursor-pointer select-none">
            More{" "}
            <ChevronDown
              className={`translate-y-0.5 transition-transform duration-300 ${moreModalOpen ? "rotate-180" : ""}`}
            />
          </p>

          {moreModalOpen && (
            <div className="md:absolute top-full left-0 w-full md:w-60 mt-2 md:mt-0 flex flex-col bg-zinc-900/90 md:bg-secondary/95 backdrop-blur-md rounded-md z-50 border border-white/10 md:border-none overflow-hidden">
              <Link
                href="/about"
                onClick={closeAllModals}
                className="cursor-pointer hover:bg-primary transition-all duration-300 w-full py-3 px-4 text-left text-sm md:text-base"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                onClick={closeAllModals}
                className="cursor-pointer hover:bg-primary transition-all duration-300 w-full py-3 px-4 text-left text-sm md:text-base"
              >
                Contact Us
              </Link>
              <Link
                href="/hire-architect"
                onClick={closeAllModals}
                className="cursor-pointer hover:bg-primary transition-all duration-300 w-full py-3 px-4 text-left text-sm md:text-base"
              >
                Hire an Architect
              </Link>
              <Link
                href="/terms"
                onClick={closeAllModals}
                className="cursor-pointer hover:bg-primary transition-all duration-300 w-full py-3 px-4 text-left text-sm md:text-base"
              >
                Terms and Condition
              </Link>
              <Link
                href="/refund-policy"
                onClick={closeAllModals}
                className="cursor-pointer hover:bg-primary transition-all duration-300 w-full py-3 px-4 text-left text-sm md:text-base"
              >
                Cancelation and refund policy
              </Link>
              <Link
                href="/privacy-policy"
                onClick={closeAllModals}
                className="cursor-pointer hover:bg-primary transition-all duration-300 w-full py-3 px-4 text-left rounded-b-md text-sm md:text-base"
              >
                Privacy Policy
              </Link>
            </div>
          )}
        </div>

        <form
          action=""
          className="flex items-center w-full md:w-auto mt-2 md:mt-0"
        >
          <input
            onClick={() => setSearchModal(true)}
            type="text"
            disabled={searchModal}
            className="border border-white/40 text-white px-3 py-1.5 rounded-md outline-none text-base w-full md:w-48 placeholder:text-white/60 bg-transparent focus:border-primary transition-colors"
            placeholder="Search..."
          />
        </form>
        {searchModal && (
          <div className=" absolute bottom-0 transition-all duration-300  w-290 flex justify-center">
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
