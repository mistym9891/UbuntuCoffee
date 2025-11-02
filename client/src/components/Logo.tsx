export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle 
        cx="50" 
        cy="50" 
        r="48" 
        fill="none" 
        stroke="#D4AF37" 
        strokeWidth="3"
      />
      
      {[...Array(16)].map((_, i) => {
        const angle = (i * 22.5 * Math.PI) / 180;
        const x1 = 50 + 32 * Math.cos(angle);
        const y1 = 50 + 32 * Math.sin(angle);
        const x2 = 50 + 44 * Math.cos(angle);
        const y2 = 50 + 44 * Math.sin(angle);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#D4AF37"
            strokeWidth="2"
          />
        );
      })}
      
      <ellipse
        cx="50"
        cy="50"
        rx="16"
        ry="22"
        fill="#8B4513"
      />
      
      <path
        d="M 50 28 Q 45 35, 50 42 Q 55 35, 50 28"
        fill="#6B4423"
      />
      
      <ellipse
        cx="50"
        cy="50"
        rx="14"
        ry="20"
        fill="none"
        stroke="#6B4423"
        strokeWidth="1.5"
      />
    </svg>
  );
}
