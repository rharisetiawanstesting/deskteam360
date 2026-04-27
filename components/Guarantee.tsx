import Image from "next/image";
import { ShieldCheck } from "lucide-react";

export default function Guarantee() {
  return (
    <section className="relative bg-white">
      {/* Torn paper PNG background spans the full section. Content sits on top. */}
      <div className="relative w-full">
        <Image
          src="/decor/torn-paper-purple.png"
          alt=""
          width={2880}
          height={994}
          priority
          className="pointer-events-none absolute inset-0 h-full w-full select-none object-fill"
        />

        {/* Content. Padding clears the torn edges (~60-80px on each side). */}
        <div className="container-px relative py-24 sm:py-28 lg:py-32">
          <div className="grid items-center gap-8 lg:grid-cols-[auto_1.4fr_1fr] lg:gap-10">
            <div className="grid h-20 w-20 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/25 backdrop-blur sm:h-24 sm:w-24">
              <ShieldCheck className="h-10 w-10 text-white sm:h-12 sm:w-12" strokeWidth={2.2} />
            </div>
            <h3 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.05]">
              Try It <span className="font-black">Risk-Free</span>
              <br className="hidden sm:block" /> for 30 Days
            </h3>
            <p className="text-[14px] leading-relaxed text-white/90 sm:text-[15px]">
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
