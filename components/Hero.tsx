import Image from "next/image";
import { ArrowRight, Sparkles, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-brand-soft">
      <div className="container-px grid gap-12 py-20 lg:grid-cols-12 lg:gap-10 lg:py-28">
        <div className="lg:col-span-6">
          <span className="eyebrow">Your Outsourced, Insourced Team</span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-brand sm:text-5xl lg:text-6xl">
            Stop Outsourcing. <span className="text-brand-accent">Start Insourcing.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            Agencies, startups, and growing businesses use our team to handle the work they
            don&apos;t have time for.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#pricing" className="btn-accent">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#services" className="btn-ghost">
              See Services
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Badge icon={<Sparkles className="h-4 w-4" />} label="8+ Years Running" />
            <Badge icon={<Users className="h-4 w-4" />} label="400+ Clients Served" />
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-2xl shadow-soft ring-1 ring-slate-200/60">
            <Image
              src="https://placehold.co/1200x900/0F172A/FFFFFF?text=Team+Workspace"
              alt="DeskTeam360 team at work"
              width={1200}
              height={900}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-brand shadow-sm">
      <span className="text-brand-accent">{icon}</span>
      {label}
    </span>
  );
}
