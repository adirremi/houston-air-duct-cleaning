export function VentMark({ className = "size-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      aria-hidden
    >
      <circle cx="24" cy="24" r="22.25" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="24" r="5.5" stroke="currentColor" strokeWidth="1.5" />
      {Array.from({ length: 16 }, (_, index) => {
        const angle = (index * Math.PI) / 8;
        return (
          <line
            key={index}
            x1={24 + Math.cos(angle) * 8}
            y1={24 + Math.sin(angle) * 8}
            x2={24 + Math.cos(angle) * 20}
            y2={24 + Math.sin(angle) * 20}
            stroke="currentColor"
            strokeWidth="1.4"
          />
        );
      })}
    </svg>
  );
}

export function Seam({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-hidden>
      <span className="h-px flex-1 bg-line" />
      <span className="size-1.5 rotate-45 border border-line-strong" />
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}

export function DuctSlats({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 80"
      className={className}
      fill="none"
      aria-hidden
    >
      {Array.from({ length: 9 }, (_, index) => (
        <rect
          key={index}
          x="8"
          y={6 + index * 8}
          width="304"
          height="4"
          rx="1"
          fill="currentColor"
          opacity={0.18 + (index % 2) * 0.08}
        />
      ))}
    </svg>
  );
}
