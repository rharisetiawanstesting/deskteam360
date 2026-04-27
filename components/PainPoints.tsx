const PAINS = [
  {
    title: "The Freelancer Lottery",
    body:
      "You ship a brief and cross your fingers. Some freelancers crush it, most ghost, disappear, or deliver work you have to redo yourself.",
    bg: "bg-purple-500",
    accent: "bg-purple-300/40",
    text: "text-white",
  },
  {
    title: "Death by a Thousand Invoices",
    body:
      "A designer here, a copywriter there, a developer across the world — suddenly you’re a bookkeeper, not an operator.",
    bg: "bg-rose-500",
    accent: "bg-rose-300/40",
    text: "text-white",
  },
  {
    title: "Vendors, Nobody Talking",
    body:
      "Your video editor doesn’t talk to your funnel builder. Your funnel builder doesn’t talk to your designer. You’re the middleman — again.",
    bg: "bg-orange-500",
    accent: "bg-orange-300/40",
    text: "text-white",
  },
];

export default function PainPoints() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-24 h-72 w-72 rounded-full bg-gradient-to-br from-purple-200/60 to-pink-200/60 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-40 h-72 w-72 rounded-full bg-gradient-to-br from-cyan-200/60 to-blue-200/60 blur-3xl"
      />

      <div className="container-px relative">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl lg:text-5xl">
            You <span className="text-brand-pink">Didn&apos;t</span> Start a Business
            <br className="hidden sm:block" /> to Chase Freelancers
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Somewhere between managing vendors, chasing revisions, and watching invoices
            pile up - you stopped doing the work that actually grows your company.
          </p>
        </div>

        <div className="relative mx-auto mt-10 w-full max-w-5xl">
          <video
            className="h-auto w-full"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src="/pain-illustration.webm" type="video/webm" />
            <source src="/pain-illustration.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PAINS.map((p, i) => (
            <article
              key={p.title}
              className={`group relative overflow-hidden rounded-3xl p-7 shadow-soft transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] ${p.bg} ${p.text}`}
            >
              <div
                aria-hidden
                className={`absolute -right-10 -top-10 h-40 w-40 rounded-full ${p.accent} blur-xl`}
              />
              <div className="relative">
                <span className="text-sm font-bold tracking-widest text-white/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-xl font-bold leading-snug sm:text-2xl">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/90">{p.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
