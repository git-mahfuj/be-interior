import HomeComment from "@/components/home-interior/home-comment/HomeComment";
import HomeInteriorProjects from "@/components/home-interior/home-interior-projects/HomeInteriorProject";
import HomeInteriorSlider from "@/components/home-interior/home-interior-slider/HomeInteriorSlider";
import HomeOurPackage from "@/components/home-interior/home-package/HomePackage";
import HomePromise from "@/components/home-interior/home-promise/HomePromise";
import HomeCustomerReview from "@/components/home-interior/home-review/HomeReviewCustomer";
import HomeSolution from "@/components/home-interior/home-solution/HomeSolution";
import HomeDream from "@/components/home-interior/HomeDream.tsx/HomeDream";
import React from "react";

const HomeInterior = () => {
  return <div className="">
    <HomeInteriorSlider/>
    <HomeSolution/>
    <HomeOurPackage/>
    <HomeDream/>
    <HomePromise/>
    <HomeInteriorProjects/>
    <HomeCustomerReview/>
    <HomeComment/>
  </div>;
};

export default HomeInterior;
