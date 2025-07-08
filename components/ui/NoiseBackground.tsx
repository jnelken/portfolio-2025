import { CSSProperties } from 'react';

interface NoiseBackgroundProps {
  style?: CSSProperties;
  className?: string;
}

const RES = 20;
const RES_SIZE = `${RES}px ${RES}px`;
export default function NoiseBackground({
  style,
  className,
}: NoiseBackgroundProps) {
  const noiseStyle: CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background:
      'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
    backgroundSize: RES_SIZE,
    animation: 'shift 10s linear infinite',
    pointerEvents: 'none',
    zIndex: -1,
    ...style,
  };

  return (
    <>
      <style jsx>{`
        @keyframes shift {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: ${RES_SIZE};
          }
        }
      `}</style>
      <div style={noiseStyle} className={className} />
    </>
  );
}
