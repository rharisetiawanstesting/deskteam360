import Image from "next/image";

type Pain = {
  title: string;
  body: string;
  bg: string;
  fade: string;
  border: string;
  photo: string;
  yShift: string;
};

const PAINS: Pain[] = [
  {
    title: "The Freelancer Lottery",
    body: "You ship a brief and cross your fingers. Some freelancers crush it, most ghost, disappear, or deliver work you have to redo yourself.",
    bg: "bg-purple-500",
    fade: "from-purple-500",
    border: "ring-purple-200",
    photo: "https://placehold.co/600x800/8B5CF6/FFFFFF?text=Photo",
    yShift: "md:translate-y-6",
  },
  {
    title: "Death by a Thousand Invoices",
    body: "A designer here, a copywriter there, a developer across the world — suddenly you’re a bookkeeper, not an operator.",
    bg: "bg-rose-500",
    fade: "from-rose-500",
    border: "ring-rose-200",
    photo: "https://placehold.co/600x800/F43F5E/FFFFFF?text=Photo",
    yShift: "md:-translate-y-6",
  },
  {
    title: "Vendors, Nobody Talking",
    body: "Your video editor doesn’t talk to your funnel builder. Your funnel builder doesn’t talk to your designer. You’re the middleman — again.",
    bg: "bg-orange-500",
    fade: "from-orange-500",
    border: "ring-orange-200",
    photo: "https://placehold.co/600x800/F97316/FFFFFF?text=Photo",
    yShift: "md:translate-y-6",
  },
];

export default function PainPoints() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-24 h-72 w-72 rounded-full bg-gradient-to-br from-purple-200/60 to-pink-200/60 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-40 h-72 w-72 rounded-full bg-gradient-to-br from-cyan-200/60 to-blue-200/60 blur-3xl"
      />

      <div className="container-px relative">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl lg:text-5xl">
            You <span className="text-brand-pink">Didn&apos;t</span> Start a Business
            <br className="hidden sm:block" /> to Chase Freelancers
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Somewhere between managing vendors, chasing revisions, and watching invoices
            pile up - you stopped doing the work that actually grows your company.
          </p>
        </div>

        <div className="relative mx-auto mt-10 w-full max-w-5xl">
          <video
            className="h-auto w-full"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src="/pain-illustration.webm" type="video/webm" />
            <source src="/pain-illustration.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3 md:gap-5 lg:gap-7">
          {PAINS.map((p) => (
            <PainCard key={p.title} pain={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PainCard({ pain }: { pain: Pain }) {
  return (
    <article
      className={`group relative aspect-[4/5] overflow-hidden rounded-3xl shadow-soft ring-4 ${pain.border} transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] ${pain.yShift}`}
    >
      <div className={`absolute inset-0 ${pain.bg}`} />
      <div className="absolute inset-y-0 right-0 w-1/2">
        <Image
          src={pain.photo}
          alt=""
          fill
          sizes="(min-width: 768px) 25vw, 50vw"
          className="object-cover opacity-90 mix-blend-luminosity"
          unoptimized
        />
        <div
          aria-hidden
          className={`absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r ${pain.fade} to-transparent`}
        />
      </div>
      <div className="relative flex h-full flex-col justify-between p-6 sm:p-7">
        <h3 className="max-w-[55%] text-2xl font-extrabold leading-tight text-white sm:text-3xl">
          {pain.title}
        </h3>
        <p className="max-w-[55%] text-sm leading-relaxed text-white/95">{pain.body}</p>
      </div>
    </article>
  );
}
