'use client';
import Code from '@/components/ui/Code';
import Flex from '@/components/ui/Flex';
import { memo } from 'react';
import { useClipPathEffect } from '@/hooks/useClipPathEffect';
import { EMAIL_ADDRESS } from '@/lib/constants/info.constants';

const LINK_STYLE = {
  textDecoration: 'underline',
  // Inherit from the container so links match section intent
  color: 'currentColor',
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
    <div style={{ maxWidth: '500px', margin: 'auto' }}>
      <p>Hi, I&apos;m Jake.</p>
      <p>
        I have been building full-stack applications in React for over{' '}
        <Code>{yoe}</Code> years, specializing in data visualization, user
        experience, and enterprise-level frontend applications.
      </p>
      <p>
        My favorite tech stack is <Code>React</Code>, <Code>TypeScript</Code>,{' '}
        <Code>d3</Code>, and <Code>Next.js</Code>.
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
    </div>
  </div>
));

LandingContent.displayName = 'LandingContent';

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
        backgroundColor: 'var(--background)',
        width: '100%',
        height: '100%',
        ...containerStyles,
      }}
    >
      {/* <NoiseBackground /> */}
      <div id="dark-on-light" style={darkOnLightStyle}>
        <LandingContent yoe={yoe} />
      </div>
      <div id="light-on-dark" style={lightOnDarkStyle}>
        <LandingContent yoe={yoe} />
      </div>
    </Flex>
  );
}
