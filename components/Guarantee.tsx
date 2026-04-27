import { ShieldCheck } from "lucide-react";

export default function Guarantee() {
  return (
    <section className="relative bg-white">
      {/* Top torn paper edge */}
      <div aria-hidden className="block">
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="block h-8 w-full sm:h-12"
        >
          <path
            d="M0,40 L40,28 L80,44 L130,18 L180,36 L240,22 L300,42 L360,26 L420,38 L490,20 L560,40 L620,28 L690,46 L760,22 L830,40 L900,26 L970,42 L1040,20 L1110,38 L1180,28 L1250,44 L1320,24 L1390,40 L1440,30 L1440,60 L0,60 Z"
            fill="#7E5BFF"
          />
        </svg>
      </div>

      <div className="relative bg-[#7E5BFF] py-14 sm:py-16 lg:py-20">
        <div className="container-px">
          <div className="grid items-center gap-8 lg:grid-cols-[auto_1.4fr_1fr] lg:gap-10">
            <div className="grid h-20 w-20 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/25 backdrop-blur sm:h-24 sm:w-24">
              <ShieldCheck className="h-10 w-10 text-white sm:h-12 sm:w-12" strokeWidth={2.2} />
            </div>
            <h3 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.05]">
              Try It <span className="font-black">Risk-Free</span>
              <br className="hidden sm:block" /> for 30 Days
            </h3>
            <p className="text-[14px] leading-relaxed text-white/85 sm:text-[15px]">
              Not the right fit? Full refund within the first 30 days. No awkward conversations.
              No cancellation hoops. No contracts - ever. Cancel any month, for any reason.
              We&apos;ve been at this since 2018. We don&apos;t need lock-in contracts to keep
              people. We keep them by doing work they can&apos;t get anywhere else.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom torn paper edge - flipped onto next dark section */}
      <div aria-hidden className="block">
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="block h-8 w-full sm:h-12"
        >
          <path
            d="M0,20 L60,38 L130,16 L200,42 L270,22 L340,40 L410,18 L480,38 L550,24 L620,44 L690,20 L770,42 L840,22 L920,40 L990,18 L1070,38 L1140,22 L1220,42 L1290,20 L1370,38 L1440,24 L1440,0 L0,0 Z"
            fill="#7E5BFF"
          />
        </svg>
      </div>
    </section>
  );
}
