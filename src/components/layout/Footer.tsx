"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-adlambs-purple text-white py-4 sm:py-5 md:py-6 relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-[23px]">
        <Link
          href="#"
          className="w-[60px] h-[60px] rounded-full bg-adlambs-purple flex items-center justify-center border-[3px] border-white"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          aria-label="Sayfanın başına git"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </Link>
      </div>
      
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="flex justify-start">
          <p className="text-xs sm:text-sm">
            Copyright © 2025 adlambs All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
