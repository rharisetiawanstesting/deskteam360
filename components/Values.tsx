import {
  Building2,
  Headset,
  UsersRound,
  ShieldCheck,
  Moon,
  TrendingUp,
} from "lucide-react";

const VALUES = [
  {
    icon: Building2,
    title: "Insourcing, Not Outsourcing",
    body: "Your team works inside one office, for one company — no subcontractors, no surprises.",
  },
  {
    icon: Headset,
    title: "US-Based Account Managers",
    body: "English-fluent project leads in your time zone, translating your vision into executed work.",
  },
  {
    icon: UsersRound,
    title: "One Office. One Team Leader.",
    body: "Every role you need — design, dev, content, automation — reporting to a single lead.",
  },
  {
    icon: ShieldCheck,
    title: "Built-In Redundancy",
    body: "If someone is out, someone else steps in. Work never stalls because of one person.",
  },
  {
    icon: Moon,
    title: "Day & Night Shifts",
    body: "Submit work at 5pm. Wake up to progress. A coverage model that moves while you sleep.",
  },
  {
    icon: TrendingUp,
    title: "Your Team Gets Better Over Time",
    body: "The same people learn your brand, your voice, your stack — so output compounds.",
  },
];

export default function Values() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-px">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">The Solution</span>
          <h2 className="section-title mt-4">
            Outsourcing Is Broken. We Built Something Better.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {VALUES.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-soft transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-soft text-brand-accent">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-brand">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
