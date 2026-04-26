import Image from "next/image";
import { Quote, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "We replaced three agencies and a revolving door of freelancers with DeskTeam360. Our output doubled and the bill shrank.",
    name: "Alex Romero",
    role: "Founder, Northwind Digital",
    avatar: "https://placehold.co/200x200/0F172A/FFFFFF?text=AR",
  },
  {
    quote:
      "I stopped project-managing vendors and started actually running my company again. That’s the real ROI.",
    name: "Priya Shah",
    role: "CEO, Lumen Growth",
    avatar: "https://placehold.co/200x200/F97316/FFFFFF?text=PS",
  },
  {
    quote:
      "Turnaround time is wild. I brief at night, and I’m reviewing polished work before my first coffee.",
    name: "Marcus Lee",
    role: "Head of Ops, Backbone Labs",
    avatar: "https://placehold.co/200x200/0F172A/FFFFFF?text=ML",
  },
  {
    quote:
      "Finally, a partner who doesn’t ghost us mid-sprint. Same team, same quality, every single week.",
    name: "Jamie Carter",
    role: "Marketing Director, Orbit Co.",
    avatar: "https://placehold.co/200x200/F97316/FFFFFF?text=JC",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-brand-soft py-20 sm:py-28">
      <div className="container-px">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Social Proof</span>
          <h2 className="section-title mt-4">
            They Tried Freelancers, Agencies, and Upwork First. Then They Found Us.
          </h2>
        </div>

        <div className="mt-14 columns-1 gap-6 md:columns-2 lg:columns-2 [&>*]:mb-6">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="break-inside-avoid rounded-2xl border border-slate-200 bg-white p-7 shadow-soft"
            >
              <Quote className="h-6 w-6 text-brand-accent" />
              <blockquote className="mt-4 text-base leading-relaxed text-slate-700">
                {`“${t.quote}”`}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm font-semibold text-brand">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
                <div className="ml-auto flex items-center gap-0.5 text-brand-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
