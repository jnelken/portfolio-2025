'use client';

import Image from 'next/image';
import Flex from '../ui/Flex';
import Button from '../ui/Button';
import Text from '../ui/Text';
import Code from '../ui/Code';

export default function Home() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: '20px 1fr 20px',
        alignItems: 'center',
        justifyItems: 'center',
        minHeight: '100vh',
        padding: '20px',
        paddingBottom: '80px',
        gap: '64px',
        fontFamily: 'var(--font-suisse-intl)',
      }}>
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          gridRowStart: 2,
          alignItems: 'center',
        }}>
        <Image
          style={{ filter: 'var(--filter-invert, none)' }}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <Text style={{ textAlign: 'center' }}>
          Hey, I'm Jake. I write excellent fullstack code and have been building
          satisfying user experiences for over{' '}
          <Code>10</Code>{' '}
          years.
        </Text>
        <Text>Some facts about me:</Text>
        <ol
          style={{
            listStyle: 'decimal inside',
            fontSize: '14px',
            lineHeight: '1.5',
            textAlign: 'center',
          }}>
          <li
            style={{
              marginBottom: '8px',
              letterSpacing: '-0.01em',
            }}>
            I'm currently working at{' '}
            <a
              href="https://www.datadoghq.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--foreground)' }}>
              Datadog
            </a>{' '}
            as a Senior Software Engineer.
          </li>
        </ol>

        <Flex gap={16} align="center" direction="column">
          <Button
            variant="primary"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer">
            <Image
              style={{ filter: 'var(--filter-invert, none)' }}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </Button>
          <Button
            variant="outline"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer">
            Read our docs
          </Button>
        </Flex>
      </main>
      <footer
        style={{
          gridRowStart: 3,
          display: 'flex',
          gap: '24px',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <a
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
            color: 'var(--foreground)',
          }}
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={e => {
            e.currentTarget.style.textDecoration = 'underline';
            e.currentTarget.style.textUnderlineOffset = '4px';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.textDecoration = 'none';
          }}>
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
            color: 'var(--foreground)',
          }}
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={e => {
            e.currentTarget.style.textDecoration = 'underline';
            e.currentTarget.style.textUnderlineOffset = '4px';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.textDecoration = 'none';
          }}>
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
            color: 'var(--foreground)',
          }}
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={e => {
            e.currentTarget.style.textDecoration = 'underline';
            e.currentTarget.style.textUnderlineOffset = '4px';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.textDecoration = 'none';
          }}>
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
