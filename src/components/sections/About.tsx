"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  const features = [
    {
      id: "user-engagement",
      icon: "https://ext.same-assets.com/1778345204/2454313171.svg",
      title: "User Engagement",
      description: "We enhance user engagement with your brand by gamifying ads and supporting them with surveys, creating a deeper connection with your audience."
    },
    {
      id: "conversion-rates",
      icon: "https://ext.same-assets.com/1778345204/3012961484.svg",
      title: "Conversion Rates",
      description: "Enriched with games and rewards, our advertising experiences increase user loyalty and boost your conversion rates."
    },
    {
      id: "roi-increase",
      icon: "https://ext.same-assets.com/1778345204/3829119252.png",
      title: "ROI Increase",
      description: "With targeted campaigns and data-driven analytics, we help you improve your return on investment and create more effective advertising strategies."
    },
    {
      id: "ltv-growth",
      icon: "https://ext.same-assets.com/1778345204/902532569.png",
      title: "LTV Growth",
      description: "Through our loyalty programs, we maximize customer lifetime value (LTV), enabling you to build more profitable, long-term customer relationships."
    }
  ];

  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-white">
      <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 xl:gap-24">
          {/* Left Content */}
          <div className="w-full lg:w-7/12">
            {/* Section Header */}
            <div className="mb-6 sm:mb-8 md:mb-10">
              <span className="text-adlambs-purple uppercase tracking-wide text-xs sm:text-sm font-normal">About ADLAMBS</span>
              <h2 className="w-full text-2xl sm:text-3xl md:text-4xl font-semibold mt-2 sm:mt-3 mb-3 sm:mb-4 md:mb-6">
                We Are Increasing Advertising Success With{" "}
                <span className="text-adlambs-purple">Technology</span>
              </h2>
              <p className="text-gray-600 w-full text-sm sm:text-base md:text-lg">
                Integrating seamlessly with existing systems, AdLambs allows users to play
                games and complete surveys while watching ads, enhancing engagement and
                strengthening loyalty programs with unique solutions.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-5 sm:space-y-6 md:space-y-8">
              {features.map((feature) => (
                <div key={feature.id} className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-adlambs-purple flex items-center justify-center">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={30}
                        height={30}
                        className="object-contain w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                      />
                    </div>
                  </div>
                  <div className="sm:pt-2">
                    <h3 className="text-base sm:text-lg md:text-xl font-normal mb-1 sm:mb-2">{feature.title}</h3>
                    <p className="text-gray-600 w-full sm:w-11/12 md:w-9/12 lg:w-7/12 text-xs sm:text-sm md:text-base">{feature.description}</p>
                  </div>
                </div>
              ))}
              <div className="w-full h-[1px] bg-gray-200 my-6 sm:my-8"></div>
            </div>

            {/* Explore More Button */}
            <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12">
              <button
                className="bg-adlambs-purple text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 hover:bg-opacity-90 inline-flex items-center gap-2 text-sm sm:text-base md:text-lg font-semibold"
              >
                Explore More
                <svg
                  width="12"
                  height="12"
                  className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Video */}
          <div className="w-full lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0 mb-10 lg:mb-20">
            <div className="w-full h-auto overflow-hidden rounded-lg shadow-md">
              <video
                src="https://adlambs.com/wp-content/uploads/2024/11/adlambshowtowork.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
