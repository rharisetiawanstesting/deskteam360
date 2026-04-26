import Image from "next/image";
import { ShieldCheck } from "lucide-react";

export default function Guarantee() {
  return (
    <section className="bg-brand-soft py-16">
      <div className="container-px">
        <div className="grid items-center gap-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-soft md:grid-cols-[auto_1fr_auto] md:p-12">
          <Image
            src="https://placehold.co/240x240/F97316/FFFFFF?text=30-Day%0AGuarantee"
            alt="30-day risk-free guarantee badge"
            width={140}
            height={140}
            className="h-28 w-28 rounded-full object-cover md:h-32 md:w-32"
          />
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
              <ShieldCheck className="h-4 w-4" />
              Our Promise
            </span>
            <h3 className="mt-3 text-2xl font-bold tracking-tight text-brand sm:text-3xl">
              Try It Risk-Free for 30 Days
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
              If DeskTeam360 isn’t a fit in your first 30 days, we’ll refund your
              investment. No hoops. No hard feelings.
            </p>
          </div>
          <a href="#pricing" className="btn-accent">
            Start Your Trial
          </a>
        </div>
      </div>
    </section>
  );
}
