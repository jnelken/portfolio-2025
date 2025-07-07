import { CSSProperties } from 'react';

// Button design tokens
export const BUTTON_VARIANTS = {
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
} as const;

export const BUTTON_SIZES = {
  sm: { fontSize: '14px', height: '40px', padding: '0 16px' },
  md: { fontSize: '16px', height: '48px', padding: '0 20px' },
  lg: { fontSize: '18px', height: '56px', padding: '0 24px' }
} as const;

export const BUTTON_BASE_STYLE: CSSProperties = {
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

// Input design tokens
export const INPUT_VARIANTS = {
  default: {
    backgroundColor: 'var(--background)',
    color: 'var(--foreground)',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '8px'
  },
  outline: {
    backgroundColor: 'transparent',
    color: 'var(--foreground)',
    border: '2px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '8px'
  },
  filled: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    color: 'var(--foreground)',
    border: '1px solid transparent',
    borderRadius: '8px'
  }
} as const;

export const INPUT_SIZES = {
  sm: { fontSize: '14px', height: '36px', padding: '0 12px' },
  md: { fontSize: '16px', height: '44px', padding: '0 16px' },
  lg: { fontSize: '18px', height: '52px', padding: '0 20px' }
} as const;

export const INPUT_BASE_STYLE: CSSProperties = {
  width: '100%',
  fontFamily: 'inherit',
  outline: 'none',
  transition: 'all 0.2s ease'
};

// Type exports for better TypeScript support
export type ButtonVariant = keyof typeof BUTTON_VARIANTS;
export type ButtonSize = keyof typeof BUTTON_SIZES;
export type InputVariant = keyof typeof INPUT_VARIANTS;
export type InputSize = keyof typeof INPUT_SIZES;