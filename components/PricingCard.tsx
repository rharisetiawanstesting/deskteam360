import { Check } from "lucide-react";

export interface PricingTier {
  name: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  highlight?: boolean;
}

export default function PricingCard({ tier }: { tier: PricingTier }) {
  const { name, price, cadence, description, features, highlight } = tier;

  return (
    <div
      className={[
        "relative flex flex-col rounded-2xl border p-8 shadow-soft transition",
        highlight
          ? "border-brand bg-brand text-white"
          : "border-slate-200 bg-white text-brand hover:-translate-y-0.5 hover:shadow-md",
      ].join(" ")}
    >
      {highlight && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow">
          Most Popular
        </span>
      )}

      <div>
        <h3
          className={[
            "text-xs font-bold uppercase tracking-[0.18em]",
            highlight ? "text-brand-accent" : "text-brand-accent",
          ].join(" ")}
        >
          {name}
        </h3>
        <div className="mt-4 flex items-baseline gap-1">
          <span className="text-4xl font-bold tracking-tight">{price}</span>
          <span className={highlight ? "text-white/70" : "text-slate-500"}>
            /{cadence}
          </span>
        </div>
        <p className={["mt-3 text-sm", highlight ? "text-white/80" : "text-slate-600"].join(" ")}>
          {description}
        </p>
      </div>

      <ul className="mt-6 space-y-3">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm">
            <Check
              className={[
                "mt-0.5 h-4 w-4 flex-none",
                highlight ? "text-brand-accent" : "text-brand-accent",
              ].join(" ")}
            />
            <span className={highlight ? "text-white/90" : "text-slate-700"}>{f}</span>
          </li>
        ))}
      </ul>

      <a
        href="#"
        className={[
          "mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition",
          highlight
            ? "bg-brand-accent text-white hover:bg-orange-600"
            : "bg-brand text-white hover:bg-slate-800",
        ].join(" ")}
      >
        Get Started
      </a>
    </div>
  );
}
