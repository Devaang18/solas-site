export default function Decorative() {
  return (
    <svg aria-hidden viewBox="0 0 1200 300" className="absolute -z-10 left-1/2 top-0 -translate-x-1/2 w-[1200px] h-[300px] opacity-40">
      <defs>
        <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#14b8a6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <path d="M0,150 C200,50 400,250 600,150 C800,50 1000,250 1200,150" fill="none" stroke="url(#g1)" strokeWidth="2" />
    </svg>
  );
}

