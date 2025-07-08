import { CSSProperties, ReactNode } from 'react';
import { SpacingProps } from '@/lib/ui/spacing';
import UIBase from '../ui/UIBase';

interface MainContentProps extends SpacingProps {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}

export default function MainContent({ children, style, className, ...spacingProps }: MainContentProps) {
  const mainStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    gridRowStart: 2,
    alignItems: 'center',
    ...style,
  };

  return (
    <UIBase as="main" style={mainStyle} className={className} {...spacingProps}>
      {children}
    </UIBase>
  );
}
