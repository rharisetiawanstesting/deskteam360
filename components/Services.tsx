import Image from "next/image";
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
    cardClass: "bg-[#1B1448]",
    cornerClass: "rounded-[28px] rounded-tl-[64px]",
  },
  {
    icon: Code2,
    title: "Web Design & Development",
    body: "WordPress, React, and other CMS's, landing pages, redesigns, bug fixes, WooCommerce, custom features",
    cardClass: "bg-[#7E5BFF]",
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
    cardClass: "bg-[#A37BFF]",
    cornerClass: "rounded-[28px] rounded-tr-[64px]",
  },
  {
    icon: MailCheck,
    title: "Email & Funnels",
    body: "Campaign builds, automation sequences, drip nurture, newsletter design, A/B testing",
    cardClass: "bg-[#FF6A3D]",
    cornerClass: "rounded-[28px] rounded-bl-[64px]",
  },
  {
    icon: Database,
    title: "CRM & Marketing Tech",
    body: "GoHighLevel, HubSpot, and other CRM's, Zapier, Make, ActiveCampaign, and other email software, integrations, API work",
    cardClass: "bg-white text-brand ring-1 ring-slate-200",
    cornerClass: "rounded-[28px] rounded-tr-[64px]",
  },
  {
    icon: Share2,
    title: "Social Media Content",
    body: "Branded graphics, carousel posts, story templates, scheduling-ready assets",
    cardClass: "bg-[#5B30D6]",
    cornerClass: "rounded-[28px] rounded-tl-[64px]",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    body: "Core updates, security monitoring, speed optimization, backups - always current",
    cardClass: "bg-[#1B1448]",
    cornerClass: "rounded-[28px] rounded-br-[64px]",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#F4F1FF] to-white py-16 sm:py-20 lg:py-24"
    >
      {/* Hologram blob backgrounds */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image
          src="/decor/blob-purple-l.png"
          alt=""
          width={672}
          height={1484}
          className="absolute -left-12 top-1/4 w-40 opacity-90 lg:w-56"
        />
        <Image
          src="/decor/blob-purple-r.png"
          alt=""
          width={826}
          height={802}
          className="absolute -right-6 top-1/3 w-44 opacity-90 lg:w-60"
        />
        <Image
          src="/decor/blob-purple-l.png"
          alt=""
          width={672}
          height={1484}
          className="absolute -left-16 bottom-10 w-32 -scale-x-100 opacity-80 lg:w-44"
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-5 sm:px-6">
        <div className="grid items-start gap-6 lg:grid-cols-12 lg:gap-10">
          <h2 className="text-3xl font-black tracking-tight text-brand sm:text-4xl lg:col-span-7 lg:text-[3.25rem] lg:leading-[1.02]">
            Every Skill You Need.{" "}
            <span className="text-brand-pink">One Team.</span> One Bill
          </h2>
          <p className="text-[13px] leading-relaxed text-slate-600 sm:text-sm lg:col-span-5 lg:pt-2">
            DeskTeam360 replaces the freelancer chaos with a dedicated team that already knows
            how to work together - all managed by a US-based account manager so you never have
            to coordinate anything.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {/* Top-left logo tile */}
          <div className="group relative aspect-square overflow-hidden rounded-[28px] rounded-tl-[56px] bg-white ring-1 ring-slate-200/70 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-soft hover:ring-slate-300">
            <div className="absolute inset-0 grid place-items-center p-8">
              <Image
                src="/decor/dt360-mark.png"
                alt="DeskTeam360 mark"
                width={1148}
                height={784}
                className="h-auto w-2/3 transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>
          </div>

          {SERVICES.map(({ icon: Icon, title, body, cardClass, cornerClass }) => {
            const isLight = cardClass.includes("bg-white");
            return (
              <article
                key={title}
                className={`group relative aspect-square overflow-hidden p-5 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.025] hover:shadow-soft sm:p-6 ${cardClass} ${cornerClass} ${isLight ? "" : "text-white ring-1 ring-black/5"}`}
              >
                <span className={`grid h-10 w-10 place-items-center rounded-full transition-transform duration-300 ease-out group-hover:scale-110 ${isLight ? "bg-pink-100 text-brand-pink" : "bg-white/15 text-white ring-1 ring-white/20 group-hover:bg-white/25"}`}>
                  <Icon className="h-5 w-5" strokeWidth={2.2} />
                </span>
                <h3 className={`mt-4 text-[1.05rem] font-black leading-[1.15] tracking-tight sm:text-xl ${isLight ? "text-brand" : ""}`}>
                  {title}
                </h3>
                <p className={`mt-2 text-[12px] leading-[1.5] ${isLight ? "text-slate-600" : "text-white/80"}`}>
                  {body}
                </p>
                <div
                  aria-hidden
                  className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-white/0 transition-all duration-500 ease-out group-hover:bg-white/10"
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
