import { Dices, Receipt, MessageSquareOff } from "lucide-react";

const PAINS = [
  {
    icon: Dices,
    title: "The Freelancer Lottery",
    body:
      "You ship a brief and cross your fingers. Some freelancers crush it, most ghost, disappear, or deliver work you have to redo yourself.",
  },
  {
    icon: Receipt,
    title: "Death by a Thousand Invoices",
    body:
      "A designer here, a copywriter there, a developer across the world — suddenly you’re a bookkeeper, not an operator.",
  },
  {
    icon: MessageSquareOff,
    title: "Vendors, Nobody Talking",
    body:
      "Your video editor doesn’t talk to your funnel builder. Your funnel builder doesn’t talk to your designer. You’re the middleman — again.",
  },
];

export default function PainPoints() {
  return (
    <section className="bg-brand py-20 text-white sm:py-24">
      <div className="container-px">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
            The Problem
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            You Didn&apos;t Start a Business to Chase Freelancers
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PAINS.map(({ icon: Icon, title, body }, i) => (
            <article
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:border-white/20"
            >
              <div className="flex items-center gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-accent/20 text-brand-accent">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold text-white/50">0{i + 1}</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
