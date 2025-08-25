'use client';

import Image from 'next/image';
import Flex from '../ui/Flex';
import Link from '../ui/Link';
import Text from '../ui/Text';
import Code from '../ui/Code';
import Logo from '../ui/Logo';
import Footer from '../ui/Footer';
import NoiseBackground from '../ui/NoiseBackground';
import WarpContainer from '../ui/WarpContainer';
import { RadialReveal } from '../animations/RadialReveal';
import PageLayout from '../layout/PageLayout';
import MainContent from '../layout/MainContent';
import ContentStack from '../layout/ContentStack';

export default function Home() {
  return (
    <>
      <WarpContainer>
        <PageLayout>
          <NoiseBackground />
          <MainContent>
            <ContentStack spacing="md" style={{ textAlign: 'center' }}>
              <RadialReveal
                TriggerComponent={Logo}
                trigger="hover"
                radius={300}
                easing="ease-out"
                rippleCount={10}
                stagger={150}
              >
                <Text>
                  Hey, I&apos;m Jake. I have been building user experiences for over <Code>10</Code> years.
                </Text>

                <ol
                  style={{
                    listStyle: 'decimal inside',
                    fontSize: '14px',
                    lineHeight: '1.5',
                    maxWidth: '400px',
                  }}
                >
                  <li
                    style={{
                      marginBottom: '8px',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    I&apos;m currently working at{' '}
                    <a
                      href="https://www.datadoghq.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'var(--foreground)' }}
                    >
                      Datadog
                    </a>{' '}
                    as a Senior Software Engineer.
                  </li>
                  <li>I enjoy building visuals that are both functional and beautiful.</li>
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
                  <Link
                    variant="outline"
                    href="https://docs.google.com/document/d/1wljBCktOGGqXWqxlf1TtIl36SfncD-2_8RiEWolruf8/edit?tab=t.0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See my resume
                  </Link>
                </Flex>
              </RadialReveal>
            </ContentStack>
          </MainContent>
          <Footer />
        </PageLayout>
      </WarpContainer>
    </>
  );
}
