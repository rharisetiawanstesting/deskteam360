import {
  Bot,
  Code2,
  Palette,
  Clapperboard,
  MailCheck,
  Database,
  Share2,
  Wrench,
} from "lucide-react";

const SERVICES = [
  { icon: Bot, title: "AI & Automation" },
  { icon: Code2, title: "Web Design & Development" },
  { icon: Palette, title: "Graphic Design" },
  { icon: Clapperboard, title: "Video Editing" },
  { icon: MailCheck, title: "Email & Funnels" },
  { icon: Database, title: "CRM & Marketing Tech" },
  { icon: Share2, title: "Social Media Content" },
  { icon: Wrench, title: "Website Maintenance" },
];

export default function Services() {
  return (
    <section id="services" className="bg-brand-soft py-20 sm:py-28">
      <div className="container-px">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Services</span>
          <h2 className="section-title mt-4">
            Every Skill You Need. One Team. One Bill.
          </h2>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-accent/40 hover:shadow-soft"
            >
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand text-white transition group-hover:bg-brand-accent">
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold text-brand">{title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
