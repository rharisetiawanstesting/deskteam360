import { ChevronsRight } from "lucide-react";
import Counter from "./Counter";

type Stat = {
  node?: React.ReactNode;
  label: string;
  sub?: string;
  highlight?: boolean;
};

const STATS: Stat[] = [
  {
    node: (
      <Counter
        end={8}
        suffix="+"
        className="text-4xl font-black leading-none text-white sm:text-5xl lg:text-6xl"
      />
    ),
    label: "Years\nRunning",
  },
  {
    node: (
      <Counter
        end={400}
        suffix="+"
        className="text-4xl font-black leading-none text-white sm:text-5xl lg:text-6xl"
      />
    ),
    label: "Clients\nServed",
    highlight: true,
  },
  {
    node: (
      <Counter
        end={3}
        prefix="1-"
        className="text-4xl font-black leading-none text-white sm:text-5xl lg:text-6xl"
      />
    ),
    label: "Day\nTurnaround",
  },
  { label: "Unlimited Revisions", sub: "Included" },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-hero-radial pt-20 lg:pt-24">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -left-32 top-32 h-[28rem] w-[28rem] rounded-full bg-pink-500/15 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-[28rem] w-[28rem] rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="container-px grid items-center gap-10 pb-12 pt-12 lg:grid-cols-12 lg:gap-6 lg:pb-24 lg:pt-16">
        <div className="lg:col-span-6">
          <h1 className="font-black tracking-[-0.02em] text-white text-[3.5rem] leading-[0.95] sm:text-[4.5rem] lg:text-[5rem] xl:text-[6rem] 2xl:text-[6.75rem]">
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
          <div className="relative mx-auto aspect-square w-full max-w-2xl">
            <video
              className="hero-video h-full w-full object-contain"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            >
              <source src="/cta-illustration.webm" type="video/webm" />
              <source src="/cta-illustration.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      <div className="container-px relative pb-24 lg:pb-32">
        <div className="grid grid-cols-2 gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-2 backdrop-blur md:grid-cols-4 md:gap-0 md:p-0">
          {STATS.map((stat, i) => (
            <StatCell key={i} {...stat} divider={i > 0} />
          ))}
        </div>
      </div>

      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-12 bg-white"
        style={{ clipPath: "ellipse(80% 100% at 50% 100%)" }}
      />
    </section>
  );
}

function StatCell({
  node,
  label,
  sub,
  highlight,
  divider,
}: Stat & { divider?: boolean }) {
  return (
    <div
      className={`group relative flex cursor-pointer items-center gap-3 px-5 py-7 transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-[1.06] hover:z-20 sm:gap-5 sm:px-6 ${
        divider && !highlight ? "md:border-l md:border-white/10" : ""
      } ${
        highlight
          ? "z-10 -my-2 -mx-1 rounded-2xl bg-brand-navy ring-2 ring-brand-cyan shadow-glow"
          : "rounded-2xl"
      }`}
    >
      {node}
      <span
        className={`whitespace-pre-line leading-tight text-white sm:text-base ${
          node ? "text-sm font-medium text-white/85" : "text-base font-bold sm:text-lg"
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
