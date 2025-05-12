"use client";

import Image from "next/image";

export default function Features() {
  const features = [
    {
      id: 1,
      number: 1,
      icon: "https://ext.same-assets.com/1778345204/3630608381.svg",
      title: "Enhancing User Engagement",
      description:
        "AdLambs enables users to play games and earn rewards while watching your ad videos, allowing them to engage more deeply with your brand and spend more time interacting with your content.",
      position: "top"
    },
    {
      id: 2,
      number: 2,
      icon: "https://ext.same-assets.com/1778345204/2259306638.svg",
      title: "Creating Value with Loyalty Programs",
      description:
        "With AdLambs integrated loyalty programs, we offer users exclusive discounts and rewards. This approach not only makes the advertising experience enjoyable but also strengthens their loyalty to your brand.",
      position: "bottom"
    },
    {
      id: 3,
      number: 3,
      icon: "https://ext.same-assets.com/1778345204/2848000411.svg",
      title: "Improving Your Marketing and E-commerce Strategies",
      description: "AdLambs optimizes your brand's e-commerce strategy. Users download your app, interact with engaging games while watching ads, and are encouraged to spend more through well-targeted campaigns. We analyze data collected throughout this process to understand user behavior and enhance your marketing strategies.",
      position: "top"
    },
    {
      id: 4,
      number: 4,
      icon: "https://ext.same-assets.com/1778345204/3463449967.svg",
      title: "Quick Integration and Support",
      description:
        "AdLambs integrates with your system quickly, helping you boost conversion rates in a short time. Our flexible structure easily adapts to your existing infrastructure, providing tailored solutions to streamline your marketing processes and increase user engagement with your brand.",
      position: "bottom"
    },
  ];

  return (
    <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-24 bg-adlambs-lightgray">
      <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-center mb-6 sm:mb-8 md:mb-10 lg:mb-16 px-2 sm:px-4 md:px-8 lg:px-12">
          Maximizing User Engagement And Brand Loyalty Through Innovative Ad Solutions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto">
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col bg-white/50 rounded-lg p-4 sm:p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className={`relative flex items-center justify-center ${feature.position === "bottom" ? "order-2 pt-4 sm:pt-6" : "order-1 pb-4 sm:pb-6"}`}>
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow bg-white">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={40}
                    height={40}
                    className="object-contain w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                  />
                  <div className="absolute -top-2 -left-2 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-adlambs-purple flex items-center justify-center text-white text-xs sm:text-sm md:text-base font-medium border-2 border-white z-10">
                    {feature.number}
                  </div>
                </div>
              </div>

              <div className={`${feature.position === "bottom" ? "order-1" : "order-2"}`}>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base text-center">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
