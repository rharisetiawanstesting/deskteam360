"use client";

import { useEffect, useState } from "react";

type Props = {
  end: number;
  prefix?: string;
  suffix?: string;
  durationMs?: number;
  className?: string;
};

export default function Counter({
  end,
  prefix = "",
  suffix = "",
  durationMs = 1600,
  className = "",
}: Props) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * end));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [end, durationMs]);

  return (
    <span className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}
