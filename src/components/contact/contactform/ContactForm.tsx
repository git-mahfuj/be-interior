"use client";
import Image from "next/image";
import React, { ChangeEvent, FormEvent, useState } from "react";
import logo from "@/logo/HomePage/ContactImage.jpg"
import { createLeadApi } from "@/axios/axios";

interface FormType {
  name: string;
  email: string;
  phone: string;
  projectInfo: string;
}

type FormError = Partial<FormType>;

const ContactForm = () => {
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

  const handleSubmit = async (e: FormEvent) => {
      e.preventDefault();
  
      try {
        if (validateForm()) {
          console.log("Form Submitted Successfully:", formData);
          await createLeadApi(formData);
          setIsSubmitted(true);
  
          setFormData({ name: "", email: "", phone: "", projectInfo: "" });
          setTimeout(() => setIsSubmitted(false), 5000);
        }
      } catch (error: any) {
        if (process.env.NODE_ENV === "development") {
          console.error("Form Submission Error");
        }
      }
    };

  return (
    <section className="bg-[#eef2ed] py-20 px-6">
      <div className="max-w-5xl mx-auto grid justify-center gap-12 items-center">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-[#283b33] mb-2">
            Leave Us A Message For Your Project
          </h2>
          <p className="text-gray-500 mb-6">
            Our Expert Team Will Contact With You
          </p>
          {isSubmitted && (
            <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm rounded-xl font-medium animate-fade-in">
              Thank you! Your request has been received. Our team will contact you soon.
            </div>
          )}

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
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
