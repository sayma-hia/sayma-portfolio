"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/data";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 1200;
          const step = (target / duration) * 16;
          const interval = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(interval);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <div className="bg-[#0D2137] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat) => {
            const isNumeric = /^\d+/.test(stat.value);
            const numericPart = isNumeric ? parseInt(stat.value) : null;
            const suffix = isNumeric ? stat.value.replace(/\d+/, "") : "";

            return (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-white mb-1">
                  {numericPart !== null ? (
                    <CountUp target={numericPart} suffix={suffix} />
                  ) : (
                    stat.value
                  )}
                </div>
                <div className="text-[#7FA8C4] text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
