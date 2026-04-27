"use client";

import { ChevronLeft, ChevronRight, User } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Member = {
  name: string;
  role: string;
  photo?: string;
  bg?: string;
};

const MEMBERS: Member[] = [
  { name: "Jovan", role: "AMA", photo: "/team/jovan.webp" },
  { name: "Dhea", role: "Developer", photo: "/team/dhea.webp" },
  { name: "Lex", role: "Account Manager", photo: "/team/lex.webp" },
  { name: "Gabriela", role: "Developer", photo: "/team/gabriela.webp" },
  { name: "Imelda", role: "Designer", photo: "/team/imelda.webp" },
  { name: "Marco", role: "Video Editor", bg: "bg-pink-500" },
  { name: "Tara", role: "Copywriter", bg: "bg-emerald-500" },
  { name: "Rio", role: "Automation", bg: "bg-sky-500" },
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
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-6 pb-4 lg:px-16 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {MEMBERS.map((m) => (
            <Card key={m.name} member={m} />
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
      className="group relative aspect-[3/4] w-[260px] shrink-0 snap-start overflow-hidden rounded-2xl shadow-soft transition-transform duration-300 ease-out hover:-translate-y-1 sm:w-[280px]"
    >
      {member.photo ? (
        <Image
          src={member.photo}
          alt={`${member.name}, ${member.role}`}
          fill
          className="object-cover"
          sizes="(min-width: 640px) 280px, 260px"
        />
      ) : (
        <>
          <div className={`absolute inset-0 ${member.bg ?? "bg-slate-300"}`} />
          <div className="absolute inset-0 grid place-items-center">
            <User className="h-24 w-24 text-white/80" />
          </div>
        </>
      )}
      <div className="absolute bottom-3 left-3 right-3">
        <span className="inline-flex items-center rounded-md bg-orange-600/95 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">
          {member.name} | {member.role}
        </span>
      </div>
    </div>
  );
}
