import { useEffect, useRef } from "react";
import { trackScrollDepth, trackSectionView } from "@/hooks/useGA4Tracking";

const GA4ScrollTracker = () => {
  const scrollMilestones = useRef<Set<number>>(new Set());
  const viewedSections = useRef<Set<string>>(new Set());

  useEffect(() => {
    // Track scroll depth
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((window.scrollY / scrollHeight) * 100);

      const milestones = [25, 50, 75, 100];
      milestones.forEach((milestone) => {
        if (scrollPercent >= milestone && !scrollMilestones.current.has(milestone)) {
          scrollMilestones.current.add(milestone);
          trackScrollDepth(milestone);
        }
      });
    };

    // Track section visibility
    const sections = [
      { id: "hero", name: "hero" },
      { id: "benefits", name: "benefits" },
      { id: "for-who", name: "for_who" },
      { id: "meal-options", name: "meal_options" },
      { id: "bonus", name: "bonus" },
      { id: "testimonials", name: "testimonials" },
      { id: "super-bonus", name: "super_bonus" },
      { id: "pricing", name: "pricing" },
    ];

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const section = sections.find((s) => s.id === sectionId);
          if (section && !viewedSections.current.has(section.name)) {
            viewedSections.current.add(section.name);
            trackSectionView(section.name);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.3,
    });

    // Observe all sections
    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return null;
};

export default GA4ScrollTracker;
