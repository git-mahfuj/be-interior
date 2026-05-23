import Navbar from "@/components/Header/Navbar";
import BeinteriorProject from "@/components/home/beinteriorproj/BeinteriorProject";
import Competition from "@/components/home/competetion/Competition";
import Calculator from "@/components/home/dream-calculate/Calculator";
import HappyCustomers from "@/components/home/happycustomers/HappyCustomers";
import HomeSection from "@/components/home/Home-section/HomeSection";
import JustClick from "@/components/home/justclick/JustClick";
import Officeproject from "@/components/home/officeproject/Officeproject";
import Whatwedo from "@/components/home/whatwedo/Whatwedo";
import Whychooseus from "@/components/home/WhyChooseUS/Whychooseus";
import OurWorkFlow from "@/components/home/work-flow/OurWorkFlow";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <HomeSection />
      <Whatwedo />
      <OurWorkFlow/>
      <Whychooseus/>
      <BeinteriorProject/>
      <Calculator/>
      <Officeproject/>
      <Competition/>
      <HappyCustomers/>
      <JustClick/>
    </div>
  );
}
