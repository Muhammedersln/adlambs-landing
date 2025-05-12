"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export default function Integration() {
  const [expandedSection, setExpandedSection] = useState<string | null>("integration");

  const integrationSteps = [
    {
      id: "integration",
      title: "Integration Process",
      content: "AdLambs integrates quickly and seamlessly into your existing systems."
    },
    {
      id: "content",
      title: "Content Processing",
      content: "Simply provide your ad videos to AdLambs, and we'll process them, integrating games and surveys to enhance engagement."
    },
    {
      id: "loyalty",
      title: "Loyalty Program Management",
      content: "AdLambs enables you to offer exclusive discount codes and rewards to your users."
    },
    {
      id: "app",
      title: "App And E-Commerce Integration",
      content: "AdLambs incorporates all processes into our software and connects it to your system, allowing you to deliver a more effective experience to your users."
    }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-white">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 items-start">
          {/* Left image */}
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/3275968407/3156422166.png"
                alt="Team meeting"
                width={600}
                height={600}
                className="w-full h-auto rounded-2xl sm:rounded-3xl md:rounded-[40px] lg:rounded-[50px] overflow-hidden"
              />
            </div>
          </div>

          {/* Right content */}
          <div className="w-full lg:w-1/2">
            <div className="text-sm sm:text-base text-adlambs-purple font-medium">
              <p>HOW ADLAMBS WORKS</p>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal mb-4 sm:mb-6 md:mb-8">
              Quick And Easy Integration With AdLambs
            </h2>

            <div className="space-y-3 sm:space-y-4">
              {integrationSteps.map((step) => (
                <Card key={step.id} className={`overflow-hidden py-1 sm:py-2 border-0 rounded-md ${expandedSection === step.id ? "" : "bg-white text-adlambs-purple border"}`}>
                  <button
                    className={`w-full px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 text-left flex items-center justify-between ${expandedSection === step.id ? "" : "bg-white text-black"
                      }`}
                    onClick={() => setExpandedSection(expandedSection === step.id ? null : step.id)}
                    aria-expanded={expandedSection === step.id}
                    aria-controls={`${step.id}-content`}
                    id={`${step.id}-header`}
                  >
                    <span className={`font-semibold text-base sm:text-lg md:text-xl ${expandedSection === step.id ? "text-adlambs-purple" : ""}`}>{step.title}</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`-rotate-90 transition-transform duration-300 ${expandedSection === step.id ? "rotate-0" : ""} w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6`}
                      aria-hidden="true"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <section
                    id={`${step.id}-content`}
                    aria-labelledby={`${step.id}-header`}
                    className={`px-4 sm:px-5 md:px-6 bg-white transition-all duration-500 ease-in-out ${expandedSection === step.id
                      ? "max-h-[200px] opacity-100 py-2 sm:py-3 md:py-4"
                      : "max-h-0 opacity-0 py-0"
                      }`}
                  >
                    <p className="text-gray-600 text-sm sm:text-base">{step.content}</p>
                  </section>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
