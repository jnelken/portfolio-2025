import { useState, useCallback, useMemo } from 'react';
import type { CSSProperties } from 'react';
import {
  CREAM_COLOR,
  BACKGROUND_COLORS,
} from '../lib/constants/theme.constants';

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
 * // Creates a square from top-left to top-right to bottom-right to bottom-left
 * polygon([[0, 0], [100, 0], [100, 100], [0, 100]])
 * // Returns: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
 */
const polygon = (points: [number, number][]): string => {
  return `polygon(${points.map(([x, y]) => `${x}% ${y}%`).join(', ')})`;
};

// Map mouseX in [0,100] to endpoints on top and bottom so that:
// - mouseX=0% => topX=0%, bottomX=0%
// - mouseX=50% => topX≈61.8%, bottomX≈38.2%
// - mouseX=100% => topX=100%, bottomX=100%
// Using quadratic fits through these constraints.
const computeEndpointsFromMouse = (mouseX: number) => {
  const t = Math.max(0, Math.min(1, mouseX / 100));
  const top = 100 * (-0.472 * t * t + 1.472 * t);
  const bottom = 100 * (0.472 * t * t + 0.528 * t);
  const clamp = (v: number) => Math.max(0, Math.min(100, v));
  return { topX: clamp(top), bottomX: clamp(bottom) };
};

// Helper function to create dark on light clip path style using random base + mouse offset
const createDarkOnLightStyle = (
  mouseX: number,
  mouseY: number,
  backgroundColor: string,
) => {
  const { topX, bottomX } = computeEndpointsFromMouse(mouseX);

  return {
    ...BASE_CLIP_STYLE,
    clipPath: polygon([
      [0, 0],
      [topX, 0],
      [bottomX, 100],
      [0, 100],
    ]),
    backgroundColor: backgroundColor,
    // Force readable text on light/cream backgrounds regardless of global theme
    // color: '#111',
  };
};

// Helper function to create light on dark clip path style using random base + mouse offset
const createLightOnDarkStyle = (
  mouseX: number,
  mouseY: number,
  backgroundColor: string,
) => {
  const { topX, bottomX } = computeEndpointsFromMouse(mouseX);

  return {
    ...BASE_CLIP_STYLE,
    top: 2,
    left: 2,
    clipPath: polygon([
      [topX, 0],
      [100, 0],
      [100, 100],
      [bottomX, 100],
    ]),
    backgroundColor: CREAM_COLOR,
    filter: 'invert(1)',
  };
};

/**
 * @deprecated Helper function to generate random clip path values
 */
const generateRandomClipPath = () => {
  const newClipPathA = Math.floor(Math.random() * 100);
  const isLeft = Math.random() > 0.5;
  const a = isLeft ? newClipPathA : 100 - newClipPathA;
  const b = isLeft ? 100 - newClipPathA : newClipPathA;
  return { a, b };
};

/**
 * Hook to generate clip path styles based on mouse position and background color
 */
export const useClipPathEffect = () => {
  const [mouseX, setMouseX] = useState(50); // Start at center
  const [mouseY, setMouseY] = useState(50); // Start at center
  const [backgroundColor, setBackgroundColor] = useState(BACKGROUND_COLORS[0]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMouseX(Math.max(0, Math.min(100, x))); // Clamp between 0-100
    setMouseY(Math.max(0, Math.min(100, y))); // Clamp between 0-100
  }, []);

  const handleClick = useCallback(() => {
    // Cycle to the next background color in the array
    setBackgroundColor(prevColor => {
      const currentIndex = BACKGROUND_COLORS.indexOf(prevColor);
      const nextIndex = (currentIndex + 1) % BACKGROUND_COLORS.length;
      return BACKGROUND_COLORS[nextIndex];
    });
  }, []);

  // Memoize the styles to prevent unnecessary recalculations
  const darkOnLightStyle = useMemo(
    () => createDarkOnLightStyle(mouseX, mouseY, backgroundColor),
    [mouseX, mouseY, backgroundColor],
  );

  const lightOnDarkStyle = useMemo(
    () => createLightOnDarkStyle(mouseX, mouseY, backgroundColor),
    [mouseX, mouseY, backgroundColor],
  );

  return {
    darkOnLightStyle,
    lightOnDarkStyle,
    handleMouseMove,
    handleClick,
  };
};
