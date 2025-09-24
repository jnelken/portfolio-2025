'use client';
import Code from '@/components/ui/Code';
import Flex from '@/components/ui/Flex';
import { memo } from 'react';
import { useClipPathEffect } from '@/hooks/useClipPathEffect';
import { EMAIL_ADDRESS } from '@/lib/constants/info.constants';

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

const LandingContent = memo(({ yoe }: { yoe: number }) => (
  <div
    style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <p>Hi, I&apos;m Jake.</p>
      <p>
        I have been building full-stack applications in React for over{' '}
        <Code>{yoe}</Code> years.
      </p>
      <p>
        I recently left Datadog and am now looking to start my next chapter.
      </p>
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

  const { darkOnLightStyle, lightOnDarkStyle, handleMouseMove, handleClick } =
    useClipPathEffect();

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
      <div style={darkOnLightStyle}>
        <LandingContent yoe={yoe} />
      </div>
      <div style={lightOnDarkStyle}>
        <LandingContent yoe={yoe} />
      </div>
    </Flex>
  );
}
