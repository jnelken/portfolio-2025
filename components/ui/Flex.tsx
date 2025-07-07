import { CSSProperties, ReactNode } from 'react';
import { SpacingProps, getSpacingStyles } from './spacing';

interface FlexProps extends SpacingProps {
  children: ReactNode;
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  gap?: number | string;
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  style?: CSSProperties;
  className?: string;
}

export default function Flex({
  children,
  justify = 'flex-start',
  align = 'stretch',
  direction = 'row',
  gap = 0,
  wrap = 'nowrap',
  style,
  className,
  ...spacingProps
}: FlexProps) {
  const flexStyle: CSSProperties = {
    display: 'flex',
    justifyContent: justify,
    alignItems: align,
    flexDirection: direction,
    gap: typeof gap === 'number' ? `${gap}px` : gap,
    flexWrap: wrap,
    ...getSpacingStyles(spacingProps),
    ...style
  };

  return (
    <div style={flexStyle} className={className}>
      {children}
    </div>
  );
}