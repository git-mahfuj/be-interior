import HomeComment from "@/components/home-interior/home-comment/HomeComment";
import HomeInteriorProjects from "@/components/home-interior/home-interior-projects/HomeInteriorProject";
import HomeInteriorSlider from "@/components/home-interior/home-interior-slider/HomeInteriorSlider";
import HomeSliderSkeleton from "@/components/home-interior/home-interior-slider/HomeSliderSkeleton";
import WhatsappErrorFallback from "@/components/home-interior/home-interior-slider/WhastappErrorFallback";
import HomeOurPackage from "@/components/home-interior/home-package/HomePackage";
import HomePromise from "@/components/home-interior/home-promise/HomePromise";
import HomeCustomerReview from "@/components/home-interior/home-review/HomeReviewCustomer";
import HomeSolution from "@/components/home-interior/home-solution/HomeSolution";
import HomeDream from "@/components/home-interior/HomeDream.tsx/HomeDream";
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const HomeInterior = () => {
  return (
    <div className="">
      <ErrorBoundary fallback={<div>প্রজেক্ট লোড করতে সমস্যা হয়েছে।</div>}>
        <Suspense fallback={<p>Loading...</p>}>
          <HomeInteriorSlider/>
        </Suspense>
      </ErrorBoundary>
      <HomeSolution />
      <HomeOurPackage />
      <HomeDream />
      <HomePromise />
      <HomeInteriorProjects />
      <HomeCustomerReview />
      <HomeComment />
    </div>
  );
};

export default HomeInterior;
