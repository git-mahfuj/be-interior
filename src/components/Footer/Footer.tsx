"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import NavLogo from "../Header/NavLogo";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaTiktok,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { HiMapPin } from "react-icons/hi2";
import { footerContactApi } from "@/axios/axios";
import { Loader2, AlertCircle } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

interface FooterContactType {
  ms: number;
  query: string;
  result: {
    footercontactnumber1: string;
    footercontactnumber2: string;
    footercontactemail: string;
    footerlocation: string;
    links: {
      _key: string;
      _type: string;
      platformName: string;
      url: string;
    }[];
  }[];
  syncTags: string[];
}

const fetchFooterLinks = async () => {
  try {
    const res = await footerContactApi();
    if (res.status !== 200) {
      throw new Error("Error While Fetching");
    }
    return res.data;
  } catch (error: any) {
    if (process.env.NODE_ENV === "development") {
      console.log("Footer Err", error.message);
    }
    return;
  }
};

const Footer = () => {
  const { data, isLoading, isError } = useQuery<FooterContactType>({
    queryKey: ["query-key"],
    queryFn: fetchFooterLinks,
  });

  const footerItems = data?.result || [];

  console.log("FooterItems : ", footerItems);

  const footerNumberOne = footerItems[0]?.footercontactnumber1 || "01818383239";
  const footerNumberTwo = footerItems[0]?.footercontactnumber2 || "01818383239";
  const footerEmail =
    footerItems[0]?.footercontactemail || "info@beinterior.com";
  const footerLocation = footerItems[0]?.footerlocation || "Dhaka BD";

  return (
    <footer className="w-full bg-secondary/80 text-white pt-16 pb-8 px-6 sm:px-12 xl:px-40 border-t border-white/5">
      {/* top grid logo/social links */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 pb-12 border-b border-white/10 w-full max-w-7xl mx-auto">
        <div className="flex items-center justify-center lg:justify-start">
          <NavLogo />
        </div>
        <div className="hidden lg:block flex-1 h-[1px] bg-gradient-to-r from-white/20 via-white/10 to-transparent mx-12" />
        <div className="flex flex-wrap items-center justify-center gap-3">
          {[
            { icon: <FaFacebookF />, url: "#" },
            { icon: <FaInstagram />, url: "#" },
            { icon: <FaLinkedinIn />, url: "#" },
            { icon: <FaYoutube />, url: "#" },
            { icon: <FaPinterestP />, url: "#" },
            { icon: <RiTwitterXFill />, url: "#" },
            { icon: <FaTiktok />, url: "#" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.url}
              className="p-3 rounded-full border border-white/20 text-white/80 hover:text-primary hover:border-primary hover:bg-white/5 transition-all duration-300 text-base cursor-pointer shadow-sm"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 my-12 w-full max-w-7xl mx-auto font-poppins">
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold uppercase tracking-wider text-white/90 border-b border-white/10 pb-2 w-fit">
            Our Services
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-zinc-400">
            <Link href={"/services/home-interior"}>
              <li className="hover:text-primary transition-colors duration-200 cursor-pointer">
                Home Interior
              </li>
            </Link>
            <Link href={"/services/office-interior"}>
              <li className="hover:text-primary transition-colors duration-200 cursor-pointer">
                Office Interior
              </li>
            </Link>
            <li className="hover:text-primary transition-colors duration-200 cursor-pointer">
              Building Design
            </li>
          </ul>
        </div>

        {/* Column 2: Resources */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold uppercase tracking-wider text-white/90 border-b border-white/10 pb-2 w-fit">
            Resources
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-zinc-400">
            <Link href={"/"}>
              <li className="hover:text-primary transition-colors duration-200 cursor-pointer">
                Home
              </li>
            </Link>
            <li className="hover:text-primary transition-colors duration-200 cursor-pointer">
              Interior Calculator
            </li>
            <Link href={"/about"}>
              <li className="hover:text-primary transition-colors duration-200 cursor-pointer">
                About Us
              </li>
            </Link>
            <Link href={"/contact"}>
              <li className="hover:text-primary transition-colors duration-200 cursor-pointer">
                Contact Us
              </li>
            </Link>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold uppercase tracking-wider text-white/90 border-b border-white/10 pb-2 w-fit">
            Contact
          </h3>

          {/* isLoading এর জন্য লেআউট যেন ভেঙে না যায়, তাই সরাসরি <ul> ব্যবহার করা হলো */}
          <div>
            <ul className="flex flex-col gap-4 text-sm text-zinc-400">
              <li className="flex items-start gap-3 group">
                <FaPhoneAlt className="text-base text-primary mt-0.5 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col gap-1">
                  <a
                    href={`tel:${footerNumberOne}`}
                    className="hover:text-primary transition-colors"
                  >
                    {isLoading ? "Loading..." : `+88${footerNumberOne}`}
                  </a>
                  <a
                    href={`tel:${footerNumberTwo}`}
                    className="hover:text-primary transition-colors"
                  >
                    {isLoading ? "Loading..." : `+88${footerNumberTwo}`}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3 group">
                <FaEnvelope className="text-base text-primary group-hover:scale-110 transition-transform" />
                <a
                  href={`mailto:${footerEmail}`}
                  className="hover:text-primary transition-colors"
                >
                  {isLoading ? "Loading..." : `${footerEmail}`}
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <HiMapPin className="text-lg text-primary -mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                <p className="leading-relaxed">
                  {isLoading ? "Loading..." : `${footerLocation}`}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="w-full max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-poppins text-zinc-500 text-center sm:text-left">
        <p>© {new Date().getFullYear()} BE INTERIOR. All Rights Reserved.</p>
        <p className="tracking-wide">Your Vision, Our Creation.</p>
      </div>
    </footer>
  );
};

export default Footer;
