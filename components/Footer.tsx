import Image from "next/image";
import { ArrowRight, ArrowUp, Facebook, Instagram, Linkedin } from "lucide-react";

const NAV_COLUMNS = [
  {
    heading: "Services",
    links: [
      { label: "Web Design", href: "#services" },
      { label: "Graphic Design", href: "#services" },
      { label: "Video Editing", href: "#services" },
      { label: "Email & Funnels", href: "#services" },
      { label: "CRM & Automation", href: "#services" },
      { label: "Social Media", href: "#services" },
      { label: "Website Maintenance", href: "#services" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "How it works", href: "#process" },
      { label: "Showcase", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0B1A3A] pt-12">
      <div className="container-px">
        {/* CTA card - white, overlapping the dark footer */}
        <div className="relative overflow-hidden rounded-[32px] bg-white shadow-[0_30px_80px_-20px_rgba(0,0,0,0.45)] ring-1 ring-slate-200/70">
          <div className="grid items-center gap-6 lg:grid-cols-[1.25fr_1fr]">
            <div className="px-7 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
              <h2 className="text-3xl font-black tracking-tight text-brand sm:text-4xl lg:text-[2.75rem] lg:leading-[1.05]">
                You&apos;ve Got <span className="text-brand-pink">Better Things</span> to Do
                Than Manage Freelancers
              </h2>
              <p className="mt-5 max-w-md text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
                400+ businesses already handed off the grunt work. Same team, same flat rate,
                every month. Your turn.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#pricing"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand-pink px-6 py-3 text-[13px] font-extrabold uppercase tracking-[0.14em] text-white shadow-md transition hover:scale-[1.03]"
                >
                  See Plans &amp; Pricing
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-white/25 transition group-hover:translate-x-0.5">
                    <ArrowRight className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                </a>
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF6A3D] to-[#EC2179] px-6 py-3 text-[13px] font-extrabold uppercase tracking-[0.14em] text-white shadow-md transition hover:scale-[1.03]"
                >
                  Book a Free Strategy Call
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-white/25 transition group-hover:translate-x-0.5">
                    <ArrowRight className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                </a>
              </div>
              <p className="mt-5 text-[12px] italic text-slate-500">
                30-day money-back guarantee &middot; No contracts &middot; Cancel anytime
                &middot; Since 2018
              </p>
            </div>
            <div className="relative h-full min-h-[280px] w-full sm:min-h-[340px] lg:min-h-[400px]">
              <Image
                src="/cta/man-laptop.png"
                alt="Founder using a laptop"
                fill
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </div>

        {/* Back-to-top floating button */}
        <div className="relative mx-auto -mt-6 flex justify-end pr-6">
          <a
            href="#top"
            aria-label="Back to top"
            className="relative grid h-12 w-12 place-items-center rounded-full bg-brand-pink text-white shadow-lg ring-4 ring-[#0B1A3A] transition hover:scale-105"
          >
            <ArrowUp className="h-5 w-5" strokeWidth={3} />
          </a>
        </div>

        {/* Footer body */}
        <div className="mt-10 grid gap-10 pb-10 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr] lg:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/decor/dt360-mark.png"
                alt=""
                width={1148}
                height={784}
                className="h-7 w-auto"
              />
              <span className="text-xl font-extrabold tracking-tight text-white">
                DeskTeam360
              </span>
            </div>
            <p className="mt-6 text-[22px] font-black leading-[1.1] text-white sm:text-2xl">
              Stop Outsourcing
              <br />
              Start Insourcing
            </p>
          </div>

          {/* Nav columns */}
          {NAV_COLUMNS.map((col) => (
            <div key={col.heading}>
              <h4 className="text-base font-bold text-white">{col.heading}</h4>
              <ul className="mt-5 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[13px] text-white/65 transition hover:text-white"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Follow us */}
          <div>
            <h4 className="text-base font-bold text-white">Follow Us on</h4>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/15 transition hover:bg-white/20"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/15 transition hover:bg-white/20"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/15 transition hover:bg-white/20"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
            <ul className="mt-7 space-y-2.5">
              <li>
                <a
                  href="#"
                  className="text-[13px] text-white/65 transition hover:text-white"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[13px] text-white/65 transition hover:text-white"
                >
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[13px] text-white/65 transition hover:text-white"
                >
                  Affiliate Program
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 py-6">
          <p className="text-center text-[12px] text-white/55">
            {new Date().getFullYear()} DeskTeam360. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
