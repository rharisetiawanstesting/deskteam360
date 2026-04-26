import { ClipboardList, Cog, CheckCheck } from "lucide-react";

const STEPS = [
  {
    icon: ClipboardList,
    title: "Tell Us What You Need",
    body: "Send a request in any format — Loom, doc, email, voice note. We’ll scope it same-day.",
  },
  {
    icon: Cog,
    title: "We Handle Everything",
    body: "Your US-based account manager assigns the right specialists and drives the work forward.",
  },
  {
    icon: CheckCheck,
    title: "Review and Move On",
    body: "You approve, request edits, or ship. Then get back to the work only you can do.",
  },
];

export default function Process() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-px">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">How It Works</span>
          <h2 className="section-title mt-4">
            Three Steps. No Meetings. No Micromanaging.
          </h2>
        </div>

        <ol className="mt-16 grid gap-6 md:grid-cols-3">
          {STEPS.map(({ icon: Icon, title, body }, i) => (
            <li
              key={title}
              className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-soft"
            >
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-5xl font-bold text-slate-100">0{i + 1}</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-brand">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
