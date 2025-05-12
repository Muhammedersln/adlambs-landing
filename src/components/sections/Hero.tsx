"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);

  const tickerItems = [
    { id: "item-1", text: "Adlambs" },
    { id: "item-2", text: "Where Ads Meet Rewards" },
    { id: "item-3", text: "Adlambs" },
    { id: "item-4", text: "Where Ads Meet Rewards" },
    { id: "item-5", text: "Adlambs" },
    { id: "item-6", text: "Where Ads Meet Rewards" },
    { id: "item-7", text: "Adlambs" },
    { id: "item-8", text: "Where Ads Meet Rewards" },
    { id: "item-9", text: "Adlambs" },
    { id: "item-10", text: "Where Ads Meet Rewards" },
  ];

  return (
    <>
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 20s linear infinite;
        }
        .hero-content {
          background-image: url('/images/hero-bg.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          min-height: 85vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        @media (max-width: 640px) {
          .hero-content {
            min-height: auto;
            padding-top: 3rem;
            padding-bottom: 3rem;
          }
        }
      `}</style>

      <section>
        <div className="hero-content py-10 sm:py-16 md:py-20 lg:py-28 xl:py-32">
          <div className="w-full max-w-[1300px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-8 flex items-center">
              <Image
                src="https://ext.same-assets.com/1778345204/885458815.png"
                alt="Adlambs Logo"
                width={32}
                height={32}
                className="mr-2 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-10 lg:h-10"
              />
              <span className="animate-fade-in-up box-border text-[rgb(64,6,167)] block font-['Kumbh_Sans',sans-serif] text-sm sm:text-base md:text-[18px] font-medium h-auto leading-normal md:leading-[26.1px] m-0 p-0 relative text-start [text-size-adjust:100%] uppercase transition-all duration-[400ms] ease-in-out visible [unicode-bidi:isolate]">
                ADLAMBS</span>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8">
              {/* Left side - Content */}
              <div className="w-full flex-row space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-8">
                <h1 className="text-black font-['Kumbh_Sans',sans-serif] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] font-medium h-auto leading-tight md:leading-tight lg:leading-[73.92px] mb-2 sm:mb-3 md:mb-4 lg:mb-[30px] m-0 p-0 text-start">
                  Where ads meet <span className="block">rewards</span>
                </h1>
                <p className="flex text-sm sm:text-base md:text-lg text-gray-800 font-normal w-full max-w-2xl">
                  AdLambs is an innovative platform that gamifies advertisements for e-commerce
                  businesses, offering users a next-generation experience with discounts and rewards.
                </p>
                <div className="pt-3 sm:pt-4 flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-4">
                  <Link
                    href="https://calendly.com/resatgokaycelik"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <button className="w-full sm:w-auto bg-adlambs-purple text-white hover:bg-adlambs-purple/90 px-4 sm:px-5 md:px-6 lg:px-8 py-2.5 sm:py-3 md:py-3.5 flex items-center justify-center sm:justify-start gap-2 font-medium text-xs sm:text-sm md:text-base">
                      Make An Appointment
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
                  </Link>

                  <button
                    aria-label="Play Video"
                    className="bg-white p-2 md:p-3 rounded-full shadow-md flex items-center justify-center"
                    type="button"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-adlambs-purple w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Right side - Illustration */}
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-6 sm:mt-8 lg:mt-0">
                <Image
                  src="https://ext.same-assets.com/1778345204/926121638.png"
                  alt="AdLambs Mascot"
                  width={500}
                  height={446}
                  priority
                  className="max-w-full h-auto w-[230px] sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[500px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Moving ticker */}
        <div className="bg-adlambs-purple text-white py-3 sm:py-4 md:py-5 lg:py-6 justify-end whitespace-nowrap overflow-hidden">
          <div className="animate-marquee">
            {tickerItems.map((item) => (
              <span key={item.id} className="inline-flex items-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[52px] font-bold mx-2">
                {item.text}
                <Image
                  src="https://ext.same-assets.com/1778345204/320380762.svg"
                  width={44}
                  height={44}
                  alt="star"
                  className="mx-2 w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 lg:w-9 lg:h-9 xl:w-11 xl:h-11"
                />
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
