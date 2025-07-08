import { CSSProperties, ReactNode, useMemo, useEffect } from 'react';

interface WarpContainerProps {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
  intensity?: number; // 0-1 multiplier for effect intensity
}

// Simple seeded random number generator
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

// Generate warp parameters from seed
function generateWarpParams(seed: number, intensity: number = 1) {
  const seed2 = seededRandom(seed * 2);
  const seed3 = seededRandom(seed * 3);
  const seed4 = seededRandom(seed * 4);
  const seed5 = seededRandom(seed * 5);

  return {
    warpDuration: (12 + seed2 * 12) / Math.max(intensity, 0.1), // 12-24s (faster with higher intensity)
    scaleMax: 1 + seed3 * 0.1 * intensity, // 1-1.1
    skewMax: seed4 * 5 * intensity, // 0-5deg
    blurMax: (0.5 + seed5 * 2) * intensity, // 0.5-2.5px
    hueRange: seed2 * 30 * intensity, // 0-30deg
  };
}

export default function WarpContainer({ children, style, className, intensity = 0.6 }: WarpContainerProps) {
  const seed = useMemo(() => Math.floor(Math.random() * 10000), []); // Generate once per component mount
  const params = useMemo(() => generateWarpParams(seed, intensity), [seed, intensity]);

  const animationName = `warp-${seed}`;

  useEffect(() => {
    // Create keyframes and inject into document
    const keyframes = `
      @keyframes ${animationName} {
        0%, 100% {
          transform: scale(1) skew(0deg, 0deg);
          filter: blur(0px) contrast(1) hue-rotate(0deg);
        }
        25% {
          transform: scale(${params.scaleMax}) skew(${params.skewMax * 0.5}deg, ${params.skewMax * 0.2}deg);
          filter: blur(${params.blurMax * 0.5}px) contrast(1.1) hue-rotate(${params.hueRange * 0.25}deg);
        }
        50% {
          transform: scale(${2 - params.scaleMax}) skew(${-params.skewMax * 0.3}deg, ${params.skewMax * 0.4}deg);
          filter: blur(${params.blurMax * 0.2}px) contrast(0.95) hue-rotate(${-params.hueRange * 0.15}deg);
        }
        75% {
          transform: scale(${1 + (params.scaleMax - 1) * 0.5}) skew(${
            params.skewMax * 0.2
          }deg, ${-params.skewMax * 0.3}deg);
          filter: blur(${params.blurMax * 0.3}px) contrast(1.05) hue-rotate(${params.hueRange * 0.1}deg);
        }
      }
    `;

    const styleElement = document.createElement('style');
    styleElement.textContent = keyframes;
    document.head.appendChild(styleElement);

    return () => {
      // Cleanup
      if (document.head.contains(styleElement)) {
        document.head.removeChild(styleElement);
      }
    };
  }, [animationName, params]);

  const warpStyle: CSSProperties = {
    animation: `${animationName} ${params.warpDuration}s ease-in-out infinite`,
    ...style,
  };

  return (
    <div style={warpStyle} className={className}>
      {children}
    </div>
  );
}
