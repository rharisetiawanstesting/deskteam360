import Image from "next/image";
import FaqAccordion, { FaqItem } from "./FaqAccordion";
import Reveal from "./Reveal";

const FAQS: FaqItem[] = [
  {
    question: "What exactly can I send you?",
    answer:
      "Anything in our wheelhouse - AI agents, graphic design, web design and development, video editing, email campaigns, funnel builds, CRM setup, website maintenance, automation. If it's marketing or tech work, we probably do it.",
  },
  {
    question: "How is this different from hiring a freelancer?",
    answer:
      "Freelancers disappear, cost more than quoted, and rarely learn your brand. We're one in-house team that stays with you month after month, so output compounds instead of resetting.",
  },
  {
    question: "How fast do things get done?",
    answer:
      "Most tasks turn around within 1-3 business days on the Marketer and Agency plans. Bigger scopes get scoped and scheduled same-day by your US-based account manager.",
  },
  {
    question: "What if the work isn't what I wanted?",
    answer:
      "Revisions are unlimited inside your plan. We iterate until it's right - that's what keeps us different from one-and-done vendors.",
  },
  {
    question: "Can agencies white-label this?",
    answer:
      "Yes. The Agency plan is built for white-label production. Your clients never see our brand - you get the credit, we get the work done.",
  },
  {
    question: "Is there a minimum commitment?",
    answer:
      "No long-term contracts. Plans are monthly and you can pause or cancel anytime. Our 30-day risk-free guarantee covers your first month.",
  },
];

export default function Faq() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-gradient-to-b from-[#0B1A3A] via-[#1B1448] to-[#0B1A3A] py-20 sm:py-24 lg:py-28"
    >
      <div className="container-px relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          {/* Left: 3D illustrations clustered into a compact square per figma */}
          <div className="relative mx-auto aspect-square w-full max-w-[460px]">
            <Image
              src="/faq/code-monitor.png"
              alt=""
              width={668}
              height={612}
              className="absolute left-[10%] top-[6%] z-10 w-[64%] drop-shadow-[0_18px_30px_rgba(0,0,0,0.5)] motion-safe:animate-soft-bob"
            />
            <Image
              src="/faq/design-tablet.png"
              alt=""
              width={836}
              height={780}
              className="absolute left-[2%] top-[34%] z-20 w-[72%] drop-shadow-[0_18px_30px_rgba(0,0,0,0.5)] motion-safe:animate-[soft-bob_6s_ease-in-out_-2s_infinite]"
            />
            <Image
              src="/faq/video-edit.png"
              alt=""
              width={668}
              height={788}
              className="absolute right-[2%] bottom-[6%] z-30 w-[54%] drop-shadow-[0_18px_30px_rgba(0,0,0,0.5)] motion-safe:animate-[soft-bob_5.5s_ease-in-out_-3s_infinite]"
            />
          </div>

          {/* Right: heading + FAQ accordion */}
          <Reveal>
            <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.05]">
              Got Questions? <span className="text-brand-pink">Good</span>
            </h2>
            <div className="mt-10">
              <FaqAccordion items={FAQS} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
