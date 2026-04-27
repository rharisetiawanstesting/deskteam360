"use client";

import Image from "next/image";

const LOGOS = [
  { name: "Libra Growth Labs", src: "/trust/libra-growth.webp", w: 380, h: 100 },
  { name: "Charisma", src: "/trust/charisma.webp", w: 360, h: 180 },
  { name: "Duct Tape Marketing", src: "/trust/duct-tape-marketing.webp", w: 340, h: 130 },
  { name: "Convert on Command", src: "/trust/convert-on-command.webp", w: 380, h: 130 },
  { name: "Special Ed Resource", src: "/trust/special-ed.webp", w: 340, h: 200 },
];

export default function TrustBar() {
  const loop = [...LOGOS, ...LOGOS];
  return (
    <section className="relative bg-gradient-to-b from-indigo-50 via-sky-50 to-violet-50 py-14">
      <div className="container-px">
        <p className="text-center text-sm leading-relaxed text-slate-700 sm:text-base">
          Agencies, startups, and growing businesses
          <br />
          <span className="font-semibold text-brand-pink underline decoration-2 underline-offset-4">
            trust DeskTeam360
          </span>{" "}
          to handle the work they don&apos;t have time for.
        </p>

        <div
          className="group/marquee mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
          aria-label="Trusted by"
        >
          <div className="flex w-max items-center gap-16 animate-marquee group-hover/marquee:[animation-play-state:paused] motion-reduce:animate-none">
            {loop.map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                className="group/logo grid h-16 w-[180px] shrink-0 place-items-center opacity-80 grayscale-[15%] transition-all duration-300 ease-out hover:scale-125 hover:opacity-100 hover:grayscale-0"
                aria-hidden={i >= LOGOS.length}
              >
                <Image
                  src={logo.src}
                  alt={i < LOGOS.length ? logo.name : ""}
                  width={logo.w}
                  height={logo.h}
                  className="h-auto max-h-14 w-auto max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
