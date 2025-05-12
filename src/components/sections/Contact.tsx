"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally submit the form data to a server
    console.log("Form submitted:", formState);
    alert("Form submitted! (This is a demo)");
    // Reset form
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-adlambs-lightgray">
      <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Left Contact Information */}
          <div className="w-full lg:w-2/5 bg-adlambs-purple text-white p-5 sm:p-8 md:p-10 lg:p-16 xl:p-20 rounded-lg">
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center border justify-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-xs sm:text-sm">Call Us 7/24</p>
                  <p className="font-semibold text-base sm:text-lg md:text-xl">+90 536 267 22 22</p>
                </div>
              </div>

              <div className="w-full h-[1px] bg-white/20"></div>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center border justify-center">
                  <Image
                    src="https://ext.same-assets.com/1778345204/548389142.svg"
                    alt="Email"
                    width={18}
                    height={18}
                    className="invert w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                  />
                </div>
                <div>
                  <p className="text-white text-xs sm:text-sm">Make a Quote</p>
                  <p className="font-semibold text-base sm:text-lg md:text-xl">info@adlambs.com</p>
                </div>
              </div>

              <div className="w-full h-[1px] bg-white/20"></div>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center border justify-center">
                  <Image
                    src="https://ext.same-assets.com/1778345204/260646423.svg"
                    alt="Location"
                    width={16}
                    height={16}
                    className="invert w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                  />
                </div>
                <div>
                  <p className="text-white text-xs sm:text-sm">Location</p>
                  <p className="font-semibold text-base sm:text-lg md:text-xl">Hasanpasa, Hamiyet Sk. No:17/A Kadıköy/İstanbul</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="w-full lg:w-3/5 mt-6 lg:mt-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8">Ready To Get Started?</h2>
            <p className="text-gray-600 mb-4 sm:mb-6 md:mb-8 w-full text-sm sm:text-base">
              Reach out to learn more about how AdLambs can transform your user
              engagement and boost your brand's success.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Your Name*
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full h-12 sm:h-14 md:h-16 p-2 sm:p-3 border border-gray-300 bg-transparent focus:outline-none focus:ring-0"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Your Email*
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full h-12 sm:h-14 md:h-16 p-2 sm:p-3 border border-gray-300 bg-transparent focus:outline-none focus:ring-0"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  Write Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Write Message"
                  required
                  rows={4}
                  className="w-full p-2 sm:p-3 border resize-none border-gray-300 bg-transparent focus:outline-none focus:ring-0 rounded-md"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-adlambs-purple hover:bg-opacity-90 text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 h-10 sm:h-12 md:h-14 flex items-center justify-center sm:justify-start gap-2 font-semibold text-sm sm:text-base rounded-md"
                >
                  Send Message
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"
                  >
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
