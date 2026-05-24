import AboutFounders from "@/components/about/About-founders/AboutFounders";
import HowitStarted from "@/components/about/howitstarted/HowitStarted";
import OurTeam from "@/components/about/OurTeam/OurTeam";
import React from "react";

const AboutUS = () => {
  return (
    <div className="mt-25">
      <AboutFounders />
      <HowitStarted />
      <OurTeam/>
    </div>
  );
};

export default AboutUS;
