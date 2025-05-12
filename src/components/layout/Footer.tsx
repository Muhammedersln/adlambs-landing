"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-adlambs-purple text-white py-4 sm:py-5 md:py-6">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
          <p className="text-xs sm:text-sm order-2 sm:order-1 text-center sm:text-left">
            Copyright © 2025 adlambs All Rights Reserved.
          </p>

          <Link
            href="#"
            className="scroll-to-top w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-white/20 flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 sm:w-5 sm:h-5"
            >
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}
