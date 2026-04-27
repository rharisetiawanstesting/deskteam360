import Image from "next/image";
import { Sun, Moon, ChevronRight } from "lucide-react";

export default function Values() {
  return (
    <section className="relative overflow-hidden bg-[#0B1A3A] py-20 sm:py-24 lg:py-28">
      {/* Decorative code icons */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block">
        <Image
          src="/decor/code-icons-small.webp"
          alt=""
          width={233}
          height={222}
          className="absolute left-[2%] top-12 w-24 opacity-90 lg:w-32"
        />
        <Image
          src="/decor/code-icons-large.webp"
          alt=""
          width={726}
          height={562}
          className="absolute right-[3%] top-8 w-44 opacity-95 lg:w-60"
        />
        <Image
          src="/decor/code-icons-large.webp"
          alt=""
          width={726}
          height={562}
          className="absolute left-[2%] bottom-16 w-36 opacity-90 lg:w-48"
        />
        <Image
          src="/decor/code-icons-small.webp"
          alt=""
          width={233}
          height={222}
          className="absolute right-[3%] bottom-28 w-24 opacity-95 lg:w-32"
        />
      </div>

      <div className="container-px relative">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[3rem] lg:leading-[1.05]">
            Outsourcing Is Broken<br className="hidden sm:block" /> We Built Something Better
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-white/70 sm:text-[15px]">
            Most &quot;outsourced&quot; teams are scattered freelancers working from home across
            different time zones. Ours aren&apos;t. We brought our team in-house - into one
            office, under one roof, with real infrastructure and real accountability.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3 md:auto-rows-[minmax(220px,auto)] lg:gap-6">
          {/* Row 1: image card + 2 navy cards */}
          <article className="relative overflow-hidden rounded-3xl bg-[#0F2148] transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01]">
            <Image
              src="/values/team-illustration.webp"
              alt="Team working together"
              width={1224}
              height={1224}
              className="h-full w-full object-contain p-4"
            />
          </article>

          <article className="group relative overflow-hidden rounded-3xl bg-[#0F2148] p-7 text-white transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] sm:p-8">
            <h3 className="text-xl font-black tracking-tight sm:text-[1.4rem]">
              Insourcing, Not Outsourcing
            </h3>
            <p className="mt-3 text-[13px] leading-[1.6] text-white/75 sm:text-sm">
              We eliminated the frustrations of traditional outsourcing by bringing
              everything in-house. Your work is done by a real team in a real office - with
              the infrastructure and accountability to back it up.
            </p>
          </article>

          <article className="group relative overflow-hidden rounded-3xl bg-[#0F2148] p-7 text-white transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] sm:p-8">
            <h3 className="text-xl font-black tracking-tight sm:text-[1.4rem]">
              One Office. One <br /> Team Leader
            </h3>
            <p className="mt-3 text-[13px] leading-[1.6] text-white/75 sm:text-sm">
              Every team member works in our office with a team leader who holds them
              accountable. No wondering if work is getting done - there&apos;s someone
              watching the floor, not just pinging a Slack channel.
            </p>
          </article>

          {/* Row 2: PINK FULL-WIDTH Built-In Redundancy */}
          <article className="group relative min-h-[260px] overflow-hidden rounded-3xl bg-[#FF3D8A] p-7 text-white transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] sm:p-10 md:col-span-3">
            <div className="relative z-10 max-w-[52%]">
              <h3 className="text-2xl font-black tracking-tight sm:text-[1.85rem] lg:text-[2.1rem]">
                Built-In Redundancy
              </h3>
              <p className="mt-4 max-w-md text-sm leading-[1.55] text-white/95 sm:text-[15px]">
                New computers. Three different internet providers. Two backup power sources.
                When someone&apos;s out sick or on vacation, the team keeps moving - you never
                feel the gap.
              </p>
            </div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-[55%]">
              <Image
                src="/values/devices-pink.webp"
                alt=""
                width={1820}
                height={904}
                sizes="(min-width: 1024px) 60vw, 50vw"
                className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
          </article>

          {/* Row 3: Day & Night (1 col) + Your Team Gets Better (2 cols) */}
          <article className="group relative overflow-hidden rounded-3xl bg-[#0F2148] p-7 text-white transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-white text-[#FFB23F]">
                <Sun className="h-6 w-6" strokeWidth={2.5} />
              </span>
              <ChevronRight className="h-5 w-5 text-white/70" strokeWidth={3} />
              <ChevronRight className="-ml-3 h-5 w-5 text-white/70" strokeWidth={3} />
              <ChevronRight className="-ml-3 h-5 w-5 text-white/70" strokeWidth={3} />
              <span className="grid h-12 w-12 place-items-center rounded-full bg-white text-[#5B49C1]">
                <Moon className="h-6 w-6" strokeWidth={2.5} />
              </span>
            </div>
            <h3 className="mt-5 text-xl font-black tracking-tight sm:text-[1.4rem]">
              Day &amp; Night Shifts
            </h3>
            <p className="mt-3 text-[13px] leading-[1.6] text-white/75 sm:text-sm">
              Our team runs day and night shifts so work gets done on your schedule - not
              theirs. No time zone headaches. Submit a task at 5pm, wake up to it done.
            </p>
          </article>

          <article className="group relative overflow-hidden rounded-3xl bg-[#0F2148] p-7 text-white transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] sm:p-10 md:col-span-2">
            <h3 className="text-2xl font-black tracking-tight sm:text-[1.65rem]">
              Your Team Gets Better Over Time
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-[1.55] text-white/85 sm:text-[15px]">
              You work with the same people every month - not a revolving door of strangers.
              They learn your brand, your preferences, your standards. The longer you stay,
              the faster and better the work gets.
            </p>
          </article>

          {/* Row 4: ORANGE FULL-WIDTH US-Based Account Managers */}
          <article className="group relative min-h-[260px] overflow-hidden rounded-3xl bg-[#FF8B3D] p-7 text-white transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] sm:p-10 md:col-span-3">
            <div className="relative z-10 max-w-[52%]">
              <h3 className="text-2xl font-black tracking-tight sm:text-[1.85rem] lg:text-[2.1rem]">
                US-Based Account Managers
              </h3>
              <p className="mt-4 max-w-md text-sm leading-[1.55] text-white/95 sm:text-[15px]">
                Your dedicated account manager speaks fluent English and bridges any
                language gaps with the production team. They help you get the most out of
                the service - so you can focus on growing your business.
              </p>
            </div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-[48%]">
              <Image
                src="/values/account-manager.webp"
                alt=""
                width={1576}
                height={1320}
                sizes="(min-width: 1024px) 50vw, 50vw"
                className="h-full w-full object-cover object-bottom transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
