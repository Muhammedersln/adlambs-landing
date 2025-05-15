"use client";

import Image from "next/image";

export default function Features() {
  const features = [
    {
      id: 1,
      number: 1,
      icon: "https://ext.same-assets.com/1778345204/3630608381.svg",
      title: "Kullanıcı Etkileşimini Artırma",
      description:
        "AdLambs, kullanıcıların reklam videolarınızı izlerken oyun oynamalarını ve ödül kazanmalarını sağlayarak, markanızla daha derin bir etkileşime girmelerine ve içeriğinizle daha fazla zaman geçirmelerine olanak tanır.",
      position: "top"
    },
    {
      id: 2,
      number: 2,
      icon: "https://ext.same-assets.com/1778345204/2259306638.svg",
      title: "Sadakat Programlarıyla Değer Yaratma",
      description:
        "AdLambs entegre sadakat programlarıyla, kullanıcılara özel indirimler ve ödüller sunuyoruz. Bu yaklaşım, reklam deneyimini keyifli hale getirmekle kalmaz, aynı zamanda markanıza olan bağlılıklarını güçlendirir.",
      position: "bottom"
    },
    {
      id: 3,
      number: 3,
      icon: "https://ext.same-assets.com/1778345204/2848000411.svg",
      title: "Pazarlama ve E-ticaret Stratejilerinizi Geliştirme",
      description: "AdLambs, markanızın e-ticaret stratejisini optimize eder. Kullanıcılar uygulamanızı indirir, reklamları izlerken oyunlarla etkileşime girer ve iyi hedeflenmiş kampanyalarla daha fazla harcama yapmaya teşvik edilir. Bu süreç boyunca toplanan verileri analiz ederek kullanıcı davranışlarını anlar ve pazarlama stratejilerinizi geliştiririz.",
      position: "top"
    },
    {
      id: 4,
      number: 4,
      icon: "https://ext.same-assets.com/1778345204/3463449967.svg",
      title: "Hızlı Entegrasyon ve Destek",
      description:
        "AdLambs, sisteminizle hızlı bir şekilde entegre olarak kısa sürede dönüşüm oranlarınızı artırmanıza yardımcı olur. Esnek yapımız, mevcut altyapınıza kolayca uyum sağlayarak, pazarlama süreçlerinizi kolaylaştıran ve kullanıcıların markanızla etkileşimini artıran özel çözümler sunar.",
      position: "bottom"
    },
  ];

  return (
    <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-24 bg-adlambs-lightgray">
      <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <h2 className="animate-slide-up text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-center mb-6 sm:mb-8 md:mb-10 lg:mb-16 px-2 sm:px-4 md:px-8 lg:px-12">
          Yenilikçi Reklam Çözümleriyle Kullanıcı Etkileşimini ve Marka Sadakatini En Üst Düzeye Çıkarma
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div key={feature.id} className={`animate-scale-up animate-delay-${index * 2}00 flex flex-col bg-white/50 rounded-lg p-4 sm:p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300`}>
              <div className={`relative flex items-center justify-center order-1 ${feature.position === "bottom" ? "sm:order-2 sm:pt-6" : "pb-4 sm:pb-6"}`}>
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow bg-white">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={40}
                    height={40}
                    className="object-contain w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                  />
                  <div className="hidden sm:flex absolute -top-2 -left-2 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-adlambs-purple items-center justify-center text-white text-xs sm:text-sm md:text-base font-medium border-2 border-white z-10">
                    {feature.number}
                  </div>
                </div>
              </div>

              <div className={`order-2 ${feature.position === "bottom" ? "sm:order-1" : "sm:order-2"}`}>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-center relative">
                  <span className="sm:hidden inline-flex items-center justify-center bg-adlambs-purple text-white w-6 h-6 rounded-full text-xs font-medium mr-1.5">
                    {feature.number}
                  </span>
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base text-center">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
