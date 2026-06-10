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
import { ErrorBoundary } from "react-error-boundary";
import Image from "next/image";
import { Suspense } from "react";
import HomeProjectSuspense from "@/components/skeleton/HomeProjectSuspense";
import OfficeProjectSuspense from "@/components/skeleton/OfficeProjectSuspense";
import HappyCustomersSuspense from "@/components/skeleton/HappyCustomersSuspense";
import BeInteriorError from "@/components/home/beinteriorproj/BeInteriorError";
import OfficeProjectErr from "@/components/home/officeproject/OfficeProjectError";
import HappyCustomererr from "@/components/home/happycustomers/HappyCustomererr";
import JustClickSuspense from "@/components/skeleton/JustClickSuspense";

export default function Home() {
  return (
    <div className="">
      <HomeSection />
      <Whatwedo />
      <OurWorkFlow />
      <Whychooseus />
      <ErrorBoundary fallback={<BeInteriorError />}>
        <BeinteriorProject />
      </ErrorBoundary>
      <Calculator />
      <ErrorBoundary fallback={<OfficeProjectErr />}>
          <Officeproject />
      </ErrorBoundary>
      <Competition />
      <ErrorBoundary fallback={<HappyCustomererr />}>
          <HappyCustomers />
      </ErrorBoundary>
      <ErrorBoundary fallback={<div>প্রজেক্ট লোড করতে সমস্যা হয়েছে।</div>}>
        <Suspense fallback={<JustClickSuspense />}>
          <JustClick />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
