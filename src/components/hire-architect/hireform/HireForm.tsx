"use client";
import React, { ChangeEvent, FormEvent } from "react";

import { useState } from "react";

interface FormType {
  name: string;
  email: string;
  phone: string;
  projectInfo: string;
}

type FormError = Partial<FormType>;

const HireForm = () => {
  const [formData, setFormData] = useState<FormType>({
    name: "",
    email: "",
    phone: "",
    projectInfo: "",
  });
  const [error, setErrors] = useState<FormError>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.currentTarget;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (error[name as keyof FormType]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };
  const validateForm = (): boolean => {
    let tempErrors: FormError = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(?:\+88|88)?(01[3-9]\d{8})$/;
    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      tempErrors.email = "Email is Required";
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Invalid Email Format";
    }
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is Required";
    } else if (!phoneRegex.test(formData.phone.replace(/[-\s]/g, ""))) {
      tempErrors.phone = "Valid BD phone number required (e.g. 017xxxxxxxx)";
    }
    if (!formData.projectInfo.trim()) {
      tempErrors.projectInfo = "Project Information is Required";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted SuccessFully", formData);
      setIsSubmitted(true);
    }
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectInfo: "",
    });
    setTimeout(() => {
      (setIsSubmitted(false), 5000);
    });
  };
  return (
    <section className="bg-ivory py-16 px-6 md:px-20 lg:px-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Content & Illustration */}
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif text-[#283b33] leading-tight">
            Leave Us A <span className="font-bold">Message</span> for your{" "}
            <br />
            Dream Interior
          </h2>

          {/* Illustration Area: Replace this div with your actual illustration image */}
          <div className="w-full h-80 flex items-center justify-center">
            {/* image_0b9aff.png এ থাকা ইলাস্ট্রেশনটি এখানে বসান */}
            <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
              [Illustration Placeholder]
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-white p-8 rounded-lg shadow-sm w-full max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Input fields */}
            {[
              { name: "name", type: "text", placeholder: "Name" },
              { name: "email", type: "email", placeholder: "E-mail" },
              { name: "phone", type: "text", placeholder: "Phone" },
            ].map((field) => (
              <div key={field.name} className="flex flex-col w-full">
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name as keyof FormType]}
                  onChange={handleChange}
                  className={`w-full px-4 py-3.5 bg-white text-zinc-800 rounded-xl outline-none transition-all placeholder:text-zinc-400 font-medium text-sm sm:text-base border-2 ${
                    error[field.name as keyof FormType]
                      ? "border-red-500 bg-red-50/5 focus:bg-white"
                      : "border-secondary focus:border-primary/40"
                  }`}
                />
                {error[field.name as keyof FormType] && (
                  <span className="text-red-400 text-xs mt-1.5 ml-1 font-medium">
                    {error[field.name as keyof FormType]}
                  </span>
                )}
              </div>
            ))}

            {/* Textarea */}
            <div className="flex flex-col w-full">
              <textarea
                name="projectInfo"
                rows={4}
                placeholder="Project information (location, floor area, etc.)"
                value={formData.projectInfo}
                onChange={handleChange}
                className={`w-full px-4 py-3.5 bg-white text-zinc-800 rounded-xl outline-none transition-all placeholder:text-zinc-400 font-medium text-sm sm:text-base resize-none border-2 leading-relaxed ${
                  error.projectInfo
                    ? "border-red-500 bg-red-50/5 focus:bg-white"
                    : "border-secondary focus:border-primary/40"
                }`}
              />
              {error.projectInfo && (
                <span className="text-red-400 text-xs mt-1.5 ml-1 font-medium">
                  {error.projectInfo}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-4 mt-2 bg-white text-[#1b332a] font-extrabold text-sm sm:text-base tracking-wider rounded-xl shadow-md hover:bg-zinc-100 transition-all duration-200 cursor-pointer uppercase"
            >
              Get Free Quote
            </button>
          </form>

          <p className="text-[10px] text-gray-500 mt-4 leading-tight">
            By submitting this form, you agree to the <br />
            <a href="#" className="text-red-700 underline">
              Privacy policy
            </a>
            ,
            <a href="#" className="text-red-700 underline ml-1">
              terms and conditions
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HireForm;
