"use client";

import { useEffect, useRef, useState } from "react";

const snapItems = [
  { id: "home-hero", label: "Hero" },
  { id: "home-collected", label: "收藏" },
  { id: "home-phone", label: "手机" },
  { id: "home-scenes", label: "场景" },
  { id: "home-creators", label: "创作者" },
];

type HomeSnapContainerProps = {
  children: React.ReactNode;
};

export function HomeSnapContainer({ children }: HomeSnapContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const mediaQuery = window.matchMedia("(min-width: 768px)");

    if (!mediaQuery.matches) {
      return;
    }

    const sections = Array.from(
      container.querySelectorAll<HTMLElement>("[data-snap-section]"),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visibleEntry) {
          return;
        }

        const nextIndex = sections.indexOf(visibleEntry.target as HTMLElement);

        if (nextIndex >= 0) {
          setActiveIndex(nextIndex);
        }
      },
      {
        root: container,
        threshold: [0.45, 0.6, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  function scrollToSection(index: number) {
    const container = containerRef.current;
    const target = container?.querySelectorAll<HTMLElement>(
      "[data-snap-section]",
    )[index];

    target?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="w-full overflow-x-hidden py-6 md:h-[calc(100vh-5rem)] md:snap-y md:snap-mandatory md:overflow-y-auto md:scroll-smooth md:py-0"
      >
        {children}
      </div>

      <nav
        className="fixed right-5 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-3 rounded-full border border-white/80 bg-white/70 p-2 shadow-[0_18px_44px_rgba(15,23,42,0.12)] backdrop-blur md:flex"
        aria-label="首页屏幕导航"
      >
        {snapItems.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <button
              key={item.id}
              type="button"
              aria-label={`跳转到${item.label}屏`}
              aria-current={isActive ? "step" : undefined}
              onClick={() => scrollToSection(index)}
              className={`size-3 rounded-full transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-500 ${
                isActive
                  ? "scale-125 bg-cyan-600 shadow-[0_0_0_5px_rgba(8,145,178,0.14)]"
                  : "bg-slate-300 hover:bg-cyan-300"
              }`}
            />
          );
        })}
      </nav>
    </div>
  );
}
