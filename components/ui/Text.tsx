import { CSSProperties, ReactNode } from 'react';
import { SpacingProps, getSpacingStyles } from './spacing';

interface TextProps extends SpacingProps {
  children: ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption' | 'code';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  align?: 'left' | 'center' | 'right';
  color?: string;
  style?: CSSProperties;
  className?: string;
}

export default function Text({
  children,
  variant = 'body',
  size,
  weight,
  align = 'left',
  color,
  style,
  className,
  ...spacingProps
}: TextProps) {
  const variantStyles = {
    h1: { fontSize: '48px', fontWeight: 500, fontFamily: 'var(--font-suisse-intl)' },
    h2: { fontSize: '36px', fontWeight: 500, fontFamily: 'var(--font-suisse-intl)' },
    h3: { fontSize: '24px', fontWeight: 500, fontFamily: 'var(--font-suisse-intl)' },
    h4: { fontSize: '20px', fontWeight: 500, fontFamily: 'var(--font-suisse-intl)' },
    h5: { fontSize: '18px', fontWeight: 500, fontFamily: 'var(--font-suisse-intl)' },
    h6: { fontSize: '16px', fontWeight: 500, fontFamily: 'var(--font-suisse-intl)' },
    body: { fontSize: '16px', fontWeight: 400, lineHeight: '1.5' },
    caption: { fontSize: '14px', fontWeight: 400, lineHeight: '1.4' },
    code: { fontFamily: 'var(--font-geist-mono)', fontSize: '14px', fontWeight: 400 }
  };

  const sizeStyles = {
    xs: { fontSize: '12px' },
    sm: { fontSize: '14px' },
    md: { fontSize: '16px' },
    lg: { fontSize: '18px' },
    xl: { fontSize: '20px' },
    '2xl': { fontSize: '24px' },
    '3xl': { fontSize: '30px' }
  };

  const weightStyles = {
    normal: { fontWeight: 400 },
    medium: { fontWeight: 500 },
    semibold: { fontWeight: 600 },
    bold: { fontWeight: 700 }
  };

  const textStyle: CSSProperties = {
    ...variantStyles[variant],
    ...(size && sizeStyles[size]),
    ...(weight && weightStyles[weight]),
    textAlign: align,
    color: color || 'var(--foreground)',
    margin: 0,
    ...getSpacingStyles(spacingProps),
    ...style
  };

  const Component = variant.startsWith('h') ? variant : 'p';

  return (
    <Component style={textStyle} className={className}>
      {children}
    </Component>
  );
}