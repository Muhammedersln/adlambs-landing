"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set elements as visible after component mounts for animations
    // Slight delay for better impact
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    
    return () => clearTimeout(timer);
  }, []);

  const tickerItems = [
    { id: "item-1", text: "Adlambs" },
    { id: "item-2", text: "Reklamlar Ödüllerle Buluşuyor" },
    { id: "item-3", text: "Adlambs" },
    { id: "item-4", text: "Reklamlar Ödüllerle Buluşuyor" },
    { id: "item-5", text: "Adlambs" },
    { id: "item-6", text: "Reklamlar Ödüllerle Buluşuyor" },
    { id: "item-7", text: "Adlambs" },
    { id: "item-8", text: "Reklamlar Ödüllerle Buluşuyor" },
    { id: "item-9", text: "Adlambs" },
    { id: "item-10", text: "Reklamlar Ödüllerle Buluşuyor" },
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
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          0% {
            transform: translateY(50px);
            opacity: 0;
          }
          70% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        /* Initial state - completely invisible */
        .animate-fade-in,
        .animate-slide-up {
          opacity: 0;
          visibility: hidden;
        }
        
        /* Animation start state */
        .animate-fade-in.is-visible {
          visibility: visible;
          animation: fadeIn 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        .animate-slide-up {
          transform: translateY(50px);
        }
        
        .animate-slide-up.is-visible {
          visibility: visible;
          animation: slideUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        .animate-delay-100 {
          animation-delay: 100ms;
        }
        .animate-delay-300 {
          animation-delay: 300ms;
        }
        .animate-delay-500 {
          animation-delay: 500ms;
        }
        .animate-delay-700 {
          animation-delay: 700ms;
        }
        .animate-delay-900 {
          animation-delay: 900ms;
        }
        .animate-delay-1100 {
          animation-delay: 1100ms;
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
          position: relative;
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
          {/* Background shape positioned in top left corner */}
          <div className="absolute top-0 left-0 w-[300px] sm:w-[400px] md:w-[450px] lg:w-[500px] z-0">
            <Image
              src="/images/line-shape-1.png"
              alt="Background Lines"
              width={500}
              height={400}
              className="w-full h-auto"
            />
          </div>
          
          <div className="w-full max-w-[1300px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className={`mb-4 sm:mb-5 md:mb-6 lg:mb-8 flex items-center animate-slide-up ${isVisible ? 'is-visible' : ''} relative z-10`}>
              <div className="flex items-center">
                <div className="flex items-center mr-2">
                  <svg width="40" height="16" viewBox="0 0 40 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="25.6667" height="15" rx="7.5" stroke="#384BFF"></rect>
                    <rect x="13.3334" width="26.6667" height="16" rx="8" fill="#384BFF"></rect>
                  </svg>
                </div>
                <span className="text-[rgb(64,6,167)] text-sm sm:text-base md:text-lg font-medium uppercase">
                  ADLAMBS
                </span>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8 relative z-10">
              {/* Left side - Content */}
              <div className="w-full flex-row space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-8">
                <h1 className={`text-black font-['Kumbh_Sans',sans-serif] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] font-medium h-auto leading-tight md:leading-tight lg:leading-[73.92px] mb-2 sm:mb-3 md:mb-4 lg:mb-[30px] m-0 p-0 text-center sm:text-start`}>
                  <span className={`block animate-slide-up animate-delay-300 ${isVisible ? 'is-visible' : ''}`}>Reklamlar</span> 
                  <span className={`block animate-slide-up animate-delay-500 ${isVisible ? 'is-visible' : ''}`}>ödüllerle buluşuyor</span>
                </h1>
                <p className={`flex text-sm sm:text-base md:text-lg text-gray-800 font-normal w-full max-w-2xl text-center sm:text-start animate-slide-up animate-delay-700 ${isVisible ? 'is-visible' : ''}`}>
                  AdLambs, e-ticaret işletmeleri için reklamları oyunlaştıran, kullanıcılara indirimler ve ödüllerle yeni nesil bir deneyim sunan yenilikçi bir platformdur.
                </p>
                <div className={`pt-3 sm:pt-4 flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-start gap-3 sm:gap-4 animate-slide-up animate-delay-900 ${isVisible ? 'is-visible' : ''}`}>
                  <Link
                    href="https://calendly.com/resatgokaycelik"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <button className="w-full sm:w-auto bg-adlambs-purple text-white hover:bg-adlambs-purple/90 px-4 sm:px-5 md:px-6 lg:px-8 py-2.5 sm:py-3 md:py-3.5 flex items-center justify-center sm:justify-start gap-2 font-medium text-xs sm:text-sm md:text-base">
                      Randevu Oluştur
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
                </div>
              </div>

              {/* Right side - Illustration */}
              <div className={`w-full lg:w-1/2 flex justify-center lg:justify-end mt-6 sm:mt-8 lg:mt-0 animate-slide-up animate-delay-1100 ${isVisible ? 'is-visible' : ''}`}>
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
        <div className={`bg-adlambs-purple text-white py-3 sm:py-4 md:py-5 lg:py-6 justify-end whitespace-nowrap overflow-hidden animate-fade-in ${isVisible ? 'is-visible' : ''}`}>
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
