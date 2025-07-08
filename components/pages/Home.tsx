'use client';

import Image from 'next/image';
import Flex from '../ui/Flex';
import Link from '../ui/Link';
import Text from '../ui/Text';
import Code from '../ui/Code';
import Logo from '../ui/Logo';
import Footer from '../ui/Footer';

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
          gap: '16px',
          gridRowStart: 2,
          alignItems: 'center',
        }}>
        {/* <Logo /> */}
        <Text style={{ textAlign: 'center' }}>
          Hey, I'm Jake. I have been building user experiences for over{' '}
          <Code>10</Code> years.
        </Text>

        <ol
          style={{
            listStyle: 'decimal inside',
            fontSize: '14px',
            lineHeight: '1.5',
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
          <li>
            I enjoy building visuals that are both functional and beautiful.
          </li>
        </ol>

        <Flex gap={16} align="center" direction="column">
          <Link variant="primary" href="mailto:jake.nelken@gmail.com">
            <Image
              style={{ filter: 'var(--filter-invert, none)' }}
              src="/jn-logo.png"
              alt="Jake Nelken"
              width={24}
              height={24}
            />
            Ask me
          </Link>
          <Link variant="outline" href="#">
            See my resume
          </Link>
        </Flex>
      </main>
      <Footer />
    </div>
  );
}
