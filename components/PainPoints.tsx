import Image from "next/image";

type Pain = {
  title: string;
  body: string;
  cardClass: string;
  imageWrapClass: string;
  smallImageClass: string;
  popupImageClass: string;
  smallImage: string;
  popupImage: string;
};

const PAINS: Pain[] = [
  {
    title: "The Freelancer Lottery",
    body: "Every new project means a new search. New portfolios. New \"getting to know your brand\" conversations. New prayers that this one won't ghost you mid-project. And the cost keeps climbing - $75, $100, $150 an hour - with zero guarantee they'll be available next month.",
    cardClass: "bg-[#7857FF] md:mt-24",
    imageWrapClass: "-right-6 bottom-0 h-[68%] w-[60%] sm:-right-8 sm:h-[72%] sm:w-[58%] lg:-right-10 lg:w-[54%]",
    smallImageClass: "object-contain object-bottom-right opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-90",
    popupImageClass: "object-cover object-[72%_bottom] opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100",
    smallImage: "/pain/freelancer-small.webp",
    popupImage: "/pain/freelancer-popup.webp",
  },
  {
    title: "Death by a Thousand Invoices",
    body: "Your graphic designer bills hourly. Your web developer charges \"project management\" on top of dev time. Your video editor has a revision surcharge. Every task feels like opening your wallet and hoping for the best.",
    cardClass: "bg-[#F16FA8] md:mt-0",
    imageWrapClass: "-right-8 bottom-0 h-[70%] w-[62%] sm:-right-10 sm:h-[74%] sm:w-[60%] lg:-right-12 lg:w-[56%]",
    smallImageClass: "object-contain object-bottom-right opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-90",
    popupImageClass: "object-cover object-[70%_bottom] opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100",
    smallImage: "/pain/invoices-small.webp",
    popupImage: "/pain/invoices-popup.webp",
  },
  {
    title: "Five Vendors, Nobody Talking",
    body: "One person handles graphics. Another does web updates. A third builds funnels. Someone else edits video. They've never spoken to each other. And you're the human glue - the project manager you never signed up to be.",
    cardClass: "bg-[#FF8855] md:mt-24",
    imageWrapClass: "-right-6 bottom-0 h-[68%] w-[60%] sm:-right-8 sm:h-[72%] sm:w-[58%] lg:-right-10 lg:w-[54%]",
    smallImageClass: "object-contain object-bottom-right opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-90",
    popupImageClass: "object-cover object-[72%_bottom] opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100",
    smallImage: "/pain/vendors-small.webp",
    popupImage: "/pain/vendors-popup.webp",
  },
];

export default function PainPoints() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-24 hidden md:block">
        <Image
          src="/decor/blob-horizontal.webp"
          alt=""
          width={1551}
          height={660}
          className="absolute left-[4%] top-0 w-[30rem] opacity-80 lg:w-[36rem]"
        />
        <Image
          src="/decor/blob-vertical.webp"
          alt=""
          width={1115}
          height={1835}
          className="absolute right-[5%] top-14 w-[10rem] opacity-80 lg:w-[12rem]"
        />
        <Image
          src="/decor/code-icons-large.webp"
          alt=""
          width={738}
          height={586}
          className="absolute left-[8%] top-10 w-44 opacity-95 lg:w-52"
        />
        <Image
          src="/decor/code-icons-small.webp"
          alt=""
          width={250}
          height={168}
          className="absolute right-[16%] top-52 w-20 opacity-95 lg:w-24"
        />
      </div>

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

        <div className="mx-auto mt-14 grid max-w-[1360px] gap-6 md:grid-cols-3 md:items-start md:gap-6 lg:gap-8">
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
      className={`group relative min-h-[560px] overflow-hidden rounded-[40px] px-7 pb-7 pt-8 text-white shadow-[0_30px_80px_rgba(15,23,42,0.12)] transition-all duration-500 ease-out hover:z-10 hover:-translate-y-3 hover:scale-[1.045] sm:min-h-[620px] sm:px-8 sm:pt-9 ${pain.cardClass}`}
    >
      <div className="relative z-10 max-w-[46%] sm:max-w-[45%]">
        <h3 className="text-[2rem] font-black leading-[0.95] tracking-[-0.03em] sm:text-[2.35rem] lg:text-[2.7rem]">
          {pain.title}
        </h3>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[34%] bg-gradient-to-t from-black/10 via-transparent to-transparent" />

      <div className={`pointer-events-none absolute transition-all duration-500 ease-out ${pain.imageWrapClass}`}>
        <Image
          src={pain.smallImage}
          alt=""
          fill
          sizes="(min-width: 1024px) 22vw, (min-width: 768px) 30vw, 70vw"
          className={`transition-all duration-500 ease-out ${pain.smallImageClass}`}
        />
        <Image
          src={pain.popupImage}
          alt=""
          fill
          sizes="(min-width: 1024px) 26vw, (min-width: 768px) 34vw, 78vw"
          className={`transition-all duration-500 ease-out ${pain.popupImageClass}`}
        />
      </div>

      <div className="relative z-10 mt-[17.5rem] max-w-[48%] sm:mt-[19rem] sm:max-w-[46%] lg:mt-[21rem]">
        <p className="text-sm leading-[1.65] text-white/92 sm:text-[15px]">{pain.body}</p>
      </div>
    </article>
  );
}
