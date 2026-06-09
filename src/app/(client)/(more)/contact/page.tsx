import ContactForm from "@/components/contact/contactform/ContactForm";
import Location from "@/components/contact/location/Location";
import Contact from "@/components/contact/ContactUs/Contact";
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const ContactUs = () => {
  return (
    <div className="mt-25">
      <Contact />
      <Location />
      <ContactForm />
    </div>
  );
};

export default ContactUs;
