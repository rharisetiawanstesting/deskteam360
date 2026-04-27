import {
  Bot,
  Code2,
  Palette,
  Clapperboard,
  MailCheck,
  Database,
  Share2,
  Wrench,
  type LucideIcon,
} from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  body: string;
  cardClass: string;
  /** Tailwind classes for asymmetric corner rounding */
  cornerClass: string;
};

const SERVICES: Service[] = [
  {
    icon: Bot,
    title: "AI & Automation",
    body: "AI Agent setup, AI Training, Chatbot setup, workflow automation, process optimization - scale without headcount",
    cardClass: "bg-[#5B49C1]",
    cornerClass: "rounded-[28px] rounded-tl-[64px]",
  },
  {
    icon: Code2,
    title: "Web Design & Development",
    body: "WordPress, React, and other CMS's, landing pages, redesigns, bug fixes, WooCommerce, custom features",
    cardClass: "bg-[#5B49C1]",
    cornerClass: "rounded-[28px] rounded-br-[64px]",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    body: "Ad creatives, social graphics, branding, print materials, pitch decks, presentations",
    cardClass: "bg-[#EC2179]",
    cornerClass: "rounded-[28px] rounded-bl-[64px]",
  },
  {
    icon: Clapperboard,
    title: "Video Editing",
    body: "YouTube content, short-form reels, ad cuts, thumbnails, motion graphics",
    cardClass: "bg-[#0B1538]",
    cornerClass: "rounded-[28px] rounded-tr-[64px]",
  },
  {
    icon: MailCheck,
    title: "Email & Funnels",
    body: "Campaign builds, automation sequences, drip nurture, newsletter design, A/B testing",
    cardClass: "bg-[#FF8B3D]",
    cornerClass: "rounded-[28px] rounded-bl-[64px]",
  },
  {
    icon: Database,
    title: "CRM & Marketing Tech",
    body: "GoHighLevel, HubSpot, and other CRM's, Zapier, Make, ActiveCampaign, and other email software, integrations, API work",
    cardClass: "bg-[#5B49C1]",
    cornerClass: "rounded-[28px] rounded-tr-[64px]",
  },
  {
    icon: Share2,
    title: "Social Media Content",
    body: "Branded graphics, carousel posts, story templates, scheduling-ready assets",
    cardClass: "bg-[#5B49C1]",
    cornerClass: "rounded-[28px] rounded-tl-[64px]",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    body: "Core updates, security monitoring, speed optimization, backups - always current",
    cardClass: "bg-[#0B1538]",
    cornerClass: "rounded-[28px] rounded-br-[64px]",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#F4F1FF] to-white py-20 sm:py-28"
    >
      {/* Soft side blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-[#C4B7FF]/40 blur-3xl" />
        <div className="absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-[#FFB7DC]/35 blur-3xl" />
        <div className="absolute -left-16 bottom-10 h-64 w-64 rounded-full bg-[#B7D8FF]/35 blur-3xl" />
      </div>

      <div className="container-px relative">
        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
          <h2 className="text-3xl font-black tracking-tight text-brand sm:text-4xl lg:col-span-7 lg:text-[3.25rem] lg:leading-[1.04]">
            Every Skill You Need. <span className="text-brand-pink">One Team.</span>{" "}
            <span className="text-brand-pink">One Bill.</span>
          </h2>
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base lg:col-span-5 lg:pt-3">
            DeskTeam360 replaces the freelancer chaos with a dedicated team that already knows
            how to work together - all managed by a US-based account manager so you never have
            to coordinate anything.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {/* Top-left visual tile (gradient blob) */}
          <div className="group relative aspect-square overflow-hidden rounded-[28px] rounded-tl-[64px] bg-white ring-1 ring-slate-200/70 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-soft hover:ring-slate-300">
            <div
              aria-hidden
              className="absolute inset-0 grid place-items-center"
            >
              <div className="relative h-2/3 w-2/3 transition-transform duration-500 ease-out group-hover:scale-110">
                <div className="absolute inset-0 rotate-12 rounded-[40%] bg-gradient-to-br from-[#FF8B3D] via-[#FF5470] to-[#EC2179] blur-[2px]" />
                <div className="absolute inset-4 -rotate-6 rounded-[45%] bg-gradient-to-tl from-[#FFB23F] to-[#FF5E9E] mix-blend-screen" />
              </div>
            </div>
          </div>

          {SERVICES.map(({ icon: Icon, title, body, cardClass, cornerClass }) => (
            <article
              key={title}
              className={`group relative aspect-square overflow-hidden p-6 text-white shadow-sm ring-1 ring-black/5 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.025] hover:shadow-soft sm:p-7 ${cardClass} ${cornerClass}`}
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white ring-1 ring-white/20 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:bg-white/25">
                <Icon className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <h3 className="mt-5 text-lg font-black leading-tight tracking-tight sm:text-xl">
                {title}
              </h3>
              <p className="mt-3 text-[13px] leading-[1.55] text-white/80">{body}</p>
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-white/0 transition-all duration-500 ease-out group-hover:bg-white/10"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
