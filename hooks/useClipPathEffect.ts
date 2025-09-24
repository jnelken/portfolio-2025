import { useState, useCallback } from 'react';

const BACKGROUND_COLORS = ['#fbf2eb', '#98D6FF'];

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
  mouseX: number;
  mouseY: number;
  baseA: number;
  baseB: number;
  backgroundColor: string;
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
    const newColor = BACKGROUND_COLORS[Math.floor(Math.random() * BACKGROUND_COLORS.length)];
    setBackgroundColor(newColor);
  }, [BACKGROUND_COLORS]);

  return {
    mouseX,
    mouseY,
    baseA,
    baseB,
    backgroundColor,
    handleMouseMove,
    handleClick,
  };
};
