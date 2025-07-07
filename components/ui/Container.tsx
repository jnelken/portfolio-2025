import { CSSProperties, ReactNode } from 'react';
import { SpacingProps, getSpacingStyles } from './spacing';

interface ContainerProps extends SpacingProps {
  children: ReactNode;
  maxWidth?: number | string;
  padding?: number | string;
  style?: CSSProperties;
  className?: string;
}

export default function Container({
  children,
  maxWidth = '1200px',
  padding = '20px',
  style,
  className,
  ...spacingProps
}: ContainerProps) {
  const containerStyle: CSSProperties = {
    width: '100%',
    maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth,
    padding: typeof padding === 'number' ? `${padding}px` : padding,
    margin: '0 auto',
    ...getSpacingStyles(spacingProps),
    ...style
  };

  return (
    <div style={containerStyle} className={className}>
      {children}
    </div>
  );
}