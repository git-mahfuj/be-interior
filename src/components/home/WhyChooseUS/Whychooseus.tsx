import Image from "next/image";
import React from "react";

const Whychooseus = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center mt-16 px-4 p-10 ">
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-montagu text-primary tracking-wide font-bold">
        Excellence <span className="font-medium text-secondary">by Design</span> 
      </h2>

      <div className="flex flex-col  md:flex-row items-center justify-center gap-8 mt-8 w-full max-w-7xl">
        <div className="flex flex-col justify-center items-center text-center">
          <p className="font-medium text-2xl">Best price in market</p>
          <p className="font-medium">
            Get premium designs at competitive prices tailored to your budget.
            No hidden cost.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <p className="font-medium text-2xl">45-days delivery</p>
          <p className="font-medium">
            We ensure timely project completion without compromising on quality.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <p className="font-medium text-2xl">flat 2-years warranty</p>
          <p className="font-medium">
            Enjoy peace of mind with our 2-year warranty on all projects.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <p className="font-medium text-2xl">After sale service</p>
          <p className="font-medium">
            Our support continues even after the project is complete, ensuring
            long-term satisfaction.
          </p>
        </div>
      </div>
      <button className="mt-10 translate-y-10 bg-primary font-medium text-white p-4 text-2xl rounded-xl">Book Free Consultation</button>
    </div>
  );
};

export default Whychooseus;
