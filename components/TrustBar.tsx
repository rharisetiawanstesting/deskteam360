import Image from "next/image";

const LOGOS = [
  { name: "Libra Growth Labs", src: "/trust/libra-growth.webp", w: 380, h: 100 },
  { name: "Charisma", src: "/trust/charisma.webp", w: 360, h: 180 },
  { name: "Duct Tape Marketing", src: "/trust/duct-tape-marketing.webp", w: 340, h: 130 },
  { name: "Convert on Command", src: "/trust/convert-on-command.webp", w: 380, h: 130 },
  { name: "Special Ed Resource", src: "/trust/special-ed.webp", w: 340, h: 200 },
];

export default function TrustBar() {
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
        <div className="mt-10 grid grid-cols-2 items-center justify-items-center gap-8 sm:grid-cols-3 md:grid-cols-5">
          {LOGOS.map((logo) => (
            <div
              key={logo.name}
              className="relative grid h-16 w-full max-w-[180px] place-items-center opacity-80 grayscale-[15%] transition hover:opacity-100 hover:grayscale-0"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.w}
                height={logo.h}
                className="h-auto max-h-14 w-auto max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
