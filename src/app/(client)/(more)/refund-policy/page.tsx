"use client";
import React from "react";

export default function CancellationsAndRefunds() {
  const paymentMethods = [
    "Bank Transfers",
    "Cheque",
    "Cash",
    "Internet Banking",
    "Mobile Financial Services"
  ];

  return (
    <section className="bg-ivory mt-23 py-16 px-6 md:px-16 lg:px-24 font-sans text-[#23352e]">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Main Header */}
        <div className="border-b border-[#23352e]/10 pb-4">
          <h2 className="text-2xl md:text-3xl font-serif font-bold tracking-wide">
            Cancellations & Refunds
          </h2>
        </div>

        {/* Policy Body */}
        <div className="space-y-6 max-w-4xl text-xs md:text-sm text-gray-600 leading-relaxed font-normal">
          
          {/* Intro Paragraphs */}
          <div className="space-y-4">
            <p>
              If you decide to cancel your project with Volumetric Designers, you will not be charged for services that have not commenced or been processed at the time of your cancellation request. However, Volumetric Designers cannot offer any refunds for services that have already been paid for, processed, initiated, or completed.
            </p>
            <p>
              During the tentative BOQ (Bill of Quantities) phase, any item or service can be modified, replaced, or removed before placing your Purchase Order and receiving an invoice. Once a purchase order has been placed and an invoice raised, modifications, replacements, or cancellations of any items will no longer be possible. Please don't worry; your Project Representative will review and confirm each item with you before raising an invoice.
            </p>
            <p>
              For feedback or grievances, please get in touch with us at <a href="mailto:hello.volumetric@gmail.com" className="text-[#7a8d75] font-medium underline">hello.volumetric@gmail.com</a>. We value the opportunity to improve our services by understanding your needs and concerns.
            </p>
          </div>

          {/* Section: Returns */}
          <div className="space-y-1 pt-2">
            <h3 className="font-bold text-gray-900 tracking-wide text-sm md:text-base">Returns</h3>
            <p>Since our services (interior/furniture) come with a 2-year warranty, Volumetric Designers does not offer returns.</p>
          </div>

          {/* Section: Price Revisions */}
          <div className="space-y-1 pt-2">
            <h3 className="font-bold text-gray-900 tracking-wide text-sm md:text-base">Price Revisions</h3>
            <p>In cases where specific project requirements change, the service cost may also change accordingly.</p>
          </div>

          {/* Section: Delays */}
          <div className="space-y-1 pt-2">
            <h3 className="font-bold text-gray-900 tracking-wide text-sm md:text-base">Delays</h3>
            <p>Delays in payment at any stage of the project may result in delays in project completion. Changes to project requirements may also lead to extended timelines.</p>
            <p>Volumetric Designers cannot assume liability for delays caused by payment or requirement changes.</p>
          </div>

          {/* Section: Payment Methods */}
          <div className="space-y-2 pt-2">
            <h3 className="font-bold text-gray-900 tracking-wide text-sm md:text-base">Payment Methods</h3>
            <p>Volumetric Designers accepts the following payment options for full interior design solutions:</p>
            <ul className="list-none pl-0 space-y-1 font-medium text-gray-800">
              {paymentMethods.map((method, idx) => (
                <li key={idx} className="flex items-center before:content-[''] before:w-1.5 before:h-1.5 before:bg-[#7a8d75] before:rounded-sm before:mr-2.5">
                  {method}
                </li>
              ))}
            </ul>
            <p className="pt-1 text-xs text-gray-500 italic">For payment details, please consult your Project Manager. Note that VAT will be applicable on all purchases.</p>
          </div>

          {/* Section: Invoices */}
          <div className="space-y-1 pt-2">
            <h3 className="font-bold text-gray-900 tracking-wide text-sm md:text-base">Invoices</h3>
            <p>An invoice is valid only for the period stated on it. If payment is not made within this period, the invoice will expire, and a new invoice must be generated.</p>
          </div>

          {/* Section: EMIs */}
          <div className="space-y-1 pt-2">
            <h3 className="font-bold text-gray-900 tracking-wide text-sm md:text-base">EMIs</h3>
            <p>Volumetric Designers is in the process of setting up an EMI system, which will be available soon.</p>
          </div>

          {/* Section: Online Transactions */}
          <div className="space-y-1 pt-2">
            <h3 className="font-bold text-gray-900 tracking-wide text-sm md:text-base">Online Transactions</h3>
            <p>Volumetric Designers is committed to safeguarding your financial privacy and ensuring secure transactions. Our online transaction system will be introduced shortly.</p>
            <p>
              For further information, please visit our website at <a href="https://volumetricltd.com/" target="_blank" rel="noopener noreferrer" className="text-[#7a8d75] font-medium underline">https://volumetricltd.com/</a>.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}