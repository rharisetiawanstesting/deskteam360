import Image from "next/image";

type Pain = {
  title: string;
  body: string;
  cardClass: string;
  ringClass: string;
  yShiftClass: string;
  smallImage: string;
  popupImage: string;
};

const PAINS: Pain[] = [
  {
    title: "The Freelancer Lottery",
    body: "Every new project means a new search. New portfolios. New \"getting to know your brand\" conversations. New prayers that this one won't ghost you mid-project. And the cost keeps climbing - $75, $100, $150 an hour - with zero guarantee they'll be available next month.",
    cardClass: "bg-[#7857FF]",
    ringClass: "ring-[#C7B7FF]",
    yShiftClass: "md:translate-y-10",
    smallImage: "/pain/freelancer-small.webp",
    popupImage: "/pain/freelancer-popup.webp",
  },
  {
    title: "Death by a Thousand Invoices",
    body: "Your graphic designer bills hourly. Your web developer charges \"project management\" on top of dev time. Your video editor has a revision surcharge. Every task feels like opening your wallet and hoping for the best.",
    cardClass: "bg-[#F16FA8]",
    ringClass: "ring-[#FBD0E2]",
    yShiftClass: "md:-translate-y-4",
    smallImage: "/pain/invoices-small.webp",
    popupImage: "/pain/invoices-popup.webp",
  },
  {
    title: "Five Vendors, Nobody Talking",
    body: "One person handles graphics. Another does web updates. A third builds funnels. Someone else edits video. They've never spoken to each other. And you're the human glue - the project manager you never signed up to be.",
    cardClass: "bg-[#FF8855]",
    ringClass: "ring-[#FFD0B6]",
    yShiftClass: "md:translate-y-10",
    smallImage: "/pain/vendors-small.webp",
    popupImage: "/pain/vendors-popup.webp",
  },
];

export default function PainPoints() {
  return (
    <section className="relative overflow-hidden bg-white pb-24 pt-16 sm:pb-28 sm:pt-20 lg:pb-32 lg:pt-24">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 hidden md:block">
        <Image
          src="/decor/blob-horizontal.webp"
          alt=""
          width={1551}
          height={660}
          className="absolute left-[2%] top-12 w-[36rem] opacity-80 lg:w-[44rem]"
        />
        <Image
          src="/decor/blob-vertical.webp"
          alt=""
          width={1115}
          height={1835}
          className="absolute right-[2%] top-24 w-[10rem] opacity-80 lg:w-[14rem]"
        />
        <Image
          src="/decor/code-icons-large.webp"
          alt=""
          width={738}
          height={586}
          className="absolute left-[6%] top-2 w-44 opacity-95 lg:w-56"
        />
        <Image
          src="/decor/code-icons-small.webp"
          alt=""
          width={250}
          height={168}
          className="absolute right-[12%] top-44 w-20 opacity-95 lg:w-28"
        />
      </div>

      <div className="container-px relative">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl lg:text-[3.25rem] lg:leading-[1.05]">
            You <span className="text-brand-pink">Didn&apos;t</span> Start a Business
            <br className="hidden sm:block" /> to Chase Freelancers
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Somewhere between managing vendors, chasing revisions, and watching invoices
            pile up - you stopped doing the work that actually grows your company.
          </p>
        </div>

        <div className="relative mx-auto mt-8 w-full max-w-[1200px]">
          <video
            className="block h-auto w-full mix-blend-multiply"
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse 78% 80% at center, black 55%, transparent 92%)",
              maskImage:
                "radial-gradient(ellipse 78% 80% at center, black 55%, transparent 92%)",
            }}
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

        <div className="mx-auto -mt-6 grid max-w-[1360px] gap-6 md:grid-cols-3 md:items-start md:gap-7 lg:gap-9">
          {PAINS.map((pain) => (
            <PainCard key={pain.title} pain={pain} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PainCard({ pain }: { pain: Pain }) {
  return (
    <article
      className={`group relative aspect-[3/4] overflow-hidden rounded-[36px] p-7 text-white shadow-[0_30px_70px_rgba(15,23,42,0.18)] ring-[6px] ring-inset transition-all duration-500 ease-out hover:z-10 hover:-translate-y-3 hover:scale-[1.06] sm:aspect-[3/4.1] sm:p-8 ${pain.cardClass} ${pain.ringClass} ${pain.yShiftClass}`}
    >
      <div className="relative z-10 max-w-[64%]">
        <h3 className="text-[1.7rem] font-black leading-[0.98] tracking-[-0.025em] sm:text-[1.95rem] lg:text-[2.15rem]">
          {pain.title}
        </h3>
      </div>

      <div className="pointer-events-none absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]">
        <Image
          src={pain.smallImage}
          alt=""
          fill
          sizes="(min-width: 1024px) 28vw, (min-width: 768px) 34vw, 90vw"
          className="object-cover object-[78%_bottom] opacity-100 transition-opacity duration-500 ease-out group-hover:opacity-0"
        />
        <Image
          src={pain.popupImage}
          alt=""
          fill
          sizes="(min-width: 1024px) 28vw, (min-width: 768px) 34vw, 90vw"
          className="object-cover object-[72%_bottom] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
        />
      </div>

      <div className="absolute inset-x-7 bottom-7 z-10 max-w-[55%] sm:inset-x-8 sm:bottom-8">
        <p className="text-[13px] leading-[1.55] text-white/95 sm:text-[14px]">{pain.body}</p>
      </div>
    </article>
  );
}
