import Image from 'next/image';

export default function Footer() {
  return (
    <footer
      style={{
        gridRowStart: 3,
        display: 'flex',
        gap: '24px',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
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
        }}
      >
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
        }}
      >
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
        }}
      >
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
  );
}
