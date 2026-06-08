'use client';

import { useEffect, useRef, useState } from 'react';

function useCountUp(target: number, duration: number = 1500) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return { count, ref };
}

function StatItem({ value, suffix, label, prefix = '' }: {
  value: number; suffix: string; label: string; prefix?: string;
}) {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="flex flex-col items-center gap-1 px-6">
      <span className="text-3xl font-bold text-white">
        {prefix}{count}{suffix}
      </span>
      <span className="text-sm text-[#7FA8C4] text-center">{label}</span>
    </div>
  );
}

export default function StatsBar() {
  return (
    <div className="bg-[#0D2137] border-t border-white/10 py-8">
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8">
        <StatItem value={7}  suffix="+" label="Years of experience" />
        <StatItem value={6}  suffix=""  label="Products shipped" />
        <StatItem value={4}  suffix=""  label="Engineers led" />
        <StatItem value={77} suffix=""  label="PTE English score" />
      </div>
    </div>
  );
}
