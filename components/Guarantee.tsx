import Image from "next/image";
import { ShieldCheck } from "lucide-react";

export default function Guarantee() {
  return (
    <section
      className="relative"
      // Split background: white above the torn paper (matches Pricing),
      // dark navy below it (matches FAQ). Hard 50/50 stop so the
      // PNG's transparent corners blend with the right sibling section.
      style={{
        background: "linear-gradient(to bottom, #ffffff 0 50%, #0B1A3A 50% 100%)",
      }}
    >
      <div className="relative w-full">
        <Image
          src="/decor/torn-paper-purple.png"
          alt=""
          width={2880}
          height={994}
          priority
          className="pointer-events-none absolute inset-0 h-full w-full select-none object-fill"
        />

        <div className="container-px relative py-20 sm:py-24 lg:py-24">
          <div className="grid items-center gap-6 sm:grid-cols-[auto_1.6fr_1.2fr] sm:gap-8 lg:gap-12">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/25 backdrop-blur motion-safe:animate-soft-bob sm:h-20 sm:w-20">
              <ShieldCheck className="h-9 w-9 text-white sm:h-10 sm:w-10" strokeWidth={2.2} />
            </div>
            <h3 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-[2.5rem] lg:leading-[1.05]">
              Try It <span className="font-black">Risk-Free</span>
              <br className="hidden sm:block" /> for 30 Days
            </h3>
            <p className="text-[13.5px] leading-relaxed text-white/90 sm:text-[14.5px]">
              Not the right fit? Full refund within the first 30 days. No awkward conversations.
              No cancellation hoops. No contracts - ever. Cancel any month, for any reason.
              We&apos;ve been at this since 2018. We don&apos;t need lock-in contracts to keep
              people. We keep them by doing work they can&apos;t get anywhere else.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
