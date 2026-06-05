import { useEffect, useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 15, suffix: "+", label: "Projects Built" },
  { value: 3, suffix: "+", label: "Years Coding" },
  { value: 20, suffix: "+", label: "Technologies" },
  { value: 100, suffix: "%", label: "Passion Driven" },
];

const Counter = ({ end, suffix, start }: { end: number; suffix: string; start: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    const duration = 1500;
    const startTime = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, end]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-16 px-6">
      <div
        ref={ref}
        className={`container mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="text-center p-6 rounded-lg bg-card/50 border border-border hover:border-primary/50 transition-colors duration-300"
          >
            <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
              <Counter end={stat.value} suffix={stat.suffix} start={isVisible} />
            </div>
            <p className="text-xs md:text-sm text-muted-foreground font-mono uppercase tracking-wider">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
