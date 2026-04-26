"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-brand-soft"
              aria-expanded={isOpen}
            >
              <span className="text-base font-semibold text-brand">{item.question}</span>
              <ChevronDown
                className={[
                  "h-5 w-5 flex-none text-slate-400 transition-transform",
                  isOpen ? "rotate-180 text-brand-accent" : "",
                ].join(" ")}
              />
            </button>
            <div
              className={[
                "grid overflow-hidden px-6 transition-all duration-300",
                isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]",
              ].join(" ")}
            >
              <div className="overflow-hidden">
                <p className="text-sm leading-relaxed text-slate-600">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
