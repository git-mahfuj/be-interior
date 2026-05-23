"use client";
import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import formImg from "@/logo/HomePage/Gemini_Generated_Image_interior3.png"

interface FormType {
  name: string;
  email: string;
  phone: string;
  projectInfo: string;
}
const OfficeForm = () => {
  const [formData, setFormData] = useState<FormType>({
    name: "",
    email: "",
    phone: "",
    projectInfo: "",
  });

  const [errors, setErrors] = useState<FormType>({
    name: "",
    email: "",
    phone: "",
    projectInfo: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent) => {
    const { name, email, phone, projectInfo, value } = e.currentTarget;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors.name) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (errors.email) {
      setErrors((prev) => ({ ...prev, [email]: "" }));
    }
    if (errors.phone) {
      setErrors((prev) => ({ ...prev, [phone]: "" }));
    }
    if (errors.projectInfo) {
      setErrors((prev) => ({ ...prev, [projectInfo]: "" }));
    }
  };

  const validateForm = () => {
    let tempErrors: FormType = {
      name: "",
      email: "",
      phone: "",
      projectInfo: "",
    };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(?:\+88|88)?(01[3-9]\d{8})$/;

    if (!formData.name.trim()) tempErrors.name = "Name is required";

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone.replace(/[-\s]/g, ""))) {
      tempErrors.phone = "Valid BD phone number required (e.g. 017xxxxxxxx)";
    }

    if (!formData.projectInfo.trim())
      tempErrors.projectInfo = "Project information is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: ChangeEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form Submitted Successfully:", formData);
      setIsSubmitted(true);

      setFormData({ name: "", email: "", phone: "", projectInfo: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto my-16 px-4 sm:px-6">
      <div className="flex flex-col lg:flex-row w-full bg-primary rounded-3xl overflow-hidden shadow-2xl min-h-[550px]">
        <div className="w-full lg:w-1/2 relative min-h-75 lg:min-h-full bg-zinc-800">
          <Image
            src={formImg}
            alt="Dream Kitchen Interior Design"
            fill
            sizes="(max-w-1024px) 100vw, 50vw"
            priority
            className="object-cover object-center opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />
        </div>

        <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-14 flex flex-col justify-center font-poppins">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-wide font-montagu">
              Leave us a message for your project.
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300/90 mt-2 font-light leading-relaxed">
              Our expert team will contact with you.
            </p>
          </div>

          {isSubmitted && (
            <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm rounded-xl font-medium animate-fade-in">
              Thank you! Your request has been received. Our team will contact
              you soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Name Input */}
            <div className="flex flex-col w-full">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3.5 bg-white text-zinc-800 rounded-xl outline-none transition-all placeholder:text-zinc-400 font-medium text-sm sm:text-base border-2
                  ${errors.name ? "border-red-500 bg-red-50/5 focus:bg-white" : "border-transparent focus:border-primary/40"}
                `}
              />
              {errors.name && (
                <span className="text-red-400 text-xs mt-1.5 ml-1 font-medium">
                  {errors.name}
                </span>
              )}
            </div>

            <div className="flex flex-col w-full">
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3.5 bg-white text-zinc-800 rounded-xl outline-none transition-all placeholder:text-zinc-400 font-medium text-sm sm:text-base border-2
                  ${errors.email ? "border-red-500 bg-red-50/5 focus:bg-white" : "border-transparent focus:border-primary/40"}
                `}
              />
              {errors.email && (
                <span className="text-red-400 text-xs mt-1.5 ml-1 font-medium">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="flex flex-col w-full">
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3.5 bg-white text-zinc-800 rounded-xl outline-none transition-all placeholder:text-zinc-400 font-medium text-sm sm:text-base border-2
                  ${errors.phone ? "border-red-500 bg-red-50/5 focus:bg-white" : "border-transparent focus:border-primary/40"}
                `}
              />
              {errors.phone && (
                <span className="text-red-400 text-xs mt-1.5 ml-1 font-medium">
                  {errors.phone}
                </span>
              )}
            </div>

            <div className="flex flex-col w-full">
              <textarea
                name="projectInfo"
                rows={4}
                placeholder="Project information (location, floor area, no. of rooms, requirements & budget)"
                value={formData.projectInfo}
                onChange={handleChange}
                className={`w-full px-4 py-3.5 bg-white text-zinc-800 rounded-xl outline-none transition-all placeholder:text-zinc-400 font-medium text-sm sm:text-base resize-none border-2 leading-relaxed
                  ${errors.projectInfo ? "border-red-500 bg-red-50/5 focus:bg-white" : "border-transparent focus:border-primary/40"}
                `}
              />
              {errors.projectInfo && (
                <span className="text-red-400 text-xs mt-1.5 ml-1 font-medium">
                  {errors.projectInfo}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-4 mt-2 bg-white text-primary font-extrabold text-sm sm:text-base tracking-wider rounded-xl shadow-md hover:bg-zinc-100 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 cursor-pointer uppercase font-poppins"
            >
              Get Free Quote
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OfficeForm;
