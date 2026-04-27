import Image from "next/image";
import PricingCard, { PricingTier } from "./PricingCard";
import Reveal from "./Reveal";

const TIERS: PricingTier[] = [
  {
    name: "Entrepreneur",
    price: "$1,497",
    cadence: "month",
    description: "For solo founders and small teams that need reliable weekly output.",
    features: [
      "1 active task at a time",
      "Full team access - all 8 services",
      "US-based account manager",
      "1-3 business day turnaround",
      "Unlimited revisions",
      "30-day money-back guarantee",
    ],
    gradient: "from-[#A855F7] to-[#C084FC]",
    ribbon: "from-[#3B1F8B] to-[#5B30D6]",
    ribbonAccent: "bg-[#2A1466]",
    divider: "bg-white/35",
  },
  {
    name: "Marketer",
    price: "$2,994",
    cadence: "month",
    description:
      "For marketing teams and operators shipping campaigns on a steady cadence.",
    features: [
      "2 active tasks at a time",
      "Full team access - all 8 services",
      "Priority account manager",
      "1-3 business day turnaround",
      "Unlimited revisions",
      "30-day money-back guarantee",
    ],
    gradient: "from-[#FF6A3D] to-[#EC2179]",
    ribbon: "from-[#9D0E48] to-[#EC2179]",
    ribbonAccent: "bg-[#7A0A38]",
    divider: "bg-white/35",
    highlight: true,
  },
  {
    name: "Agency",
    price: "$4,491",
    cadence: "month",
    description: "For agencies white-labeling production across multiple client accounts.",
    features: [
      "3 active tasks at a time",
      "Full team access - all 8 services",
      "Dedicated senior account manager",
      "1-3 business day turnaround",
      "White-label delivery",
      "30-day money-back guarantee",
    ],
    gradient: "from-[#0E7C7B] to-[#1FB6A8]",
    ribbon: "from-[#0B4F4D] to-[#117A75]",
    ribbonAccent: "bg-[#063837]",
    divider: "bg-white/35",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Hologram blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image
          src="/decor/blob-purple-l.png"
          alt=""
          width={672}
          height={1484}
          className="absolute -left-12 top-24 w-32 opacity-80 lg:w-40"
        />
        <Image
          src="/decor/blob-purple-r.png"
          alt=""
          width={826}
          height={802}
          className="absolute -right-8 top-16 w-36 opacity-80 lg:w-44"
        />
      </div>

      <div className="container-px relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-black tracking-tight text-brand sm:text-4xl lg:text-[3rem] lg:leading-[1.05]">
            One Team. <span className="text-brand-pink">Three Plans.</span>
            <br className="hidden sm:block" /> Pick Your Speed
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
            Every plan includes the full team - graphic design, web development, video
            editing, marketing tech, team leader, and a dedicated account manager. The only
            difference is how many tasks run at once.
          </p>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-6xl gap-6 lg:grid-cols-3 lg:gap-7">
          {TIERS.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 120}>
              <PricingCard tier={tier} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
