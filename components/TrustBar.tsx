const LOGOS = [
  { name: "Libra Growth Labs", className: "font-medium tracking-tight text-slate-700" },
  { name: "Charisma", className: "font-['cursive'] italic text-2xl text-pink-500" },
  { name: "Hot Tape Marketing", className: "font-black uppercase tracking-tight text-slate-800" },
  { name: "Convert on Command", className: "font-bold uppercase tracking-tight text-slate-800" },
  { name: "Special Ed Resource", className: "font-bold uppercase tracking-tight text-emerald-600" },
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
        <div className="mt-10 grid grid-cols-2 items-center gap-8 sm:grid-cols-3 md:grid-cols-5">
          {LOGOS.map((logo) => (
            <div
              key={logo.name}
              className="grid h-12 place-items-center text-center opacity-80 grayscale-[25%] transition hover:opacity-100 hover:grayscale-0"
            >
              <span className={`text-sm sm:text-base ${logo.className}`}>{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
