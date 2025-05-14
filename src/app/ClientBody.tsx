"use client";

import { useEffect } from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";
    
    // Animasyonlar için IntersectionObserver kurulumu
    const animatedElements = document.querySelectorAll(
      '.animate-fade-in, .animate-slide-up, .animate-slide-in, .animate-scale-up'
    );
    
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Elementi göründüğünde animasyon sınıfını aktif et
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { 
        threshold: 0.1,  // Elemanın %10'u görünür olduğunda tetikle
        rootMargin: '0px 0px -50px 0px'  // Görünüm alanının altını 50px daralt
      });
      
      animatedElements.forEach((element) => {
        // Her elementi observe etmeden önce visible sınıfını kaldır
        element.classList.remove('is-visible');
        observer.observe(element);
      });
    } else {
      // IntersectionObserver desteklenmiyor, tüm animasyonları doğrudan aktif et
      animatedElements.forEach(el => el.classList.add('is-visible'));
    }
  }, []);

  return <div className="antialiased">{children}</div>;
}
