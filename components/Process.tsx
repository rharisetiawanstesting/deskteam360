import Image from "next/image";
import { Lightbulb, Settings, Calendar } from "lucide-react";

const STEPS = [
  {
    n: 1,
    title: "Tell Us What You Need",
    body: "Drop a task into our request form or send an email - a homepage redesign, ad creatives, a GoHighLevel funnel, a video cut. Whatever's on your plate, hand it off.",
  },
  {
    n: 2,
    title: "We Handle Everything",
    body: "Your US-based account manager assigns the right specialist, manages the timeline, and QAs the work before you see it. No standups. No Slack chasing.",
  },
  {
    n: 3,
    title: "Review and Move On",
    body: "We finish work and start the next task. Work lands in your inbox. Love it? Want changes? Unlimited revisions - no extra charge. Your queue keeps moving.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#0B1A3A] py-20 sm:py-24 lg:py-28"
    >
      {/* Decorative code icons (top corners) */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 hidden md:block">
        <Image
          src="/decor/code-terminal.png"
          alt=""
          width={206}
          height={188}
          className="absolute left-[3%] top-10 w-14 opacity-90 lg:w-20"
        />
        <Image
          src="/decor/code-braces.png"
          alt=""
          width={240}
          height={374}
          className="absolute left-[6%] top-32 w-12 opacity-80 lg:w-16"
        />
      </div>

      <div className="container-px relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-[3rem] lg:leading-[1.05]">
            Three Steps. No Meetings.<br className="hidden sm:block" /> No Micromanaging
          </h2>
        </div>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: woman + ribbon flames with icons */}
          <div className="relative mx-auto aspect-square w-full max-w-[520px]">
            {/* Purple ribbon - top */}
            <div
              aria-hidden
              className="absolute left-[28%] top-[2%] h-[34%] w-[58%] rounded-[60%_40%_55%_45%/55%_45%_60%_40%] bg-gradient-to-br from-[#A37BFF] via-[#7B4DFF] to-[#5B30D6] shadow-[0_20px_40px_-20px_rgba(123,77,255,0.6)]"
            />
            {/* Orange ribbon - middle right */}
            <div
              aria-hidden
              className="absolute right-[2%] top-[34%] h-[36%] w-[58%] rounded-[55%_45%_60%_40%/50%_50%_55%_45%] bg-gradient-to-br from-[#FF8B3D] via-[#FF6A3D] to-[#E64C24] shadow-[0_20px_40px_-20px_rgba(255,106,61,0.55)]"
            />
            {/* Pink ribbon - bottom */}
            <div
              aria-hidden
              className="absolute bottom-[2%] left-[18%] h-[34%] w-[58%] rounded-[55%_45%_55%_45%/45%_55%_45%_55%] bg-gradient-to-br from-[#FF6FB5] via-[#EC2179] to-[#B5005C] shadow-[0_20px_40px_-20px_rgba(236,33,121,0.55)]"
            />

            {/* Woman illustration - centered */}
            <div className="absolute left-[2%] top-1/2 z-10 w-[58%] -translate-y-1/2">
              <Image
                src="/process/woman-laptop.png"
                alt="Designer working on laptop"
                width={826}
                height={802}
                className="h-auto w-full"
                priority
              />
            </div>

            {/* Icon circles on top of ribbons */}
            <span className="absolute left-[44%] top-[6%] z-20 grid h-16 w-16 place-items-center rounded-full bg-white shadow-xl ring-1 ring-white/40 sm:h-20 sm:w-20">
              <Lightbulb className="h-7 w-7 text-[#5B30D6] sm:h-9 sm:w-9" strokeWidth={2.2} />
            </span>
            <span className="absolute right-[14%] top-[42%] z-20 grid h-16 w-16 place-items-center rounded-full bg-white shadow-xl ring-1 ring-white/40 sm:h-20 sm:w-20">
              <Settings className="h-7 w-7 text-[#E64C24] sm:h-9 sm:w-9" strokeWidth={2.2} />
            </span>
            <span className="absolute bottom-[6%] left-[34%] z-20 grid h-16 w-16 place-items-center rounded-full bg-white shadow-xl ring-1 ring-white/40 sm:h-20 sm:w-20">
              <Calendar className="h-7 w-7 text-[#B5005C] sm:h-9 sm:w-9" strokeWidth={2.2} />
            </span>
          </div>

          {/* Right: numbered steps */}
          <ol className="relative space-y-10 lg:space-y-12">
            {/* vertical connector line */}
            <span
              aria-hidden
              className="pointer-events-none absolute left-[34px] top-6 hidden h-[calc(100%-3rem)] w-px bg-white/20 sm:block"
            />
            {STEPS.map(({ n, title, body }) => (
              <li key={n} className="group relative flex gap-5 sm:gap-6">
                <span className="relative z-10 grid h-[68px] w-[68px] shrink-0 place-items-center rounded-2xl bg-[#0B1A3A] text-3xl font-black text-white ring-2 ring-white/30 transition-transform duration-300 group-hover:scale-105">
                  {n}
                </span>
                <div className="pt-1">
                  <h3 className="text-xl font-black tracking-tight text-white sm:text-2xl">
                    {title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-[1.6] text-white/70 sm:text-[15px]">
                    {body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Agencies callout */}
        <div className="mx-auto mt-14 max-w-3xl rounded-2xl bg-white/5 px-5 py-4 ring-1 ring-white/15 backdrop-blur sm:px-6 sm:py-5">
          <p className="text-center text-sm leading-relaxed text-white/85 sm:text-[15px]">
            <span className="font-bold text-white">Agencies:</span> We work under your brand as your invisible
            back-office. Your clients never know we exist.
          </p>
        </div>
      </div>
    </section>
  );
}
