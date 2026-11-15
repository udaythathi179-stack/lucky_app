export function BrandMark({ size = 44 }: { size?: number }) {
  return (
    <span className="brand-mark" style={{ width: size, height: size }}>
      <svg viewBox="0 0 32 32" role="img" aria-label="Tuneus" width={size} height={size}>
        <defs>
          <linearGradient id="tuneus-mark-gradient" x1="4" y1="2" x2="28" y2="30">
            <stop offset="0%" stopColor="#7c5cff" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
        <rect x="1" y="1" width="30" height="30" rx="10" fill="url(#tuneus-mark-gradient)" />
        <path
          d="M13 22.2V10.4l9-2.1v11.2"
          fill="none"
          stroke="#070b14"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="10.8" cy="22.4" r="2.7" fill="#070b14" />
        <circle cx="19.8" cy="20.3" r="2.7" fill="#070b14" />
      </svg>
    </span>
  );
}
