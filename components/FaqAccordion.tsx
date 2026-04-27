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
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 rounded-full bg-white px-7 py-4 text-left shadow-[0_8px_24px_-10px_rgba(0,0,0,0.35)] transition hover:shadow-[0_10px_28px_-10px_rgba(0,0,0,0.45)]"
              aria-expanded={isOpen}
            >
              <span className="text-[15px] font-semibold text-brand sm:text-base">
                {item.question}
              </span>
              <ChevronDown
                className={`h-5 w-5 flex-none text-brand transition-transform ${
                  isOpen ? "rotate-180 text-brand-pink" : ""
                }`}
              />
            </button>
            <div
              className={`grid overflow-hidden px-7 transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr] pb-2 pt-3" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-[14px] leading-relaxed text-white/80 sm:text-[15px]">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
