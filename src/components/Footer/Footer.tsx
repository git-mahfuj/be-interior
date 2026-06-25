"use client";
import React from "react";
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
import { useQuery } from "@tanstack/react-query";
import { footerContactApi } from "@/axios/axios";

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

const Tooltip = ({ text }: { text: string }) => (
  <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
    {text}
    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white"></span>
  </span>
);

const Footer = () => {
  const { data, isLoading } = useQuery<FooterContactType>({
    queryKey: ["query-key"],
    queryFn: fetchFooterLinks,
  });

  const footerItems = data?.result || [];
  const footerNumberOne = footerItems[0]?.footercontactnumber1 || "01818383239";
  const footerNumberTwo = footerItems[0]?.footercontactnumber2 || "01818383239";
  const footerEmail =
    footerItems[0]?.footercontactemail || "info@beinterior.com";
  const footerLocation = footerItems[0]?.footerlocation || "Dhaka, Bangladesh";

  return (
    <footer className="relative w-full bg-secondary/90 text-white pt-20 pb-10 overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Column 1: Branding */}
          <div className="flex flex-col gap-6">
            <NavLogo />
            <p className="text-sm font-medium text-zinc-400 leading-relaxed max-w-xs">
              Transforming your living spaces into masterpieces of comfort and
              style. Your vision is our expertise.
            </p>
            <div className="flex gap-4">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300"
                  >
                    <Icon size={14} />
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="flex flex-col gap-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary">
              Services
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-zinc-400">
              {[
                {
                  name: "Home Interior",
                  link: "/services/home-interior",
                },
                {
                  name: "Office Interior",
                  link: "/services/office-interior",
                },
                {
                  name: "Building Design",
                  link: "/",
                },
                {
                  name: "Furniture Customization",
                  link: "/",
                },
              ].map((link) => (
                <Link key={link.name} href={link.link}>
                  <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-2 group font-medium">
                    <span className="w-1 h-1 bg-zinc-600 group-hover:bg-primary rounded-full"></span>
                    {link.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary">
              Resources
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-zinc-400">
              {[
                {
                  name: "Home",
                  link: "/",
                },
                {
                  name: "Calculator",
                  link: "/services/budget-calculator",
                },
                {
                  name: "About Us",
                  link: "/about",
                },
                {
                  name: "Blogs",
                  link: "/blogs",
                },
                {
                  name: "Contact",
                  link: "/contact",
                },
              ].map((link) => (
                <Link key={link.name} href={link.link}>
                  <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-2 group font-medium">
                    <span className="w-1 h-1 bg-zinc-600 group-hover:bg-primary rounded-full"></span>
                    {link.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col gap-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary">
              Contact
            </h4>
            <ul className="flex flex-col gap-4 text-sm font-medium text-zinc-400">
              <li className="flex items-start gap-3">
                <FaPhoneAlt className="text-primary mt-1" />
                <div className="flex flex-col gap-1">
                  <a
                    href={`tel:${footerNumberOne}`}
                    className="hover:text-white transition-colors"
                  >
                    {isLoading ? "..." : footerNumberOne}
                  </a>
                  <a
                    href={`tel:${footerNumberTwo}`}
                    className="hover:text-white transition-colors"
                  >
                    {isLoading ? "..." : footerNumberTwo}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-primary" />
                <a
                  href={`mailto:${footerEmail}`}
                  className="hover:text-white transition-colors truncate"
                >
                  {isLoading ? "..." : `${footerEmail}`}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <HiMapPin className="text-lg text-primary mt-0.5 shrink-0" />
                <p className="leading-relaxed">
                  {isLoading ? "..." : `${footerLocation}`}
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} BE INTERIOR. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
