"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export default function Integration() {
  const [expandedSection, setExpandedSection] = useState<string | null>("integration");

  const integrationSteps = [
    {
      id: "integration",
      title: "Entegrasyon Süreci",
      content: "AdLambs, mevcut sistemlerinize hızlı ve sorunsuz bir şekilde entegre olur."
    },
    {
      id: "content",
      title: "İçerik İşleme",
      content: "Reklam videolarınızı AdLambs'e sağlamanız yeterli, biz onları işleyerek etkileşimi artırmak için oyunlar ve anketlerle entegre edeceğiz."
    },
    {
      id: "loyalty",
      title: "Sadakat Programı Yönetimi",
      content: "AdLambs, kullanıcılarınıza özel indirim kodları ve ödüller sunmanızı sağlar."
    },
    {
      id: "app",
      title: "Uygulama ve E-Ticaret Entegrasyonu",
      content: "AdLambs tüm süreçleri yazılımımıza dahil eder ve sisteminize bağlayarak kullanıcılarınıza daha etkili bir deneyim sunmanızı sağlar."
    }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-white">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 items-start">
          {/* Left image */}
          <div className="animate-slide-in w-full lg:w-1/2 mb-6 lg:mb-0">
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/3275968407/3156422166.png"
                alt="Takım toplantısı"
                width={600}
                height={600}
                className="w-full h-auto rounded-2xl sm:rounded-3xl md:rounded-[40px] lg:rounded-[50px] overflow-hidden"
              />
            </div>
          </div>

          {/* Right content */}
          <div className="animate-slide-up animate-delay-300 w-full lg:w-1/2">
            <div className="text-sm sm:text-base text-adlambs-purple font-medium">
              <p>ADLAMBS NASIL ÇALIŞIR</p>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal mb-4 sm:mb-6 md:mb-8">
              AdLambs ile Hızlı ve Kolay Entegrasyon
            </h2>

            <div className="space-y-3 sm:space-y-4">
              {integrationSteps.map((step, index) => (
                <Card key={step.id} className={`animate-fade-in animate-delay-${(index + 2) * 2}00 overflow-hidden py-1 sm:py-2 border-0 rounded-md ${expandedSection === step.id ? "" : "bg-white text-adlambs-purple border"}`}>
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
                      ? "max-h-[300px] sm:max-h-[200px] opacity-100 py-2 sm:py-3 md:py-4"
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
