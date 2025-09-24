'use client';
import Code from '@/components/ui/Code';
import NoiseBackground from '@/components/ui/NoiseBackground';
import WarpContainer from '@/components/ui/WarpContainer';
import Flex from '@/components/ui/Flex';
import { useState, memo, useCallback, useEffect } from 'react';

const BACKGROUND_COLORS = ['#fbf2eb', '#98D6FF'];
const EMAIL_ADDRESS = 'talkto@jakenelken.com';

const LINK_STYLE = {
  textDecoration: 'underline',
  color: 'var(--foreground)',
};

const invertHexColor = (hex: string): string => {
  // Remove the # if present
  const cleanHex = hex.replace('#', '');

  // Convert to RGB
  const r = parseInt(cleanHex.substr(0, 2), 16);
  const g = parseInt(cleanHex.substr(2, 2), 16);
  const b = parseInt(cleanHex.substr(4, 2), 16);

  // Invert each component
  const invertedR = (255 - r).toString(16).padStart(2, '0');
  const invertedG = (255 - g).toString(16).padStart(2, '0');
  const invertedB = (255 - b).toString(16).padStart(2, '0');

  return `#${invertedR}${invertedG}${invertedB}`;
};

const containerStyles = {
  position: 'relative' as const,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
};

// Helper function to generate random clip path values
const generateRandomClipPath = () => {
  const newClipPathA = Math.floor(Math.random() * 100);
  const isLeft = Math.random() > 0.5;
  const a = isLeft ? newClipPathA : 100 - newClipPathA;
  const b = isLeft ? 100 - newClipPathA : newClipPathA;
  return { a, b };
};

// Helper function to create white on black clip path style using random base + mouse offset
const createDarkOnLightStyle = (
  baseA: number,
  baseB: number,
  mouseX: number,
  mouseY: number,
  backgroundColor: string,
) => {
  // Combine random base with mouse offset (mouse provides 0-20% offset)
  const offsetAmount = 100; // Maximum 20% offset from mouse
  const mouseOffset = ((mouseX - 50) / 50) * offsetAmount; // -20% to +20% based on mouse position
  const finalA = Math.max(0, Math.min(100, baseA + mouseOffset));
  const finalB = Math.max(0, Math.min(100, baseB + mouseOffset));

  return {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    clipPath: `polygon(0 0, ${finalB}% 0, ${finalA}% 100%, 0 100%)`,
    backgroundColor: backgroundColor,
    zIndex: 2,
  };
};

// Helper function to create black on white clip path style using random base + mouse offset
const createLightOnDarkStyle = (
  baseA: number,
  baseB: number,
  mouseX: number,
  mouseY: number,
  backgroundColor: string,
) => {
  // Combine random base with mouse offset (mouse provides 0-20% offset)
  const offsetAmount = 100; // Maximum 20% offset from mouse
  const mouseOffset = ((mouseX - 50) / 50) * offsetAmount; // -20% to +20% based on mouse position
  const finalA = Math.max(0, Math.min(100, baseA + mouseOffset));
  const finalB = Math.max(0, Math.min(100, baseB + mouseOffset));

  return {
    position: 'absolute' as const,
    top: 4,
    left: 4,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    clipPath: `polygon(${finalB}% 0, 100% 0, 100% 100%, ${finalA}% 100%)`,
    filter: 'invert(1)',
    zIndex: 2,
  };
};

const LandingContent = memo(({ yoe }: { yoe: number }) => (
  <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <p>Hi, I&apos;m Jake.</p>
      <p>
        I have been building full-stack applications in React for over <Code>{yoe}</Code> years.
      </p>
      <p>I recently left Datadog and am now looking to start my next chapter.</p>
      <p>
        <a
          href="https://docs.google.com/document/d/1wljBCktOGGqXWqxlf1TtIl36SfncD-2_8RiEWolruf8/edit?tab=t.0"
          target="_blank"
          rel="noopener noreferrer"
          style={LINK_STYLE}
        >
          See my resume
        </a>{' '}
        or{' '}
        <a href={`mailto:${EMAIL_ADDRESS}`} style={LINK_STYLE}>
          email me
        </a>
        .
      </p>
      <p>Thanks for stopping by!</p>
    </div>
  </div>
));

export default function Landing() {
  const currentYear = new Date().getFullYear();
  const yoe = currentYear - 2016;
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

  const handleClick = () => {
    // Generate new random base values
    const { a, b } = generateRandomClipPath();
    setBaseA(a);
    setBaseB(b);

    // Also change background color
    const newColor = BACKGROUND_COLORS[Math.floor(Math.random() * BACKGROUND_COLORS.length)];
    setBackgroundColor(newColor);
  };

  return (
    <Flex
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      justify="center"
      align="center"
      style={{
        backgroundColor: invertHexColor('#ffffff'),
        width: '100%',
        height: '100%',
        ...containerStyles,
      }}
    >
      {/* <NoiseBackground /> */}
      <div style={createDarkOnLightStyle(baseA, baseB, mouseX, mouseY, backgroundColor)}>
        <LandingContent yoe={yoe} />
      </div>
      <div style={createLightOnDarkStyle(baseA, baseB, mouseX, mouseY, backgroundColor)}>
        <LandingContent yoe={yoe} />
      </div>
    </Flex>
  );
}
