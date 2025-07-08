import Image from 'next/image';

interface LogoProps {
  width?: number;
  height?: number;
  style?: React.CSSProperties;
  className?: string;
}

export default function Logo({ width = 64, height = 64, style, className }: LogoProps) {
  return (
    <Image
      src="/jn-logo.png"
      alt="Jake Nelken"
      width={width}
      height={height}
      style={{
        filter: 'var(--filter-invert, none)',
        ...style,
      }}
      className={className}
    />
  );
}
