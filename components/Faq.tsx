import FaqAccordion, { FaqItem } from "./FaqAccordion";

const FAQS: FaqItem[] = [
  {
    question: "What exactly can I send you?",
    answer:
      "Anything in our service list — design, dev, video, email, automation, CRM work, and more. If it’s in our scope, just send it. If it’s borderline, we’ll tell you up front.",
  },
  {
    question: "How is this different from hiring a freelancer?",
    answer:
      "Freelancers disappear, cost more than quoted, and rarely learn your brand. We’re one in-house team that stays with you month after month, so output compounds instead of resetting.",
  },
  {
    question: "How fast do things get done?",
    answer:
      "Most tasks turn around within 24 hours on the Marketer and Agency plans. Bigger scopes get scoped and scheduled same-day by your US-based account manager.",
  },
  {
    question: "What if the work isn’t what I wanted?",
    answer:
      "Revisions are unlimited inside your plan. We iterate until it’s right — that’s what keeps us different from one-and-done vendors.",
  },
  {
    question: "Can agencies white-label this?",
    answer:
      "Yes. The Agency plan is built for white-label production. Your clients never see our brand — you get the credit, we get the work done.",
  },
  {
    question: "Is there a minimum commitment?",
    answer:
      "No long-term contracts. Plans are monthly and you can pause or cancel anytime. Our 30-day risk-free guarantee covers your first month.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="bg-white py-20 sm:py-28">
      <div className="container-px">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">FAQ</span>
          <h2 className="section-title mt-4">Got Questions? Good.</h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <FaqAccordion items={FAQS} />
        </div>
      </div>
    </section>
  );
}
