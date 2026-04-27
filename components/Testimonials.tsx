"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Reveal from "./Reveal";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Honestly, I was skeptical at first. Different team, faster turnaround, more done than I'd seen in years.",
    name: "Sara Whitman",
    role: "COO, Northwind Digital",
    avatar: "/testimonials/female1.png",
  },
  {
    quote:
      "I was spending 20+ hours a week managing designers and developers. Now I send a task and it gets done. DeskTeam360 gave me my time back - and my sanity.",
    name: "Luke Dalien",
    role: "Special Ed Resource",
    avatar: "/testimonials/luke.png",
  },
  {
    quote:
      "Turnaround is wild. I brief at night and review polished work before my first coffee. They feel like an in-house team.",
    name: "Priya Shah",
    role: "CEO, Lumen Growth",
    avatar: "/team/dhea.webp",
  },
  {
    quote:
      "Finally a partner who doesn't ghost us mid-sprint. Same team, same quality, every single week.",
    name: "Marcus Lee",
    role: "Head of Ops, Backbone Labs",
    avatar: "/team/jovan.webp",
  },
  {
    quote:
      "We replaced three agencies and a revolving door of freelancers. Output doubled. Bill shrank.",
    name: "Jamie Carter",
    role: "Marketing Director, Orbit Co.",
    avatar: "/team/gabriela.webp",
  },
];

const MARQUEE_ITEMS = [
  "$30K/month added revenue after freeing 16 hrs/week - Zach S., Convert on Command",
  "$20K/month saved vs. previous vendors - Gaynor C., Senior Living Spec.",
  "Cut hiring time by 80% - Mia R., Bright Funnels",
  "Doubled creative output in 2 weeks - Daniel P., Orbit Studio",
  "Recovered 25 hrs/week of leadership time - Ana K., StackForge",
];

export default function Testimonials() {
  const [active, setActive] = useState(1);
  const total = TESTIMONIALS.length;

  const go = (delta: number) => {
    setActive((prev) => (prev + delta + total) % total);
  };

  // 3 visible cards: prev, active, next
  const prev = (active - 1 + total) % total;
  const next = (active + 1) % total;

  return (
    <section id="testimonials" className="relative bg-white">
      {/* Top section: heading + group photo */}
      <div className="container-px pt-20 pb-12 sm:pt-24 lg:pt-28">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <h2 className="text-4xl font-black tracking-tight text-brand sm:text-5xl lg:text-[3.75rem] lg:leading-[1.05]">
              They Tried Freelancers, Agencies, and Upwork First.{" "}
              <span className="text-brand-pink">Then They Found Us</span>
            </h2>
          </Reveal>
          <div className="group relative overflow-hidden rounded-[28px] ring-1 ring-pink-200/70 shadow-soft">
            <div className="aspect-[16/10] w-full bg-[#0B1A3A]">
              <Image
                src="/testimonials/team-group.png"
                alt="DeskTeam360 in-house team"
                width={1662}
                height={1192}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative bg-gradient-to-b from-white to-[#F7F4FF] pb-12">
        <div className="container-px">
          <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-3">
            {[prev, active, next].map((idx, slot) => {
              const t = TESTIMONIALS[idx];
              const isActive = slot === 1;
              return (
                <figure
                  key={`${idx}-${slot}`}
                  className={`relative flex flex-col gap-5 rounded-2xl bg-white p-6 ring-1 ring-slate-200/70 transition-all duration-300 sm:flex-row sm:items-start sm:p-7 ${
                    isActive ? "shadow-soft scale-[1.02]" : "opacity-70"
                  }`}
                >
                  <div className="absolute right-5 top-5 text-slate-200">
                    <Quote className="h-7 w-7" />
                  </div>
                  <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl bg-slate-200 sm:h-32 sm:w-32">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      sizes="128px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-center">
                    <blockquote className="text-[14px] leading-[1.55] text-slate-700">
                      {t.quote}
                    </blockquote>
                    <figcaption className="mt-4 text-sm font-bold text-brand">
                      {t.name},{" "}
                      <span className="font-semibold text-slate-500">{t.role}</span>
                    </figcaption>
                  </div>
                </figure>
              );
            })}
          </div>

          {/* Carousel controls */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="grid h-10 w-10 place-items-center rounded-full bg-white text-slate-500 ring-1 ring-slate-200 transition hover:bg-slate-50 hover:text-brand"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="grid h-10 w-10 place-items-center rounded-full bg-brand-pink text-white shadow-md transition hover:scale-105"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Pink marquee bar */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#EC2179] via-[#FF3D8A] to-[#EC2179] py-4">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={i}
              className="mx-8 inline-flex items-center gap-3 text-sm font-medium text-white sm:text-[15px]"
            >
              <span className="opacity-90">{renderMarquee(item)}</span>
              <span aria-hidden className="text-white/60">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function renderMarquee(line: string) {
  // bold the leading $X/$Xk portion if present
  const match = line.match(/^(\$[^\s]+(?:\/[^\s]+)?)\s+(.*)$/);
  if (match) {
    return (
      <>
        <strong className="font-extrabold">{match[1]}</strong> {match[2]}
      </>
    );
  }
  return line;
}
