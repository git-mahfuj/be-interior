import Link from "next/link";
import React from "react";
import { ShieldCheck, Clock, Tag, Headset } from "lucide-react"; // lucide-react ব্যবহার করা হয়েছে

const Whychooseus = () => {
  const features = [
    {
      title: "Unmatched Value",
      desc: "Top-tier aesthetics that align perfectly with your financial comfort. No surprises, just honest and upfront pricing.",
      icon: <Tag size={32} className="text-primary" />,
    },
    {
      title: "Express 45-Day Execution",
      desc: "Watch your dream space come alive in just a month and a half. We deliver speed without compromising on precision.",
      icon: <Clock size={32} className="text-primary" />,
    },
    {
      title: "24-Month Assurance",
      desc: "We stand confidently behind our craftsmanship. Every single project is backed by a solid 2-year protection plan.",
      icon: <ShieldCheck size={32} className="text-primary" />,
    },
    {
      title: "Dedicated Post-Handover Support",
      desc: "Handing over the keys is just the beginning. We remain just a call away for any future assistance or maintenance you might need.",
      icon: <Headset size={32} className="text-primary" />,
    },
  ];

  return (
    <section className="w-full py-20 px-4 bg-ivory">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header */}
        <h2 className="text-3xl md:text-5xl font-montagu text-[#111111] tracking-wide font-bold text-center mb-16">
          Excellence <span className="text-primary">by Design</span>
        </h2>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {features.map((item, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-3xl border border-black/5 hover:border-primary/20 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center"
            >
              <div className="mb-6 p-4 bg-primary/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#111111] mb-3">{item.title}</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Link href={"/hire-architect"}>
          <button className="mt-16 px-10 py-5 bg-[#111111] hover:bg-primary text-white font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
            Book Free Consultation
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Whychooseus;