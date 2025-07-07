import { CSSProperties, ReactNode, MouseEventHandler } from 'react';
import { SpacingProps, getSpacingStyles } from './spacing';

interface ButtonProps extends SpacingProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  href?: string;
  target?: string;
  rel?: string;
  style?: CSSProperties;
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  target,
  rel,
  style,
  className,
  ...spacingProps
}: ButtonProps) {
  const baseStyle: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '9999px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 500,
    textDecoration: 'none',
    transition: 'all 0.2s ease',
    gap: '8px'
  };

  const sizeStyles = {
    sm: { fontSize: '14px', height: '40px', padding: '0 16px' },
    md: { fontSize: '16px', height: '48px', padding: '0 20px' },
    lg: { fontSize: '18px', height: '56px', padding: '0 24px' }
  };

  const variantStyles = {
    primary: {
      backgroundColor: 'var(--foreground)',
      color: 'var(--background)',
      border: '1px solid transparent'
    },
    secondary: {
      backgroundColor: 'var(--background)',
      color: 'var(--foreground)',
      border: '1px solid rgba(0, 0, 0, 0.1)'
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--foreground)',
      border: '1px solid rgba(0, 0, 0, 0.1)'
    }
  };

  const buttonStyle: CSSProperties = {
    ...baseStyle,
    ...sizeStyles[size],
    ...variantStyles[variant],
    ...getSpacingStyles(spacingProps),
    ...style
  };

  if (href) {
    return (
      <a href={href} target={target} rel={rel} style={buttonStyle} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} style={buttonStyle} className={className}>
      {children}
    </button>
  );
}