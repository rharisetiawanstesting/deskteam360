"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  ChevronsRight,
  Menu,
  X,
  Bot,
  Code2,
  Database,
  Megaphone,
  MailCheck,
  Palette,
  Settings2,
  Share2,
  Video,
  Wrench,
  Image as ImageIcon,
  type LucideIcon,
} from "lucide-react";
import Logo from "./Logo";

type DropdownChild = {
  label: string;
  href: string;
  description?: string;
  icon?: LucideIcon;
  iconBg?: string;
  iconColor?: string;
};

type NavItem = {
  label: string;
  href?: string;
  children?: DropdownChild[];
  cta?: { label: string; href: string };
};

const NAV: NavItem[] = [
  { label: "Home", href: "#" },
  {
    label: "How it Works",
    children: [
      { label: "Tell Us What You Need", href: "#process", icon: Megaphone, iconBg: "bg-orange-100", iconColor: "text-orange-500" },
      { label: "We Handle Everything", href: "#process", icon: Settings2, iconBg: "bg-pink-100", iconColor: "text-pink-500" },
      { label: "Review and Move On", href: "#process", icon: ChevronsRight, iconBg: "bg-violet-100", iconColor: "text-violet-500" },
    ],
    cta: { label: "See the Process", href: "#process" },
  },
  {
    label: "Services",
    children: [
      { label: "AI & Automation", description: "We deploy intelligent workflows and AI tools to optimize your operations for **efficient results**.", href: "#services", icon: Bot, iconBg: "bg-pink-100", iconColor: "text-pink-500" },
      { label: "Graphic Design", description: "We create impactful visuals and branding that deliver **lasting professional results**.", href: "#services", icon: Palette, iconBg: "bg-violet-100", iconColor: "text-violet-500" },
      { label: "Website Design & Development", description: "We deliver custom, high-performance web solutions designed to drive **measurable results**.", href: "#services", icon: Code2, iconBg: "bg-orange-100", iconColor: "text-orange-500" },
      { label: "Video Editing", description: "We craft high-impact motion content and professional edits to deliver **creative results**.", href: "#services", icon: Video, iconBg: "bg-violet-100", iconColor: "text-violet-500" },
      { label: "CRM & Marketing Tech", description: "We optimize your customer reach and systems to drive **higher conversion results**.", href: "#services", icon: Database, iconBg: "bg-blue-100", iconColor: "text-blue-500" },
      { label: "Social Media Content", description: "We create high-engagement content designed to grow your audience and deliver **viral results**.", href: "#services", icon: Share2, iconBg: "bg-emerald-100", iconColor: "text-emerald-500" },
      { label: "Email & Funnels", description: "We design strategic sequences and funnels to maximize engagement and **revenue results**.", href: "#services", icon: MailCheck, iconBg: "bg-amber-100", iconColor: "text-amber-500" },
      { label: "Website Maintenance", description: "We provide proactive updates and security to ensure your platform delivers **reliable results**.", href: "#services", icon: Wrench, iconBg: "bg-pink-100", iconColor: "text-pink-500" },
    ],
    cta: { label: "See Full Services", href: "#services" },
  },
  {
    label: "Showcase",
    children: [
      {
        label: "Website Showcase",
        href: "#testimonials",
        description:
          "Explore our latest web projects, showcasing high-performance sites and intuitive digital experiences that deliver proven results.",
        icon: Code2,
        iconBg: "bg-blue-100",
        iconColor: "text-blue-500",
      },
      {
        label: "Design Showcase",
        href: "#testimonials",
        description:
          "Browse our creative gallery to see how our visual branding and design solutions translate into impactful brand results.",
        icon: ImageIcon,
        iconBg: "bg-pink-100",
        iconColor: "text-pink-500",
      },
      {
        label: "Video Showcase",
        href: "#testimonials",
        description:
          "Explore our video collection to see how we blend motion and sound to produce high-impact visual stories that deliver engaging results.",
        icon: Video,
        iconBg: "bg-violet-100",
        iconColor: "text-violet-500",
      },
    ],
    cta: { label: "Explore Our Works", href: "#testimonials" },
  },
  { label: "Blog", href: "#" },
  {
    label: "About",
    children: [
      { label: "Our Story", href: "#values", icon: Megaphone, iconBg: "bg-orange-100", iconColor: "text-orange-500" },
      { label: "Why Insourcing Wins", href: "#values", icon: Settings2, iconBg: "bg-pink-100", iconColor: "text-pink-500" },
      { label: "FAQ", href: "#faq", icon: ChevronsRight, iconBg: "bg-violet-100", iconColor: "text-violet-500" },
    ],
    cta: { label: "Learn More", href: "#values" },
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setActiveDropdown(null);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const openDropdown = (label: string) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setActiveDropdown(label);
  };

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <nav
        ref={navRef}
        className="container-px flex h-20 items-center justify-between gap-6"
      >
        <Link href="#" className="shrink-0">
          <Logo />
        </Link>

        <div className="hidden flex-1 items-center justify-center gap-1 lg:flex">
          {NAV.map((item) =>
            item.children ? (
              <DesktopDropdown
                key={item.label}
                item={item}
                isOpen={activeDropdown === item.label}
                onOpen={() => openDropdown(item.label)}
                onScheduleClose={scheduleClose}
                onClose={() => setActiveDropdown(null)}
              />
            ) : (
              <Link
                key={item.label}
                href={item.href || "#"}
                className="px-3 py-2 text-sm font-medium text-white/90 transition hover:text-white"
              >
                {item.label}
              </Link>
            ),
          )}
        </div>

        <div className="hidden items-center gap-5 lg:flex">
          <span aria-hidden className="h-6 w-px bg-white/20" />
          <Link
            href="#"
            className="text-sm font-medium text-white/90 transition hover:text-white"
          >
            Log in
          </Link>
          <Link href="#pricing" className="btn-pink">
            Book a call
            <ChevronsRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white lg:hidden"
        >
          {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-brand-navy/95 backdrop-blur lg:hidden">
          <div className="container-px flex flex-col gap-1 py-4">
            {NAV.map((item) => (
              <details
                key={item.label}
                className="group rounded-lg px-3 py-2"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-white/90">
                  <Link
                    href={item.href || "#"}
                    onClick={(e) => {
                      if (item.children) e.preventDefault();
                      else setMobileOpen(false);
                    }}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <ChevronDown className="h-4 w-4 transition group-open:rotate-180" />
                  )}
                </summary>
                {item.children && (
                  <ul className="mt-2 flex flex-col gap-2 pl-2">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-1.5 text-sm text-white/70 transition hover:text-white"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </details>
            ))}
            <div className="mt-2 flex flex-col gap-3 border-t border-white/10 pt-4">
              <Link
                href="#"
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-white/90"
              >
                Log in
              </Link>
              <Link
                href="#pricing"
                onClick={() => setMobileOpen(false)}
                className="btn-pink w-full"
              >
                Book a call
                <ChevronsRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function DesktopDropdown({
  item,
  isOpen,
  onOpen,
  onScheduleClose,
  onClose,
}: {
  item: NavItem;
  isOpen: boolean;
  onOpen: () => void;
  onScheduleClose: () => void;
  onClose: () => void;
}) {
  const isShowcase = item.label === "Showcase";

  return (
    <div
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onScheduleClose}
      onFocus={onOpen}
    >
      <button
        type="button"
        onClick={onOpen}
        aria-haspopup="true"
        aria-expanded={isOpen}
        className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition ${
          isOpen ? "text-white" : "text-white/90 hover:text-white"
        }`}
      >
        {item.label}
        <ChevronDown
          className={`h-4 w-4 transition ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <>
          <span
            aria-hidden
            className="absolute left-1/2 top-full h-1 w-12 -translate-x-1/2 rounded-full bg-brand-accent"
          />
          {/* invisible bridge so the cursor can travel from button to panel without closing */}
          <span
            aria-hidden
            className="absolute left-0 right-0 top-full h-3"
          />
          <div
            className={`absolute top-[calc(100%+0.75rem)] z-50 rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-slate-200 ${
              item.label === "Services"
                ? "left-1/2 w-[920px] -translate-x-1/2"
                : isShowcase
                  ? "left-1/2 w-[760px] -translate-x-1/2"
                  : "left-1/2 w-[420px] -translate-x-1/2"
            }`}
          >
            {item.label === "Services" ? (
              <ServicesPanel item={item} onClose={onClose} />
            ) : isShowcase ? (
              <ShowcaseGrid item={item} onClose={onClose} />
            ) : (
              <SimpleList item={item} onClose={onClose} />
            )}
          </div>
        </>
      )}
    </div>
  );
}

function SimpleList({ item, onClose }: { item: NavItem; onClose: () => void }) {
  return (
    <div className="flex flex-col gap-1">
      {item.children?.map((child) => {
        const Icon = child.icon;
        return (
          <Link
            key={child.label}
            href={child.href}
            onClick={onClose}
            className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm font-medium text-brand transition hover:bg-brand-soft"
          >
            {Icon && (
              <span
                className={`grid h-9 w-9 place-items-center rounded-md ${child.iconBg ?? "bg-slate-100"}`}
              >
                <Icon className={`h-5 w-5 ${child.iconColor ?? "text-slate-600"}`} />
              </span>
            )}
            <span>{child.label}</span>
          </Link>
        );
      })}
      {item.cta && (
        <Link
          href={item.cta.href}
          onClick={onClose}
          className="mt-3 inline-flex items-center justify-center gap-2 self-start rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-brand transition hover:border-slate-300"
        >
          {item.cta.label}
          <ChevronsRight className="h-4 w-4 text-brand-accent" />
        </Link>
      )}
    </div>
  );
}

function ServicesPanel({ item, onClose }: { item: NavItem; onClose: () => void }) {
  const renderDesc = (text?: string) => {
    if (!text) return null;
    const parts = text.split(/\*\*([^*]+)\*\*/g);
    return (
      <span className="mt-1 block text-xs leading-relaxed text-slate-500">
        {parts.map((p, i) =>
          i % 2 === 1 ? (
            <strong key={i} className="font-semibold text-brand">
              {p}
            </strong>
          ) : (
            <span key={i}>{p}</span>
          ),
        )}
      </span>
    );
  };

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_300px]">
      <div>
        <div className="mb-3 flex items-center gap-3 px-2">
          <span className="text-sm font-semibold text-slate-500">Our Services</span>
          <span className="h-px flex-1 bg-slate-200" />
        </div>
        <div className="grid grid-cols-2 gap-1">
          {item.children?.map((child) => {
            const Icon = child.icon;
            return (
              <Link
                key={child.label}
                href={child.href}
                onClick={onClose}
                className="group flex gap-3 rounded-xl px-3 py-2.5 transition hover:bg-violet-50/70"
              >
                {Icon && (
                  <span
                    className={`mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg ${child.iconBg ?? "bg-slate-100"}`}
                  >
                    <Icon className={`h-5 w-5 ${child.iconColor ?? "text-slate-600"}`} />
                  </span>
                )}
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-brand group-hover:text-brand-pink">
                    {child.label}
                  </span>
                  {renderDesc(child.description)}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-4 rounded-2xl bg-pink-50/80 p-4 ring-1 ring-pink-100">
        <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-gradient-to-br from-pink-200 via-pink-100 to-orange-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/values/team-illustration.webp"
            alt="DeskTeam360 team"
            className="h-full w-full object-contain"
          />
        </div>
        <h3 className="text-lg font-black leading-tight text-brand">
          Every Skill You Need.{" "}
          <span className="text-brand-pink">One Team. One Bill.</span>
        </h3>
        <p className="text-xs leading-relaxed text-slate-600">
          DeskTeam360 replaces the freelancer chaos with a dedicated team that already
          knows how to work together - all managed by a US-based account manager so you
          never have to coordinate anything.
        </p>
        {item.cta && (
          <Link
            href={item.cta.href}
            onClick={onClose}
            className="inline-flex items-center justify-center gap-2 self-start rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand shadow ring-1 ring-slate-200 transition hover:bg-slate-50"
          >
            See Our Plans
            <ChevronsRight className="h-4 w-4 text-brand-pink" />
          </Link>
        )}
      </div>
    </div>
  );
}

function ShowcaseGrid({ item, onClose }: { item: NavItem; onClose: () => void }) {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {item.children?.map((child) => {
          const Icon = child.icon ?? ImageIcon;
          return (
            <Link
              key={child.label}
              href={child.href}
              onClick={onClose}
              className="flex flex-col rounded-xl p-3 transition hover:bg-brand-soft"
            >
              <span
                className={`grid aspect-[16/10] w-full place-items-center overflow-hidden rounded-lg ${child.iconBg ?? "bg-slate-100"}`}
              >
                <Icon className={`h-10 w-10 ${child.iconColor ?? "text-slate-600"}`} />
              </span>
              <span className="mt-3 text-sm font-semibold text-brand-pink">
                {child.label}
              </span>
              {child.description && (
                <span className="mt-2 text-xs leading-relaxed text-slate-600">
                  {child.description}
                </span>
              )}
              <span className="mt-3 text-xs font-semibold text-brand-pink">
                Learn More &gt;
              </span>
            </Link>
          );
        })}
      </div>
      {item.cta && (
        <div className="mt-4 flex justify-end">
          <Link
            href={item.cta.href}
            onClick={onClose}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-brand transition hover:border-slate-300"
          >
            {item.cta.label}
            <ChevronsRight className="h-4 w-4 text-brand-accent" />
          </Link>
        </div>
      )}
    </div>
  );
}
