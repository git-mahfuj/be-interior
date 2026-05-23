"use client";
import React, { useState } from "react";
import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import Navbtn from "./Navbtn";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <div className="fixed top-0 left-0 flex w-full justify-between items-center h-24 z-99999 backdrop-blur-md border-b border-white/10 text-white">
        <NavLogo />

        <div className="hidden lg:flex items-center gap-4">
          <NavLinks />
        </div>

        <div className="hidden lg:block h-full">
          <Navbtn />
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="block lg:hidden text-white hover:text-primary transition-colors z-50 cursor-pointer p-2"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* 📱 মোবাইল সাইড মেনু ড্রয়ার */}
      <div
        className={`fixed top-0 right-0 h-screen w-full sm:w-[60%] backdrop-blur-lg z-40 p-8 pt-32 flex flex-col gap-8 border-l border-white/10 text-xl transition-transform duration-300 ease-in-out md:hidden
          ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col justify-center items-center gap-5">
          <form
            action=""
            className="flex items-center gap-3 w-full max-w-xs relative"
          >
            <input
              type="text"
              className="bg-white/10 border border-white/20 text-white rounded-md px-3 py-1.5 w-full outline-none focus:border-primary text-base placeholder:text-white/40"
              placeholder="Search..."
            />
            <button className="absolute right-3 text-white text-base">
              se
            </button>
          </form>

          <ul className="flex flex-col justify-center items-center gap-6 text-white mt-4">
            <li className="font-medium hover:text-primary cursor-pointer transition-colors duration-300">
              Home Interior
            </li>
            <li className="font-medium hover:text-primary cursor-pointer transition-colors duration-300">
              Office Interior
            </li>
            <li className="font-medium hover:text-primary cursor-pointer transition-colors duration-300">
              About Us
            </li>
            <li className="font-medium hover:text-primary cursor-pointer transition-colors duration-300">
              Contact Us
            </li>
            <li className="font-medium hover:text-primary cursor-pointer transition-colors duration-300">
              Hire an Architect
            </li>
          </ul>
        </div>
      </div>

      {/* 🖤 মোবাইল মেনু ওপেন থাকলে পেছনের ডার্ক ওভারলে */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/60 z-30 md:hidden animate-in fade-in duration-200"
        />
      )}
    </div>
  );
};

export default Navbar;
