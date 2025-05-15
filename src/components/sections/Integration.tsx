"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";

export default function Integration() {
  const [expandedSection, setExpandedSection] = useState<string | null>("integration");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animasyon için görünürlüğü 300ms gecikme ile açıyoruz
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

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
      <style jsx>{`
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
        
        .animate-slide-up {
          opacity: 0;
          transform: translateY(50px);
          visibility: hidden;
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
        
        .card-transition {
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .card-content {
          max-height: 0;
          opacity: 0;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          overflow: hidden;
        }
        
        .card-content.expanded {
          max-height: 300px;
          opacity: 1;
          margin-bottom: 1rem;
        }
        
        .card-header {
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        
        .card-header:hover {
          background-color: rgba(91, 33, 182, 0.05);
        }
        
        .card-header.active {
          color: rgb(91, 33, 182);
          font-weight: 600;
        }
        
        .rotate-icon {
          transition: transform 0.3s ease;
        }
        
        .rotate-icon.active {
          transform: rotate(90deg);
        }
      `}</style>
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 items-start">
          {/* Left image */}
          <div className={`w-full lg:w-1/2 mb-6 lg:mb-0 animate-slide-up ${isVisible ? 'is-visible' : ''}`}>
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
          <div className="w-full lg:w-1/2">
            <div className={`text-sm sm:text-base text-adlambs-purple font-medium animate-slide-up animate-delay-300 ${isVisible ? 'is-visible' : ''}`}>
              <p>ADLAMBS NASIL ÇALIŞIR</p>
            </div>
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-normal mb-4 sm:mb-6 md:mb-8 animate-slide-up animate-delay-500 ${isVisible ? 'is-visible' : ''}`}>
              AdLambs ile Hızlı ve Kolay Entegrasyon
            </h2>

            <div className="space-y-3 sm:space-y-4">
              {integrationSteps.map((step, index) => (
                <div 
                  key={step.id}
                  className={`rounded-lg border border-gray-200 overflow-hidden animate-slide-up ${isVisible ? 'is-visible' : ''}`}
                  style={{ animationDelay: `${700 + index * 200}ms` }}
                >
                  <button
                    className={`card-header w-full px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 text-left flex items-center justify-between ${expandedSection === step.id ? 'active' : ''}`}
                    onClick={() => setExpandedSection(expandedSection === step.id ? null : step.id)}
                    aria-expanded={expandedSection === step.id}
                    aria-controls={`${step.id}-content`}
                    id={`${step.id}-header`}
                  >
                    <span className={`text-base sm:text-lg md:text-xl`}>{step.title}</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`rotate-icon w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ${expandedSection === step.id ? 'active' : ''}`}
                      aria-hidden="true"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>

                  <div
                    id={`${step.id}-content`}
                    aria-labelledby={`${step.id}-header`}
                    className={`card-content px-4 sm:px-5 md:px-6 ${expandedSection === step.id ? 'expanded' : ''}`}
                  >
                    <p className="text-gray-600 text-sm sm:text-base pb-2">{step.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
