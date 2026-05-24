import Navbtn from "@/components/Header/Navbtn";
import React from "react";
import founder from "@/logo/About/IMG_295022-WkEJi0hzQaFH7pqkVKMoLQ.jpg";
import Image from "next/image";
const AboutFounders = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center mt-16 px-4 gap-5 mb-15">
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-montagu text-secondary tracking-wide font-bold">
        The Architects of Our Vision
      </h2>
      <div className=" p-1 w-auto h-auto flex flex-col justify-center items-start gap-3">
        <Image
          src={founder}
          alt="founder"
          height={100}
          width={300}
          className="object-cover rounded-md"
        />
        <div className="flex flex-col justify-center items-start">
          <p className="text-3xl font-bold text-secondary">Hossain Al Mahmud</p>
          <p className="text-xl font-medium text-secondary">Managing Director</p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default AboutFounders;
