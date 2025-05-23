import { useEffect } from "react";

export default function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll(".skill-bar");
            skillBars.forEach((bar) => {
              const width = (bar as HTMLElement).dataset.width || "0%";
              (bar as HTMLElement).style.width = width;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const skillCards = document.querySelectorAll(".skill-card");
    skillCards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
}
