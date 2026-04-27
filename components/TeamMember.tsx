"use client";

import { ChevronLeft, ChevronRight, User } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

type Member = {
  name: string;
  role: string;
  bg: string;
  shape: string;
};

const MEMBERS: Member[] = [
  { name: "Anna", role: "Designer", bg: "bg-amber-400", shape: "bg-amber-500/70" },
  { name: "Jovan", role: "AMA", bg: "bg-orange-500", shape: "bg-orange-400/80" },
  { name: "Dhea", role: "Developer", bg: "bg-purple-500", shape: "bg-purple-400/70" },
  { name: "Lex", role: "Account Manager", bg: "bg-orange-500", shape: "bg-orange-400/80" },
  { name: "Gabriela", role: "Developer", bg: "bg-amber-400", shape: "bg-amber-500/70" },
  { name: "Marco", role: "Video Editor", bg: "bg-pink-500", shape: "bg-pink-400/80" },
  { name: "Tara", role: "Copywriter", bg: "bg-emerald-500", shape: "bg-emerald-400/80" },
  { name: "Rio", role: "Automation", bg: "bg-sky-500", shape: "bg-sky-400/80" },
];

export default function TeamMember() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateButtons = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    updateButtons();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateButtons, { passive: true });
    window.addEventListener("resize", updateButtons);
    return () => {
      el.removeEventListener("scroll", updateButtons);
      window.removeEventListener("resize", updateButtons);
    };
  }, [updateButtons]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.6;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="container-px">
        <h2 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl">
          <span className="text-brand-navy">Team </span>
          <span className="text-brand-pink">Member</span>
        </h2>
      </div>

      <div className="relative mt-12">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label="Previous"
          disabled={!canPrev}
          className="absolute left-3 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-slate-700 shadow-soft ring-1 ring-slate-200 transition hover:scale-105 disabled:opacity-40 sm:grid"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label="Next"
          disabled={!canNext}
          className="absolute right-3 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-slate-700 shadow-soft ring-1 ring-slate-200 transition hover:scale-105 disabled:opacity-40 sm:grid"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-6 pb-4 lg:px-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {MEMBERS.map((m, i) => (
            <Card key={i} member={m} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ member }: { member: Member }) {
  return (
    <div
      data-card
      className="relative aspect-[3/4] w-[260px] shrink-0 snap-start overflow-hidden rounded-2xl shadow-soft sm:w-[280px]"
    >
      <div className={`absolute inset-0 ${member.bg}`} />
      <div
        className={`absolute -right-16 top-1/3 h-72 w-72 rotate-12 ${member.shape}`}
        style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
        aria-hidden
      />
      <div
        className={`absolute -left-10 bottom-0 h-44 w-44 -rotate-12 ${member.shape}`}
        style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
        aria-hidden
      />
      <div className="absolute inset-0 grid place-items-end justify-center pb-16">
        <div className="grid h-44 w-32 place-items-center rounded-2xl bg-white/15 backdrop-blur-sm">
          <User className="h-20 w-20 text-white/90" />
        </div>
      </div>
      <div className="absolute bottom-3 left-3 right-3">
        <span className="inline-flex items-center rounded-md bg-orange-600/95 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">
          {member.name} | {member.role}
        </span>
      </div>
    </div>
  );
}
