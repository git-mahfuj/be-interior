"use client";
import React, { useState } from "react";
import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import Navbtn from "./Navbtn";
import { Menu, Search, SearchCheck, X } from "lucide-react";
import Link from "next/link";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { allModalInteriorApi } from "@/axios/axios";

interface AllInteriorProjectstype {
  ms: number;
  query: string;
  result: {
    _id: string;
    name: string;
    slug: string;
    _type: string;
    coverImage: string;
    galleryImages: string[];
    size: string;
    location: string;
  }[];
  syncTags: string[];
}

const fetchAllInteriorItems = async () => {
  try {
    const res = await allModalInteriorApi();
    if (res.status !== 200) {
      throw new Error("Error");
    }
    return res.data;
  } catch (error: any) {
    if (process.env.NODE_ENV === "development") {
      console.log("Error");
    }
    return;
  }
};

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const links = [
    {
      name: "Home Interior",
      href: "/services/home-interior",
    },
    {
      name: "Office Interior",
      href: "/services/office-interior",
    },
    {
      name: "About Us",
      href: "/about",
    },
    {
      name: "Contact Us",
      href: "/contact",
    },
    {
      name: "Hire An Architect",
      href: "/hire-architect",
    },
  ];
  const [searchQuery, setSearchQuery] = useState("");
  const { data, isLoading, isError, error } = useQuery<AllInteriorProjectstype>(
    {
      queryKey: ["mobile-modal-items"],
      queryFn: fetchAllInteriorItems,
    },
  );

  const result = data?.result || [];

  if (process.env.NODE_ENV === "development") {
    console.log("mobile", result);
  }

  let filteredResult = result.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      item._type.toLowerCase().includes(searchQuery.toLowerCase()) &&
      item.slug.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleLink = () => {
    (setMobileMenuOpen(!mobileMenuOpen), (filteredResult = []));
    setSearchQuery("");
  };

  if (isLoading) {
    <div>Loading....</div>;
  }
  if (isError) {
    <div>Error : {error.message}</div>;
  }

  return (
    <>
      <div className="fixed top-0 left-0 flex w-full justify-between items-center h-24 z-99999 backdrop-blur-sm border-b  border-white/10 bg-secondary/50 opacity-85">
        <div className="xl:translate-x-10">
          {" "}
          <NavLogo />
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <NavLinks />
        </div>

        <div className="hidden lg:block h-full">
          <Navbtn />
        </div>

        <button
          onClick={handleLink}
          className="block lg:hidden text-white hover:text-primary transition-colors z-50 cursor-pointer p-2"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 h-screen w-full sm:w-[60%] backdrop-blur-lg z-40 p-8 pt-32 flex flex-col gap-8 border-l border-white/10 text-xl transition-transform duration-300 ease-in-out md:hidden
          ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="relative flex flex-col justify-center items-center gap-5">
          <form
            action=""
            className="flex items-center gap-3 w-full max-w-xs relative"
          >
            <input
              type="text"
              className="bg-white/10 border border-white/20 text-white rounded-md px-3 py-1.5 w-full outline-none focus:border-primary text-base placeholder:text-white/40"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="absolute right-3 text-white text-base">
              <Search />
            </button>
          </form>

          {searchQuery === "" ? (
            <div className="text-white absolute"></div>
          ) : (
            <div className="absolute top-12 bg-white rounded-lg w-[88%]">
              {filteredResult.length > 0 ? (
                <div>
                  {filteredResult.map((item) => (
                    <Link
                      key={item._id}
                      href={`/interior-projects/${item.slug}?type=${item._type}`}
                      onClick={handleLink}
                    >
                      <div
                        onClick={() => {}}
                        className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/10 flex items-center justify-between transition-all duration-500 cursor-pointer group"
                      >
                        <div className="space-y-0.5">
                          <p className="text-black font-medium group-hover:text-primary transition-colors">
                            {item.name}
                          </p>
                          <span className="text-xs text-black/40 bg-white/5 px-2 py-0.5 rounded-full capitalize">
                            {item._type}
                          </span>
                        </div>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-white/30 group-hover:text-white transform group-hover:translate-x-1 transition-all"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10 text-red-500 text-sm">
                  No result Found on {searchQuery}
                </div>
              )}
            </div>
          )}

          <ul className="flex flex-col justify-center items-center gap-6 text-white mt-4">
            {links.map((link, index) => {
              return (
                <Link
                  href={link.href}
                  key={index}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <li className="font-medium hover:text-primary cursor-pointer transition-colors duration-300">
                    {link.name}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/60 z-30 md:hidden animate-in fade-in duration-200"
        />
      )}
    </>
  );
};

export default Navbar;
