import { CSSProperties, ReactNode } from 'react';
import { SpacingProps } from '@/lib/ui/spacing';
import UIBase from '../ui/UIBase';

interface PageLayoutProps extends SpacingProps {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}

export default function PageLayout({ children, style, className, ...spacingProps }: PageLayoutProps) {
  const layoutStyle: CSSProperties = {
    position: 'relative',
    display: 'grid',
    gridTemplateRows: '20px 1fr 20px',
    alignItems: 'center',
    justifyItems: 'center',
    minHeight: '100vh',
    gap: '64px',
    fontFamily: 'var(--font-suisse-intl)',
    padding: '20px',
    paddingBottom: '80px',
    ...style,
  };

  return (
    <UIBase style={layoutStyle} className={className} {...spacingProps}>
      {children}
    </UIBase>
  );
}
