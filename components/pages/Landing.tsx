'use client';
import Code from '@/components/ui/Code';
import NoiseBackground from '@/components/ui/NoiseBackground';
import WarpContainer from '@/components/ui/WarpContainer';
import Flex from '@/components/ui/Flex';
import { useState } from 'react';

const BACKGROUND_COLOR = '#fbf2eb';

const LINK_STYLE = {
  textDecoration: 'underline',
  color: 'var(--foreground)',
};

// Function to invert a hex color
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

const CLIP_PATH_A = 60;
const CLIP_PATH_B = 40;

const whiteOnBlack = (clipPathA: number, clipPathB: number) => ({
  position: 'absolute' as const,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: '100%',
  height: '100%',
  clipPath: `polygon(0 0, ${clipPathB}% 0, ${clipPathA}% 100%, 0 100%)`,
  backgroundColor: BACKGROUND_COLOR,
  zIndex: 2,
});

const blackOnWhite = (clipPathA: number, clipPathB: number) => ({
  position: 'absolute' as const,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: '100%',
  height: '100%',
  clipPath: `polygon(${clipPathB}% 0, 100% 0, 100% 100%, ${clipPathA}% 100%)`,
  filter: 'invert(1)',
  zIndex: 2,
});

const LandingContent = ({ yoe }: { yoe: number }) => (
  <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <p>Hi, I&apos;m Jake.</p>
      <p>
        I have been building full-stack applications in React for over <Code>{yoe}</Code> years.
      </p>
      <p>I recently left Datadog after 6 years and am now looking to start my next chapter.</p>
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
        <a href="mailto:jake.nelken@gmail.com" style={LINK_STYLE}>
          email me
        </a>
      </p>
      <p>Thanks for stopping by!</p>
    </div>
  </div>
);

export default function Landing() {
  const currentYear = new Date().getFullYear();
  const yoe = currentYear - 2016;
  const [clipPathA, setClipPathA] = useState(CLIP_PATH_A);
  const [clipPathB, setClipPathB] = useState(CLIP_PATH_B);

  return (
    <Flex
      onClick={() => {
        const newClipPathA = Math.floor(Math.random() * 100);
        const isLeft = Math.random() > 0.5;
        const a = isLeft ? newClipPathA : 100 - newClipPathA;
        const b = isLeft ? 100 - newClipPathA : newClipPathA;
        setClipPathA(a);
        setClipPathB(b);
      }}
      justify="center"
      align="center"
      style={{
        backgroundColor: invertHexColor(BACKGROUND_COLOR),
        width: '100%',
        height: '100%',
        ...containerStyles,
      }}
    >
      {/* <NoiseBackground /> */}
      {/* <WarpContainer intensity={0.2}> */}
      <div style={{ ...whiteOnBlack(clipPathA, clipPathB) }}>
        <LandingContent yoe={yoe} />
      </div>
      <div style={{ ...blackOnWhite(clipPathA, clipPathB) }}>
        <LandingContent yoe={yoe} />
      </div>
      {/* </WarpContainer> */}
    </Flex>
  );
}
