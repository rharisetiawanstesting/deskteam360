import { ArrowRight, Check } from "lucide-react";

export interface PricingTier {
  name: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  highlight?: boolean;
  /** Tailwind gradient class for the card body, e.g. "from-[#A855F7] to-[#C084FC]" */
  gradient: string;
  /** Tailwind colors for the ribbon banner: from + to */
  ribbon: string;
  /** Solid color used for the ribbon's notch + tail accents */
  ribbonAccent: string;
  /** Color of the underline divider above the feature list */
  divider: string;
}

export default function PricingCard({ tier }: { tier: PricingTier }) {
  const { name, price, cadence, features, gradient, ribbon, ribbonAccent, divider } = tier;

  return (
    <div
      className={`group relative flex flex-col rounded-[28px] bg-gradient-to-b ${gradient} p-7 pt-12 text-white shadow-[0_24px_60px_-20px_rgba(15,23,42,0.35)] ring-1 ring-black/5 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_30px_70px_-20px_rgba(15,23,42,0.45)] sm:p-8 sm:pt-14`}
    >
      {/* Ribbon banner - sits across the top, sticking out left */}
      <div
        className={`absolute -left-2 top-5 z-10 flex h-10 items-center bg-gradient-to-r ${ribbon} pl-4 pr-7 text-[13px] font-extrabold uppercase tracking-[0.18em] text-white shadow-[0_8px_20px_-6px_rgba(0,0,0,0.35)] sm:h-11 sm:text-sm`}
        style={{ clipPath: "polygon(0 0, 100% 0, calc(100% - 14px) 50%, 100% 100%, 0 100%)" }}
      >
        {name}
      </div>
      {/* Ribbon tail (small fold under the ribbon, left edge) */}
      <span
        aria-hidden
        className={`absolute -left-2 top-[60px] h-2 w-2 ${ribbonAccent}`}
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
      />

      {/* Price */}
      <div className="mt-2 flex items-end gap-2">
        <span className="text-[3.25rem] font-black leading-none tracking-tight sm:text-[3.75rem]">
          {price}
        </span>
        <span className="pb-2 text-base font-medium text-white/85">/{cadence}</span>
      </div>

      {/* Divider */}
      <div className={`mt-5 h-[2px] w-full rounded-full ${divider}`} />

      {/* Features */}
      <ul className="mt-5 space-y-3 text-[14px]">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 leading-snug text-white/95">
            <Check className="mt-0.5 h-4 w-4 flex-none stroke-[3]" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      {/* CTA pill */}
      <div className="mt-auto pt-8">
        <a
          href="#"
          className="group/cta inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[13px] font-extrabold uppercase tracking-[0.16em] text-brand shadow-md transition hover:scale-[1.03]"
        >
          Get Started
          <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-pink text-white transition group-hover/cta:translate-x-0.5">
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={3} />
          </span>
        </a>
      </div>
    </div>
  );
}
