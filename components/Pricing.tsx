import PricingCard, { PricingTier } from "./PricingCard";

const TIERS: PricingTier[] = [
  {
    name: "Entrepreneur",
    price: "$1,497",
    cadence: "mo",
    description: "For solo founders and small teams that need reliable weekly output.",
    features: [
      "1 active task at a time",
      "Standard 24-hour turnaround",
      "Access to all services",
      "Dedicated US-based account manager",
    ],
  },
  {
    name: "Marketer",
    price: "$2,994",
    cadence: "mo",
    description: "For marketing teams and operators shipping campaigns on a steady cadence.",
    features: [
      "2 active tasks in parallel",
      "Priority turnaround",
      "Access to all services",
      "Day & night shift coverage",
      "Quarterly strategy review",
    ],
    highlight: true,
  },
  {
    name: "Agency",
    price: "$4,491",
    cadence: "mo",
    description: "For agencies white-labeling production across multiple client accounts.",
    features: [
      "3 active tasks in parallel",
      "Fastest turnaround",
      "White-label deliverables",
      "Dedicated team lead",
      "Slack / direct channel access",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20 sm:py-28">
      <div className="container-px">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Pricing</span>
          <h2 className="section-title mt-4">One Team. Three Plans. Pick Your Speed.</h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {TIERS.map((tier) => (
            <PricingCard key={tier.name} tier={tier} />
          ))}
        </div>
      </div>
    </section>
  );
}
