import { CSSProperties, ReactNode } from 'react';
import { SpacingProps, SpacingSize } from '@/lib/ui/spacing';
import UIBase from '../ui/UIBase';

interface ContentStackProps extends SpacingProps {
  children: ReactNode;
  spacing?: SpacingSize;
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  style?: CSSProperties;
  className?: string;
}

export default function ContentStack({
  children,
  spacing = 'md',
  align = 'center',
  style,
  className,
  ...spacingProps
}: ContentStackProps) {
  const stackStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: align,
    gap: `var(--spacing-${spacing}, 16px)`,
    ...style,
  };

  return (
    <UIBase 
      style={stackStyle} 
      className={className}
      {...spacingProps}
    >
      {children}
    </UIBase>
  );
}