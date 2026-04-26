import { ChevronsRight } from "lucide-react";

const STATS: { value?: string; label: string; sub?: string; highlight?: boolean }[] = [
  { value: "8+", label: "Years\nRunning" },
  { value: "400+", label: "Clients\nServed", highlight: true },
  { value: "1-3", label: "Day\nTurnaround" },
  { label: "Unlimited Revisions", sub: "Included" },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-hero-radial pt-20 lg:pt-24">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -left-32 top-32 h-96 w-96 rounded-full bg-pink-500/15 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="container-px grid items-center gap-12 pb-12 pt-12 lg:grid-cols-12 lg:gap-10 lg:pb-24 lg:pt-16">
        <div className="lg:col-span-6">
          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[4rem] xl:text-[5rem] 2xl:text-[5.5rem]">
            <span className="block">Stop Outsourcing.</span>
            <span className="block">Start Insourcing.</span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            AI specialists, developers, designers, and video editors - all working together
            in one office, not scattered across Upwork. Flat-rate subscription. US-based
            account manager. Zero hiring headaches. And you never manage another vendor
            again.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a href="#pricing" className="btn-pink">
              See Plans &amp; Pricing
              <span className="cta-icon">
                <ChevronsRight className="h-4 w-4" />
              </span>
            </a>
            <a
              href="#process"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-brand-accent px-6 py-3.5 text-sm font-semibold text-white transition hover:brightness-110"
            >
              Watch How It Works - 5 Minutes
              <span className="cta-icon">
                <ChevronsRight className="h-4 w-4" />
              </span>
            </a>
          </div>
        </div>

        <div className="relative lg:col-span-6">
          <div className="relative mx-auto aspect-square w-full max-w-xl">
            <video
              className="h-full w-full object-contain"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster="https://placehold.co/900x900/0B1538/0B1538?text=+"
            >
              <source src="/cta-illustration.webm" type="video/webm" />
              <source src="/cta-illustration.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      <div className="container-px relative pb-24 lg:pb-32">
        <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur md:grid-cols-4">
          {STATS.map((stat, i) => (
            <StatCell key={i} {...stat} divider={i > 0} />
          ))}
        </div>
      </div>

      <div aria-hidden className="absolute inset-x-0 bottom-0 h-12 bg-white" style={{ clipPath: "ellipse(80% 100% at 50% 100%)" }} />
    </section>
  );
}

function StatCell({
  value,
  label,
  sub,
  highlight,
  divider,
}: {
  value?: string;
  label: string;
  sub?: string;
  highlight?: boolean;
  divider?: boolean;
}) {
  return (
    <div
      className={`relative flex items-center gap-3 px-5 py-7 sm:gap-5 sm:px-6 ${
        divider && !highlight ? "md:border-l md:border-white/10" : ""
      } ${highlight ? "-my-2 -mx-1 rounded-2xl bg-brand-navy ring-2 ring-brand-cyan shadow-glow z-10" : ""}`}
    >
      {value && (
        <span className="text-4xl font-extrabold leading-none text-white sm:text-5xl lg:text-6xl">
          {value}
        </span>
      )}
      <span
        className={`whitespace-pre-line leading-tight text-white sm:text-base ${
          value ? "text-sm font-medium text-white/85" : "text-base font-bold sm:text-lg"
        }`}
      >
        {label}
        {sub && (
          <span className="mt-1 block text-sm font-medium text-white/85">{sub}</span>
        )}
      </span>
    </div>
  );
}
