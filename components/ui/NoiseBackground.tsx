import { CSSProperties, useMemo } from 'react';

interface NoiseBackgroundProps {
  style?: CSSProperties;
  className?: string;
}

// Simple seeded random number generator
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

// Generate values from seed
function generateFromSeed(seed: number) {
  const base = seededRandom(seed);
  const seed2 = seededRandom(seed * 2);
  const seed3 = seededRandom(seed * 3);
  const seed4 = seededRandom(seed * 4);
  const seed5 = seededRandom(seed * 5);

  return {
    resolution: Math.floor(15 + base * 15), // 15-30px
    opacity: 0.3 + seed2 * 0.4, // 0.3-0.7
    shiftDuration: 8 + seed3 * 8, // 8-16s
    warpDuration: 12 + seed4 * 12, // 12-24s
    scaleMax: 1 + seed5 * 0.05, // 1-1.05
    skewMax: seed2 * 2, // 0-2deg
    blurMax: 0.3 + seed3 * 1, // 0.3-1.3px
    hueRange: seed4 * 20, // 0-20deg
  };
}

export default function NoiseBackground({
  style,
  className,
}: NoiseBackgroundProps) {
  const seed = useMemo(() => Math.random() * 1000, []); // Generate once per component mount
  const params = useMemo(() => generateFromSeed(seed), [seed]);

  const RES_SIZE = `${params.resolution}px ${params.resolution}px`;
  const noiseStyle: CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: `radial-gradient(circle, rgba(255,255,255,${params.opacity}) 1px, transparent 1px)`,
    backgroundSize: RES_SIZE,
    animation: `shift ${params.shiftDuration}s ease-in-out infinite, warp ${params.warpDuration}s ease-in-out infinite`,
    filter: `blur(${params.blurMax * 0.5}px) contrast(1.2)`,
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

        @keyframes warp {
          0%,
          100% {
            transform: scale(1) skew(0deg, 0deg);
            filter: blur(${params.blurMax * 0.5}px) contrast(1.2)
              hue-rotate(0deg);
          }
          25% {
            transform: scale(${params.scaleMax})
              skew(${params.skewMax * 0.5}deg, ${params.skewMax * 0.2}deg);
            filter: blur(${params.blurMax * 0.8}px) contrast(1.3)
              hue-rotate(${params.hueRange * 0.25}deg);
          }
          50% {
            transform: scale(${2 - params.scaleMax})
              skew(${-params.skewMax * 0.3}deg, ${params.skewMax * 0.4}deg);
            filter: blur(${params.blurMax * 0.3}px) contrast(1.1)
              hue-rotate(${-params.hueRange * 0.15}deg);
          }
          75% {
            transform: scale(${1 + (params.scaleMax - 1) * 0.5})
              skew(${params.skewMax * 0.2}deg, ${-params.skewMax * 0.3}deg);
            filter: blur(${params.blurMax * 0.6}px) contrast(1.25)
              hue-rotate(${params.hueRange * 0.1}deg);
          }
        }
      `}</style>
      <div style={noiseStyle} className={className} />
    </>
  );
}
