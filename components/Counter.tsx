"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  end: number;
  prefix?: string;
  suffix?: string;
  durationMs?: number;
  scrambleMs?: number;
  className?: string;
};

export default function Counter({
  end,
  prefix = "",
  suffix = "",
  durationMs = 1400,
  scrambleMs = 700,
  className = "",
}: Props) {
  const [value, setValue] = useState(0);
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            run();
            observer.disconnect();
          }
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(node);

    function run() {
      const startedAt = performance.now();
      const digits = Math.max(1, String(end).length);
      const cap = Math.max(end, Math.pow(10, digits) - 1);
      let raf = 0;
      const tick = (now: number) => {
        const elapsed = now - startedAt;
        if (elapsed < scrambleMs) {
          setValue(Math.floor(Math.random() * (cap + 1)));
          raf = requestAnimationFrame(tick);
          return;
        }
        const t = Math.min(1, (elapsed - scrambleMs) / Math.max(1, durationMs - scrambleMs));
        const eased = 1 - Math.pow(1 - t, 3);
        setValue(Math.round(eased * end));
        if (t < 1) {
          raf = requestAnimationFrame(tick);
        } else {
          setDone(true);
        }
      };
      raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
    }

    return () => observer.disconnect();
  }, [end, durationMs, scrambleMs]);

  return (
    <span
      ref={ref}
      className={`${className} tabular-nums transition-transform duration-300 ${done ? "" : "[transform:translateZ(0)]"}`}
    >
      {prefix}
      {value}
      {suffix}
    </span>
  );
}
