import { ArrowRight } from "lucide-react";

const FOOTER_LINKS: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Services", href: "#services" },
      { label: "Pricing", href: "#pricing" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "FAQ", href: "#faq" },
      { label: "Case Studies", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand text-white">
      <div className="container-px py-20">
        <div className="rounded-3xl bg-gradient-to-br from-brand-accent to-orange-500 p-10 sm:p-14">
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            You&apos;ve Got Better Things to Do Than Manage Freelancers.
          </h2>
          <p className="mt-4 max-w-xl text-white/90">
            Hand it to one team. Ship faster. Sleep better. Start with a 30-day risk-free trial.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand transition hover:bg-slate-100"
            >
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#faq"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Read the FAQ
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-white text-sm font-bold text-brand">
                DT
              </span>
              <span className="text-base font-semibold tracking-tight">DeskTeam360</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-white/60">
              One team, every skill. Built for agencies, startups, and operators who want to stop
              managing vendors and start shipping work.
            </p>
          </div>

          {FOOTER_LINKS.map((col) => (
            <div key={col.heading}>
              <h4 className="text-sm font-semibold text-white">{col.heading}</h4>
              <ul className="mt-4 space-y-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-white/60 transition hover:text-white"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>&copy; {new Date().getFullYear()} DeskTeam360. All rights reserved.</p>
          <p>Made for operators who’d rather be operating.</p>
        </div>
      </div>
    </footer>
  );
}
