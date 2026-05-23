import Navbar from "@/components/home/Header/Navbar";
import HomeSection from "@/components/home/Home-section/HomeSection";
import Whatwedo from "@/components/home/whatwedo/Whatwedo";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <HomeSection />
      <Whatwedo/>
    </div>
  );
}
