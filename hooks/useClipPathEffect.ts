import { useState, useCallback, useMemo } from 'react';
import type { CSSProperties } from 'react';

const BACKGROUND_COLORS = ['#fbf2eb', '#98D6FF'];

export const BASE_CLIP_STYLE = {
  position: 'absolute' as const,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: '100%',
  height: '100%',
  zIndex: 2,
};

/**
 * Creates a CSS polygon clip path string
 * @param points - Array of coordinate pairs [x, y] as percentages
 * @returns CSS polygon clip path string
 * @example
 * // Creates a triangle from top-left to top-right to bottom-left
 * polygon([[0, 0], [100, 0], [0, 100]])
 * // Returns: "polygon(0% 0%, 100% 0%, 0% 100%)"
 */
export const polygon = (points: [number, number][]): string => {
  return `polygon(${points.map(([x, y]) => `${x}% ${y}%`).join(', ')})`;
};

// Helper function to calculate final clip path values with mouse offset
export const calculateClipPathValues = (
  baseA: number,
  baseB: number,
  mouseX: number,
) => {
  const offsetAmount = 100; // Maximum 100% offset from mouse
  const mouseOffset = ((mouseX - 50) / 50) * offsetAmount; // -100% to +100% based on mouse position
  const finalA = Math.max(0, Math.min(100, baseA + mouseOffset));
  const finalB = Math.max(0, Math.min(100, baseB + mouseOffset));

  return { finalA, finalB };
};

// Helper function to create dark on light clip path style using random base + mouse offset
export const createDarkOnLightStyle = (
  baseA: number,
  baseB: number,
  mouseX: number,
  mouseY: number,
  backgroundColor: string,
) => {
  const { finalA, finalB } = calculateClipPathValues(baseA, baseB, mouseX);

  return {
    ...BASE_CLIP_STYLE,
    clipPath: polygon([
      [0, 0],
      [finalB, 0],
      [finalA, 100],
      [0, 100],
    ]),
    backgroundColor: backgroundColor,
  };
};

// Helper function to create light on dark clip path style using random base + mouse offset
export const createLightOnDarkStyle = (
  baseA: number,
  baseB: number,
  mouseX: number,
  mouseY: number,
  backgroundColor: string,
) => {
  const { finalA, finalB } = calculateClipPathValues(baseA, baseB, mouseX);

  return {
    ...BASE_CLIP_STYLE,
    top: 4,
    left: 4,
    clipPath: polygon([
      [finalB, 0],
      [100, 0],
      [100, 100],
      [finalA, 100],
    ]),
    filter: 'invert(1)',
  };
};

interface ClipPathState {
  mouseX: number;
  mouseY: number;
  baseA: number;
  baseB: number;
  backgroundColor: string;
}

interface UseClipPathEffectOptions {
  initialBackgroundColor: string;
  backgroundColors: string[];
}

interface UseClipPathEffectReturn {
  darkOnLightStyle: CSSProperties;
  lightOnDarkStyle: CSSProperties;
  handleMouseMove: (e: React.MouseEvent) => void;
  handleClick: () => void;
}

// Helper function to generate random clip path values
const generateRandomClipPath = () => {
  const newClipPathA = Math.floor(Math.random() * 100);
  const isLeft = Math.random() > 0.5;
  const a = isLeft ? newClipPathA : 100 - newClipPathA;
  const b = isLeft ? 100 - newClipPathA : newClipPathA;
  return { a, b };
};

export const useClipPathEffect = (): UseClipPathEffectReturn => {
  const [mouseX, setMouseX] = useState(50); // Start at center
  const [mouseY, setMouseY] = useState(50); // Start at center
  const [baseA, setBaseA] = useState(60); // Random base values
  const [baseB, setBaseB] = useState(40); // Random base values
  const [backgroundColor, setBackgroundColor] = useState(BACKGROUND_COLORS[0]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMouseX(Math.max(0, Math.min(100, x))); // Clamp between 0-100
    setMouseY(Math.max(0, Math.min(100, y))); // Clamp between 0-100
  }, []);

  const handleClick = useCallback(() => {
    // Generate new random base values
    const { a, b } = generateRandomClipPath();
    setBaseA(a);
    setBaseB(b);

    // Also change background color
    const newColor =
      BACKGROUND_COLORS[Math.floor(Math.random() * BACKGROUND_COLORS.length)];
    setBackgroundColor(newColor);
  }, [BACKGROUND_COLORS]);

  // Memoize the styles to prevent unnecessary recalculations
  const darkOnLightStyle = useMemo(
    () => createDarkOnLightStyle(baseA, baseB, mouseX, mouseY, backgroundColor),
    [baseA, baseB, mouseX, mouseY, backgroundColor],
  );

  const lightOnDarkStyle = useMemo(
    () => createLightOnDarkStyle(baseA, baseB, mouseX, mouseY, backgroundColor),
    [baseA, baseB, mouseX, mouseY, backgroundColor],
  );

  return {
    darkOnLightStyle,
    lightOnDarkStyle,
    handleMouseMove,
    handleClick,
  };
};
