import { CSSProperties } from 'react';

interface LogoProps {
  width?: number;
  height?: number;
  style?: CSSProperties;
  className?: string;
}

export default function Logo({ 
  width = 180, 
  height = 38, 
  style, 
  className 
}: LogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 180 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      className={className}
    >
      {/* Custom logo design */}
      <rect 
        x="0" 
        y="0" 
        width="180" 
        height="38" 
        rx="8" 
        fill="currentColor" 
        fillOpacity="0.1"
      />
      <text 
        x="20" 
        y="26" 
        fontFamily="var(--font-suisse-intl)" 
        fontSize="18" 
        fontWeight="500" 
        fill="currentColor"
      >
        Jake Nelken
      </text>
      <circle 
        cx="160" 
        cy="19" 
        r="8" 
        fill="currentColor" 
        fillOpacity="0.2"
      />
      <circle 
        cx="160" 
        cy="19" 
        r="4" 
        fill="currentColor"
      />
    </svg>
  );
}