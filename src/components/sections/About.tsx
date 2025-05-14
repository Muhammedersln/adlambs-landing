"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set elements as visible after component mounts for animations
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 300); // Slight delay for better user experience
    return () => clearTimeout(timeout);
  }, []);

  const features = [
    {
      id: "user-engagement",
      icon: "https://ext.same-assets.com/1778345204/2454313171.svg",
      title: "Kullanıcı Etkileşimi",
      description: "Reklamları oyunlaştırarak ve anketlerle destekleyerek markanızla kullanıcı etkileşimini artırıyor, izleyicilerinizle daha derin bir bağlantı kuruyoruz."
    },
    {
      id: "conversion-rates",
      icon: "https://ext.same-assets.com/1778345204/3012961484.svg",
      title: "Dönüşüm Oranları",
      description: "Oyunlar ve ödüllerle zenginleştirilmiş reklam deneyimlerimiz, kullanıcı sadakatini artırır ve dönüşüm oranlarınızı yükseltir."
    },
    {
      id: "roi-increase",
      icon: "https://ext.same-assets.com/1778345204/3829119252.png",
      title: "ROI Artışı",
      description: "Hedefli kampanyalar ve veri odaklı analizlerle, yatırım getirinizi iyileştirmenize ve daha etkili reklam stratejileri oluşturmanıza yardımcı oluyoruz."
    },
    {
      id: "ltv-growth",
      icon: "https://ext.same-assets.com/1778345204/902532569.png",
      title: "LTV Büyümesi",
      description: "Sadakat programlarımız sayesinde müşteri yaşam boyu değerini (LTV) maksimize ederek daha karlı, uzun vadeli müşteri ilişkileri kurmanızı sağlıyoruz."
    }
  ];

  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-white">
      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          opacity: 0;
          transform: translateY(30px);
        }
        .animate-slide-up.is-visible {
          animation: slideUp 1s ease-out forwards;
        }
        .animate-delay-100 {
          animation-delay: 100ms;
        }
        .animate-delay-200 {
          animation-delay: 200ms;
        }
        .animate-delay-300 {
          animation-delay: 300ms;
        }
        .animate-delay-400 {
          animation-delay: 400ms;
        }
        .animate-delay-500 {
          animation-delay: 500ms;
        }
        .animate-delay-600 {
          animation-delay: 600ms;
        }
        .animate-delay-700 {
          animation-delay: 700ms;
        }
        .animate-delay-800 {
          animation-delay: 800ms;
        }
        .animate-delay-900 {
          animation-delay: 900ms;
        }
        .animate-delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
      <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 xl:gap-24">
          {/* Left Content */}
          <div className="w-full lg:w-7/12">
            {/* Section Header */}
            <div className="mb-6 sm:mb-8 md:mb-10">
              <span className={`text-adlambs-purple uppercase tracking-wide text-xs sm:text-sm font-normal animate-slide-up ${isVisible ? 'is-visible' : ''}`}>
                ADLAMBS HAKKINDA
              </span>
              <h2 className={`w-full text-2xl sm:text-3xl md:text-4xl font-semibold mt-2 sm:mt-3 mb-3 sm:mb-4 md:mb-6 animate-slide-up animate-delay-200 ${isVisible ? 'is-visible' : ''}`}>
                Reklam Başarısını{" "}
                <span className="text-adlambs-purple">Teknoloji</span> ile Artırıyoruz
              </h2>
              <p className={`text-gray-600 w-full text-sm sm:text-base md:text-lg animate-slide-up animate-delay-400 ${isVisible ? 'is-visible' : ''}`}>
                Mevcut sistemlerle sorunsuz bir şekilde bütünleşen AdLambs, kullanıcıların reklam izlerken oyun oynamalarını ve anketleri tamamlamalarını sağlayarak etkileşimi artırır ve benzersiz çözümlerle sadakat programlarını güçlendirir.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-5 sm:space-y-6 md:space-y-8">
              {features.map((feature, index) => (
                <div 
                  key={feature.id} 
                  className={`flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 animate-slide-up ${isVisible ? 'is-visible' : ''}`}
                  style={{ animationDelay: `${600 + index * 200}ms` }}
                >
                  <div className="flex-shrink-0 flex justify-center sm:justify-start">
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
                  <div className="sm:pt-2 text-center sm:text-left">
                    <h3 className="text-base sm:text-lg md:text-xl font-normal mb-1 sm:mb-2">{feature.title}</h3>
                    <p className="text-gray-600 w-full sm:w-11/12 md:w-9/12 lg:w-11/12 text-xs sm:text-sm md:text-base">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Video */}
          <div className={`w-full lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0 mb-10 lg:mb-20 animate-slide-up animate-delay-500 ${isVisible ? 'is-visible' : ''}`}>
            <div className="w-full h-auto overflow-hidden">
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
