"use client";
import React, { useState, useEffect } from "react";
import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import Navbtn from "./Navbtn";
import { Menu, Search, X, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { allModalInteriorApi } from "@/axios/axios";

interface AllInteriorProjectstype {
  ms: number;
  query: string;
  result: {
    _id: string;
    name: string;
    slug: string;
    _type: string;
  }[];
  syncTags: string[];
}

const fetchAllInteriorItems = async () => {
  try {
    const res = await allModalInteriorApi();
    if (res.status !== 200) {
      throw new Error("Error fetching data");
    }
    return res.data;
  } catch (error: any) {
    if (process.env.NODE_ENV === "development") {
      console.error("Error Fetching Interior Items:", error);
    }
    return null;
  }
};

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const links = [
    { name: "Home Interior", href: "/services/home-interior" },
    { name: "Office Interior", href: "/services/office-interior" },
    { name: "Portfolio", href: "/interior-projects" },
    { name: "Blogs", href: "/blogs" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Hire An Architect", href: "/hire-architect" },
  ];

  // Handle scroll to add background color to navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { data, isLoading, isError } = useQuery<AllInteriorProjectstype>({
    queryKey: ["mobile-modal-items"],
    queryFn: fetchAllInteriorItems,
  });

  const result = data?.result || [];

  let filteredResult = result.filter((item) => {
    const query = searchQuery
      .toLowerCase()
      .trim()
      .replace(/['"‘“”]/g, "'");
    if (!query) return false;

    const name = item.name?.toLowerCase().replace(/['"‘“”]/g, "'") || "";
    const type = item._type?.toLowerCase().replace(/['"‘“”]/g, "'") || "";
    const slug = item.slug?.toLowerCase().replace(/['"‘“”]/g, "'") || "";

    return name.includes(query) || type.includes(query) || slug.includes(query);
  });

  const handleLink = () => {
    setMobileMenuOpen(false);
    setSearchQuery("");
  };

  return (
    <>
      {/* --- Main Navbar (Desktop & Mobile Top Bar) --- */}
      <div
        className={`fixed top-0 left-0 w-full flex justify-between items-center h-20 md:h-24 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/10 shadow-sm"
            : "bg-secondary/80 backdrop-blur-sm border-b border-white/5"
        }`}
      >
        <div className="px-4 md:px-10 lg:pl-12 flex-shrink-0">
          <NavLogo />
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 mx-auto">
          <NavLinks />
        </div>

        {/* Desktop Button */}
        <div className="hidden lg:block h-full border-l border-white/10 flex-shrink-0">
          <Navbtn />
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden text-white/80 hover:text-primary transition-colors p-4 focus:outline-none"
          aria-label="Open Menu"
        >
          <Menu size={28} strokeWidth={2.5} />
        </button>
      </div>

      {/* --- Mobile Menu Overlay --- */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden animate-in fade-in duration-300"
        />
      )}

      {/* --- Mobile Menu Sidebar --- */}
      <div
        className={`fixed top-0 right-0 h-[100dvh] w-full sm:w-[380px] bg-[#111111] z-50 flex flex-col border-l border-white/10 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          mobileMenuOpen
            ? "translate-x-0 shadow-[-20px_0_60px_rgba(0,0,0,0.5)]"
            : "translate-x-full"
        }`}
      >
        {/* Header / Close Button */}
        <div className="flex justify-end p-6 border-b border-white/5">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-white/60 hover:text-primary bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors focus:outline-none"
            aria-label="Close Menu"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto overflow-x-hidden p-6 custom-scrollbar">
          {/* Mobile Search Bar */}
          <div className="relative w-full mb-10 group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search
                size={18}
                className="text-white/40 group-focus-within:text-primary transition-colors"
              />
            </div>
            <input
              type="text"
              className="w-full bg-white/5 border border-white/10 text-white rounded-2xl py-3.5 pl-11 pr-4 outline-none focus:bg-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 text-sm placeholder:text-white/30 transition-all duration-300"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            {/* Search Results Dropdown */}
            {searchQuery && (
              <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.3)] overflow-hidden z-50 flex flex-col border border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200">
                {isLoading ? (
                  <div className="py-6 flex justify-center">
                    <div className="w-5 h-5 border-2 border-gray-300 border-t-primary rounded-full animate-spin"></div>
                  </div>
                ) : filteredResult.length > 0 ? (
                  <>
                    <div className="max-h-[40vh] overflow-y-auto overscroll-contain">
                      {filteredResult.map((item) => (
                        <Link
                          key={item._id}
                          href={`/interior-projects/${item.slug}?type=${item._type}`}
                          onClick={handleLink}
                          className="flex items-center justify-between px-5 py-3.5 hover:bg-gray-50 border-b border-gray-50 last:border-none group transition-colors"
                        >
                          <div className="flex flex-col gap-1">
                            <p className="text-gray-800 font-medium text-sm group-hover:text-primary transition-colors line-clamp-1">
                              {item.name}
                            </p>
                            <span className="text-[10px] text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md w-fit capitalize font-medium">
                              {item._type}
                            </span>
                          </div>
                          <ChevronRight
                            size={16}
                            className="text-gray-300 group-hover:text-primary transform group-hover:translate-x-1 transition-all"
                          />
                        </Link>
                      ))}
                    </div>
                    <div className="p-3 bg-gray-50 border-t border-gray-100">
                      <Link
                        href="/interior-projects"
                        onClick={handleLink}
                        className="block w-full text-center py-2.5 text-xs font-bold text-primary bg-white rounded-xl shadow-sm hover:shadow-md hover:bg-gray-50 transition-all border border-gray-200"
                      >
                        View All Projects
                      </Link>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8 px-4">
                    <p className="text-gray-400 text-sm font-medium">
                      No results found
                    </p>
                    <p className="text-gray-300 text-xs mt-1">
                      Try a different keyword
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-2">
            <p className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-2 pl-2">
              Menu
            </p>
            {links.map((link, index) => (
              <Link
                href={link.href}
                key={index}
                onClick={handleLink}
                className="group flex items-center justify-between px-4 py-3.5 rounded-xl hover:bg-white/5 transition-colors"
              >
                <span className="text-white/80 font-medium group-hover:text-white transition-colors">
                  {link.name}
                </span>
                <ChevronRight
                  size={18}
                  className="text-white/20 group-hover:text-primary transform group-hover:translate-x-1 transition-all"
                />
              </Link>
            ))}
          </nav>

          <div className="p-6 border-t border-white/5 mt-auto">
            <Link
              href="/services/budget-calculator"
              onClick={handleLink}
              className="flex items-center justify-center w-full py-4 bg-primary text-white rounded-2xl font-bold hover:bg-[#c35e00] transition-colors shadow-[0_4px_20px_rgba(200,122,49,0.3)]"
            >
              Calculate Estimate
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
