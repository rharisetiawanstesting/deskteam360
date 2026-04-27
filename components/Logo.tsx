type Props = {
  className?: string;
  textClassName?: string;
};

export default function Logo({ className = "", textClassName = "text-white" }: Props) {
  return (
    <span className={`flex items-center gap-2 ${className}`}>
      <span aria-hidden className="block">
        <svg
          viewBox="0 0 48 48"
          width="36"
          height="36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="dt360-logo" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F97316" />
              <stop offset="55%" stopColor="#EC4899" />
              <stop offset="100%" stopColor="#A855F7" />
            </linearGradient>
          </defs>
          <path
            d="M6 28C6 16 16 6 28 6c8 0 14 4 14 4-2 6-4 10-9 14-4 3-9 4-15 5-3 .5-7 3-9 7l-3-1c0-3 0-5 0-7Z"
            fill="url(#dt360-logo)"
          />
          <path
            d="M14 32c2-3 5-4 9-5 5-1 10-2 14-5 0 0-2 6-7 10-4 3-9 4-15 5l-1-5Z"
            fill="#0B1538"
            opacity="0.55"
          />
        </svg>
      </span>
      <span className={`text-xl font-semibold tracking-tight ${textClassName}`}>
        DeskTeam360
      </span>
    </span>
  );
}
